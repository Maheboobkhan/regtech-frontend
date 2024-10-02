import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ITRDownload26AS = () => {
  const [clientId, setClientId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setClientId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = Cookies.get('authToken');
    const domain = localStorage.getItem('domain');

    try {
      const res = await axios.post(
        `${domain}/itr_download_26AS`,
        { client_id: clientId },
        { headers: { AccessToken: token } }
      );
      console.log(res)
      setResponse(res.data);
      setError('');
    } catch (err) {
      setError('Internal Server Error. Please try again.');
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-0 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4">
          <h3 className="text-xl font-semibold text-white">ITR Download 26AS</h3>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group mb-4">
              <label htmlFor="client_id" className="block text-gray-700 text-sm font-bold mb-2">Client ID</label>
              <input
                type="text"
                id="client_id"
                name="client_id"
                value={clientId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Client ID"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              Get Details
            </button>
          </form>

          {loading && <div className="text-blue-500 mt-4">Sending request...</div>}

          {response && response.status_code === 200 && (
            <div className="mt-6 p-4 bg-green-400 text-white rounded">
              <h3 className="text-lg font-semibold">ITR Client Details</h3>
              <p><strong>Client ID:</strong> {response.data.client_id}</p>
              <p><strong>Pan no:</strong> {response.data.pan_no}</p>
              <p><strong>TDS Details:</strong></p>
              {response.data.tds.map((tdsvalue, index) => (
                <div key={index}>
                  <p>TDS ID: {tdsvalue.tds_id}</p>
                  <p>Assessment Year: {tdsvalue.assessment_year}</p>
                </div>
              ))}
              <p><strong>Status Code:</strong> {response.status_code}</p>
              <p><strong>Status:</strong> {response.success}</p>
              <p><strong>Message:</strong> {response.message}</p>
              <p><strong>Message Code:</strong> {response.message_code}</p>
            </div>
          )}

          {response && response.status_code !== 200 && (
            <div className="mt-6 p-4 bg-red-500 text-white rounded">
              <h3 className="text-lg font-semibold">Error</h3>
              <p>{response.message}</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ITRDownload26AS;
