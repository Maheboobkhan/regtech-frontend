import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AadharOCRMasking = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      setError("Auth token is missing");
      return;
    }

    if (!file) {
      setError("Please upload an Aadhar card image");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/aadharcard_mask",
        formData,
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setResponse(response.data);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Error submitting form"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h3 className="text-xl font-semibold text-white">Aadhar OCR Masking</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-center mb-4">
              <div className="text-xl text-blue-600">Uploading file, please wait...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                Aadhar card
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
          {response && response.status_code === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold text-center">Aadhar Details</h3>
              <div className="text-center mt-4">
                <h5 className="text-center font-bold">Masked Aadhar</h5>
                <img
                  src={`data:image/png;base64,${response.aadharcard.data || ''}`}
                  alt="Masked Aadhar"
                  width="350"
                  height="300"
                  className="mx-auto"
                />
              </div>
            </div>
          )}
          {response && response.status_code === 102 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Invalid file type, must be an image.
            </div>
          )}
          {response && response.status_code === 404 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              No image file provided.
            </div>
          )}
          {response && response.status_code === 500 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Internal Server Error. Please contact techsupport@docboyz.in for more details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AadharOCRMasking;
