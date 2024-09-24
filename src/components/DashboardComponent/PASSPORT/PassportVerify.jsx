import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PassportVerify = () => {
  const [clientId, setClientId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setClientId(e.target.value);
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

      const res = await axios.post('http://regtechapi.in/api/passport_verify', { client_id: clientId }, { headers });
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
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Passport Verify</h3>
          <Link
            to="/dashboard/kyc/passport_api"
            className="text-white underline hover:text-blue-100"
          >
            Passport APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Passport <span className="text-blue-300">please wait...</span>
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
              <label
                htmlFor="client_id"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Client ID
              </label>
              <input
                type="text"
                id="client_id"
                name="client_id"
                value={clientId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: ABCDE1234N"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
          {response && (
            <>
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">Passport Client Details</h3>
                  <p><strong>Full Name:</strong> {response.data.given_name}</p>
                  <p><strong>Passport Number:</strong> {response.data.passport_num}</p>
                  <p><strong>Passport Message:</strong> {response.message}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Client ID is Invalid.
                </div>
              )}
              {(response.statusCode === 404 || response.status_code === 400) && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error, Please try later.
                </div>
              )}
              {response.statusCode === 500 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}

{response.statusCode === 401 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.message}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PassportVerify;