import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const VoterValidation = () => {
  const [voterNumber, setVoterNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVoterNumberChange = (e) => {
    setVoterNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      setError("Auth token is missing");
      return;
    }

    if (!voterNumber) {
      setError("Please provide a voter ID number");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/voter_validation",
        { voter_number: voterNumber },
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data[0])
      setResponse(response.data[0]);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Error submitting form"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Voter ID Verification</h3>
          <Link
            to="/dashboard/kyc/voter_api"
            className="bg-light text-white px-3 py-1 rounded underline"
            role="button"
          >
            Voter ID APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-center mb-4">
              <div className="text-xl text-blue-600">Validating Voter ID, please wait...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="voter_number" className="block text-gray-700 text-sm font-bold mb-2">
                Voter ID Number
              </label>
              <input
                type="text"
                id="voter_number"
                name="voter_number"
                value={voterNumber}
                onChange={handleVoterNumberChange}
                placeholder="Ex: NLN1234567"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>
          {response && response.statusCode && (
            <>
              {response.statusCode === '10' && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Voter ID is Invalid
                </div>
              )}
              {response.statusCode === '404' || response.statusCode === '400' ? (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error, Please try later
                </div>
              ) : response.statusCode === '500' ? (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              ) : response.statusCode === '200' && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h1 className="text-xl font-semibold text-center">Voter Details</h1>
                  <div className="mt-4">
                    <p><strong>Voter ID / Epic Number:</strong> {response.voter_validation.response.epic_no}</p>
                    <p><strong>Name:</strong> {response.voter_validation.response.holder_name}</p>
                    <p><strong>Age:</strong> {response.voter_validation.response.age}</p>
                    <p><strong>Gender:</strong> {response.voter_validation.response.gender === 'M' ? 'Male' : response.voter_validation.response.gender === 'F' ? 'Female' : response.voter_validation.response.gender}</p>
                    <p><strong>DOB:</strong> {response.voter_validation.response.dob}</p>
                    <p><strong>District:</strong> {response.voter_validation.response.district}</p>
                    <p><strong>Area:</strong> {response.voter_validation.response.area}</p>
                    <p><strong>Relation Type:</strong> {response.voter_validation.response.relation_type}</p>
                    <p><strong>Relation Name:</strong> {response.voter_validation.response.relation}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoterValidation;
