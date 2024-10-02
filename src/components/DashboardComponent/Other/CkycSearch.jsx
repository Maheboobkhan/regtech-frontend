import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const CkycSearch = () => {
  const [panNumber, setPanNumber] = useState('');
  const [dob, setDob] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(['authToken']);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pan_number') {
      setPanNumber(value);
    } else if (name === 'dob') {
      setDob(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = cookies.authToken;

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/ckycSearch',
        { pano: panNumber, dob },
        {
          headers: {
            AccessToken: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">CKYC Search</h3>
          <Link to="/dashboard/kyc/ckycsearch_api" className="text-white">
            CKYC Search APIs
          </Link>
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
          {response && response.statusCode && response.statusCode !== 200 && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {response.statusCode === 102 && 'PAN Number is Invalid.'}
              {response.statusCode === 404 && 'Server Error, Please try again later.'}
              {response.statusCode === 500 && 'Internal Server Error. Please contact techsupport@docboyz.in.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="pan_number" className="block text-gray-700 text-sm font-bold mb-2">PAN Number</label>
              <input
                type="text"
                id="pan_number"
                name="pan_number"
                value={panNumber}
                onChange={handleInputChange}
                placeholder="Ex: ABCDE1234N"
                maxLength="10"
                minLength="10"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth (YYYY-MM-DD)</label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={dob}
                onChange={handleInputChange}
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
              <h3 className="text-lg font-semibold">CKYC Details</h3>
              <p><strong>CKYC ID:</strong> {response.response.kycDetails.ckycId}</p>
              <p><strong>Full Name:</strong> {response.response.kycDetails.fullName}</p>
              <p><strong>KYC Date:</strong> {response.response.kycDetails.kycDate}</p>
              <p><strong>Age:</strong> {response.response.kycDetails.age}</p>
              <p><strong>Father's Full Name:</strong> {response.response.kycDetails.fathersFullName}</p>
              <p>Profile Image:<br />
                <img src={`data:image/jpeg;base64,${response.response.kycDetails.photo}`} alt="Profile" />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CkycSearch;
