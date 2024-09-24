import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const BankIFSCVerification = () => {
  const [ifsc, setIfsc] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleIfscChange = (e) => {
    setIfsc(e.target.value);
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
        'Content-Type': 'application/json'
      };
      const body = {
        ifsc: ifsc
      };

      const res = await axios.post('http://regtechapi.in/api/bank_verification_find_ifsc', body, { headers });
      console.log(res);
      setResponse(res.data[0]);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h3 className="text-xl font-semibold">IFSC Verification</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-500">
                Verifying IFSC Code <span className="text-blue-500">please wait...</span>
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
              <label htmlFor="ifsc" className="block text-gray-700 text-sm font-bold mb-2">
                IFSC Code
              </label>
              <input
                type="text"
                id="ifsc"
                name="ifsc"
                value={ifsc}
                onChange={handleIfscChange}
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
              {response.bank_verification_api.code === 200 && (
                <div className="bg-green-400 text-white p-3 rounded">
                  <h3 className="text-lg font-semibold">Bank Details</h3>
                  <p><strong>IFSC:</strong> {response.bank_verification_api.response.ifsc}</p>
                  <p><strong>Bank Name:</strong> {response.bank_verification_api.response.name}</p>
                  <p><strong>Code:</strong> {response.bank_verification_api.response.code}</p>
                  <p><strong>Branch:</strong> {response.bank_verification_api.response.branch}</p>
                  <p><strong>Address:</strong> {response.bank_verification_api.response.address}</p>
                  <p><strong>City:</strong> {response.bank_verification_api.response.city}</p>
                  <p><strong>State:</strong> {response.bank_verification_api.response.state}</p>
                  <p><strong>District:</strong> {response.bank_verification_api.response.district}</p>
                  <p><strong>Contact:</strong> {response.bank_verification_api.response.contact}</p>
                  <p><strong>UPI:</strong> {response.bank_verification_api.response.upi}</p>
                  <p><strong>RTGS:</strong> {response.bank_verification_api.response.rtgs}</p>
                  <p><strong>NEFT:</strong> {response.bank_verification_api.response.neft}</p>
                  <p><strong>IMPS:</strong> {response.bank_verification_api.response.imps}</p>
                </div>
              )}
              {response.bank_verification_api.code === 102 && (
                <div className="bg-red-500 text-white p-3 rounded">
                  IFSC CODE is invalid
                </div>
              )}
              {response.bank_verification_api.code === 404 && (
                <div className="bg-red-500 text-white p-3 rounded">
                  {response.bank_verification_api.response}
                </div>
              )}
              {response.bank_verification_api.code === 500 && (
                <div className="bg-red-500 text-white p-3 rounded">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankIFSCVerification;
