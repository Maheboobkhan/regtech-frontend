import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CommunityArea = () => {
  const [formData, setFormData] = useState({
    lat: '',
    long: ''
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get('authToken');
      const headers = {
        'AccessToken': token,
        'Content-Type': 'application/json',
      };

      const res = await axios.post('http://regtechapi.in/api/seachv4', formData, { headers });
      console.log(res)
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Community Area</h3>
          
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">Processing...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="latitude" className="block text-gray-700 text-sm font-bold mb-2">
                Latitude
              </label>
              <input
                type="text"
                id="latitude"
                name="latitude"
                value={formData.lat}
                onChange={handleChange}
                placeholder="Enter Latitude"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="longitude" className="block text-gray-700 text-sm font-bold mb-2">
                Longitude
              </label>
              <input
                type="text"
                id="longitude"
                name="longitude"
                value={formData.long}
                onChange={handleChange}
                placeholder="Enter Longitude"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Community Area Details</h3>
              <div className="mt-4">
                <p><strong>Title:</strong> {response.data.page || 'null'}</p>
                <p><strong>Temple Count:</strong> {response.data.temple_count || 'null'}</p>
                <p><strong>Church Count:</strong> {response.data.church_count || 'null'}</p>
                <p><strong>Mosque Count:</strong> {response.data.mosque_count || 'null'}</p>
                <p><strong>Gurudwara Count:</strong> {response.data.gurudwara_count || 'null'}</p>
                <p><strong>Timestamp:</strong> {response.data.Timestamp ? new Date(response.data.Timestamp * 1000).toLocaleDateString() : 'null'}</p>
              </div>
            </div>
          )}
          {response && (response.statusCode === 102 || response.statusCode === 202 || response.statusCode === 103) && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {response.error_message || 'An error occurred. Please try again later.'}
            </div>
          )}

{response && (response.statusCode === 500 &&
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {response.message || 'An error occurred. Please try again later.'}
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default CommunityArea;
