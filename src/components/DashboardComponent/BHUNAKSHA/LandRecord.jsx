import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const LandRecord = () => {
  const [formData, setFormData] = useState({
    url: '',
    originalPloatNumber: '',
    gstStateCode: '',
    levels: '',
    xCoordinate: '',
    yCoordinate: '',
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');

    if (!token) {
      setError('Auth token is missing');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'http://regtechapi.in/api/land',
        {
          Url: formData.url,
          OP: formData.originalPloatNumber,
          GstStateCode: formData.gstStateCode,
          Levels: formData.levels,
          X_Coordinate: formData.xCoordinate,
          Y_Coordinate: formData.yCoordinate,
        },
        {
          headers: {
            'AccessToken': token,
          },
        }
      );
      console.log(response)
      setResponse(response.data);
    } catch (err) {
      setError('Error fetching land details');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPdf = (base64String) => {
    const pdfData = atob(base64String);
    const pdfBlob = new Blob([new Uint8Array(pdfData.split('').map(c => c.charCodeAt(0)))], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(pdfBlob);
    link.download = 'downloaded.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="mt-10 mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Land Record</h3>
          <Link
            to="/dashboard/kyc/land_api"
            className="text-white underline hover:text-gray-100"
          >
            Land APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-blue-500 mb-4">Fetching land details, please wait...</div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {[
              { id: 'url', label: 'Url', placeholder: 'Ex: https://bhunaksha.cg.nic.in/' },
              { id: 'originalPloatNumber', label: 'Original Ploat Number', placeholder: 'Ex: 3459' },
              { id: 'gstStateCode', label: 'GST StateCode', placeholder: 'Ex: 22' },
              { id: 'levels', label: 'Levels', placeholder: 'Ex: 3459' },
              { id: 'xCoordinate', label: 'X-Coordinate', placeholder: 'Ex: -1985.1836332116745' },
              { id: 'yCoordinate', label: 'Y-Coordinate', placeholder: 'Ex: 3625.746517505414' },
            ].map(field => (
              <div className="mb-4" key={field.id}>
                <label htmlFor={field.id} className="block text-gray-700 text-sm font-bold mb-2">
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          {response && response.statusCode === 200 && (
            <div className="bg-green-500 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">GSTIN Details</h3>
              <div className="mb-2">
                <p><strong>ID:</strong> {response.data.ID || ''}</p>
                <p><strong>PNIU:</strong> {response.data.PNIU || ''}</p>
                <p><strong>Attrs:</strong> {response.data.attrs || ''}</p>
                <p><strong>gisCode:</strong> {response.data.gisCode || ''}</p>
                <p><strong>has_data:</strong> {response.data.has_data || ''}</p>
                <p><strong>info:</strong> {response.data.info || ''}</p>
                {response.data.pdf_base64 && (
                  <button
                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => handleDownloadPdf(response.data.pdf_base64)}
                  >
                    Download Report
                  </button>
                )}
                <p><strong>PloatLink:</strong> {response.data.plotInfoLinks || ''}</p>
                <p><strong>xmin:</strong> {response.data.xmin || ''}</p>
                <p><strong>ymin:</strong> {response.data.ymin || ''}</p>
                <p><strong>xmax:</strong> {response.data.xmax || ''}</p>
                <p><strong>ymax:</strong> {response.data.ymax || ''}</p>
              </div>
            </div>
          )}
          {response && response.statusCode === 500 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
            {response.message || 'An error occurred. Please try again later.'}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandRecord;
