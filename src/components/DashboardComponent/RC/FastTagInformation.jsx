import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FastTagInformation = () => {
  const [rcNumber, setRcNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the new route with the rc_number parameter
    navigate(`/dashboard/kyc/rc_validation?rc_number=${rcNumber}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Fast Tag Information</h3>
            <a
              href="/api/rc_validation"  // Replace with the correct API route if needed
              className="btn btn-light bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
            >
              Fast Tag APIs
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="rc_number" className="block text-sm font-medium text-gray-700">
                Vehicle Number
              </label>
              <input
                type="text"
                id="rc_number"
                name="rc_number"
                value={rcNumber}
                onChange={(e) => setRcNumber(e.target.value)}
                placeholder="Ex: MH12PQ1234"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FastTagInformation;
