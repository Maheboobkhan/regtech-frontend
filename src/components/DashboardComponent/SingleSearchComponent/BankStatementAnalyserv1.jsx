import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const BankAnalyserV1 = () => {
  const [file, setFile] = useState(null);
  const [bank, setBank] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBankChange = (e) => {
    setBank(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
      formData.append('bankStemtpdf', file);
      formData.append('Password1', password);
      formData.append('bnk_Name', bank);
      formData.append('account_Type', accountType);
      formData.append('country', 'INDIA');

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
      <div className="mx-auto w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Bank Analyser</h3>
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
                Bank Statement
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
              <label htmlFor="bank" className="block text-gray-700 text-sm font-bold mb-2">
                Bank
              </label>
              <input
                type="text"
                id="bank"
                name="bank"
                value={bank}
                onChange={handleBankChange}
                placeholder="Enter Bank Name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="accountType" className="block text-gray-700 text-sm font-bold mb-2">
                Account Type
              </label>
              <input
                type="text"
                id="accountType"
                name="accountType"
                value={accountType}
                onChange={handleAccountTypeChange}
                placeholder="Enter Account Type"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>

          {/* Displaying the response data */}
          {response && response.statusCode === 200 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Bank Statement Data</h3>

              {/* Average Monthly Balance */}
              {response.response.averageMonthlyBalance.length > 0 && (
                <div className="bg-green-100 p-3 rounded mb-4">
                  <h4 className="text-md font-semibold">Average Monthly Balance</h4>
                  {response.response.averageMonthlyBalance.map((item, index) => (
                    <div key={index} className="mb-2">
                      <p><strong>Month & Year:</strong> {item.monthAndYear}</p>
                      <p><strong>Net Average Balance:</strong> {item.netAverageBalance}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Expenses */}
              {response.response.expenses.length > 0 && (
                <div className="bg-blue-100 p-3 rounded mb-4">
                  <h4 className="text-md font-semibold">Expenses</h4>
                  {response.response.expenses.map((item, index) => (
                    <div key={index} className="mb-2">
                      <p><strong>Amount:</strong> {item.amount}</p>
                      <p><strong>Category:</strong> {item.category}</p>
                      <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                      <p><strong>Description:</strong> {item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* High Value Transactions */}
              {response.response.high_value_transactions.length > 0 && (
                <div className="bg-yellow-100 p-3 rounded mb-4">
                  <h4 className="text-md font-semibold">High Value Transactions</h4>
                  {response.response.high_value_transactions.map((item, index) => (
                    <div key={index} className="mb-2">
                      <p><strong>Amount:</strong> {item.amount}</p>
                      <p><strong>Balance After Transaction:</strong> {item.balanceAfterTranscation}</p>
                      <p><strong>Category:</strong> {item.category}</p>
                      <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                      <p><strong>Description:</strong> {item.description}</p>
                      <p><strong>Type:</strong> {item.type}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Incomes */}
              {response.response.incomes.length > 0 && (
                <div className="bg-green-100 p-3 rounded mb-4">
                  <h4 className="text-md font-semibold">Incomes</h4>
                  {response.response.incomes.map((item, index) => (
                    <div key={index} className="mb-2">
                      <p><strong>Amount:</strong> {item.amount}</p>
                      <p><strong>Balance After Transaction:</strong> {item.balanceAfterTransaction}</p>
                      <p><strong>Category:</strong> {item.category}</p>
                      <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                      <p><strong>Description:</strong> {item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {response && (response.statusCode === 422 || response.statusCode === 404 || response.statusCode === 400 || response.statusCode === 500) && (
            <div className="mt-4 bg-red-500 text-white p-3 rounded">
              {response.statusCode === 422 && 'PAN is Invalid'}
              {(response.statusCode === 404 || response.statusCode === 400) && 'Server Error, Please try later.'}
              {response.statusCode === 500 && 'An internal server error occurred.'}
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default BankAnalyserV1;
