import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CorporateDIN = () => {
  const [dinNumber, setDinNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDinChange = (e) => {
    setDinNumber(e.target.value);
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
        corporate_din: dinNumber,
      };

      const res = await axios.post('http://regtechapi.in/api/corporate_din', body, { headers });
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
          <h3 className="text-xl font-semibold text-white">CORPORATE DIN</h3>
          <Link
            to="/dashboard/kyc/corporate_din_apis"
            className="text-white underline hover:text-blue-100"
          >
            DIN APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Corporate DIN <span className="text-blue-300">please wait...</span>
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
                htmlFor="corporate_din"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                CORPORATE DIN Number
              </label>
              <input
                type="text"
                id="corporate_din"
                name="corporate_din"
                maxLength="8"
                minLength="8"
                value={dinNumber}
                onChange={handleDinChange}
                placeholder="Ex: ABCDE1234"
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
                  <h3 className="text-lg font-semibold">CORPORATE DIN Details</h3>
                  <p><strong>Present Address:</strong> {response.data.present_address}</p>
                  <p><strong>Nationality:</strong> {response.data.nationality}</p>
                  <p><strong>Client ID:</strong> {response.data.client_id}</p>
                  <p><strong>Father Name:</strong> {response.data.father_name}</p>
                  <p><strong>Email:</strong> {response.data.email}</p>
                  <p><strong>Permanent Address:</strong> {response.data.permanent_address}</p>
                  <p><strong>Full Name:</strong> {response.data.full_name}</p>
                  <p><strong>Date of Birth:</strong> {response.data.dob}</p>
                  <p><strong>DIN Number:</strong> {response.data.din_number}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  CORPORATE DIN is Invalid.
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

export default CorporateDIN;
