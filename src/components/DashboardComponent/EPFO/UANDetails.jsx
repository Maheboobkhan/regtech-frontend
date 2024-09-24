import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UanDetails = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
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
        'http://regtechapi.in/api/uan',
        { mobile_number: mobileNumber },
        {
          headers: {
            'AccessToken': token,
          },
        }
      );
      console.log(res)
      setResponse(res.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 404 || statusCode === 400) {
          setError('Server Error, Please try later');
        } else if (statusCode === 500) {
          setError('Internal Server Error. Please contact techsupport@docboyz.in for more details.');
        } else {
          setError('Error submitting details');
        }
      } else {
        setError('Network error, please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-32 mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#00acc1] p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">UAN Details</h3>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="mobile_number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="mobile_number"
              name="mobile_number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Mobile Number"
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
              Fetching UAN details <span className="text-blue-300">please wait...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mt-4">
            {error}
          </div>
        )}
        {response && response.statusCode === 200 && (
          <div className="bg-green-500 text-white p-3 rounded mt-4">
            <h3 className="text-lg font-semibold">UAN Details</h3>
            <table className="table-auto w-full mt-4 text-center">
              <tbody>
                <tr className="bg-green-200 text-gray-700">
                  <td><b>UAN:</b> {response['UAN Details']['data']['pf_uan']}</td>
                  <td><b>Client ID:</b> {response['UAN Details']['data']['client_id']}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {response && response.statusCode === 401 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
            {response.message || 'An error occurred. Please try again later.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default UanDetails;
