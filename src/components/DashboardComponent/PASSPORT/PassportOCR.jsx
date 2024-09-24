import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PassportOCR = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('No file selected.');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get('authToken');
      const headers = {
        'AccessToken': token,
      };
      const formData = new FormData();
      formData.append('file', file);

      const res = await axios.post('http://regtechapi.in/api/passport_ocr', formData, { headers });
      setResponse(res.data);
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
          <h3 className="text-xl font-semibold text-white">Passport OCR</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Uploading Passport <span className="text-blue-300">please wait...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Passport Upload
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>
          {response && (
            <>
              {response.status_code === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">Passport Details</h3>
                  <p><strong>Date Of Birth:</strong> {response.passport_verification.mrz_info.date_of_birth_yymmdd ? new Date(response.passport_verification.mrz_info.date_of_birth_yymmdd).toDateString() : 'null'}</p>
                  <p><strong>Expiration Date:</strong> {response.passport_verification.mrz_info.expiration_date_yymmdd ? new Date(response.passport_verification.mrz_info.expiration_date_yymmdd).toDateString() : 'null'}</p>
                  <p><strong>Gender:</strong> {response.passport_verification.mrz_info.gender || 'null'}</p>
                  <p><strong>Mrz Type:</strong> {response.passport_verification.mrz_info.mrz_type || 'null'}</p>
                  <p><strong>Nationality:</strong> {response.passport_verification.mrz_info.nationality || 'null'}</p>
                  <p><strong>Number:</strong> {response.passport_verification.mrz_info.number || 'null'}</p>
                  <p><strong>Valid Document:</strong> {response.passport_verification.valid_document ? 'True' : 'False'}</p>
                </div>
              )}
              {response.status_code === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Failed to extract MRZ information.
                </div>
              )}
              {response.status_code === 404 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  No file provided.
                </div>
              )}
              {response.status_code === 500 && (
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

export default PassportOCR;
