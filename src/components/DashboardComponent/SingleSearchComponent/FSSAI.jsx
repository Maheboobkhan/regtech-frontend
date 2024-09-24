import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Fssai = () => {
  const [fssiNumber, setFssiNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFssiNumberChange = (e) => {
    setFssiNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = Cookies.get('authToken');

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/seachv4',
        {
            fssi_id_number: fssiNumber,
        },
        {
          headers: {
            AccessToken: token,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(res)

      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">FSSAI Verification</h3>
          
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-yellow-300">
                Verifying FSSAI Number <span className="text-yellow-300">please wait...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          {response && response.statusCode && response.statusCode !== 200 && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {response.statusCode === 102 && 'FSSAI is Invalid.'}
              {response.statusCode === 404 && 'Server Error, Please try later.'}
              {response.statusCode === 400 && 'Server Error, Please try later.'}
              {response.statusCode === 401 && 'Internal Server Error. Please contact techsupport@docboyz.in for more details.'}
              {response.statusCode === 500 && 'Internal Server Error. Please contact techsupport@docboyz.in for more details.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fssi_number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                FSSAI Number
              </label>
              <input
                type="text"
                id="fssi_number"
                name="fssi_number"
                value={fssiNumber}
                onChange={handleFssiNumberChange}
                placeholder="Ex: 22819015001312"
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
          <br />
          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">FSSAI Details</h3>
              <p><strong>FSSAI Number:</strong> {response['Verification Details']['data']['fssai_number']}</p>
              <p><strong>Client ID:</strong> {response['Verification Details']['data']['client_id']}</p>
              <p><strong>FSSAI Verification:</strong> {response['Verification Details']['message_code']}</p>
              <p><strong>Address:</strong> {response['Verification Details']['data']['details'][0]['address']}</p>
              <p><strong>FBO ID:</strong> {response['Verification Details']['data']['details'][0]['fbo_id']}</p>
              <p><strong>Display Ref ID:</strong> {response['Verification Details']['data']['details'][0]['display_ref_id']}</p>
              <p><strong>License Category Name:</strong> {response['Verification Details']['data']['details'][0]['license_category_name']}</p>
              <p><strong>State Name:</strong> {response['Verification Details']['data']['details'][0]['state_name']}</p>
              <p><strong>Status Desc:</strong> {response['Verification Details']['data']['details'][0]['status_desc']}</p>
              <p><strong>License Category ID:</strong> {response['Verification Details']['data']['details'][0]['license_category_id']}</p>
              <p><strong>Company Name:</strong> {response['Verification Details']['data']['details'][0]['company_name']}</p>
              <p><strong>License Active Flag:</strong> {response['Verification Details']['data']['details'][0]['license_active_flag']}</p>
              <p><strong>App Type Desc:</strong> {response['Verification Details']['data']['details'][0]['app_type_desc']}</p>
              <p><strong>Premise Pincode:</strong> {response['Verification Details']['data']['details'][0]['premise_pincode']}</p>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default Fssai;
