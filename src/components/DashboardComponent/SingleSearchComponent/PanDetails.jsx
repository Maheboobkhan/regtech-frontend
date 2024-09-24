// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Link } from 'react-router-dom';

// const PanDetails = () => {
//   const [panNumber, setPanNumber] = useState('');
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = Cookies.get('authToken');

//     if (!token) {
//       setError('Auth token is missing');
//       return;
//     }

//     if (!panNumber) {
//       setError('Please enter a PAN number');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const { data } = await axios.post(
//         'http://regtechapi.in/api/pan_details_check',
//         { pan_no: panNumber },
//         {
//           headers: {
//             'AccessToken': token,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       console.log(data)
//       setResponse(data);
//     } catch (err) {
//       setError(err.response ? err.response.data.message : 'Error fetching PAN card details');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-blue-600 p-4 flex justify-between items-center">
//           <h3 className="text-xl font-semibold text-white">PAN CARD DETAILS</h3>
//           <Link
//             to="pancard_api"
//             className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-200"
//           >
//             Pan Card APIs
//           </Link>
//         </div>
//         <div className="p-4">
//           {error && (
//             <div className="bg-red-500 text-white p-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           {loading && (
//             <div className="text-center mb-4 text-xl text-blue-600">
//               Verifying PAN number, please wait...
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="mt-4">
//             <div className="mb-4">
//               <label htmlFor="pan_number" className="block text-gray-700 text-sm font-bold mb-2">
//                 PAN Number
//               </label>
//               <input
//                 type="text"
//                 id="pan_number"
//                 name="pan_number"
//                 value={panNumber}
//                 onChange={(e) => setPanNumber(e.target.value)}
//                 maxLength="10"
//                 minLength="10"
//                 placeholder="Ex: ABCDE1234N"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
//             >
//               Verify
//             </button>
//           </form>

//           {response && response.statusCode === 200 && (
//             <div className="mt-6 bg-green-100 text-green-800 p-4 rounded">
//               <h3 className="text-lg font-semibold">PAN CARD Details</h3>
//               <div className="mt-4">
//                 <p><strong>Client Id:</strong> {response.data.clientId || 'null'}</p>
//                 <p><strong>Transaction Id:</strong> {response.data.transactionId || 'null'}</p>
//                 <p><strong>Pan Number:</strong> {response.data.panNumber || 'null'}</p>
//                 <p><strong>Masked Aadhar:</strong> {response.data.maskedAadhar || 'null'}</p>
//                 <p><strong>Last Four Digits of Aadhar:</strong> {response.data.lastFourDigitAadhar || 'null'}</p>
//                 <p><strong>Type of Holder:</strong> {response.data.typeOfHolder || 'null'}</p>
//                 <p><strong>Full Name:</strong> {response.data.name || 'null'}</p>
//                 <p><strong>First Name:</strong> {response.data.firstName || 'null'}</p>
//                 <p><strong>Middle Name:</strong> {response.data.middleName || 'null'}</p>
//                 <p><strong>Last Name:</strong> {response.data.lastName || 'null'}</p>
//                 <p><strong>Gender:</strong> {response.data.gender || 'null'}</p>
//                 <p><strong>Date of Birth:</strong> {response.data.dob || 'null'}</p>
//                 <p><strong>Address:</strong> {response.data.address || 'null'}</p>
//                 <p><strong>City:</strong> {response.data.city || 'null'}</p>
//                 <p><strong>State:</strong> {response.data.state || 'null'}</p>
//                 <p><strong>Country:</strong> {response.data.country || 'null'}</p>
//                 <p><strong>Pincode:</strong> {response.data.pincode || 'null'}</p>
//                 <p><strong>Mobile Number:</strong> {response.data.mobile_no || 'null'}</p>
//                 <p><strong>Email:</strong> {response.data.email || 'null'}</p>
//                 <p><strong>Is Valid:</strong> {response.data.isValid || 'null'}</p>
//                 <p><strong>Aadhaar Seeding Status:</strong> {response.data.aadhaarSeedingStatus || 'null'}</p>
//                 <p><strong>Service Code:</strong> {response.data.serviceCode || 'null'}</p>
//                 <p><strong>Status Code:</strong> {response.statusCode || 'null'}</p>
//                 <p><strong>Success:</strong> {response.success || 'null'}</p>
//                 <p><strong>Message Code:</strong> {response.message_code || 'null'}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PanDetails;








