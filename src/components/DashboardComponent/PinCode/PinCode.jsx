import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PinCode = () => {
  const [fromPincode, setFromPincode] = useState('');
  const [toPincode, setToPincode] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFromPincodeChange = (e) => {
    setFromPincode(e.target.value);
  };

  const handleToPincodeChange = (e) => {
    setToPincode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = Cookies.get('authToken');

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/pincode',
        {
          from_pin: fromPincode,
          to_pin: toPincode,
        },
        {
          headers: {
            AccessToken: token,
            'Content-Type': 'application/json',
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Pin Code</h3>
          <Link
            to="/dashboard/kyc/pincode_api"
            className="text-white underline hover:text-blue-100"
          >
            Pin Code APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Pin Codes <span className="text-blue-300">please wait...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="from_pincode"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                From Pincode
              </label>
              <input
                type="text"
                id="from_pincode"
                name="from_pincode"
                value={fromPincode}
                onChange={handleFromPincodeChange}
                placeholder="Ex: 410006"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="to_pincode"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                To Pincode
              </label>
              <input
                type="text"
                id="to_pincode"
                name="to_pincode"
                value={toPincode}
                onChange={handleToPincodeChange}
                placeholder="Ex: 450908"
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
          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Pincode Details</h3>
              <p><strong>From Pin Code:</strong> {response.data.fromPin || 'null'}</p>
              <p><strong>To Pin Code:</strong> {response.data.toPin || 'null'}</p>
              <p><strong>Distance:</strong> {response.data.distance || 'null'}</p>
            </div>
          )}
          {response && response.statusCode === 102 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Invalid from pincode and to pincode. Please enter correct pincode values.
            </div>
          )}
          {response && response.statusCode === 202 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Server Error. Please try again later.
            </div>
          )}
          {response && response.statusCode === 103 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              You are not registered to use this service. Please update your plan.
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

export default PinCode;
