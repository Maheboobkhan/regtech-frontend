import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const UdyamSearchV2 = () => {
  const [udyamNumber, setUdyamNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUdyamNumber(e.target.value);
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
        { UdyamRegNumber: udyamNumber },
        {
          headers: {
            'AccessToken': token, // Send the token in the header
          },
        }
      );
      console.log(res)
      setResponse(res.data);
      setError(null);
    } catch (err) {
      if (err.response) {
        const { status } = err.response;
        if (status === 404) {
          setError('Server Error. Please try again later.');
        } else if (status === 500) {
          setError('Internal Server Error. Please contact techsupport@docboyz.in for more details.');
        } else {
          setError('Error verifying Udyam number');
        }
      } else {
        setError('Error verifying Udyam number');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="text-xl text-blue-300">
              Fetching Udyam details <span className="text-blue-300">please wait...</span>
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
              htmlFor="udyam_number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Udyam Number
            </label>
            <input
              type="text"
              id="udyam_number"
              name="udyam_number"
              value={udyamNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: ABCDE1234N"
              required
              maxLength="20"
              minLength="10"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
          >
            Verify
          </button>
        </form>
        {response && response.statusCode === 200 && (
          <div className="bg-blue-400 text-white p-3 rounded mt-4">
            <h3 className="text-lg font-semibold">Udyam Details</h3>
            <p><strong>Udyam Number: </strong>{response.response.essentials.udyamNumber}</p>
            <p><strong>Id: </strong>{response.response.id}</p>
            <p><strong>Patron Id: </strong>{response.response.patronId}</p>
            <p><strong>Udyam Registration Number: </strong>{response.response.result.generalInfo.udyamRegistrationNumber}</p>
            <p><strong>Name of Enterprise: </strong>{response.response.result.generalInfo.nameOfEnterprise}</p>
            <p><strong>Major Activity: </strong>{response.response.result.generalInfo.majorActivity}</p>
            <p><strong>Organisation Type: </strong>{response.response.result.generalInfo.organisationType}</p>
            <p><strong>Social Category: </strong>{response.response.result.generalInfo.socialCategory}</p>
            <p><strong>Date of Incorporation: </strong>{response.response.result.generalInfo.dateOfIncorporation}</p>
            <p><strong>Date of Commencement of Production Business: </strong>{response.response.result.generalInfo.dateOfCommencementOfProductionBusiness}</p>
            <p><strong>DIC: </strong>{response.response.result.generalInfo.dic}</p>
            <p><strong>MSMEDI: </strong>{response.response.result.generalInfo.msmedi}</p>
            <p><strong>Date of Udyam Registration: </strong>{response.response.result.generalInfo.dateOfUdyamRegistration}</p>
            <p><strong>Type of Enterprise: </strong>{response.response.result.generalInfo.typeOfEnterprise}</p>
            <p><strong>Official Address of Enterprise: </strong>
              {response.response.result.officialAddressOfEnterprise.flatDoorBlockNo}<br />
              {response.response.result.officialAddressOfEnterprise.nameOfPremisesBuilding}<br />
              {response.response.result.officialAddressOfEnterprise.villageTown}<br />
              {response.response.result.officialAddressOfEnterprise.block}
            </p>
            <p><strong>State: </strong>{response.response.result.officialAddressOfEnterprise.state}</p>
            <p><strong>District: </strong>{response.response.result.officialAddressOfEnterprise.district}</p>
            <p><strong>City: </strong>{response.response.result.officialAddressOfEnterprise.city}</p>
            <p><strong>Pincode: </strong>{response.response.result.officialAddressOfEnterprise.pin}</p>
            <p><strong>Email: </strong>{response.response.result.officialAddressOfEnterprise.email}</p>
          </div>
        )}
        {response && response.statusCode === 404 && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            Server Error. Please try again later.
          </div>
        )}
        {response && response.statusCode === 401 && (
          <div className="mt-2 bg-red-500 text-white p-3 rounded mb-4">
            {response.message || 'Server Error. Please try again later.'}
          </div>
        )}
        {response && response.statusCode === 500 && (
          <div className="mt-2 bg-red-500 text-white p-3 rounded mb-4">
            Internal Server Error. Please contact techsupport@docboyz.in for more details.
          </div>
        )}
      </div>
    </div>
  );
};

export default UdyamSearchV2;
