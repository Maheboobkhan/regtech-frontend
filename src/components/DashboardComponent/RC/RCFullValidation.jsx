import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const RCFullValidation = () => {
  const [rcNumber, setRcNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(['authToken']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const token = cookies.authToken;

    try {
      const res = await axios.post(
        'http://regtechapi.in/api/rc_validation',
        { rc_number: rcNumber },
        { headers: { 'AccessToken': token } }
      );

      console.log(res);
      setResponse(res.data.rc_validation); // Set the RC validation data to state
    } catch (err) {
      setError(err.response ? err.response.data : 'An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">RC Full Verification</h3>
          <Link 
            to="/dashboard/kyc/rc_api"
            className="btn btn-light float-right bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            RC APIs
          </Link>
        </div>
        
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}
        
        {loading && (
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="rc_number" className="block text-sm font-medium text-gray-700">RC Number</label>
            <input
              type="text"
              id="rc_number"
              name="rc_number"
              value={rcNumber}
              onChange={(e) => setRcNumber(e.target.value)}
              placeholder="Ex: DL9CAN6288"
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

        {response && (
          <>
            <div className="mb-6 p-4 bg-green-100 text-green-800 border border-green-300 rounded-md">
              <h3 className="text-lg font-semibold mb-2">RC Details</h3>
              <p><strong>Owner Name: </strong>{response.data.owner_name}</p>
              <p><strong>Permanent Address: </strong>{response.data.permanent_address}</p>
              <p><strong>Mobile No: </strong>{response.data.mobile_number || 'N/A'}</p>
              <p><strong>Financer: </strong>{response.data.financer}</p>
              <p><strong>Vehicle Number: </strong>{response.data.number}</p>
              <p><strong>RC Number: </strong>{response.data.rc_number}</p>
              <p><strong>Engine Number: </strong>{response.data.vehicle_engine_number}</p>
              <p><strong>Chassis Number: </strong>{response.data.vehicle_chasi_number}</p>
              <p><strong>Registration Date: </strong>{response.data.registration_date}</p>
              <p><strong>Manufacturing Date: </strong>{response.data.manufacturing_date}</p>
              <p><strong>Registered At: </strong>{response.data.registered_at || 'N/A'}</p>
              <p><strong>Maker Model: </strong>{response.data.maker_model}</p>
              <p><strong>Fuel Type: </strong>{response.data.fuel_type}</p>
              <p><strong>Color: </strong>{response.data.color}</p>
              <p><strong>Norms Type: </strong>{response.data.norms_type || 'N/A'}</p>
              <p><strong>Fit Upto: </strong>{response.data.fit_up_to || 'N/A'}</p>
              <p><strong>Tax Upto: </strong>{response.data.tax_upto || 'N/A'}</p>

              <h3 className="mt-4 text-lg font-semibold">Insurance</h3>
              <p><strong>Insurance Company: </strong>{response.data.insurance_company}</p>
              <p><strong>Policy Number: </strong>{response.data.insurance_policy_number}</p>
              <p><strong>Insurance Upto: </strong>{response.data.insurance_upto || 'N/A'}</p>
              <p><strong>PUCC Number: </strong>{response.data.pucc_number || 'N/A'}</p>
              <p><strong>PUCC Upto: </strong>{response.data.pucc_upto || 'N/A'}</p>

              <h3 className="mt-4 text-lg font-semibold">Additional Details</h3>
              <p><strong>Authority: </strong>{response.data.authority}</p>
              <p><strong>Body Type: </strong>{response.data.body_type}</p>
              <p><strong>Cubic Capacity: </strong>{response.data.cubic_capacity}</p>
              <p><strong>Father's Name: </strong>{response.data.father_name}</p>
              <p><strong>No. of Cylinders: </strong>{response.data.no_cylinders}</p>
              <p><strong>NOC Details: </strong>{response.data.noc_details}</p>
              <p><strong>Vehicle Category: </strong>{response.data.vehicle_category}</p>
              <p><strong>Vehicle Gross Weight: </strong>{response.data.vehicle_gross_weight}</p>
              <p><strong>Wheelbase: </strong>{response.data.wheelbase}</p>
              <p><strong>Unladen Weight: </strong>{response.data.unladen_weight}</p>
              <p><strong>Seat Capacity: </strong>{response.data.seat_capacity}</p>
              <p><strong>Sleeper Capacity: </strong>{response.data.sleeper_capacity}</p>
              <p><strong>Standing Capacity: </strong>{response.data.standing_capacity}</p>
              <p><strong>Blacklist Status: </strong>{response.data.blacklist_status || 'N/A'}</p>
              <p><strong>Latest By: </strong>{response.data.latest_by}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RCFullValidation;