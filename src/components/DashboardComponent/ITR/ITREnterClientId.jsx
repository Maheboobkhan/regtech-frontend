import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ITREnterClientId = () => {
  const [clientId, setClientId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setClientId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = Cookies.get('authToken');

    try {
      const res = await axios.post(
        'http://localhost:8000/api/itr_enter_clientid',
        { client_id: clientId },
        { headers: { AccessToken: token } }
      );
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
    <div className="mt-0 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4">
          <h3 className="text-xl font-semibold text-white">ITR Client ID Verify</h3>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group mb-4">
              <label htmlFor="client_id" className="block text-gray-700 text-sm font-bold mb-2">Client ID</label>
              <input
                type="text"
                id="client_id"
                name="client_id"
                value={clientId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ex: ABCDE1234N"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </form>

          {loading && <div className="text-blue-500 mt-4">Sending request...</div>}

          {response && (
            <div className={`mt-6 p-4 rounded ${response.status_code === 200 ? 'bg-green-400' : 'bg-red-500'} text-white`}>
              <h3 className="text-lg font-semibold">ITR Client ID</h3>
              <div className="mt-2">
                {response.status_code === 200 ? (
                  <p>Verification: Success</p>
                ) : (
                  <p>Verification: Failed (Incorrect Client ID / Expired)</p>
                )}
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ITREnterClientId;
