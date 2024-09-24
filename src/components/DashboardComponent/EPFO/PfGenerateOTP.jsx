import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const EpfoOtpGeneration = () => {
  const [epfoNumber, setEpfoNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEpfoNumber(e.target.value);
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
        "http://regtechapi.in/api/pf_generate_otp",
        { id_number: epfoNumber },
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
      setError("Error generating OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-32 mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#00acc1] p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">
          EPFO OTP Generation
        </h3>
        <Link
          to="/dashboard/kyc/pf_submit_otp"
          className="text-white underline hover:text-blue-100"
        >
          Click to Submit OTP
        </Link>
      </div>
      <div className="p-4">
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="text-xl text-blue-300">
              Fetching OTP details <span className="text-blue-300">please wait...</span>
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
              htmlFor="epfo_number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              EPFO Number
            </label>
            <input
              type="text"
              id="epfo_number"
              name="epfo_number"
              value={epfoNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: 1111 2222 3333"
              required
              maxLength="12"
              minLength="12"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            Get OTP
          </button>
        </form>
        {response && (
          <div className="bg-green-500 text-white p-3 rounded mt-4">
            <h3 className="text-lg font-semibold">EPFO OTP Details</h3>
            <p>Client Id: {response.data.client_id}</p>
            <p>Otp Sent: {response.data.otp_sent}</p>
            <p>Masked Mobile Number: {response.data.masked_mobile_number}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpfoOtpGeneration;
