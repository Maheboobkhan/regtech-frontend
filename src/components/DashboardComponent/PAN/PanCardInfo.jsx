import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PanCardInfo = () => {
  const [panNumber, setPanNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');

    if (!token) {
      setError('Auth token is missing');
      return;
    }

    if (!panNumber) {
      setError('Please enter a PAN number');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        'http://regtechapi.in/api/pancard_details',
        { pan_number: panNumber },
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'application/json',
          },
        }
      );
      setResponse(data);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error fetching PAN card details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">PAN CARD INFO.</h3>
          <Link
            to="/dashboard/kyc/pancard_api"
            className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-200"
          >
            PAN Card APIs
          </Link>
        </div>
        <div className="p-4">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          {loading && (
            <div className="text-center mb-4 text-xl text-blue-600">
              Verifying PAN number, please wait...
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="pan_number" className="block text-gray-700 text-sm font-bold mb-2">
                PAN Number
              </label>
              <input
                type="text"
                id="pan_number"
                name="pan_number"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                maxLength="10"
                minLength="10"
                placeholder="Ex: ABCDE1234N"
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
            <div className="mt-6 bg-green-100 text-green-800 p-4 rounded">
              <h3 className="text-lg font-semibold">PAN CARD Details</h3>
              <div className="mt-4">
                <p><strong>Full Name:</strong> {response.pancard?.data?.fullName || 'null'}</p>
                <p><strong>PAN no:</strong> {response.pancard?.data?.panNumber || 'null'}</p>
                <p><strong>Is Valid:</strong> {response.pancard?.data?.isValid || 'null'}</p>
                <p><strong>First Name:</strong> {response.pancard?.data?.firstName || 'null'}</p>
                <p><strong>Middle Name:</strong> {response.pancard?.data?.middleName || 'null'}</p>
                <p><strong>Last Name:</strong> {response.pancard?.data?.lastName || 'null'}</p>
                <p><strong>PAN Status Code:</strong> {response.pancard?.data?.panStatusCode || 'null'}</p>
                <p><strong>PAN Status:</strong> {response.pancard?.data?.panStatus || 'null'}</p>
                <p><strong>Aadhaar Seeding Status:</strong> {response.pancard?.data?.aadhaarSeedingStatus || 'null'}</p>
                <p><strong>Aadhaar Seeding Status Code:</strong> {response.pancard?.data?.aadhaarSeedingStatusCode || 'null'}</p>
                <p><strong>Last Updated On:</strong> {response.pancard?.data?.lastUpdatedOn || 'null'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PanCardInfo;
