import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PanToGST = () => {
    const [panCardNumber, setPanCardNumber] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setPanCardNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!panCardNumber) {
            setError('Please enter a PAN Number');
            return;
        }

        const token = Cookies.get('authToken');

        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const result = await axios.post('http://regtechapi.in/api/seachv4', 
                { pancard_number: panCardNumber }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'AccessToken': token // Replace 'token' with the actual token
                    }
                }
            );
            console.log(result)
            setResponse(result.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
            <div className="mx-auto w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#00acc1] p-4 flex justify-between">
                    <h3 className="text-xl font-semibold text-white">PAN TO GST</h3>
                    
                </div>
                <div className="p-4">
                    {loading && (
                        <div className="flex justify-center items-center mb-4">
                            <div className="text-xl text-blue-300">
                                Processing... <span className="text-blue-300">please wait...</span>
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
                            <label htmlFor="pancardNumber" className="block text-gray-700 text-sm font-bold mb-2">
                                PAN Number
                            </label>
                            <input
                                type="text"
                                id="pancardNumber"
                                name="pancardNumber"
                                value={panCardNumber}
                                onChange={handleChange}
                                placeholder="Ex: ABCDE1234N"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                maxLength="10"
                                minLength="10"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </form>
                    {response && response.status_code === 200 && (
                        <div className="bg-green-400 text-white p-3 rounded mt-4 overflow-x-auto">
                            <h3 className="text-lg font-semibold">PAN TO GST Details</h3>
                            <table className="table-auto w-full text-center border border-gray-200 mt-4">
                                <thead>
                                    <tr className="bg-[#00acc1] text-white">
                                        <th className="border px-4 py-2">stjCd</th>
                                        <th className="border px-4 py-2">LegalName</th>
                                        <th className="border px-4 py-2">Stj</th>
                                        <th className="border px-4 py-2">Dty</th>
                                        <th className="border px-4 py-2">Adadr</th>
                                        <th className="border px-4 py-2">Cxdt</th>
                                        <th className="border px-4 py-2">GSTIN</th>
                                        <th className="border px-4 py-2">Nba</th>
                                        <th className="border px-4 py-2">LastUpdate</th>
                                        <th className="border px-4 py-2">RegisterDate</th>
                                        <th className="border px-4 py-2">Ctb</th>
                                        <th className="border px-4 py-2">STS</th>
                                        <th className="border px-4 py-2">TradeName</th>
                                        <th className="border px-4 py-2">CtjCd</th>
                                        <th className="border px-4 py-2">Ctj</th>
                                        <th className="border px-4 py-2">EinvoiceStatus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {response.response && response.response.map((data, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{data.stjCd || 'null'}</td>
                                            <td className="border px-4 py-2">{data.lgnm || 'null'}</td>
                                            <td className="border px-4 py-2">{data.stj || 'null'}</td>
                                            <td className="border px-4 py-2">{data.dty || 'null'}</td>
                                            <td className="border px-4 py-2">{data.adadr ? data.adadr[0] : 'null'}</td>
                                            <td className="border px-4 py-2">{data.cxdt || 'null'}</td>
                                            <td className="border px-4 py-2">{data.gstin || 'null'}</td>
                                            <td className="border px-4 py-2">{data.nba ? data.nba[0] : 'null'}</td>
                                            <td className="border px-4 py-2">{data.lstupdt || 'null'}</td>
                                            <td className="border px-4 py-2">{data.rgdt || 'null'}</td>
                                            <td className="border px-4 py-2">{data.ctb || 'null'}</td>
                                            <td className="border px-4 py-2">{data.sts || 'null'}</td>
                                            <td className="border px-4 py-2">{data.tradeNam || 'null'}</td>
                                            <td className="border px-4 py-2">{data.ctjCd || 'null'}</td>
                                            <td className="border px-4 py-2">{data.ctj || 'null'}</td>
                                            <td className="border px-4 py-2">{data.einvoiceStatus || 'null'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h4 className="text-center text-muted mt-6"><strong>Address</strong></h4>
                            <hr />
                            <table className="table-auto w-full text-center border border-gray-200 mt-4">
                                <thead>
                                    <tr className="bg-[#00acc1] text-white">
                                        <th className="border px-4 py-2">BNM</th>
                                        <th className="border px-4 py-2">Location</th>
                                        <th className="border px-4 py-2">ST</th>
                                        <th className="border px-4 py-2">BNO</th>
                                        <th className="border px-4 py-2">District</th>
                                        <th className="border px-4 py-2">Latitude</th>
                                        <th className="border px-4 py-2">Locality</th>
                                        <th className="border px-4 py-2">Pincode</th>
                                        <th className="border px-4 py-2">LandMark</th>
                                        <th className="border px-4 py-2">Stcd</th>
                                        <th className="border px-4 py-2">Geocodelvl</th>
                                        <th className="border px-4 py-2">FlateNo</th>
                                        <th className="border px-4 py-2">Longitude</th>
                                        <th className="border px-4 py-2">NTR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {response.response && response.response.map((data, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.bnm || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.loc || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.st || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.bno || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.dst || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.lt || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.locality || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.pncd || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.landMark || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.stcd || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.geocodelvl || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.flno || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.addr?.lg || 'null'}</td>
                                            <td className="border px-4 py-2">{data.pradr?.ntr || 'null'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {response && response.statusCode === 102 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            {response.error_message || 'Invalid PAN Number'}
                        </div>
                    )}
                    {response && response.statusCode === 103 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            {response.error_message || 'PAN Number format is incorrect'}
                        </div>
                    )}
                    {response && response.statusCode === 403 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            {response.error_message || 'Access denied'}
                        </div>
                    )}
                    {response && response.statusCode === 404 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            {response.error_message || 'Data not found'}
                        </div>
                    )}
                    {response && response.statusCode === 500 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            Internal Server Error.
                        </div>
                    )}
                </div>
            </div>
        // </div>
    );
};

export default PanToGST;
