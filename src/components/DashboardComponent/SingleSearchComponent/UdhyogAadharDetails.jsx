import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const UdhyogAadhaarSearch = () => {
  const [udyogAadhaarNumber, setUdyogAadhaarNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUdyogAadhaarNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');

    if (!token) {
      setError('Auth token is missing');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/seachv4',
        { uamnumber: udyogAadhaarNumber },
        {
          headers: {
            'AccessToken': token,
          },
        }
      );
      console.log(res)
      setResponse(res.data);
      setError(null);
    } catch (err) {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          setError('Server Error. Please try again later.');
        } else if (status === 500) {
          setError('Internal Server Error. Please contact techsupport@docboyz.in for more details.');
        } else {
          setError('Error verifying Udhyog Aadhaar number');
        }
      } else {
        setError('Error verifying Udhyog Aadhaar number');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <div className="bg-[#00acc1] p-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Udhyog Aadhaar Number Search</h3>
        <Link
          to="/dashboard/kyc/udyamadhar_api"
          className="text-white underline hover:text-blue-100"
        >
          Udhyog Aadhaar APIs
        </Link>
      </div> */}
      <div className="p-4">
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="text-xl text-blue-300">
              Fetching Udhyog Aadhaar details <span className="text-blue-300">please wait...</span>
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
              htmlFor="udyogadhar_number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              UAN Number
            </label>
            <input
              type="text"
              id="udyogadhar_number"
              name="udyogadhar_number"
              value={udyogAadhaarNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: ABCDE1234N"
              required
              maxLength="20"
              minLength="10"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
          >
            Verify
          </button>
        </form>
        {response && response.statusCode === 200 && (
          <div className="bg-blue-400 text-white p-3 rounded mt-4">
            <h3 className="text-lg font-semibold">Udhyog Aadhaar Details</h3>
            <p><strong>Full Name: </strong>{response.response.result.uamNumber}</p>
            <p><strong>Name of Enterprise: </strong>{response.response.result.nameofEnterprise}</p>
            <p><strong>Major Activity: </strong>{response.response.result.majorActivity}</p>
            <p><strong>Social Category: </strong>{response.response.result.socialCategory}</p>
            <p><strong>Enterprise Type: </strong>{response.response.result.enterpriseType}</p>
            <p><strong>Date of Commencement: </strong>{response.response.result.dateofCommencement}</p>
            <p><strong>DIC Name: </strong>{response.response.result.dicName}</p>
            <p><strong>State: </strong>{response.response.result.state}</p>
            <p><strong>Applied Date: </strong>{response.response.result.appliedDate}</p>
            <p><strong>Modified Date: </strong>{response.response.result.modifiedDate}</p>
            <p><strong>Valid Till Date: </strong>{response.response.result.validTillDate}</p>
            <p><strong>NIC 2 Digit: </strong>{response.response.result.nic2Digit}</p>
            <p><strong>NIC 4 Digit: </strong>{response.response.result.nic4Digit}</p>
            <p><strong>NIC 5 Digit Code: </strong>{response.response.result.nic5DigitCode}</p>
            <p><strong>Status: </strong>{response.response.result.status}</p>
          </div>
        )}
        {response && response.statusCode === 404 && (
          <div className="mt-2 bg-red-500 text-white p-3 rounded mb-4">
            Server Error. Please try again later.
          </div>
        )}
        {response && response.statusCode === 401 && (
          <div className="mt-2 bg-red-500 text-white p-3 rounded mb-4">
            {response && response.message || 'Server Error. Please try again later.'}
          </div>
        )}
        {response && response.statusCode === 500 && (
          <div className="mt-2 bg-red-500 text-white p-3 rounded mb-4">
            Internal Server Error. Please contact techsupport@docboyz.in for more details.
          </div>
        )}
      </div>
    </div>
  );
};

export default UdhyogAadhaarSearch;
