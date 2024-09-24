import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Upivalidation = () => {
  const [name, setName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [orderId, setOrderId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = Cookies.get('authToken');

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/upi_validation',
        {
          name,
          upi_id: upiId,
          order_id: orderId,
        },
        {
          headers: {
            AccessToken: token,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(res)

      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">UPI Validation</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-center text-blue-500 mb-4">
              Verifying details, please wait...
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          {response && response.statusCode && response.statusCode !== 200 && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {response.statusCode === '102' && 'Please enter valid details.'}
              {response.statusCode === '404' && 'Server Error, Please try later.'}
              {response.statusCode === '400' && 'Server Error, Please try later.'}
              {response.statusCode === '500' && 'Internal Server Error. Please contact techsupport@docboyz.in for more details.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="upi_id" className="block text-gray-700 text-sm font-bold mb-2">
                UPI ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="upi_id"
                name="upi_id"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter UPI ID"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="order_id" className="block text-gray-700 text-sm font-bold mb-2">
                Order ID
              </label>
              <input
                type="text"
                id="order_id"
                name="order_id"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">UPI Details</h3>
              <p><strong>Order ID:</strong> {response['upidetails']['response']['orderId']}</p>
              <p><strong>Name:</strong> {response['upidetails']['response']['account_details']['beneficiary_name']}</p>
              <p><strong>UPI ID:</strong> {response['upidetails']['response']['account_details']['beneficiary_vpa']}</p>
              <p><strong>Account Status:</strong> {response['upidetails']['response']['account_details']['account_status']}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upivalidation;
