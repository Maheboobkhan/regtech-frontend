import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { pdf } from "@react-pdf/renderer";
import StatementPDF from "../BANK/PdfDocument";

const BankAnalyser = () => {
  const [file, setFile] = useState(null);
  const [bank, setBank] = useState("SBI");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("SAVING");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      const token = Cookies.get("authToken");
      const headers = {
        AccessToken: token,
        "Content-Type": "multipart/form-data",
      };

      const formData = new FormData();
      formData.append("file", file);
      formData.append("password", password);
      formData.append("bank", bank);
      formData.append("accountType", accountType);
      formData.append("country", "INDIA");

      const res = await axios.post(
        "http://regtechapi.in/api/bank_anlyser",
        formData,
        { headers }
      );
      console.log(res);
      setResponse(res.data);
      // atmWithdrawl, 
      // averageMonthlyBalance, 
      // averageQuarterlyBalance, 
      // expenses, 
      // highValueTransactions, 
      // incomes, 
      // minimumBalances, 
      // moneyReceivedTransactions,

      // Automatically open the PDF after receiving the response
      if (res.data && res.data.statusCode === 200) {
        // const pdfBlob = new Blob([<PdfDocument data={res.data} />], { type: 'application/pdf' });
        // const pdfUrl = URL.createObjectURL(pdfBlob);
        // const pdfWindow = window.open(pdfUrl);
        // if (pdfWindow) {
        //   pdfWindow.focus();
        // }
        const blob = await pdf(
          <StatementPDF
          atmWithdrawl={res.data.response.atm_withdrawls}
            averageMonthlyBalance={res.data.response.averageMonthlyBalance}
            averageQuarterlyBalance={res.data.response.averageQuarterlyBalance}
            expenses={res.data.response.expenses}
            highValueTransactions={res.data.response.high_value_transactions}
            incomes={res.data.response.incomes}
            minimumBalances={res.data.response.minimum_balances}
            moneyReceivedTransactions={res.data.response.money_received_transactions}
          />
        ).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Bank Analyser</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-500">
                Uploading Bank Statement{" "}
                <span className="text-blue-500">please wait...</span>
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
                htmlFor="file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
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
              <label
                htmlFor="bank"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
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
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="accountType"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
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
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    // </div>
  );
};

export default BankAnalyser;
