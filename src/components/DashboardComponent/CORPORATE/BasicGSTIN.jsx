import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const BasicGSTIN = () => {
    const [gstinNumber, setGstinNumber] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = Cookies.get('authToken');
        try {
            const result = await axios.post('http://regtechapi.in/api/gstverification', 
                { gstin_number: gstinNumber }, 
                { headers: { 
                    'AccessToken': token,
                    'Content-Type': 'application/json'
                }}
            );
            console.log(result)
            setResponse(result.data);
            setError(null);
        } catch (err) {
            setError(err.response ? err.response.data : err.message);
            setResponse(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-[#00acc1] p-4 flex justify-between">
          <h2 className="text-xl font-semibold text-white">BASIC GSTIN</h2>
          <Link
            to="/dashboard/kyc/basic/gstin_api"
            className="text-white underline hover:text-blue-100"
          >
            GSTIN BASIC APIs
          </Link>
        </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="gstinNumber" className="mt-2 block text-gray-700 font-semibold mb-2">GSTIN Number</label>
                        <input 
                            type="text" 
                            id="gstinNumber" 
                            value={gstinNumber}
                            onChange={(e) => setGstinNumber(e.target.value)}
                            placeholder="Ex: 09AABCM1857H2ZTF" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                        Submit
                    </button>
                </form>
                {error && (
                    <div className="mt-4 bg-red-100 text-red-700 p-3 rounded-md">
                        {typeof error === 'string' ? error : 'An error occurred'}
                    </div>
                )}
                {response && response.status_code === 200 && (
                    <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-md overflow-x-auto">
                        <h3 className="text-lg font-semibold mb-2">BASIC GSTIN Details</h3>
                        <p><strong>StjCd:</strong> {response.response.stjCd || 'null'}</p>
                        <p><strong>LegalName:</strong> {response.response.lgnm || 'null'}</p>
                        <p><strong>Stj:</strong> {response.response.stj || 'null'}</p>
                        <p><strong>Dty:</strong> {response.response.dty || 'null'}</p>
                        <p><strong>Cxdt:</strong> {response.response.cxdt || 'null'}</p>
                        <p><strong>Gstin:</strong> {response.response.gstin || 'null'}</p>
                        <p><strong>NBA:</strong> {response.response.nba ? response.response.nba[0] : 'null'}</p>
                        <p><strong>LastUpdate:</strong> {response.response.lstupdt || 'null'}</p>
                        <p><strong>Registration Date:</strong> {response.response.rgdt || 'null'}</p>
                        <p><strong>CTB:</strong> {response.response.ctb || 'null'}</p>
                        <p><strong>TradeName:</strong> {response.response.tradeNam || 'null'}</p>
                        <p><strong>CtjCd:</strong> {response.response.ctjCd || 'null'}</p>
                        <p><strong>STS:</strong> {response.response.sts || 'null'}</p>
                        <p><strong>CTJ:</strong> {response.response.ctj || 'null'}</p>
                        <p><strong>EinvoiceStatus:</strong> {response.response.einvoiceStatus || 'null'}</p>

                        {response.response.pradr && response.response.pradr.addr && (
                            <>
                                <hr className="my-4" />
                                <h4 className="text-lg font-semibold text-center">Permanent Address</h4>
                                <p><strong>BNM:</strong> {response.response.pradr.addr.bnm || 'null'}</p>
                                <p><strong>Location:</strong> {response.response.pradr.addr.loc || 'null'}</p>
                                <p><strong>ST:</strong> {response.response.pradr.addr.st || 'null'}</p>
                                <p><strong>BNO:</strong> {response.response.pradr.addr.bno || 'null'}</p>
                                <p><strong>District:</strong> {response.response.pradr.addr.dst || 'null'}</p>
                                <p><strong>Latitude:</strong> {response.response.pradr.addr.lt || 'null'}</p>
                                <p><strong>Pincode:</strong> {response.response.pradr.addr.pncd || 'null'}</p>
                                <p><strong>LandMark:</strong> {response.response.pradr.addr.landMark || 'null'}</p>
                                <p><strong>Stcd:</strong> {response.response.pradr.addr.stcd || 'null'}</p>
                                <p><strong>Geocodelvl:</strong> {response.response.pradr.addr.geocodelvl || 'null'}</p>
                                <p><strong>Flate Number:</strong> {response.response.pradr.addr.flno || 'null'}</p>
                                <p><strong>Longitude:</strong> {response.response.pradr.addr.lg || 'null'}</p>
                                <p><strong>NTR:</strong> {response.response.pradr.ntr || 'null'}</p>
                            </>
                        )}

                        {response.response.adadr && response.response.adadr.length > 0 && (
                            <>
                                <hr className="my-4" />
                                <h4 className="text-lg font-semibold text-center">Address</h4>
                                <table className="w-full mt-2 border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border border-gray-300 p-2">BNM</th>
                                            <th className="border border-gray-300 p-2">Location</th>
                                            <th className="border border-gray-300 p-2">ST</th>
                                            <th className="border border-gray-300 p-2">BNO</th>
                                            <th className="border border-gray-300 p-2">District</th>
                                            <th className="border border-gray-300 p-2">Latitude</th>
                                            <th className="border border-gray-300 p-2">Locality</th>
                                            <th className="border border-gray-300 p-2">Pincode</th>
                                            <th className="border border-gray-300 p-2">LandMark</th>
                                            <th className="border border-gray-300 p-2">Stcd</th>
                                            <th className="border border-gray-300 p-2">Geocodelvl</th>
                                            <th className="border border-gray-300 p-2">FlateNo</th>
                                            <th className="border border-gray-300 p-2">Longitude</th>
                                            <th className="border border-gray-300 p-2">NTR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {response.response.adadr.map((data, index) => (
                                            <tr key={index}>
                                                <td className="border border-gray-300 p-2">{data.addr.bnm || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.loc || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.st || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.bno || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.dst || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.lt || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.locality || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.pncd || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.landMark || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.stcd || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.geocodelvl || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.flno || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.addr.lg || 'null'}</td>
                                                <td className="border border-gray-300 p-2">{data.ntr || 'null'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}
                    </div>
                )}
                {response && response.statusCode === 500 && <div className='bg-red-500 text-white p-4 mt-4 rounded'>{response.message}</div>}
            </div>
        </div>
    );
};

export default BasicGSTIN;
