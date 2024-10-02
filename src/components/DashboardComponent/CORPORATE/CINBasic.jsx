
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CINBasic = () => {
    const [cinNumber, setCinNumber] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCinNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get('authToken');
        if (!token) {
            setError('Auth token is missing');
            return;
        }

        setLoading(true);

        try {
            const { data } = await axios.post(
                'http://regtechapi.in/api/corporate_cin_basicv2',
                { cin_number: cinNumber },
                {
                    headers: {
                        'AccessToken': token
                    }
                }
            );
            console.log(data);
            setResponse(data);
            setError(null);
        } catch (error) {
            setError('Error verifying CIN number');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#00acc1] p-4 flex justify-between">
                    <h3 className="text-xl font-semibold text-white">
                        Corporate CIN Validation
                    </h3>
                    <Link
                        to="/dashboard/kyc/corporate/basic/api"
                        className="text-white underline hover:text-blue-100"
                    >
                        CIN Basic APIs
                    </Link>
                </div>
                <div className="p-4">
                    {loading && (
                        <div className="flex justify-center items-center mb-4">
                            <div className="text-xl text-blue-300">
                                Fetching CIN details <span className="text-blue-300">please wait...</span>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-500 text-white p-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-4">
                            <label
                                htmlFor="cin_number"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Corporate CIN Number
                            </label>
                            <input
                                type="text"
                                id="cin_number"
                                name="cin_number"
                                value={cinNumber}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter CIN number"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                        >
                            Verify
                        </button>
                    </form>
                    {response && response.statusCode === 200 && (
                        <div className="bg-blue-400 text-white p-3 rounded mt-4">
                            <h1 className="text-2xl bg-blue-300 py-2 px-1 font-semibold mb-4">Corporate CIN Details</h1>
                            <p><strong>CIN Number:</strong> {response.corporate_cin.data.cin || 'null'}</p>
                            <p><strong>Number of Members:</strong> {response.corporate_cin.data.numberOfMembers || 'null'}</p>
                            <p><strong>Sub Category:</strong> {response.corporate_cin.data.subCategory || 'null'}</p>
                            <p><strong>Class Type:</strong> {response.corporate_cin.data.classType || 'null'}</p>
                            <p><strong>Company Type:</strong> {response.corporate_cin.data.companyType || 'null'}</p>
                            <p><strong>Company Name:</strong> {response.corporate_cin.data.companyName || 'null'}</p>
                            <p><strong>Paid Up Capital:</strong> {response.corporate_cin.data.paidUpCapital || 'null'}</p>
                            <p><strong>Authorised Capital:</strong> {response.corporate_cin.data.authorisedCapital || 'null'}</p>
                            <p><strong>Whether Listed:</strong> {response.corporate_cin.data.whetherListed || 'null'}</p>
                            <p><strong>Date of Incorporation:</strong> {response.corporate_cin.data.dateOfIncorporation || 'null'}</p>
                            <p><strong>Registration Number:</strong> {response.corporate_cin.data.registrationNumber || 'null'}</p>
                            <p><strong>Registered Address:</strong> {response.corporate_cin.data.registeredAddress || 'null'}</p>
                            <p><strong>Registered District:</strong> {response.corporate_cin.data.registeredDisctrict || 'null'}</p>
                            <p><strong>Registered State:</strong> {response.corporate_cin.data.registeredState.join(', ') || 'null'}</p>
                            <p><strong>Registered City:</strong> {response.corporate_cin.data.registeredCity || 'null'}</p>
                            <p><strong>Registered Pincode:</strong> {response.corporate_cin.data.registeredPincode || 'null'}</p>
                            <p><strong>Registered Country:</strong> {response.corporate_cin.data.registeredCountry || 'null'}</p>
                            <p><strong>Active Compliance:</strong> {response.corporate_cin.data.activeCompliance || 'null'}</p>
                            <p><strong>Category:</strong> {response.corporate_cin.data.category || 'null'}</p>
                            <p><strong>Status:</strong> {response.corporate_cin.data.status || 'null'}</p>
                            <p><strong>ROC Office:</strong> {response.corporate_cin.data.rocOffice || 'null'}</p>
                            <p><strong>Address Other Than Registered Office:</strong> {response.corporate_cin.data.addressOtherThanRegisteredOffice || 'null'}</p>
                            <p><strong>Email ID:</strong> {response.corporate_cin.data.emailId || 'null'}</p>
                            <p><strong>Nature of Business:</strong> {response.corporate_cin.data.natureOfBusiness || 'null'}</p>
                            <p><strong>Number of Directors:</strong> {response.corporate_cin.data.noOfDirectors || 'null'}</p>
                            <p><strong>Status for E-filing:</strong> {response.corporate_cin.data.statusForEfiling || 'null'}</p>
                        </div>
                    )}
                    {response && response.statusCode === 102 && <div className='bg-red-500 text-white p-4 mt-4 rounded'>{response.message}</div>}
                </div>
            </div>
        </div>
    );
};

export default CINBasic;
