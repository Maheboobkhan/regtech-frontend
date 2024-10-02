import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CreditScoreReport = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    pan: '',
    mno: '',
    dob: '',
    gender: '',
    zipcode: '',
    addrline1: '',
    addrline2: '',
    city: ''
  });

  const [otp, setOtp] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.mno) {
      alert('Please enter Phone Number');
      return;
    }

    setLoading(true);
    const token = Cookies.get('authToken');
    const domain = localStorage.getItem('domain');

    try {
      const response = await axios.post(
        `${domain}/criff`,
        formData,
        { headers: { AccessToken: token } }
      );
      console.log(response)

      if (response.data.statusCode === 200) {
        setModalVisible(true); // Show OTP modal
        await axios.post(
          `${domain}/sendotp`,
          { phone: formData.mno },
          { headers: { AccessToken: token } }
        );
      } else {
        alert(response.data.message || 'Failed to submit data. Please try later.');
      }
    } catch (err) {
      setError('Server Error, Please try later');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerify = async () => {
    const domain = localStorage.getItem('domain');
    try {
      const verifyResponse = await axios.post(`${domain}/verifyotp`, { otp_code: otp });
      if (verifyResponse.data.success) {
        const finalResponse = await axios.post(`${domain}/criff`, formData);
        setResponse(finalResponse.data);
        setModalVisible(false);
      } else {
        alert('OTP does not match');
      }
    } catch (err) {
      setError('Error verifying OTP');
    }
  };

  return (
    <div className="mt-24 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Credit Score Report</h3>
          <Link
            to="/dashboard/kyc/credit_report_api"
            className="text-white underline hover:text-blue-100"
          >
            Credit Report APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Processing... Please wait...
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            {['fullname', 'pan', 'mno', 'dob', 'zipcode', 'addrline1', 'addrline2', 'city'].map((field) => (
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
                  placeholder={`Ex: ${field === 'dob' ? 'YYYY-MM-DD' : 'Example'}`}
                  required
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="male" onChange={handleChange} className="mr-2" /> Male
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="female" onChange={handleChange} className="mr-2" /> Female
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>

          {modalVisible && (
            <div className="modal">
              <div className="modal-content p-4 bg-white rounded shadow-lg">
                <h5 className="text-lg font-bold">OTP has been Sent</h5>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border p-2 w-full mt-2"
                />
                <button onClick={handleOtpVerify} className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
                  Verify OTP
                </button>
                <button onClick={() => setModalVisible(false)} className="bg-gray-500 text-white py-2 px-4 rounded mt-2">
                  Close
                </button>
              </div>
            </div>
          )}

          {response && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Details</h3>
              <p>Unique ID: {response.unique_id}</p>
              <p>Full Name: {response.full_name}</p>
              <p>Gender: {response.gender}</p>
              <p>PAN Card: {response.pan_card}</p>
              <p>Mobile Number: {response.mobile_number}</p>
              {/* Add other fields as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditScoreReport;
