import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const TelecomSubmitOtp = () => {
  const [clientId, setClientId] = useState('');
  const [otp, setOtp] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(['authToken']);

  const handleClientIdChange = (e) => setClientId(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = cookies.authToken;

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/telecom/submit-otp',
        { client_id: clientId, otp },
        {
          headers: {
            AccessToken: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Telecom Submit OTP</h3>
          <Link to="/dashboard/kyc/telecom_apis" className="text-white">
            Telecom APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">Submitting OTP, please wait...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>
          )}
          {response && response.statusCode && response.statusCode !== 200 && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {response.statusCode === 102 && 'OTP is Invalid.'}
              {response.statusCode === 404 && 'Server Error, Please try later.'}
              {response.statusCode === 400 && 'Invalid Request.'}
              {response.statusCode === 500 && 'Internal Server Error. Please contact techsupport@docboyz.in for more details.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="client_id" className="block text-gray-700 text-sm font-bold mb-2">Client ID</label>
              <input
                type="text"
                id="client_id"
                name="client_id"
                value={clientId}
                onChange={handleClientIdChange}
                placeholder="Ex: telecom_WKnzKAVVrtEghupBohfb"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Ex: 1010"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Telecom Details</h3>
              <p><strong>Client ID:</strong> {response['Telecom Submit OTP']['data']['client_id']}</p>
              <p><strong>Mobile Number:</strong> {response['Telecom Submit OTP']['data']['mobile_number']}</p>
              <p><strong>Address:</strong> {response['Telecom Submit OTP']['data']['address']}</p>
              <p><strong>City:</strong> {response['Telecom Submit OTP']['data']['city']}</p>
              <p><strong>State:</strong> {response['Telecom Submit OTP']['data']['state']}</p>
              <p><strong>Pin Code:</strong> {response['Telecom Submit OTP']['data']['pin_code']}</p>
              <p><strong>Full Name:</strong> {response['Telecom Submit OTP']['data']['full_name']}</p>
              <p><strong>Date of Birth:</strong> {response['Telecom Submit OTP']['data']['parsed_dob']}</p>
              <p><strong>User Email:</strong> {response['Telecom Submit OTP']['data']['user_email']}</p>
              <p><strong>Operator:</strong> {response['Telecom Submit OTP']['data']['operator']}</p>
              <p><strong>Billing Type:</strong> {response['Telecom Submit OTP']['data']['billing_type']}</p>
              <p><strong>Alternate Phone Number:</strong> {response['Telecom Submit OTP']['data']['alternate_phone']}</p>
              <p><strong>Extra Fields:</strong> {response['Telecom Submit OTP']['data']['extra_fields']}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TelecomSubmitOtp;
