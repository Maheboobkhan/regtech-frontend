import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const FaceMatch = () => {
  const [docImg, setDocImg] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get('authToken');
      const formData = new FormData();
      formData.append('doc_img', docImg);
      formData.append('selfie', selfie);

      const headers = {
        'AccessToken': token,
      };

      const res = await axios.post('http://regtechapi.in/api/face_match1', formData, { headers });
      console.log(res)
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
        <div className="bg-blue-400 p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Face Match</h3>
          <Link
            to="/dashboard/kyc/face_match_api"
            className="text-white underline hover:text-blue-100"
          >
            Face Match API
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Face Match <span className="text-blue-300">please wait...</span>
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
                htmlFor="doc_img"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Document Image
              </label>
              <input
                type="file"
                id="doc_img"
                onChange={(e) => handleFileChange(e, setDocImg)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="selfie"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Selfie Image
              </label>
              <input
                type="file"
                id="selfie"
                onChange={(e) => handleFileChange(e, setSelfie)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          {response && (
            <>
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">Face Match Details</h3>
                  <p><strong>Confidence: </strong>{response.face_match.response.confidence}%</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Image should be in JPEG or PNG format only.
                </div>
              )}
              {(response.statusCode === 404 || response.statusCode === 400) && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.message}
                </div>
              )}
              {response.statusCode === 500 && (
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

export default FaceMatch;
