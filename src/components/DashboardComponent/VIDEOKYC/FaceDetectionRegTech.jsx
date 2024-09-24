import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const FaceDetectionRegTech = () => {
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
      const formData = new FormData();
      formData.append('file', file);

      const headers = {
        'AccessToken': token,
      };

      const res = await axios.post('http://regtechapi.in/api/detection_face', formData, { headers });
      console.log(res.data.data)
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
        <div className="bg-blue-600 p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Face Detection</h3>
          <Link
            to="/dashboard/kyc/detection_face_api" // Replace with actual route
            className="btn btn-light text-white underline hover:text-blue-200"
          >
            Face Detection API
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Processing <span className="text-blue-300">please wait...</span>
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
                htmlFor="image_file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Image File
              </label>
              <input
                type="file"
                id="image_file"
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
              {response.statusCode === 200 && (
                <div className="card card-success mt-4">
                  <div className="card-header">
                    <h3 className="card-title p-2 bg-blue-600 text-xl">Image Details</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h5 className="text-center font-bold">Detected Image</h5>
                        <div className="text-center">
                          <img
                            src={`data:image/png;base64,${response.data || ''}`}
                            alt="Detected"
                            width="350"
                            height="300"
                            className="mt-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Face detection failed.
                </div>
              )}
              {response.statusCode === 103 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  You are not registered to use this service. Please update your plan.
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

export default FaceDetectionRegTech;
