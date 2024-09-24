// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Link } from 'react-router-dom';

// const VoterUpload = () => {
//   const [file, setFile] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [detailedInfo, setDetailedInfo] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = Cookies.get('authToken');

//     if (!token) {
//       setError('Auth token is missing');
//       return;
//     }

//     if (!file) {
//       setError('Please select a Voter ID image');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const { data } = await axios.post(
//         'http://regtechapi.in/api/voter_upload',
//         formData,
//         {
//           headers: {
//             'AccessToken': token,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       setResponse(data);
//       if (data.statusCode === 200) {
//         setDetailedInfo(data.voter_detailed_info);
//       }
//     } catch (err) {
//       setError(err.response ? err.response.data.message : 'Error uploading file');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-semibold">Voter Verification</h3>
//           <Link
//             to="/dashboard/kyc/voter_api"
//             className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
//             role="button"
//           >
//             Voter APIs
//           </Link>
//         </div>
//         <div className="mb-4">
//           {loading && <div className="text-blue-600">Uploading image, please wait...</div>}
//           {error && <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
//                 Voter ID Image
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleFileChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
//             >
//               Upload
//             </button>
//           </form>
//         </div>
//         {response && response.statusCode === 200 && (
//           <div className="mt-6">
//             <div className="bg-green-400 text-white p-4 rounded">
//               <h3 className="text-lg font-semibold">Voter ID CARD Details</h3>
//               <div className="mt-4">
//                 <p><strong>Voter ID Number:</strong> {response.data.ocr_fields[0].epic_number.value}</p>
//                 <p><strong>DOB:</strong> {response.data.ocr_fields[0].dob.value.split('-')[0]}-XX-XX</p>
//                 <p><strong>Age:</strong> {response.data.ocr_fields[0].age.value}</p>
//                 <p><strong>Gender:</strong> {response.data.ocr_fields[0].gender.value}</p>
//                 <p><strong>Father Name:</strong> {response.data.ocr_fields[0].care_of.value}</p>
//                 <p><strong>Full Name:</strong> {response.data.ocr_fields[0].full_name.value}</p>
//               </div>
//             </div>
//             {detailedInfo && (
//               <div className="mt-6 bg-green-500 text-white p-4 rounded">
//                 <h3 className="text-lg font-semibold">Voter Detailed Information</h3>
//                 <div className="mt-4">
//                   <p>Verification Successful</p>
//                   <p><strong>Client ID:</strong> {detailedInfo.data.client_id}</p>
//                   <p><strong>Gender:</strong> {detailedInfo.data.gender === 'M' ? 'Male' : 'Female'}</p>
//                   <p><strong>State:</strong> {detailedInfo.data.state}</p>
//                   <p><strong>Name:</strong> {detailedInfo.data.name}</p>
//                   <p><strong>Relation Name:</strong> {detailedInfo.data.relation_name}</p>
//                   <p><strong>Relation Type:</strong> {detailedInfo.data.relation_type}</p>
//                   <p><strong>House No.:</strong> {detailedInfo.data.house_no}</p>
//                   <p><strong>DOB:</strong> {detailedInfo.data.dob}</p>
//                   <p><strong>Age:</strong> {detailedInfo.data.age}</p>
//                   <p><strong>Area:</strong> {detailedInfo.data.area}</p>
//                   <p><strong>District:</strong> {detailedInfo.data.district}</p>
//                   <p><strong>Multiple:</strong> {detailedInfo.data.multiple}</p>
//                   <p><strong>Last Update:</strong> {detailedInfo.data.last_update}</p>
//                   <p><strong>Assembly Constituency:</strong> {detailedInfo.data.assembly_constituency}</p>
//                   <p><strong>Assembly Constituency Number:</strong> {detailedInfo.data.assembly_constituency_number}</p>
//                   <p><strong>Polling Station:</strong> {detailedInfo.data.polling_station}</p>
//                   <p><strong>Part Number:</strong> {detailedInfo.data.part_number}</p>
//                   <p><strong>Part Name:</strong> {detailedInfo.data.part_name}</p>
//                   <p><strong>Parliamentary Constituency:</strong> {detailedInfo.data.parliamentary_constituency}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VoterUpload;

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const VoterUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detailedInfo, setDetailedInfo] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');

    if (!token) {
      setError('Auth token is missing');
      return;
    }

    if (!file) {
      setError('Please select a Voter ID image');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await axios.post(
        'http://regtechapi.in/api/voter_upload',
        formData,
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(data);
      setResponse(data);
      if (data.statusCode === 200) {
        setDetailedInfo(data.voter_detailed_info);
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error uploading file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Voter ID Upload</h3>
          <Link
            to="/dashboard/kyc/voter_api"
            className="bg-light text-white px-3 py-1 rounded underline"
            role="button"
          >
            Voter APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-center mb-4">
              <div className="text-xl text-blue-600">Uploading image, please wait...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                Voter ID Image
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
          </form>
          {response && response.statusCode === 200 && (
            <div className="mt-6">
              <div className="bg-green-400 text-white p-4 rounded">
                <h3 className="text-lg font-semibold">Voter ID Card Details</h3>
                <div className="mt-4">
                  <p><strong>Voter ID Number:</strong> {response.data.ocr_fields[0].epic_number.value}</p>
                  <p><strong>DOB:</strong> {response.data.ocr_fields[0].dob.value.split('-')[0]}-XX-XX</p>
                  <p><strong>Age:</strong> {response.data.ocr_fields[0].age.value}</p>
                  <p><strong>Gender:</strong> {response.data.ocr_fields[0].gender.value}</p>
                  <p><strong>Father's Name:</strong> {response.data.ocr_fields[0].care_of.value}</p>
                  <p><strong>Full Name:</strong> {response.data.ocr_fields[0].full_name.value}</p>
                </div>
              </div>
              {detailedInfo && (
                <div className="mt-6 bg-green-500 text-white p-4 rounded">
                  <h3 className="text-lg font-semibold">Voter Detailed Information</h3>
                  <div className="mt-4">
                    <p>Verification Successful</p>
                    <p><strong>Client ID:</strong> {detailedInfo.data.client_id}</p>
                    <p><strong>Gender:</strong> {detailedInfo.data.gender === 'M' ? 'Male' : 'Female'}</p>
                    <p><strong>State:</strong> {detailedInfo.data.state}</p>
                    <p><strong>Name:</strong> {detailedInfo.data.name}</p>
                    <p><strong>Relation Name:</strong> {detailedInfo.data.relation_name}</p>
                    <p><strong>Relation Type:</strong> {detailedInfo.data.relation_type}</p>
                    <p><strong>House No.:</strong> {detailedInfo.data.house_no}</p>
                    <p><strong>DOB:</strong> {detailedInfo.data.dob}</p>
                    <p><strong>Age:</strong> {detailedInfo.data.age}</p>
                    <p><strong>Area:</strong> {detailedInfo.data.area}</p>
                    <p><strong>District:</strong> {detailedInfo.data.district}</p>
                    <p><strong>Multiple:</strong> {detailedInfo.data.multiple}</p>
                    <p><strong>Last Update:</strong> {detailedInfo.data.last_update}</p>
                    <p><strong>Assembly Constituency:</strong> {detailedInfo.data.assembly_constituency}</p>
                    <p><strong>Assembly Constituency Number:</strong> {detailedInfo.data.assembly_constituency_number}</p>
                    <p><strong>Polling Station:</strong> {detailedInfo.data.polling_station}</p>
                    <p><strong>Part Number:</strong> {detailedInfo.data.part_number}</p>
                    <p><strong>Part Name:</strong> {detailedInfo.data.part_name}</p>
                    <p><strong>Parliamentary Constituency:</strong> {detailedInfo.data.parliamentary_constituency}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default VoterUpload;
