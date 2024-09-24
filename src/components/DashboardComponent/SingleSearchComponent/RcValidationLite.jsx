import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const RcValidationLite = () => {
  const [rcNumber, setRcNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRcChange = (e) => {
    setRcNumber(e.target.value);
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
      const body = {
        Rc_Number: rcNumber,
      };

      const res = await axios.post('http://regtechapi.in/api/seachv4', body, { headers });
      console.log(res);
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying RC Number <span className="text-blue-300">please wait...</span>
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
                htmlFor="rc_number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                RC Number
              </label>
              <input
                type="text"
                id="rc_number"
                name="rc_number"
                value={rcNumber}
                onChange={handleRcChange}
                placeholder="Ex: MH12PQ1234"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              {response.statusCode === 200 && (
                <div className="bg-green-400 text-white p-3 rounded mt-4">
                  <h3 className="text-lg font-semibold">RC Details</h3>
                  <h4 className="text-md font-semibold">Owner Details</h4>
                  <hr />
                  <p><strong>Owner Name:</strong> {response.rc_validation.data.owner_name}</p>

                  <h4 className="text-md font-semibold mt-4">Vehicle Details</h4>
                  <hr />
                  <p><strong>RC Number:</strong> {response.rc_validation.data.rc_number}</p>
                  <p><strong>Registration Date:</strong> {response.rc_validation.data.registration_date}</p>
                  <p><strong>Manufacturing Date:</strong> {response.rc_validation.data.manufacturing_date}</p>
                  <p><strong>Registered At:</strong> {response.rc_validation.data.registered_at}</p>
                  <p><strong>Fuel Type:</strong> {response.rc_validation.data.fuel_type}</p>
                  <p><strong>Fit Upto:</strong> {response.rc_validation.data.fit_up_to}</p>
                  <p><strong>Tax Upto:</strong> {response.rc_validation.data.tax_upto}</p>

                  <h4 className="text-md font-semibold mt-4">Insurance</h4>
                  <hr />
                  <p><strong>Insurance Upto:</strong> {response.rc_validation.data.insurance_upto}</p>

                  <hr />
                  <p><strong>rc_number:</strong> {response.rc_validation.data.rc_number}</p>
                  <p><strong>registration_date:</strong> {response.rc_validation.data.registration_date}</p>
                  <p><strong>owner_name:</strong> {response.rc_validation.data.owner_name}</p>
                  <p><strong>vehicle_category:</strong> {response.rc_validation.data.vehicle_category}</p>
                  <p><strong>fuel_type:</strong> {response.rc_validation.data.fuel_type}</p>
                  <p><strong>fit_up_to:</strong> {response.rc_validation.data.fit_up_to}</p>
                  <p><strong>insurance_upto:</strong> {response.rc_validation.data.insurance_upto}</p>
                  <p><strong>manufacturing_date:</strong> {response.rc_validation.data.manufacturing_date}</p>
                  <p><strong>registered_at:</strong> {response.rc_validation.data.registered_at}</p>
                  <p><strong>tax_upto:</strong> {response.rc_validation.data.tax_upto}</p>
                  <p><strong>pucc_upto:</strong> {response.rc_validation.data.pucc_upto}</p>
                  <p><strong>rc_status:</strong> {response.rc_validation.data.rc_status}</p>
                </div>
              )}
              {response.statusCode === 102 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  RC Number is Invalid.
                </div>
              )}
              {(response.statusCode === 404 || response.statusCode === 400) && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Server Error, Please try later.
                </div>
              )}
              {response.statusCode === 500 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  Internal Server Error. Please contact techsupport@docboyz.in for more details.
                </div>
              )}
              {response.statusCode === 401 && (
                <div className="bg-red-500 text-white p-3 rounded mt-4">
                  {response.message}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    // {/* </div> */}
  );
};

export default RcValidationLite;
