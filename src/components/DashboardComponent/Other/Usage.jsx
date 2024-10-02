import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Usage = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState('pan');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(['authToken']);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'recipient_email':
        setRecipientEmail(value);
        break;
      case 'start_date':
        setStartDate(value);
        break;
      case 'end_date':
        setEndDate(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = cookies.authToken;

    try {
      const res = await axios.post(
        'https://kyc-api.flowboard.in/api/v1/utils/usage/usage-report',
        { start_date: startDate, end_date: endDate, type, recipient_email: recipientEmail },
        {
          headers: {
            AccessToken: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Usage</h3>
          
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">Processing request, please wait...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>
          )}
          {response && response.status_code && response.status_code !== 200 && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {response.status_code === 422 && 'PAN or DOB is Invalid.'}
              {response.status_code === 401 && 'Server Error, Please try later.'}
              {response.status_code === 404 && 'Server Error, Please try later.'}
              {response.status_code === null && 'Server Error, Please try later.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="recipient_email" className="block text-gray-700 text-sm font-bold mb-2">Email Number</label>
              <input
                type="text"
                id="recipient_email"
                name="recipient_email"
                value={recipientEmail}
                onChange={handleInputChange}
                placeholder="Ex: ABCDE1234N"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="start_date" className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
              <input
                type="text"
                id="start_date"
                name="start_date"
                value={startDate}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="end_date" className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
              <input
                type="text"
                id="end_date"
                name="end_date"
                value={endDate}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Type</label>
              <select
                className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="type"
                name="type"
                value={type}
                onChange={handleInputChange}
                required
              >
                <option value="pan">PAN</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>
          {response && response.status_code === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Usage Details</h3>
              <p><strong>Pan No:</strong> {response.data.pan_number}</p>
              <p><strong>KRA Authority:</strong> {response.data.kra_authority}</p>
              <p><strong>KRA Status:</strong> <a href={response.data.document_link} className="text-blue-200 underline">View Document</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usage;
