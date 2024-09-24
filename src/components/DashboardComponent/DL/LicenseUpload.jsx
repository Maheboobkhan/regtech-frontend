import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const LicenseUpload = () => {
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e, type) => {
    if (type === 'front') {
      setFrontFile(e.target.files[0]);
    } else if (type === 'back') {
      setBackFile(e.target.files[0]);
    }
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
        'Content-Type': 'multipart/form-data'
      };

      const formData = new FormData();
      formData.append('front', frontFile);
      formData.append('back', backFile);

      const res = await axios.post('http://regtechapi.in/api/driving_upload', formData, { headers });
      console.log(res)
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">License Upload</h3>
          <Link
            to="/dashboard/kyc/license_api"
            className="btn btn-light"
          >
            DL APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-xl text-blue-500 mb-4">
              Uploading License Images <span className="text-blue-500">please wait...</span>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">License Front Image</label>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer"
                onChange={(e) => handleFileChange(e, 'front')}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">License Back Image</label>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer"
                onChange={(e) => handleFileChange(e, 'back')}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>

          {/* Displaying the response data */}
          {response && response.statusCode === 200 && (
            <div className="mt-4 bg-green-100 p-3 rounded">
              <h3 className="text-lg font-semibold">License Details</h3>
              <p><strong>License Number:</strong> {response.data.license_number}</p>
              <p><strong>Name:</strong> {response.data.name}</p>
              <p><strong>Father / Husband Name:</strong> {response.data.father_or_husband_name}</p>
              <p><strong>Gender:</strong> {response.data.gender}</p>
              <p><strong>DOB:</strong> {response.data.dob}</p>
              <p><strong>Permanent Address:</strong> {response.data.permanent_address}</p>
              <p><strong>Permanent ZIP:</strong> {response.data.permanent_zip}</p>
              <p><strong>Temporary Address:</strong> {response.data.temporary_address}</p>
              <p><strong>Temporary ZIP:</strong> {response.data.temporary_zip}</p>
              <p><strong>Citizenship:</strong> {response.data.citizenship}</p>
              <p><strong>State:</strong> {response.data.state}</p>
              <p><strong>DOI:</strong> {response.data.doi}</p>
              <p><strong>DOE:</strong> {response.data.doe}</p>
              <p><strong>RTO Code:</strong> {response.data.ola_code}</p>
              <p><strong>RTO Name:</strong> {response.data.ola_name}</p>
              <p><strong>License Verification:</strong> {response.message_code}</p>
            </div>
          )}
          {response && (response.statusCode === 422 || response.statusCode === 404) && (
            <div className="mt-4 bg-red-500 text-white p-3 rounded">
              {response.statusCode === 422 && 'License is Invalid'}
              {response.statusCode === 404 && 'Server Error, Please try later'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LicenseUpload;
