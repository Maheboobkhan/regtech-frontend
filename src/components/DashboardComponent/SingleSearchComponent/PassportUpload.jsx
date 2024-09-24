import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const PassportUpload = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    client_id: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get('authToken');
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };
      
      const data = new FormData();
      data.append('client_id', formData.client_id);
      data.append('passport_file', formData.file);

      const res = await axios.post('http://regtechapi.in/api/seachv4', data, { headers });
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
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Passport Upload</h3>
          
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
          <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="client_id"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Client ID
              </label>
              <input
                type="text"
                id="client_id"
                name="client_id"
                value={formData.client_id}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Client ID"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Passport File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
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
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">Passport Details</h3>
                  <p><strong>OCR READING OF:</strong> {response.data.passport_num}</p>
                  <p><strong>Status Code:</strong> {response.statusCode}</p>
                  <p><strong>Passport Number:</strong> {response.data.passport_num}</p>
                  <p><strong>DOB:</strong> {response.data.dob}</p>
                  <p><strong>Father Name:</strong> {response.data.father}</p>
                  <p><strong>Full Name:</strong> {response.data.given_name}</p>
                  <p><strong>Client ID:</strong> {response.data.client_id}</p>
                  <p><strong>Country Code:</strong> {response.data.country_code}</p>
                  <p><strong>DOB:</strong> {response.data.dob}</p>
                  <p><strong>DOE:</strong> {response.data.doe}</p>
                  <p><strong>DOI:</strong> {response.data.doi}</p>
                  <p><strong>Gender:</strong> {response.data.gender}</p>
                  <p><strong>Given Name:</strong> {response.data.given_name}</p>
                  <p><strong>Nationality:</strong> {response.data.nationality}</p>
                  <p><strong>Passport Number:</strong> {response.data.passport_num}</p>
                  <p><strong>Place of Birth:</strong> {response.data.place_of_birth}</p>
                  <p><strong>Place of Issue:</strong> {response.data.place_of_issue}</p>
                  <p><strong>Surname:</strong> {response.data.surname}</p>
                  <p><strong>MRZ Line 1:</strong> {response.data.mrz_line_1}</p>
                  <p><strong>MRZ Line 2:</strong> {response.data.mrz_line_2}</p>
                  <p><strong>Type of Passport:</strong> {response.data.type_of_passport}</p>
                  <p><strong>Address:</strong> {response.data.address}</p>
                  <p><strong>Father:</strong> {response.data.father}</p>
                  <p><strong>Mother:</strong> {response.data.mother}</p>
                  <p><strong>File Number:</strong> {response.data.file_num}</p>
                  <p><strong>Old DOI:</strong> {response.data.old_doi}</p>
                  <p><strong>Old Passport Number:</strong> {response.data.old_passport_num}</p>
                  <p><strong>Old Place of Issue:</strong> {response.data.old_place_of_issue}</p>
                  <p><strong>PIN:</strong> {response.data.pin}</p>
                  <p><strong>Spouse:</strong> {response.data.spouse}</p>
                  <p><strong>Passport Validity:</strong> {response.data.passport_validity}</p>
                </div>
              )}
              {response.statusCode === 422 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Passport is Invalid.
                </div>
              )}
              {response.statusCode === 405 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.OCR_DATA.message}
                </div>
              )}
              {(response.statusCode === 404 || response.statusCode === 400) && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error, Please try later.
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
    // {/* </div> */}
  );
};

export default PassportUpload;
