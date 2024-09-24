import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Electricity = () => {
  const [idNumber, setIdNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = Cookies.get('authToken');

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/seachv4',
        {
          IDNUMBER: idNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(res)

      setResponse(res.data[0]);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4">
          <h3 className="text-xl font-semibold text-white">Electricity</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Consumer Number <span className="text-blue-300">please wait...</span>
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
                htmlFor="id_number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Consumer Number with Billing Unit
              </label>
              <input
                type="text"
                id="id_number"
                name="id_number"
                value={idNumber}
                onChange={handleIdNumberChange}
                placeholder="Billing unit/Consumer Number"
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
          {response && response.statusCode === '200' && response.electricity.response.isValid === 'No' && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {response.message}
            </div>
          )}
          {response && response.statusCode === '404' && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {response.message}
            </div>
          )}
          {response && response.statusCode === '500' && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              Internal Server Error. Please contact techsupport@docboyz.in for more details.
            </div>
          )}
          {response && response.statusCode === '200' && response.electricity.response.isValid === 'Yes' && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Electricity Bill Details</h3>
              <p><strong>Customer ID:</strong> {response.customer_id}</p>
              <p><strong>Customer Name:</strong> {response.customer_name}</p>
              <p><strong>Operator:</strong> {response.operator_name} - {response.electricity.response.operator_code}</p>
              <p><strong>Due Amount:</strong> {response.due_amount}</p>
              <p><strong>Due Date:</strong> {response.due_date}</p>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default Electricity;
