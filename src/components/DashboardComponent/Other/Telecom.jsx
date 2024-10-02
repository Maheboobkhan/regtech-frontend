import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Telecom = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(['authToken']);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = cookies.authToken;

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/telecom/generate-otp',
        {
          id_number: mobileNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
          <h3 className="text-xl font-semibold text-white">Telecom</h3>
          <Link to="/dashboard/kyc/telecom_apis" className="btn btn-light text-white">
            Telecom APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Telecom Number <span className="text-blue-300">please wait...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          {response && response.statusCode && response.statusCode !== 200 && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {response.statusCode === 102 && 'Wrong Phone Number.'}
              {response.statusCode === 404 && 'Server Error, Please try later'}
              {response.statusCode === 400 && 'Wrong Phone Number.'}
              {response.statusCode === 500 && 'Internal Server Error. Please contact techsupport@docboyz.in for more details.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="mobile_number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Telecom Number
              </label>
              <input
                type="text"
                id="mobile_number"
                name="mobile_number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                placeholder="Ex: 1234567890"
                maxLength="10"
                minLength="10"
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
          <br />
          <Link to="/dashboard/kyc/telecom_submit_otp" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mt-4">
            Submit OTP
          </Link>
          
          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Telecom Details</h3>
              <p><strong>Client ID:</strong> {response['Telecom Generate OTP Details']['data']['client_id']}</p>
              <p><strong>Operator:</strong> {response['Telecom Generate OTP Details']['data']['operator']}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Telecom;
