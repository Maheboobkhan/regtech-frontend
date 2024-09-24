import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const DedupeS3 = () => {
  const [formData, setFormData] = useState({
    bucket_name: '',
    prefix: '',
    aws_access_key_id: '',
    aws_secret_access_key: '',
    region_name: ''
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
          <h3 className="text-xl font-semibold text-white">Dedupe</h3>
          
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
              <label htmlFor="bucket_name" className="block text-gray-700 text-sm font-bold mb-2">
                Bucket Name
              </label>
              <input
                type="text"
                id="bucket_name"
                name="bucket_name"
                value={formData.bucket_name}
                onChange={handleChange}
                placeholder="Enter a bucket name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="prefix" className="block text-gray-700 text-sm font-bold mb-2">
                Prefix
              </label>
              <input
                type="text"
                id="prefix"
                name="prefix"
                value={formData.prefix}
                onChange={handleChange}
                placeholder="Enter a prefix"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="aws_access_key_id" className="block text-gray-700 text-sm font-bold mb-2">
                AWS Access Key ID
              </label>
              <input
                type="text"
                id="aws_access_key_id"
                name="aws_access_key_id"
                value={formData.aws_access_key_id}
                onChange={handleChange}
                placeholder="Enter AWS Access Key ID"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="aws_secret_access_key" className="block text-gray-700 text-sm font-bold mb-2">
                AWS Secret Access Key
              </label>
              <input
                type="text"
                id="aws_secret_access_key"
                name="aws_secret_access_key"
                value={formData.aws_secret_access_key}
                onChange={handleChange}
                placeholder="Enter AWS Secret Access Key"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="region_name" className="block text-gray-700 text-sm font-bold mb-2">
                Region Name
              </label>
              <input
                type="text"
                id="region_name"
                name="region_name"
                value={formData.region_name}
                onChange={handleChange}
                placeholder="Enter region name"
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
              <h3 className="text-lg font-semibold">Dedupe Details</h3>
              <div className="mt-4">
                <strong>Deleted Files:</strong>
                <div className="mt-2">
                  {response.data.deleted_files && response.data.deleted_files.length > 0 ? (
                    response.data.deleted_files.map((file, index) => (
                      <p key={index}>{file}</p>
                    ))
                  ) : (
                    <p>null</p>
                  )}
                </div>
              </div>
            </div>
          )}
          {response && (response.statusCode === 102 || response.statusCode === 103 || response.statusCode === 500) && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {response.message || 'An error occurred. Please try again later.'}
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default DedupeS3;
