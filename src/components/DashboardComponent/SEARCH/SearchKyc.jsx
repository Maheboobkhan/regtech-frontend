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

      const domain = localStorage.getItem('domain');

      const res = await axios.post(`${domain}/search`, {
        pano: formData.pan_number,
        dob: formData.dob
      }, { headers });
      console.log(res)
      setResponse(res.data);
      if(res.data.response.kycStatus === "SUCCESS" && res.data.response.success === true && res.data.response.statusCode === 200 && res.data.response.kycDetails.personalIdentifiableData.personalDetails.mobNum && res.data.response.kycDetails.personalIdentifiableData.personalDetails.mobNum !== null || 'null'){
        await axios.post(`${domain}/sendotp`, {
          phone: res.data.response.kycDetails.personalIdentifiableData.personalDetails.mobNum,
          token: token,
        });
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Search</h3>
          <Link
            to="/dashboard/kyc/search_api"
            className="text-white underline hover:text-blue-200"
          >
            Search APIs
          </Link>
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
            <div className="bg-green-100 text-green-800 p-3 rounded mt-4">
              <h3 className="text-2xl font-semibold">Search Details</h3>
              <div className="mt-4 flex flex-col gap-y-2">
                <p><strong>Full Name:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.fullName || 'null'}</p>
                <p><strong>Mobile Number:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.mobNum || 'null'}</p>
                <p><strong>Email:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.email || 'null'}</p>
                <p><strong>Aadhaar:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.maskedAadhaar || 'null'}</p>
                <p><strong>Type Of Holder:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.typeOfHolder || 'null'}</p>
                <p><strong>Gender:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.gender || 'null'}</p>
                <p><strong>Date Of Birth:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.dob || 'null'}</p>
                <p><strong>Address:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.address || 'null'}</p>
                <p><strong>Pincode:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.pincode || 'null'}</p>
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
    </div>
  );
};

export default SearchKyc;
