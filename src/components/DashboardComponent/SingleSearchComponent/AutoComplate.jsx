import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AutoCompleteAPI = () => {
  const [text, setText] = useState('');
  const [maxResult, setMaxResult] = useState('');
  const [addressShow, setAddressShow] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({}); // To store validation errors
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e) => setText(e.target.value);
  const handleMaxResultChange = (e) => setMaxResult(e.target.value);

  // Validate input values before making the API request
  const validateForm = () => {
    const newErrors = {};
    if (!text.trim()) newErrors.text = 'Text is required.';
    if (!maxResult || maxResult <= 0) newErrors.maxResult = 'Max result must be a positive number.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop form submission if validation fails

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const token = Cookies.get('authToken');
      const headers = { 'AccessToken': token };
      const response = await axios.post(
        'http://regtechapi.in/api/seachv4',
        { text:text, maxResult: parseInt(maxResult, 10), address_type:'auto_complate' },
        { headers }
      );
      console.log(response)
      setResults(response.data || []);
    } catch (err) {
      if (err.response) {
        if (err.response.data.errors) {
          // If there are validation errors, show them
          setErrors(err.response.data.errors);
        } else {
          // For other errors
          switch (err.response.status) {
            case 102:
            case 103:
            case 403:
            case 404:
              setError(err.response.data.error_message || 'An error occurred.');
              break;
            default:
              setError('Internal server error. Please contact techsupport@docboyz.in for more details.');
          }
        }
      } else {
        setError('Internal server error. Please contact techsupport@docboyz.in for more details.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h3 className="text-xl font-semibold text-white">Auto Complete API</h3>
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
              <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">
                Text
              </label>
              <input
                type="text"
                id="text"
                name="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter a text"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.text ? 'border-red-500' : ''}`}
                required
              />
              {errors.text && (
                <p className="text-red-500 text-xs italic mt-2">{errors.text}</p>
              )}
              <label htmlFor="max_result" className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                Max Result
              </label>
              <input
                type="number"
                id="max_result"
                name="max_result"
                value={maxResult}
                onChange={handleMaxResultChange}
                placeholder="Enter a max result"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.maxResult ? 'border-red-500' : ''}`}
                min="1"
                required
              />
              {errors.maxResult && (
                <p className="text-red-500 text-xs italic mt-2">{errors.maxResult}</p>
              )}
              {/* <select
                name="address_show"
                id="address_show"
                className="form-control selectpicker multiselect mt-4"
                multiple
                value={addressShow}
                onChange={(e) => setAddressShow(Array.from(e.target.selectedOptions, option => option.value))}
              >
                <option>Nothing Selected</option>
                
              </select> */}
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          {results.status_code === 202 && <div className='text-red-500 text-base'>{results.message}</div>}
          {results.length > 0 && (
            <div className="card card-success mt-4">
              <div className="card-header">
                <h3 className="card-title">Auto Complete Details</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">Sr No</th>
                      <th scope="col" className="text-center">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item, index) => (
                      <tr key={index}>
                        <td>{item.sn}</td>
                        <td>{item.address}</td>
                      </tr>
                    ))}

                    {results && results[0].statusCode === '404' && <div>{results.message}</div>}

                    {results.length === 0 && (
                      <tr>
                        <td colSpan="2" className="text-center">No Address</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default AutoCompleteAPI;
