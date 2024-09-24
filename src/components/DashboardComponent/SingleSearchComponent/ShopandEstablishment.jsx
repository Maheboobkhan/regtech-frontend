import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ShopEstablishmentSearch = () => {
  const [idNumber, setIdNumber] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);

  // Fetch states data (assuming you have an API or a predefined list)
  // Uncomment and replace with your data fetching logic
  // useEffect(() => {
  //   axios.get('YOUR_API_FOR_STATES')
  //     .then(response => setStates(response.data))
  //     .catch(err => setError('Failed to load states'));
  // }, []);

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleStateCodeChange = (e) => {
    setStateCode(e.target.value);
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
          id_num: idNumber,
          operator_code: stateCode,
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
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4">
          <h3 className="text-xl font-semibold text-white">Shop Establishment</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying Shop Establishment <span className="text-blue-300">please wait...</span>
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
                Shop Establishment Number
              </label>
              <input
                type="text"
                id="id_number"
                name="id_number"
                value={idNumber}
                onChange={handleIdNumberChange}
                placeholder="Ex: ABCDE1234N"
                maxLength="10"
                minLength="10"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {states.length > 0 && (
              <div className="mb-4">
                <label
                  htmlFor="state_code"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  State
                </label>
                <select
                  id="state_code"
                  name="state_code"
                  value={stateCode}
                  onChange={handleStateCodeChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" disabled>Select State</option>
                  {states.map(state => (
                    <option key={state.state_code} value={state.state_code}>
                      {state.state}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>
          {response && response.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Shop Establishment Details</h3>
              <p><strong>Client Id:</strong> {response.data.client_id}</p>
              <p><strong>SE Number:</strong> {response.data.se_number}</p>
              <p><strong>State Code:</strong> {response.data.state_code}</p>
              <p><strong>State Name:</strong> {response.data.state_name}</p>
              <p><strong>Business Name:</strong> {response.data.business_name}</p>
              <p><strong>Address:</strong> {response.data.address}</p>
              <p><strong>User Mobile Number:</strong> {response.data.user_mobile_number}</p>
              <p><strong>Registration Number:</strong> {response.data.registration_number}</p>
              <p><strong>Registration Date:</strong> {response.data.registration_date}</p>
              <p><strong>Category:</strong> {response.data.category}</p>
              <p><strong>Certificate Number:</strong> {response.data.certificate_number}</p>
              <p><strong>Document Link:</strong> {response.data.document_link}</p>
            </div>
          )}

          {response && response.statusCode === 500 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">{response.message}</div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default ShopEstablishmentSearch;
