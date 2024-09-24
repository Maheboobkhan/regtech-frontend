import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const GSTINDetails = () => {
  const [gstin, setGstin] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGstinChange = (e) => {
    setGstin(e.target.value);
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
        gstin_id: gstin,
      };

      const res = await axios.post('http://regtechapi.in/api/gstin_details', body, { headers });
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
          <h3 className="text-xl font-semibold text-white">GSTIN Details</h3>
          <Link
            to="/dashboard/kyc/gstin_details_api"
            className="text-white underline hover:text-blue-100"
          >
            GSTIN APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying GSTIN <span className="text-blue-300">please wait...</span>
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
                htmlFor="gstin_details_number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                GSTIN Number
              </label>
              <input
                type="text"
                id="gstin_details_number"
                name="gstin_details_number"
                value={gstin}
                onChange={handleGstinChange}
                placeholder="Ex: ZA121020152012"
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
          {response && (
            <>
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">GSTIN Details</h3>
                  <p><strong>Nature of Business Activities:</strong> {response.data['Nature of Business Activities'] || ''}</p>
                  <p><strong>Dealing in Goods and Services:</strong> {response.data['Dealing in Goods and Services'] || ''}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  GSTIN Number is Invalid.
                </div>
              )}
              {response.statusCode === 202 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error, Please try later.
                </div>
              )}
              {response.statusCode === 500 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}
              {response.statusCode === 103 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  You are not registered to use this service. Please update your plan.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GSTINDetails;
