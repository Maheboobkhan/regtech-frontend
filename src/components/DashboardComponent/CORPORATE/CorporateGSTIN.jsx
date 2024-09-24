import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CorporateGSTIN = () => {
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
        gstin: gstin,
      };

      const res = await axios.post('http://regtechapi.in/api/corporate_gstin', body, { headers });
      console.log(res.data[0].corporate_gstin)
      setResponse(res.data[0].corporate_gstin);
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
          <h3 className="text-xl font-semibold text-white">CORPORATE GSTIN</h3>
          <Link
            to="/dashboard/kyc/corporate_gstin_apis"
            className="text-white underline hover:text-blue-100"
          >
            GSTIN APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Corporate GSTIN <span className="text-blue-300">please wait...</span>
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
                htmlFor="corporate_gstin"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                CORPORATE GSTIN Number
              </label>
              <input
                type="text"
                id="corporate_gstin"
                name="corporate_gstin"
                value={gstin}
                onChange={handleGstinChange}
                placeholder="Ex: ABCDE1234F"
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
              {response.code === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">CORPORATE GSTIN Details</h3>
                  <p><strong>Business Name:</strong> {response.response.legal_name || ''}</p>
                  <p><strong>GSTIN Number:</strong> {response.response.gstin || ''}</p>
                  <p><strong>Status:</strong> {response.response.status || ''}</p>
                  <p><strong>Trade Name:</strong> {response.response.trade_name || ''}</p>
                  <p><strong>Taxpayer Type:</strong> {response.response.taxpayer_type || ''}</p>
                  <p><strong>Registration Date:</strong> {response.response.reg_date || ''}</p>
                  <p><strong>Nature:</strong> {response.response.nature || ''}</p>
                  <p><strong>Jurisdiction:</strong> {response.response.jurisdiction || ''}</p>
                  <p><strong>Business Type:</strong> {response.response.business_type || ''}</p>
                  <p><strong>Last Update:</strong> {response.response.last_update || ''}</p>
                  <p><strong>State Code:</strong> {response.response.state_code || ''}</p>
                  <p><strong>Address:</strong> 
                    {response.response.address?.addr1 || ''}, 
                    {response.response.address?.addr2 || ''}, 
                    {response.response.address?.pin || ''}, 
                    {response.response.address?.state || ''}, 
                    {response.response.address?.city || ''}, 
                    {response.response.address?.district || ''}
                  </p>
                </div>
              )}
              {response.code === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  CORPORATE GSTIN is Invalid.
                </div>
              )}
              {response.code === 400 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error, Please try later.
                </div>
              )}
              {response.code === 500 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}

{response.code === 404 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.response}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CorporateGSTIN;
