
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const RCValidationMP = () => {
    const [rcNumber, setRcNumber] = useState('');
    const [rcValidation, setRcValidation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setRcValidation(null);

        const token = Cookies.get('authToken');

        try {
            const response = await axios.post(
                'http://regtechapi.in/api/rc_validationmp',
                { rc_number: rcNumber },
                {
                    headers: {
                        'AccessToken': token,
                        'Content-Type': 'application/json'
                    }
                }
            );
            setRcValidation(response.data);
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#00acc1] p-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">RC Verification</h3>
                    <Link
                        to="/dashboard/kyc/rc_api"
                        className="text-white underline hover:text-blue-100"
                    >
                        RC APIs
                    </Link>
                </div>
                <div className="p-4">
                    {loading && (
                        <div className="flex justify-center items-center mb-4">
                            <div className="text-xl text-blue-300 flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"></path>
                                </svg>
                                Verifying RC details <span className="text-blue-300">please wait...</span>
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
                            <label htmlFor="rc_number" className="block text-gray-700 text-sm font-bold mb-2">
                                RC Number
                            </label>
                            <input
                                type="text"
                                id="rc_number"
                                name="rc_number"
                                value={rcNumber}
                                onChange={(e) => setRcNumber(e.target.value)}
                                placeholder="Ex: MH12PQ1234"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                        >
                            {loading ? 'Verifying...' : 'Verify'}
                        </button>
                    </form>
                    {rcValidation && rcValidation.status_code === 200 && (
                        <div className="bg-green-400 text-white p-3 rounded mt-4">
                            <h3 className="text-lg font-semibold">RC Details</h3>
                            <div className="mt-4">
                                <h4 className="text-md font-semibold">Owner Details</h4>
                                <hr className="my-2" />
                                <p><strong>Owner Name:</strong> {rcValidation.rc_validation.data.owner_name}</p>
                                <p><strong>Permanent Address:</strong> {rcValidation.rc_validation.data.permanent_address}</p>
                                <p><strong>Mobile No:</strong> {rcValidation.rc_validation.data.mobile_number}</p>
                                <p><strong>Financer:</strong> {rcValidation.rc_validation.data.financer}</p>

                                <h4 className="text-md font-semibold mt-4">Vehicle Details</h4>
                                <hr className="my-2" />
                                <p><strong>RC Number:</strong> {rcValidation.rc_validation.data.rc_number}</p>
                                <p><strong>Engine Number:</strong> {rcValidation.rc_validation.data.vehicle_engine_number}</p>
                                <p><strong>Chassis Number:</strong> {rcValidation.rc_validation.data.vehicle_chasi_number}</p>
                                <p><strong>Registration Date:</strong> {rcValidation.rc_validation.data.registration_date}</p>
                                <p><strong>Manufacturing Date:</strong> {rcValidation.rc_validation.data.manufacturing_date}</p>
                                <p><strong>Registered At:</strong> {rcValidation.rc_validation.data.registered_at}</p>
                                <p><strong>Maker Model:</strong> {rcValidation.rc_validation.data.maker_model}</p>
                                <p><strong>Fuel Type:</strong> {rcValidation.rc_validation.data.fuel_type}</p>
                                <p><strong>Color:</strong> {rcValidation.rc_validation.data.color}</p>
                                <p><strong>Norms Type:</strong> {rcValidation.rc_validation.data.norms_type}</p>
                                <p><strong>Fit Upto:</strong> {rcValidation.rc_validation.data.fit_up_to}</p>
                                <p><strong>Tax Upto:</strong> {rcValidation.rc_validation.data.tax_upto}</p>

                                <h4 className="text-md font-semibold mt-4">Insurance</h4>
                                <hr className="my-2" />
                                <p><strong>Insurance Company:</strong> {rcValidation.rc_validation.data.insurance_company}</p>
                                <p><strong>Policy Number:</strong> {rcValidation.rc_validation.data.insurance_policy_number}</p>
                                <p><strong>Insurance Upto:</strong> {rcValidation.rc_validation.data.insurance_upto}</p>
                                <p><strong>License Verification:</strong> {rcValidation.rc_validation.data.message_code}</p>
                            </div>
                        </div>
                    )}
                    {rcValidation && rcValidation.status_code !== 200 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            {rcValidation.status_code === "102" && "Invalid RC Number / RC Number in Multiple RTOs. Error Code - 102"}
                            {rcValidation.status_code === "101" && "RC Number in Multiple RTOs. Error Code - 101"}
                            {(rcValidation.status_code === "404" || rcValidation.status_code === "400" || rcValidation.status_code === "401") &&
                                "Server Error, Please try later"}
                            {rcValidation.status_code === "500" && "Internal Server Error. Please contact techsupport@docboyz.in for more details."}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RCValidationMP;
