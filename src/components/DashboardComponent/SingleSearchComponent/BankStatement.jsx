import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { pdf } from '@react-pdf/renderer';
import BankStatementPDF from '../BANK/BankStatementPdf';

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
      formData.append('bank_Statement', file);
      formData.append('bank_Name', bankName);
      formData.append('accountype', accountType);

      const res = await axios.post('http://regtechapi.in/api/seachv4', formData, { headers });
      console.log(res);
      setResponse(res.data);
      if (res.data && res.data.statusCode === 200) {
        // const pdfBlob = new Blob([<PdfDocument data={res.data} />], { type: 'application/pdf' });
        // const pdfUrl = URL.createObjectURL(pdfBlob);
        // const pdfWindow = window.open(pdfUrl);
        // if (pdfWindow) {
        //   pdfWindow.focus();
        // }
        const blob = await pdf(
          <BankStatementPDF
          bankStatement={res.data.response}
          />
        ).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h3 className="text-xl font-semibold">Bank Statement</h3>
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
        </div>
      </div>
    // </div>
  );
};

export default BankStatement;
