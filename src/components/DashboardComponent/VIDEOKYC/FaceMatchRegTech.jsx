import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const FaceMatchRegtech = () => {
  const [knownFace, setKnownFace] = useState(null);
  const [image, setImage] = useState(null);
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
      formData.append('KnownFace', knownFace);
      formData.append('Img', image);

      const headers = {
        'AccessToken': token,
      };

      const res = await axios.post('http://regtechapi.in/api/facematch', formData, { headers });
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
        <div className="bg-blue-600 p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Face Match</h3>
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
                htmlFor="known_face_image"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Face Image
              </label>
              <input
                type="file"
                id="known_face_image"
                onChange={(e) => handleFileChange(e, setKnownFace)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => handleFileChange(e, setImage)}
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
                  <p><strong>Confidence: </strong>{response.rec_face.match}%</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Face recognition is not defined.
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

export default FaceMatchRegtech;
