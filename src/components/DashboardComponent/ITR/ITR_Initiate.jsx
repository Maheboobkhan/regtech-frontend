import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ITRInitiate = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = Cookies.get('authToken');
    const domain = localStorage.getItem('domain');

    try {
      const res = await axios.post(
        `${domain}/itrinitiate`,
        formData,
        { headers: { AccessToken: token } }
      );
      console.log(res)
      setResponse(res.data);
      setError('');
    } catch (err) {
      setError('Internal Server Error. Please try again.');
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4">
          <h3 className="text-xl font-semibold text-white">ITR Create Client</h3>
        </div>
        <div className="p-4">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: ABCDE1234N"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: ABCDE1234N"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              Create
            </button>
          </form>

          {response && response.status_code === 200 && (
            <div className="mt-6">
              <div className="bg-green-400 text-white p-3 rounded">
                <h3 className="text-lg font-semibold">ITR Client Create Details</h3>
                <div className="mt-2">
                  <label htmlFor="client_id" className="block text-gray-700 text-sm font-bold mb-2">ITR Client ID</label>
                  <input
                    type="text"
                    id="client_id"
                    value={response.data.client_id}
                    readOnly
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  />
                  <p className="mt-2"><strong>Message: </strong>{response.message}</p>
                  <p><strong>Status: </strong>{response.success}</p>
                </div>
              </div>
            </div>
          )}
          {response && response.status_code === 401 && (
            <div className='mt-2 text-white bg-red-500 p-2'>{response.message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ITRInitiate;
