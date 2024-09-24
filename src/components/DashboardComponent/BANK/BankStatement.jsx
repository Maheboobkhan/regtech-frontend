import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const BankStatement = () => {
  const [file, setFile] = useState(null);
  const [bankName, setBankName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
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
      formData.append('bank_name', bankName);
      formData.append('account_type', accountType);

      const res = await axios.post('http://13.200.221.11:5000/extract-bank-statement', formData, { headers });
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h3 className="text-xl font-semibold">Bank Statement</h3>
          <a href="#" className="btn btn-secondary text-white underline hover:text-blue-300">
            API Doc
          </a>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-500">
                Uploading Bank Statement <span className="text-blue-500">please wait...</span>
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
              <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                Upload file
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                required
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bank_name" className="block text-gray-700 text-sm font-bold mb-2">
                Bank Name
              </label>
              <input
                type="text"
                id="bank_name"
                name="bank_name"
                value={bankName}
                onChange={handleBankNameChange}
                placeholder="Bank Name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="account_type" className="block text-gray-700 text-sm font-bold mb-2">
                Account Type
              </label>
              <input
                type="text"
                id="account_type"
                name="account_type"
                value={accountType}
                onChange={handleAccountTypeChange}
                placeholder="Account Type"
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
            <div className="mt-4">
              {response.statusCode === '200' && (
                <div className="bg-green-400 text-white p-3 rounded">
                  <h3 className="text-lg font-semibold">Bank Statement Details</h3>
                  <p><strong>Account Status:</strong> {response.bank_verification.account_status}</p>
                  {/* Add other fields as needed */}
                </div>
              )}
              {response.statusCode === '102' && (
                <div className="bg-red-500 text-white p-3 rounded">
                  Please enter valid details.
                </div>
              )}
              {(response.statusCode === '404' || response.statusCode === '400') && (
                <div className="bg-red-500 text-white p-3 rounded">
                  Server Error, Please try later.
                </div>
              )}
              {response.statusCode === '500' && (
                <div className="bg-red-500 text-white p-3 rounded">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankStatement;
