import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const LicenseValidation = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [dob, setDob] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLicenseChange = (e) => {
    setLicenseNumber(e.target.value);
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
      const token = Cookies.get('authToken');
      const headers = {
        'AccessToken': token,
      };
      const body = {
        license_number: licenseNumber,
        dob: dob,
      };

      const res = await axios.post('http://regtechapi.in/api/license_validation', body, { headers });
      console.log(res)
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
          <h3 className="text-xl font-semibold text-white">License Verification</h3>
          <Link
            to="/dashboard/kyc/license_api"
            className="text-white underline hover:text-blue-100"
          >
            DL APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying License <span className="text-blue-300">please wait...</span>
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
                htmlFor="license_number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                License Number
              </label>
              <input
                type="text"
                id="license_number"
                name="license_number"
                value={licenseNumber}
                onChange={handleLicenseChange}
                placeholder="Ex: MH121020152012"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                placeholder="DD/MM/YYYY"
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
              {response.statusCode === '200' && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">License Details</h3>
                  <p><strong>License Number:</strong> {response.license_validation.response.dlNumber}</p>
                  <p><strong>Name:</strong> {response.license_validation.response.name}</p>
                  <p><strong>Father / Husband Name:</strong> {response.license_validation.response['father/husband']}</p>
                  <p><strong>DOB:</strong> {response.license_validation.response.dob}</p>
                  <p><strong>Permanent Address:</strong> {response.license_validation.response.address[0].completeAddress}</p>
                  <p><strong>Permanent ZIP:</strong> {response.license_validation.response.address[0].pin}</p>
                  <p><strong>State:</strong> {response.license_validation.response.address[0].state}</p>
                  <p><strong>District:</strong> {response.license_validation.response.address[0].district}</p>
                  <p><strong>Image:</strong> <br/><img src={response.license_validation.response.img} alt="Profile" className="mt-2" /></p>
                  <p><strong>License Verification Status:</strong> {response.statusCode}</p>
                </div>
              )}
              {response.statusCode === '102' && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  License Number is Invalid.
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
    </div>
  );
};

export default LicenseValidation;
