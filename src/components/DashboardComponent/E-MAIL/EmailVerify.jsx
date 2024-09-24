import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
        email_to_verify: email,
      };

      const res = await axios.post('http://regtechapi.in/api/verify_email', body, { headers });
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
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Email Verification</h3>
          <Link
            to="/dashboard/kyc/verify_email_api"
            className="text-white underline hover:text-blue-100"
          >
            Email Verification APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Email <span className="text-blue-300">please wait...</span>
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
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
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
                  <h3 className="text-lg font-semibold">Verified Email Details</h3>
                  <p><strong>Email:&nbsp;&nbsp;</strong>
                    {response.data.email || 'null'}
                  </p>
                  <p><strong>HTTPStatusCode:&nbsp;&nbsp;</strong>
                    {response.data.HTTPStatusCode || 'null'}
                  </p>
                  <p><strong>RequestId:&nbsp;&nbsp;</strong>
                    {response.data.RequestId || 'null'}
                  </p>
                  <p><strong>RetryAttempts:&nbsp;&nbsp;</strong>
                    {response.data.RetryAttempts || 'null'}
                  </p>
                  <p><strong>Verification Initiated:&nbsp;&nbsp;</strong>
                    {response.data.verification_initiated || 'null'}
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

export default EmailVerification;
