import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const VerifyAddress = () => {
  const [address, setAddress] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get('authToken');
      const headers = {
        'AccessToken': token,
      };
      const res = await axios.post('http://regtechapi.in/api/seachv4', 
        
        { address: address, address_type: 'verify_address' }, 
        { headers }
      );
      console.log(res)
      setResponse(res.data);
    } catch (err) {
      setError('Internal server error. Please contact techsupport@docboyz.in for more details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h3 className="text-xl font-semibold text-white">Verify Address</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">Processing...</div>
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
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Enter an address"
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
          {response && (
            <>
              {response.status_code === 200 && (
                <div className="card card-success mt-4">
                  <div className="card-header">
                    <h3 className="card-title">Verified Address Details</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div>
                          <p>
                            <strong>Input Address:&nbsp;&nbsp;</strong>
                            {response.data?.input_address || 'null'}
                          </p>
                          <p>
                            <strong>Match:&nbsp;&nbsp;</strong>
                            {response.data?.match || 'null'}
                          </p>
                          <p>
                            <strong>Verified Address:&nbsp;&nbsp;</strong>
                            {response.data?.verified_address || 'null'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(response.status_code === 102 || 
                response.status_code === 103 ||
                response.status_code === 403 ||
                response.status_code === 202) && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.error_message || 'An error occurred.'}
                </div>
              )}
              {(response.status_code === 500 && 
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.message || 'An error occurred.'}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    // </div>
  );
};

export default VerifyAddress;
