import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const ByPanCard = () => {
  const [panNumber, setPanNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse(null);
    setError(null);

    const token = Cookies.get('authToken');

    try {
      const { data } = await axios.post(
        'http://regtechapi.in/api/bypan',
        { bypan_id: panNumber },
        {
          headers: {
            'AccessToken': token
          }
        }
      );
      console.log(data)
      setResponse(data);
    } catch (err) {
      setError('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">PAN Card Verification</h3>
          <Link
              to="/dashboard/kyc/pancard_api"
              className="text-white underline hover:text-blue-100"
            >
              Pancard APIs
            </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying PAN Number <span className="text-blue-300">please wait...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="panNumber" className="block text-gray-700 text-sm font-bold mb-2">
                PAN Number
              </label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: ABCDE1234N"
                maxLength="10"
                minLength="10"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>
          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">PAN Card Details</h3>
              <p><strong>GSTIN Number:&nbsp;&nbsp;</strong>
                {response.data.GSTIN || 'null'}
              </p>
              <p><strong>GSTIN Status:&nbsp;&nbsp;</strong>
                {response.data.GSTIN_STATUS || 'null'}
              </p>
              <p><strong>STATE:&nbsp;&nbsp;</strong>
                {response.data.STATE || 'null'}
              </p>
            </div>
          )}
          {response && response.statusCode === 102 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Invalid PAN card. Please enter a correct PAN card number.
            </div>
          )}
          {response && response.statusCode === 103 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              You are not registered to use this service. Please update your plan.
            </div>
          )}
          {response && response.statusCode === 202 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Server Error. Please try later.
            </div>
          )}
          {response && response.statusCode === 500 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Internal Server Error. Please contact techsupport@docboyz.in for more details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ByPanCard;
