import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const BankVerification = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get('authToken');
      const headers = {
        'AccessToken': token,
        'Content-Type': 'application/json'
      };
      const body = {
        name: 'Test No',
        accno: accountNumber,
        ifsc: ifsc
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
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="mx-auto w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 text-white">
          <h3 className="text-xl font-semibold">Bank Validation</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-500">
                Verifying Bank Details <span className="text-blue-500">please wait...</span>
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
              <label htmlFor="account_number" className="block text-gray-700 text-sm font-bold mb-2">
                Account Number
              </label>
              <input
                type="text"
                id="account_number"
                name="account_number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="Enter AC Number"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ifsc" className="block text-gray-700 text-sm font-bold mb-2">
                IFSC Code
              </label>
              <input
                type="text"
                id="ifsc"
                name="ifsc"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                placeholder="Enter IFSC"
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
            <div className="mt-4">
              {response.statusCode === '200' && (
                <div className="bg-green-400 text-white p-3 rounded">
                  <h3 className="text-lg font-semibold">Bank Details</h3>
                  <p><strong>Account Status:</strong> {response.bank_verification.account_status}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded">
                  {response.message || 'Please enter valid details.'}
                </div>
              )}
              {response.statusCode === 404 && (
                <div className="bg-red-500 text-white p-3 rounded">
                  Error: Server Error, Please try later.
                </div>
              )}
              {response.statusCode === 500 && (
                <div className="bg-red-500 text-white p-3 rounded">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default BankVerification;
