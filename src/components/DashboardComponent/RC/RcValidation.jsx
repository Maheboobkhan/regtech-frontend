

import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const RCValidation = () => {
  const [rcNumber, setRcNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);
    setLoading(true);

    const token = Cookies.get("authToken");

    try {
      const res = await axios.post(
        "http://regtechapi.in/api/rc_validation",
        { rc_number: rcNumber },
        { headers: { AccessToken: token } }
      );
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const renderResponse = () => {
    if (response && response.status_code === 200) {
      const data = response.rc_validation.data;
      return (
        <div className="bg-green-100 text-green-800 p-3 rounded mt-4">
          <h3 className="text-2xl font-semibold mb-2">Owner Details</h3>
          <hr />
          <p><strong>Owner Name:</strong> {data.owner_name}</p>
          <p><strong>Permanent Address:</strong> {data.permanent_address}</p>
          <p><strong>Mobile No:</strong> {data.mobile_number}</p>
          <p><strong>Financer:</strong> {data.financer}</p>

          <h3 className="mt-4 text-2xl font-semibold">Vehicle Details</h3>
          <hr />
          <p><strong>RC Number:</strong> {data.rc_number}</p>
          <p><strong>Engine Number:</strong> {data.vehicle_engine_number}</p>
          <p><strong>Chassis Number:</strong> {data.vehicle_chasi_number}</p>
          <p><strong>Registration Date:</strong> {data.registration_date}</p>
          <p><strong>Manufacturing Date:</strong> {data.manufacturing_date}</p>
          <p><strong>Registered At:</strong> {data.registered_at}</p>
          <p><strong>Maker Model:</strong> {data.maker_model}</p>
          <p><strong>Fuel Type:</strong> {data.fuel_type}</p>
          <p><strong>Color:</strong> {data.color}</p>
          <p><strong>Norms Type:</strong> {data.norms_type}</p>
          <p><strong>Fit Upto:</strong> {data.fit_up_to}</p>
          <p><strong>Tax Upto:</strong> {data.tax_upto}</p>

          <h3 className="mt-4 text-lg font-semibold">Insurance</h3>
          <hr />
          <p><strong>Insurance Company:</strong> {data.insurance_company}</p>
          <p><strong>Policy Number:</strong> {data.insurance_policy_number}</p>
          <p><strong>Insurance Upto:</strong> {data.insurance_upto}</p>
        </div>
      );
    } else if (response) {
      return (
        <div className="bg-red-500 text-white p-3 rounded mt-4">
          {response.status_code === "102" && "Invalid RC Number / RC Number in Multiple RTOs. Error Code - 102"}
          {response.status_code === "101" && "RC Number in Multiple RTOs. Error Code - 101"}
          {(response.status_code === "404" || response.status_code === "400" || response.status_code === "401") &&
            "Server Error, Please try later"}
          {response.status_code === "500" && "Internal Server Error. Please contact techsupport@docboyz.in for more details."}
        </div>
      );
    }
  };

  return (
    <div className={`flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 ${response && response.status_code === 200 ? 'mt-12': 'mt-4'}`}>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">RC Verification</h3>
          <Link to="/dashboard/kyc/rc_api" className="text-white underline hover:text-blue-100">
            RC APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300 flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"></path>
                </svg>
                Verifying RC details <span className="text-blue-300">please wait...</span>
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
              <label htmlFor="rc_number" className="block text-gray-700 text-sm font-bold mb-2">
                RC Number
              </label>
              <input
                type="text"
                id="rc_number"
                name="rc_number"
                value={rcNumber}
                onChange={(e) => setRcNumber(e.target.value)}
                placeholder="Ex: MH12PQ1234"
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
          {renderResponse()}
        </div>
      </div>
    </div>
  );
};

export default RCValidation;
