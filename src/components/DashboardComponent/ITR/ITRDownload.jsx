import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ITRDownload = () => {
  const [clientId, setClientId] = useState('');
  const [itrData, setItrData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setClientId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const token = Cookies.get('authToken');
    const domain = localStorage.getItem('domain');

    try {
      const response = await axios.post(
        `${domain}/itr_download`,
        { client_id: clientId },
        { headers: { AccessToken: token } }
      );

      setItrData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError('No ITR found for given PAN');
      } else if (err.response && err.response.status === 404) {
        setError('Client Not Found');
      } else {
        setError('An unexpected error occurred.');
      }
      setItrData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-24 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4">
          <h3 className="text-xl font-semibold text-white">ITR Download</h3>
        </div>
        <div className="p-4">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
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
                placeholder="Ex: itr_glvFpjIAxwsdscTEHYy"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              GET Details
            </button>
          </form>

          {loading && <div className="text-blue-500 mt-4">Loading...</div>}

          {itrData && itrData.status_code === 200 && (
            <div className="mt-6 p-4 bg-green-400 text-white rounded">
              <h3 className="text-lg font-semibold">ITR Details</h3>
              <p><strong>Client ID:</strong> {itrData.data.client_id}</p>
              <p><strong>PAN No:</strong> {itrData.data.filed_itrs[0].pan_no}</p>
              <p><strong>ITR ID:</strong> {itrData.data.filed_itrs[0].itr_id}</p>
              <p><strong>Filing Year:</strong> {itrData.data.filed_itrs[0].filing_year}</p>
              <p><strong>Acknowledgement No:</strong> {itrData.data.filed_itrs[0].acknowledgement_no}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ITRDownload;
