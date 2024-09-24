import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CheckEmailVerificationStatus = () => {
  const [identity, setIdentity] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleIdentityChange = (e) => {
    setIdentity(e.target.value);
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
      };
      const body = {
        identity: identity,
      };

      const res = await axios.post('http://regtechapi.in/api/check_verification_email_status', body, { headers });
      console.log(res);
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Check Email Verification Status</h3>
          <Link
            to="/dashboard/kyc/check_verify_email_status_api"
            className="text-white underline hover:text-blue-100"
          >
            Check Email Verification APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Checking Status <span className="text-blue-300">please wait...</span>
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
                htmlFor="identity"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email ID
              </label>
              <input
                type="text"
                id="identity"
                name="identity"
                value={identity}
                onChange={handleIdentityChange}
                placeholder="Enter an email"
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
          {response && (
            <>
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">Verified Address Details</h3>
                  <p><strong>Identity:&nbsp;&nbsp;</strong>
                    {response.data.identity || 'null'}
                  </p>
                  <p><strong>Verification Status:&nbsp;&nbsp;</strong>
                    {response.data.verification_status || 'null'}
                  </p>
                </div>
              )}
              {(response.statusCode === 102 || response.statusCode === 103 || response.statusCode === 500) && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.message || 'An error occurred. Please try again later.'}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckEmailVerificationStatus;
