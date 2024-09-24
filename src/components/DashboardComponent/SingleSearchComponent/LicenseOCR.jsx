import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LicenseOCR = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
        'Content-Type': 'multipart/form-data'
      };

      const formData = new FormData();
      formData.append('file', file);
      formData.append('file_type', 'drivinglicense');

      const res = await axios.post('http://regtechapi.in/api/seachv4', formData, { headers });
      console.log(res)
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="w-full mx-auto max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4">
          <h3 className="text-xl font-semibold text-white">License OCR</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-xl text-blue-500 mb-4">
              Uploading License Image <span className="text-blue-500">please wait...</span>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">License Upload</label>
              <input
                type="file"
                name="file"
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer"
                onChange={handleFileChange}
                required
              />
              <br />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>

          {/* Displaying the response data */}
          {response && response.status_code === 200 && (
            <div className="mt-4 bg-green-100 p-3 rounded">
              <h3 className="text-lg font-semibold">License Details</h3>
              <p><strong>License Description:</strong> 
                {response.driving_license.raw_ocr_texts && response.driving_license.raw_ocr_texts.length > 0
                  ? response.driving_license.raw_ocr_texts.join(' ')
                  : 'null'
                }
              </p>
              <p><strong>Valid Till:</strong> 
                {response.driving_license.expiry_date || 'null'}
              </p>
              <p><strong>Birth Date:</strong> 
                {response.driving_license.birth_date || 'null'}
              </p>
              <p><strong>DL No:</strong> 
                {response.driving_license.dl_no || 'null'}
              </p>
              <p><strong>Name:</strong> 
                {response.driving_license.name || 'null'}
              </p>
            </div>
          )}
          {response && response.status_code === 102 && (
            <div className="mt-4 bg-red-500 text-white p-3 rounded">
              Invalid file type, must be a driving license image.
            </div>
          )}
          {response && response.status_code === 404 && (
            <div className="mt-4 bg-red-500 text-white p-3 rounded">
              No file provided.
            </div>
          )}
          {response && response.status_code === 500 && (
            <div className="mt-4 bg-red-500 text-white p-3 rounded">
              Internal Server Error. Please contact techsupport@docboyz.in for more details.
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default LicenseOCR;
