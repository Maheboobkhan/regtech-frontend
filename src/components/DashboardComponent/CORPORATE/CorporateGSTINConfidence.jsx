import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CorporateGstinConfidence = () => {
  const [formData, setFormData] = useState({
    corporate_gstin: '',
    name: '',
    mobile_number: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      const res = await axios.post('http://regtechapi.in/api/gstin_pan_confidence', formData, { headers });
      console.log(res.data[0].Status)
      setResponse(res.data[0]);
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
          <h3 className="text-xl font-semibold text-white">CORPORATE GSTIN WITH CONFIDENCE</h3>
          <Link
            to="/dashboard/kyc/corporate_gstin_confidence_api"
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
            {['corporate_gstin', 'name', 'mobile_number', 'address', 'state', 'city', 'pincode'].map((field) => (
              <div className="mb-4" key={field}>
                <label
                  htmlFor={field}
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  {field.replace('_', ' ').toUpperCase()}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.replace('_', ' ')}`}
                  required={field === 'corporate_gstin' || field === 'mobile_number'}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
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
                  <h3 className="text-lg font-semibold">CORPORATE GSTIN Details</h3>
                  <p><strong>Business Name:</strong> {response.response?.legal_name || ''}</p>
                  <p><strong>GSTIN Number:</strong> {response.response?.gstin || ''}</p>
                  <p><strong>Status:</strong> {response.response?.status || ''}</p>
                  <p><strong>Trade Name:</strong> {response.response?.trade_name || ''}</p>
                  <p><strong>Taxpayer Type:</strong> {response.response?.taxpayer_type || ''}</p>
                  <p><strong>Registration Date:</strong> {response.response?.reg_date || ''}</p>
                  <p><strong>Nature:</strong> {response.response?.nature || ''}</p>
                  <p><strong>Jurisdiction:</strong> {response.response?.jurisdiction || ''}</p>
                  <p><strong>Business Type:</strong> {response.response?.business_type || ''}</p>
                  <p><strong>Last Update:</strong> {response.response?.last_update || ''}</p>
                  <p><strong>State Code:</strong> {response.response?.state_code || ''}</p>
                  <p><strong>Address:</strong> {`${response.response?.address?.addr1 || ''}, ${response.response?.address?.addr2 || ''}, ${response.response?.address?.pin || ''}, ${response.response?.address?.state || ''}, ${response.response?.address?.city || ''}, ${response.response?.address?.district || ''}`}</p>
                  <p><strong>Confidence:</strong> {response.confidence || ''}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  CORPORATE GSTIN is Invalid.
                </div>
              )}
              {response.statusCode === 404 && (
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


{response.Status === 
"Invalid Survay Number" && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                 
"Invalid Survay Number"
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CorporateGstinConfidence;
