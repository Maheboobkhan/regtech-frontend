import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const CompanyDetails = () => {
  const [companyCode, setCompanyCode] = useState('');
  const [filingDataSize, setFilingDataSize] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompanyCodeChange = (e) => {
    setCompanyCode(e.target.value);
  };

  const handleFilingDataSizeChange = (e) => {
    setFilingDataSize(e.target.value);
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
      const res = await axios.post(
        'http://regtechapi.in/api/company_details',
        { company_code: companyCode, filing_data_size: filingDataSize },
        {
          headers: {
            'AccessToken': token,
          },
        }
      );
      console.log(res)
      setResponse(res.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 404 || statusCode === 400) {
          setError('Server Error, Please try later');
        } else if (statusCode === 500) {
          setError('Internal Server Error. Please contact techsupport@docboyz.in for more details.');
        } else {
          setError('Error fetching company details');
        }
      } else {
        setError('Network error, please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-32 mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#00acc1] p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">Company Details</h3>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="company_code"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company Code
            </label>
            <input
              type="text"
              id="company_code"
              name="company_code"
              value={companyCode}
              onChange={handleCompanyCodeChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Company Code"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="filing_data_size"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Data Count
            </label>
            <input
              type="number"
              id="filing_data_size"
              name="filing_data_size"
              value={filingDataSize}
              onChange={handleFilingDataSizeChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g 10"
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
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <div className="text-xl text-blue-300">
              Fetching company details <span className="text-blue-300">please wait...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mt-4">
            {error}
          </div>
        )}
        {response && response.statusCode === 200 && (
          <div className="bg-green-500 text-white p-3 rounded mt-4">
            <h3 className="text-lg font-semibold">Company Details</h3>
            <div className="mt-4">
              <table className="table-auto w-full mt-4 text-center">
                <tbody>
                  <tr className="bg-green-200 text-gray-700">
                    <td className="py-2 px-4"><b>Company Name:</b> {response['Company Details']['data']['search_data']['company']}</td>
                    <td className="py-2 px-4"><b>Company Code:</b> {response['Company Details']['data']['search_data']['company_code']}</td>
                    <td className="py-2 px-4"><b>Client ID:</b> {response['Company Details']['data']['client_id']}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4"><b>Address:</b> {response['Company Details']['data']['search_data']['addres']}</td>
                    <td className="py-2 px-4"><b>Office:</b> {response['Company Details']['data']['search_data']['office']}</td>
                    <td className="py-2 px-4"><b>Name As Per PAN:</b> {response['Company Details']['data']['search_data']['name_as_per_pan']}</td>
                    <td className="py-2 px-4"><b>PAN Status:</b> {response['Company Details']['data']['search_data']['pan_status']}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4"><b>Section Applicable:</b> {response['Company Details']['data']['search_data']['section_applicable']}</td>
                    <td className="py-2 px-4"><b>Primary Business Activity:</b> {response['Company Details']['data']['search_data']['primary_business_activity']}</td>
                    <td className="py-2 px-4"><b>ESIC Code:</b> {response['Company Details']['data']['search_data']['esic_code']}</td>
                    <td className="py-2 px-4"><b>CIN:</b> {response['Company Details']['data']['search_data']['cin']}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4"><b>LIN:</b> {response['Company Details']['data']['search_data']['lin']}</td>
                    <td className="py-2 px-4"><b>Ownership Type:</b> {response['Company Details']['data']['search_data']['ownership_type']}</td>
                    <td className="py-2 px-4"><b>Date of Establishment:</b> {response['Company Details']['data']['search_data']['date_of_setup_of_establishment']}</td>
                    <td className="py-2 px-4"><b>Pin Code:</b> {response['Company Details']['data']['search_data']['pin_code']}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4"><b>City:</b> {response['Company Details']['data']['search_data']['city']}</td>
                    <td className="py-2 px-4"><b>District:</b> {response['Company Details']['data']['search_data']['district']}</td>
                    <td className="py-2 px-4"><b>State:</b> {response['Company Details']['data']['search_data']['state']}</td>
                    <td className="py-2 px-4"><b>Country:</b> {response['Company Details']['data']['search_data']['country']}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4"><b>EPFO Office Name:</b> {response['Company Details']['data']['search_data']['epfo_office_name']}</td>
                    <td className="py-2 px-4"><b>EPFO Office Address:</b> {response['Company Details']['data']['search_data']['epfo_office_address']}</td>
                    <td className="py-2 px-4"><b>Zone:</b> {response['Company Details']['data']['search_data']['zone']}</td>
                    <td className="py-2 px-4"><b>Region:</b> {response['Company Details']['data']['search_data']['region']}</td>
                  </tr>
                </tbody>
              </table>
              {response['Company Details']['data']['search_data']['filing_data'] && response['Company Details']['data']['search_data']['filing_data'].length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Filing Data</h3>
                  {response['Company Details']['data']['search_data']['filing_data'].map((filingData, index) => (
                    <div key={index} className="mt-4 bg-green-200 p-4 rounded-lg">
                      <table className="table-auto w-full text-center">
                        <tbody>
                          <tr className="bg-green-300 text-gray-700">
                            <td className="py-2 px-4"><b>Date:</b> {filingData.date || ''}</td>
                            <td className="py-2 px-4"><b>Amount:</b> {filingData.amount || ''}</td>
                            <td className="py-2 px-4"><b>Month:</b> {filingData.month || ''}</td>
                            <td className="py-2 px-4"><b>Wage Month:</b> {filingData.wage_month || ''}</td>
                            <td className="py-2 px-4"><b>Number Of Employees:</b> {filingData.no_of_employees || ''}</td>
                            <td className="py-2 px-4"><b>ECR:</b> {filingData.ecr || ''}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {response && response.statusCode === 500 && (
            <div className="bg-red-500 text-white p-3 rounded mt-4">
            {response.message || 'An error occurred. Please try again later.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDetails;
