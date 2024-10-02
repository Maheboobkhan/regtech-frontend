import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const EquifaxScore = () => {
  const [formData, setFormData] = useState({
    api_type: 'Ecredit',
    first_name: '',
    last_name: '',
    phone_number: '',
    dob: '',
    pano: '',
    id_type: [],
    IdValue: '',
  });

  const [idTypes, setIdTypes] = useState([]);
  const [panVisible, setPanVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const domain = localStorage.getItem('domain');
    axios.get(`${domain}/equifax_score_idtypes`)
      .then(response => {
        setIdTypes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching ID types!", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'id_type') {
      setPanVisible(value.includes('T'));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = Cookies.get('authToken');
    const domain = localStorage.getItem('domain');

    try {
      const response = await axios.post(
        `${domain}/seachv4`,
        formData,
        { headers: { AccessToken: token } }
      );
      console.log(JSON.parse(response.data[1]));

      setResponseMessage(JSON.parse(response.data[1]));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred');
      setResponseMessage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="mt-12 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Score API</h3>
          {/* <Link to="/dashboard/kyc/credit_report_api" className="text-white underline hover:text-blue-100">
            Credit Report APIs
          </Link> */}
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Processing... Please wait...
              </div>
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            {['FirstName', 'LastName', 'MobileNumber', 'DOB', 'IdValue'].map((field) => (
              <div className="mb-4" key={field}>
                <label htmlFor={field} className="block text-gray-700 text-sm font-bold mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`Ex: ${field === 'DOB' ? 'YYYY-MM-DD' : 'Example'}`}
                  required={field !== 'IdValue' || panVisible}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Select ID Type</label>
              <select name="id_type" onChange={handleChange} multiple className="shadow border rounded w-full py-2 px-3 text-gray-700">
                {idTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.name}</option>
                ))}
              </select>
            </div>
            {panVisible && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">PAN Card Number</label>
                <input
                  type="text"
                  name="IdValue"
                  value={formData.IdValue}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter PAN card number"
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          {responseMessage && responseMessage.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Details</h3>
              <p><span>Full Name: </span>{responseMessage.full_name}</p>
              <p className='uppercase'><span>PAN No: </span>{responseMessage.pan_no}</p>
              <p><span>Score Value: </span>{responseMessage.score_value}</p>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default EquifaxScore;
