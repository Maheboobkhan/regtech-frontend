import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PanCardUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');

    if (!token) {
      setError('Auth token is missing');
      return;
    }

    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('pan_image', file);

    try {
      const { data } = await axios.post(
        'http://regtechapi.in/api/seachv4',
        formData,
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(data)
      setResponse(data);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error uploading file');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">PAN Card Upload</h3>
          
        </div>
        <div className="p-4">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          {loading && (
            <div className="text-center mb-4 text-xl text-blue-600">
              Uploading file, please wait...
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                PAN Card Image
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>

          {response && response.statusCode === 200 && (
            <div className="mt-6 bg-green-100 text-green-800 p-4 rounded">
              <h3 className="text-lg font-semibold">PAN Card Details</h3>
              <div className="mt-4">
                <p><strong>PAN Number:</strong> {response.pancard?.pan_number || 'null'}</p>
                <p><strong>DOB:</strong> {response.pancard?.pan_dob || 'null'}</p>
                <p><strong>Father Name:</strong> {response.pancard?.pan_fname || 'null'}</p>
                <p><strong>Full Name:</strong> {response.pancard?.pan_name || 'null'}</p>
              </div>
            </div>
          )}

          {response && response.pancard2 && response.pan_verified === 1 && (
            <div className="mt-6 bg-green-100 text-green-800 p-4 rounded">
              <h3 className="text-lg font-semibold">PAN Card Detailed Information</h3>
              <div className="mt-4">
                <p><strong>Pan Verified:</strong> {response.pan_verified === 1 ? 'Verified' : 'Failed'}</p>
                <p><strong>Full Name:</strong> {response.pancard2?.fullname || 'null'}</p>
                <p><strong>PAN no:</strong> {response.pancard2?.pancard || 'null'}</p>
                <p><strong>PAN Verification Status:</strong> {response.pancard2?.statusCode || 'null'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default PanCardUpload;