import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PanDetails = () => {
  const [panNumber, setPanNumber] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');

    if (!token) {
      setError('Auth token is missing');
      return;
    }

    if (!panNumber) {
      setError('Please enter a PAN number');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        'http://regtechapi.in/api/seachv4',
        { pan_no: panNumber },
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(data)
      setResponse(data);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error fetching PAN card details');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="mt-4 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="mx-auto w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">PAN CARD DETAILS</h3>
          <Link
            to="/dashboard/kyc/pancard_api"
            className="bg-white text-[#00acc1] px-3 py-1 rounded shadow hover:bg-gray-200"
          >
            Pan Card APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Verifying PAN number, <span className="text-blue-300">please wait...</span>
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
              <label htmlFor="pan_number" className="block text-gray-700 text-sm font-bold mb-2">
                PAN Number
              </label>
              <input
                type="text"
                id="pan_number"
                name="pan_number"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                maxLength="10"
                minLength="10"
                placeholder="Ex: ABCDE1234N"
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

          {response && response.status_code === 200 && (
            <div className="mt-6 bg-green-400 text-white p-4 rounded">
              <h3 className="text-lg font-semibold">PAN CARD Details</h3>
              <div className="mt-4">
                <p><strong>Client Id:</strong> {response.pancard.data.client_id || 'null'}</p>
                <p><strong>Transaction Id:</strong> {response.pancard.data.transactionId || 'null'}</p>
                <p><strong>Pan Number:</strong> {response.pancard.data.panNumber || 'null'}</p>
                <p><strong>Masked Aadhar:</strong> {response.pancard.data.maskedAadhar || 'null'}</p>
                <p><strong>Last Four Digits of Aadhar:</strong> {response.pancard.data.lastFourDigitAadhar || 'null'}</p>
                <p><strong>Type of Holder:</strong> {response.pancard.data.typeOfHolder || 'null'}</p>
                <p><strong>Full Name:</strong> {response.pancard.data.name || 'null'}</p>
                <p><strong>First Name:</strong> {response.pancard.data.firstName || 'null'}</p>
                <p><strong>Middle Name:</strong> {response.pancard.data.middleName || 'null'}</p>
                <p><strong>Last Name:</strong> {response.pancard.data.lastName || 'null'}</p>
                <p><strong>Gender:</strong> {response.pancard.data.gender || 'null'}</p>
                <p><strong>Date of Birth:</strong> {response.pancard.data.dob || 'null'}</p>
                <p><strong>Address:</strong> {response.pancard.data.address || 'null'}</p>
                <p><strong>City:</strong> {response.pancard.data.city || 'null'}</p>
                <p><strong>State:</strong> {response.pancard.data.state || 'null'}</p>
                <p><strong>Country:</strong> {response.pancard.data.country || 'null'}</p>
                <p><strong>Pincode:</strong> {response.pancard.data.pincode || 'null'}</p>
                <p><strong>Mobile Number:</strong> {response.pancard.data.mobile_no || 'null'}</p>
                <p><strong>Email:</strong> {response.pancard.data.email || 'null'}</p>
                <p><strong>Is Valid:</strong> {response.pancard.data.isValid ? 'true' : 'false'}</p>
                <p><strong>Aadhaar Seeding Status:</strong> {response.pancard.data.aadhaarSeedingStatus || 'null'}</p>
                <p><strong>Service Code:</strong> {response.pancard.data.serviceCode || 'null'}</p>
                <p><strong>Status Code:</strong> {response.statusCode || 'null'}</p>
                <p><strong>Success:</strong> {response.success ? 'true' : 'false'}</p>
                <p><strong>Message Code:</strong> {response.message_code || 'null'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default PanDetails;
