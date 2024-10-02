import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const AadharExtract = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(['authToken']);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = cookies.authToken;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_type', 'extract_aadharcard_text');

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/seachv4',
        formData,
        {
          headers: {
            AccessToken: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(res)

      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Extract Aadhar</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">Processing request, please wait...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>
          )}
          {response && response.status_code && response.status_code !== 200 && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {response.status_code === 102 && 'Invalid file type, must be an Aadhar card image.'}
              {response.status_code === 404 && 'No file provided.'}
              {response.status_code === 500 && 'Internal Server Error. Please contact techsupport@docboyz.in.'}
              {response.status_code === 103 && 'You are not registered to use this service.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Aadhar Card Upload</label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>
          {response && response.status_code === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Aadhar Details</h3>
              <p><strong>Aadhar Description:</strong> {response.aadharcard?.detected_text || 'null'}</p>
              <p><strong>Date of Birth:</strong> {response.aadharcard?.date_of_birth || 'null'}</p>
              <p><strong>Aadhar Number:</strong> {response.aadharcard?.aadhar_number || 'null'}</p>
              <p><strong>Name:</strong> {response.aadharcard?.name || 'null'}</p>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default AadharExtract;
