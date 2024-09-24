import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const SearchKyc = () => {
  const [formData, setFormData] = useState({
    pan_number: '',
    dob: ''
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

      const res = await axios.post('http://regtechapi.in/api/seachv4', {
        panNo: formData.pan_number,
        dateofbirth: formData.dob
      }, { headers });
      console.log(res)
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Search</h3>
          
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
              <label htmlFor="pan_number" className="block text-gray-700 text-sm font-bold mb-2">
                PAN Number
              </label>
              <input
                type="text"
                id="pan_number"
                name="pan_number"
                value={formData.pan_number}
                onChange={handleChange}
                placeholder="Ex: ABCDE1234N"
                maxLength="10"
                minLength="10"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
                Date of Birth (DOB)
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>

          {response && response.response && response.response.kycStatus === 'SUCCESS' && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Search Details</h3>
              <div className="mt-4">
                <p><strong>Full Name:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.fullName || 'null'}</p>
                <p><strong>Mobile Number:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.mobNum || 'null'}</p>
                <p><strong>Email:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.email || 'null'}</p>
                <p><strong>Current Address:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.corresLine1 || 'null'}<br />{response.response.kycDetails.personalIdentifiableData.personalDetails.corresLine2 || 'null'}</p>
                <p><strong>Current City:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.corresCity || 'null'}</p>
                <p><strong>Current Dist:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.corresDist || 'null'}</p>
                <p><strong>Current Pincode:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.corresPin || 'null'}</p>
                <p><strong>Permanent Address:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.permLine1 || 'null'}<br />{response.response.kycDetails.personalIdentifiableData.personalDetails.permLine2 || 'null'}</p>
                <p><strong>Permanent Dist:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.permDist || 'null'}</p>
                <p><strong>Permanent City:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.permCity || 'null'}</p>
                <p><strong>Permanent Pincode:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.permPin || 'null'}</p>
                <p><strong>Number Of Identity:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.numIdentity || 'null'}</p>
                <p><strong>Number Of Related:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.numRelated || 'null'}</p>
                <p><strong>Number Of Images:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.numImages || 'null'}</p>
              </div>
            </div>
          )}
          {response && (response.statusCode === '102' || response.statusCode === '404') && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {response.error_message || 'An error occurred. Please try again later.'}
            </div>
          )}
          {response && response.statusCode === '500' && <div className="bg-red-500 text-white p-3 rounded mt-4">
              {response.message || 'An error occurred. Please try again later.'}
            </div>}
        </div>
      </div>
    // </div>
  );
};

export default SearchKyc;
