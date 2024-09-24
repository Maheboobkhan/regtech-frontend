import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const PassportCreateClient = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
        const token = Cookies.get('authToken');
      const headers = {
        'AccessToken': token, // Replace with actual token
      };
      const body = {
        'id_number': 'asd',
      };

      const res = await axios.post('http://regtechapi.in/api/passport_create_client', body, { headers });
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
          <h3 className="text-xl font-semibold text-white">Passport Create Client</h3>
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
                Creating Passport Client <span className="text-blue-300">please wait...</span>
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
                htmlFor="create_client"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Create Passport Client
              </label>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
              >
                Create
              </button>
            </div>
          </form>
          {response && (
            <>
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">Passport Client Create Details</h3>
                  <p><strong>Passport Client ID:</strong> {response.passport.data.client_id}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Passport Create Client failed.
                </div>
              )}
              {(response.statusCode === 404 || response.statusCode === 400) && (
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

export default PassportCreateClient;
