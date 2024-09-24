import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const CompanySearch = () => {
  const [company, setCompany] = useState('');
  const [searchSize, setSearchSize] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSearchSizeChange = (e) => {
    setSearchSize(e.target.value);
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
        'http://regtechapi.in/api/seachv4',
        { company_name, search_size: searchSize },
        {
          headers: {
            'AccessToken': token,
          },
        }
      );
      console.log(res);
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
          setError('Error searching company');
        }
      } else {
        setError('Network error, please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#00acc1] p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">Company Search</h3>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={handleCompanyChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Company Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="search_size"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Data Count
            </label>
            <input
              type="number"
              id="search_size"
              name="search_size"
              value={searchSize}
              onChange={handleSearchSizeChange}
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
              Searching for companies <span className="text-blue-300">please wait...</span>
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
            <h3 className="text-lg font-semibold">Company Search Result</h3>
            <table className="table-auto w-full mt-4 text-center">
              <thead>
                <tr className="bg-green-200 text-gray-700">
                  <th className="py-2 px-4">Company Name</th>
                  <th className="py-2 px-4">Company Code</th>
                  <th className="py-2 px-4">Confidence</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">City</th>
                </tr>
              </thead>
              <tbody>
                {response['Company Search']['data']['search_data'].map((companyData, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{companyData.company || ''}</td>
                    <td className="py-2 px-4">{companyData.company_code || ''}</td>
                    <td className="py-2 px-4">{companyData.confidence || ''}</td>
                    <td className="py-2 px-4">{companyData.addres || ''}</td>
                    <td className="py-2 px-4">{companyData.office || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default CompanySearch;
