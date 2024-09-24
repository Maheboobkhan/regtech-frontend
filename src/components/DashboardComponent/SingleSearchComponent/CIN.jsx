import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CorporateCIN = () => {
  const [cinNumber, setCinNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCinChange = (e) => {
    setCinNumber(e.target.value);
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
        corporate_cin_number: cinNumber,
      };

      const res = await axios.post('http://regtechapi.in/api/seachv4', body, { headers });
      console.log(res)
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">CORPORATE CIN</h3>
          
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Corporate CIN <span className="text-blue-300">please wait...</span>
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
                htmlFor="corporate_cin"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                CORPORATE CIN Number
              </label>
              <input
                type="text"
                id="corporate_cin"
                name="id_number"
                value={cinNumber}
                onChange={handleCinChange}
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
          {response && (
            <>
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">CORPORATE CIN Details</h3>
                  <p><strong>Company Class:</strong> {response.corporate_cin.data.company_class}</p>
                  <p><strong>Client ID:</strong> {response.corporate_cin.data.client_id}</p>
                  <p><strong>CIN Number:</strong> {response.corporate_cin.data.cin_number}</p>
                  <p><strong>Zip:</strong> {response.corporate_cin.data.zip}</p>
                  <p><strong>Company Address:</strong> {response.corporate_cin.data.company_address}</p>
                  <p><strong>Email:</strong> {response.corporate_cin.data.email}</p>
                  <p><strong>Incorporation Date:</strong> {response.corporate_cin.data.incorporation_date}</p>
                  <p><strong>Director Name:</strong> {response.corporate_cin.data.directors[0].director_name}</p>
                  <p><strong>DIN Number:</strong> {response.corporate_cin.data.directors[1].din_number}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  CORPORATE CIN is Invalid.
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
    // </div>
  );
};

export default CorporateCIN;
