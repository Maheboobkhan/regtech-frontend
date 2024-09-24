import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const PredictPPL = () => {
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

    const formData = new FormData();
    formData.append('csv_file', file);

    try {
      const token = Cookies.get('authToken');
      const headers = {
        'AccessToken': token,
        'Content-Type': 'multipart/form-data',
      };

      const res = await axios.post('http://regtechapi.in/api/predictppl', formData, { headers });
      console.log(res.data[0])
      setResponse(res.data[0]);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const downloadExcel = () => {
    if (response && response.statusCode === 200) {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(response.data);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'predict_report.xlsx');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">PredictPPL</h3>
          <Link
            to="/dashboard/kyc/predictppl/api"
            className="text-white underline hover:text-blue-100"
          >
            Predict API
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Processing File <span className="text-blue-300">please wait...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="csv_file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Upload File
              </label>
              <input
                type="file"
                id="csv_file"
                name="csv_file"
                onChange={handleFileChange}
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
            <>
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">PredictPPL Details</h3>
                  <table className="table text-center table-responsive table-bordered mt-4">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">LoanIntent</th>
                        <th className="px-4 py-2">LoanAmount</th>
                        <th className="px-4 py-2">LoanInterestRate</th>
                        <th className="px-4 py-2">LoanPercentIncome</th>
                        <th className="px-4 py-2">PersonAge</th>
                        <th className="px-4 py-2">PersonHomeOwnership</th>
                        <th className="px-4 py-2">PersonIncome</th>
                        <th className="px-4 py-2">Prediction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response.data.map((data, index) => (
                        <tr key={index}>
                          <td>{data.LoanIntent || 'null'}</td>
                          <td>{data.LoanAmount || 'null'}</td>
                          <td>{data.LoanInterestRate || 'null'}</td>
                          <td>{data.LoanPercentIncome || 'null'}</td>
                          <td>{data.PersonAge || 'null'}</td>
                          <td>{data.PersonHomeOwnership || 'null'}</td>
                          <td>{data.PersonIncome || 'null'}</td>
                          <td>{data.Prediction || 'null'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    onClick={downloadExcel}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Download as Excel
                  </button>
                </div>
              )}
              {response.statusCode === "102" && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Invalid file. Please upload a CSV file.
                </div>
              )}
              {response.statusCode === "103" && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  You are not registered to use this service. Please update your plan.
                </div>
              )}
              {response.statusCode === "404" && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error. Please try later.
                </div>
              )}
              {response.statusCode === "500" && (
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

export default PredictPPL;
