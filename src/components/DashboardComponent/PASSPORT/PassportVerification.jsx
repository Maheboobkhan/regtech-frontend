import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const PassportVerification = () => {
  const [idNumber, setIdNumber] = useState('');
  const [dob, setDob] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(['authToken']);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const { data } = await axios.post(
        'http://regtechapi.in/api/passport_verification',
        { id_number: idNumber, dob },
        {
          headers: {
            'AccessToken': cookies.authToken
          }
        }
      );
      setResponse(data);
    } catch (err) {
      setError('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Passport Verification</h3>
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
                Verifying Passport Details <span className="text-blue-300">please wait...</span>
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
              <label htmlFor="idNumber" className="block text-gray-700 text-sm font-bold mb-2">
                File Number
              </label>
              <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: PN1067476816213"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
                DOB
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: yyyy-mm-dd"
                maxLength="10"
                minLength="10"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>
          {response && response.statusCode === '200' && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Passport Verification Details</h3>
              <p><strong>File Number:</strong> {response.Verification_Details.response.fileNumber}</p>
              <p><strong>Full Name:</strong> {response.Verification_Details.response.name}</p>
              <p><strong>DOB:</strong> {response.Verification_Details.response.dob}</p>
              <p><strong>Date of Application:</strong> {response.Verification_Details.response.applicationReceivedOnDate}</p>
              <p><strong>Type of Application:</strong> {response.Verification_Details.response.typeOfApplication}</p>
            </div>
          )}
          {response && response.statusCode === '422' && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Message</h3>
              <p><strong>Message:</strong> {response.Verification_Details.message}</p>
              <p><strong>Message Code:</strong> {response.Verification_Details.message_code}</p>
              <p><strong>Client ID:</strong> {response.Verification_Details.data.client_id}</p>
              <p><strong>OTP Sent:</strong> {response.Verification_Details.data.otp_sent}</p>
              <p><strong>IF Number:</strong> {response.Verification_Details.data.if_number}</p>
              <p><strong>Valid Aadhar:</strong> {response.Verification_Details.data.valid_aadhaar}</p>
              <p><strong>File Number:</strong> {response.Verification_Details.data.file_number}</p>
            </div>
          )}
          {response && response.statusCode === '102' && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              File Number is Invalid.
            </div>
          )}
          {response && (response.statusCode === '404' || response.statusCode === '500') && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Server Error, Please try later. If the problem persists, contact techsupport@docboyz.in.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PassportVerification;