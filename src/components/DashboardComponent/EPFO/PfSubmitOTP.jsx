import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const EpfoOtpSubmission = () => {
  const [clientId, setClientId] = useState("");
  const [otp, setOtp] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClientIdChange = (e) => {
    setClientId(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
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
        "http://regtechapi.in/api/pf_submit_otp",
        { client_id: clientId, otp: otp },
        {
          headers: {
            'AccessToken': token,
          },
        }
      );
      console.log(response)
      setResponse(response.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        switch (statusCode) {
          case 102:
            setError("EPFO number is Invalid");
            break;
          case 404:
          case 400:
            setError("Server Error, Please try later");
            break;
          case 500:
            setError("Internal Server Error. Please contact techsupport@docboyz.in for more details.");
            break;
          default:
            setError("An unexpected error occurred");
        }
      } else {
        setError("Network error, please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-32 mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#00acc1] p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">
          EPFO OTP Submit
        </h3>
        <Link
          to="/dashboard/kyc/pf_generate_otp"
          className="text-white underline hover:text-blue-100"
        >
          Go Back to Generate OTP
        </Link>
      </div>
      <div className="p-4">
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="text-xl text-blue-300">
              Submitting OTP details <span className="text-blue-300">please wait...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-4">
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
              value={clientId}
              onChange={handleClientIdChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Client ID"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={handleOtpChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: 772345"
              required
              maxLength="6"
              minLength="6"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            Submit OTP
          </button>
        </form>
        {response && response.status_code === 200 && (
          <div className="bg-green-500 text-white p-3 rounded mt-4">
            <h3 className="text-lg font-semibold">EPFO Details</h3>
            <p>Client Id: {response.data.client_id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpfoOtpSubmission;
