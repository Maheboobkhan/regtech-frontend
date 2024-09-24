import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const KycLiteSearch = () => {
  const [panNumber, setPanNumber] = useState('');
  const [dob, setDob] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post('http://regtechapi.in/api/seachv4', {
        pano: panNumber,
        dob: dob
      });
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
        <div className="bg-[#00acc1] p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Search Kyc Lite</h3>
          
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying PAN Number <span className="text-blue-300">please wait...</span>
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
                htmlFor="pan_number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                PAN Number
              </label>
              <input
                type="text"
                id="pan_number"
                name="pan_number"
                value={panNumber}
                onChange={handlePanNumberChange}
                placeholder="Ex: ABCDE1234N"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                maxLength="10"
                minLength="10"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date of Birth (DOB)
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={dob}
                onChange={handleDobChange}
                placeholder="YYYY-MM-DD"
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
                  <h3 className="text-lg font-semibold">KYC Details</h3>
                  <p><strong>Full Name:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.fullName}</p>
                  <p><strong>Mobile Number:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.mobNum}</p>
                  <p><strong>Email:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.email}</p>
                  <p><strong>Date of Birth:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.dob}</p>
                  <p><strong>Masked Aadhaar:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.maskedAadhaar}</p>
                  <p><strong>Last Four Digits:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.lastFourDigit}</p>
                  <p><strong>Type Of Holder:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.typeOfHolder}</p>
                  <p><strong>Gender:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.gender}</p>
                  <p><strong>Address:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.address}</p>
                  <p><strong>City:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.city}</p>
                  <p><strong>Country:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.country}</p>
                  <p><strong>Pincode:</strong> {response.response.kycDetails.personalIdentifiableData.personalDetails.pincode}</p>
                </div>
              )}
              {response.statusCode === '102' && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  PAN Number is Invalid.
                </div>
              )}
              {(response.statusCode === '404' || response.statusCode === '400') && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error, Please try later.
                </div>
              )}
              {response.statusCode === '500' && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    // </div>
  );
};

export default KycLiteSearch;