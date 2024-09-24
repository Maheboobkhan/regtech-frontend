import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const EpfoWithoutOtp = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      setError("Auth token is missing");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/seachv4",
        { name: name, company: companyName },
        {
          headers: {
            AccessToken: token,
          },
        }
      );
      console.log(response);
      setResponse(response.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        setError("Error submitting EPFO details");
      } else {
        setError("Network error, please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#00acc1] p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">EPFO Without OTP</h3>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter employee name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={companyName}
              onChange={handleCompanyNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter company name"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <div className="text-xl text-blue-300">
              Submitting details{" "}
              <span className="text-blue-300">please wait...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mt-4">{error}</div>
        )}
        {response && response.statusCode === 200 && (
          <div className="bg-green-500 text-white p-3 rounded mt-4">
            <h3 className="text-lg font-semibold">EPFO Details</h3>
            {response[
              "Telecom EPFO Without OTP Details"
            ]?.data?.search_data.map((epfoData, index) => (
              <div key={index}>
                <table className="table-auto w-full mt-4">
                  <tbody>
                    <tr className="bg-green-200 text-gray-700">
                      <td>Name: {epfoData.name}</td>
                      <td>Confidence: {epfoData.confidence}</td>
                      <td>Company: {epfoData.company}</td>
                      <td>Company Code: {epfoData.company_code}</td>
                    </tr>
                  </tbody>
                </table>
                {epfoData.filing_data.map((filingData, idx) => (
                  <div key={idx} className="mt-4">
                    <div className="bg-green-100 p-4 rounded-lg">
                      <table className="table-auto w-full">
                        <thead className="bg-green-300 text-gray-700">
                          <tr>
                            <th className="py-2">Month</th>
                            <th className="py-2">TRRN</th>
                            <th className="py-2">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{filingData.trrn}</td>
                            <td>{filingData.trrn}</td>
                            <td>{filingData.date}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            
          </div>
        )}
        {response && response.statusCode === 500 && (
              <div className="bg-red-500 text-white p-3 rounded mt-4">
                {response.message ||
                  "An error occurred. Please try again later."}
              </div>
            )}
      </div>
    </div>
  );
};

export default EpfoWithoutOtp;
