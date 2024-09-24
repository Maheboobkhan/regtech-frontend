// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Equifax = () => {
// //   const [formData, setFormData] = useState({
// //     fname: 'VIJAY',
// //     lname: 'MEHTA',
// //     phone_number: '7830645084',
// //     dob: '',
// //     id_type: [],
// //     aadhar_num: '',
// //     pan_num: '',
// //     driving_num: '',
// //     voter_num: '',
// //     passport_num: '',
// //   });

// //   const [otp, setOtp] = useState('');
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [response, setResponse] = useState(null);
// //   const [error, setError] = useState('');
// //   const [idTypes, setIdTypes] = useState([]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleIdTypeChange = (selectedIds) => {
// //     setFormData((prev) => ({ ...prev, id_type: selectedIds }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { data } = await axios.post('/sendotp', {
// //         phone: formData.phone_number,
// //         _token: 'your_csrf_token_here', // Add CSRF token
// //       });

// //       if (data.success) {
// //         setModalVisible(true);
// //       } else {
// //         alert(data.duplicate || 'OTP send failed. Please try later.');
// //       }
// //     } catch (err) {
// //       setError('Server Error, Please try later');
// //     }
// //   };

// //   const handleOtpVerify = async () => {
// //     try {
// //       const { data } = await axios.post('/verifyotp', {
// //         otp_code: otp,
// //         _token: 'your_csrf_token_here', // Add CSRF token
// //       });

// //       if (data.success) {
// //         const formResponse = await axios.post('/your_api_endpoint_here', formData);
// //         setResponse(formResponse.data);
// //         setModalVisible(false);
// //       } else {
// //         alert('OTP does not match');
// //       }
// //     } catch (err) {
// //       setError('Error verifying OTP');
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchIdTypes = async () => {
// //       try {
// //         const { data } = await axios.get('/idtypes');
// //         setIdTypes(data);
// //       } catch (err) {
// //         console.error('Error fetching ID types:', err);
// //       }
// //     };

// //     fetchIdTypes();
// //   }, []);

// //   return (
// //     <div className="container mx-auto mt-8">
// //       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
// //         <h3 className="text-xl font-semibold mb-4">Ecredit API</h3>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">First Name</label>
// //             <input
// //               type="text"
// //               name="fname"
// //               value={formData.fname}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Last Name</label>
// //             <input
// //               type="text"
// //               name="lname"
// //               value={formData.lname}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Phone Number</label>
// //             <input
// //               type="text"
// //               name="phone_number"
// //               value={formData.phone_number}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Date of Birth (DOB)</label>
// //             <input
// //               type="date"
// //               name="dob"
// //               value={formData.dob}
// //               onChange={handleChange}
// //               className="border rounded w-full p-2"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Select ID Type</label>
// //             <select
// //               name="id_type"
// //               multiple
// //               value={formData.id_type}
// //               onChange={(e) => handleIdTypeChange([...e.target.selectedOptions].map(o => o.value))}
// //               className="border rounded w-full p-2"
// //             >
// //               {idTypes.map((type) => (
// //                 <option key={type.value} value={type.value}>{type.name}</option>
// //               ))}
// //             </select>
// //           </div>

// //           {formData.id_type.includes('M') && (
// //             <div className="mb-4">
// //               <label className="block text-gray-700">Aadhar Card Number</label>
// //               <input
// //                 type="text"
// //                 name="aadhar_num"
// //                 value={formData.aadhar_num}
// //                 onChange={handleChange}
// //                 className="border rounded w-full p-2"
// //                 required
// //               />
// //             </div>
// //           )}
// //           {formData.id_type.includes('T') && (
// //             <div className="mb-4">
// //               <label className="block text-gray-700">PAN Card Number</label>
// //               <input
// //                 type="text"
// //                 name="pan_num"
// //                 value={formData.pan_num}
// //                 onChange={handleChange}
// //                 className="border rounded w-full p-2"
// //                 required
// //               />
// //             </div>
// //           )}
// //           {formData.id_type.includes('DL') && (
// //             <div className="mb-4">
// //               <label className="block text-gray-700">Driving Licence Number</label>
// //               <input
// //                 type="text"
// //                 name="driving_num"
// //                 value={formData.driving_num}
// //                 onChange={handleChange}
// //                 className="border rounded w-full p-2"
// //                 required
// //               />
// //             </div>
// //           )}
// //           {formData.id_type.includes('V') && (
// //             <div className="mb-4">
// //               <label className="block text-gray-700">Voter ID</label>
// //               <input
// //                 type="text"
// //                 name="voter_num"
// //                 value={formData.voter_num}
// //                 onChange={handleChange}
// //                 className="border rounded w-full p-2"
// //                 required
// //               />
// //             </div>
// //           )}
// //           {formData.id_type.includes('P') && (
// //             <div className="mb-4">
// //               <label className="block text-gray-700">Passport Number</label>
// //               <input
// //                 type="text"
// //                 name="passport_num"
// //                 value={formData.passport_num}
// //                 onChange={handleChange}
// //                 className="border rounded w-full p-2"
// //                 required
// //               />
// //             </div>
// //           )}

// //           <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
// //         </form>

// //         {modalVisible && (
// //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// //             <div className="bg-white rounded p-6">
// //               <h5 className="text-lg font-bold">OTP has been Sent</h5>
// //               <input
// //                 type="number"
// //                 placeholder="Enter OTP"
// //                 value={otp}
// //                 onChange={(e) => setOtp(e.target.value)}
// //                 className="border p-2 w-full mt-2"
// //                 required
// //               />
// //               <div className="mt-4">
// //                 <button onClick={handleOtpVerify} className="bg-blue-500 text-white py-2 px-4 rounded">Verify</button>
// //                 <button onClick={() => setModalVisible(false)} className="bg-gray-500 text-white py-2 px-4 rounded ml-2">Close</button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {response && (
// //           <div className="mt-4 bg-green-200 p-4 rounded">
// //             <h3 className="text-lg font-semibold">Response</h3>
// //             <pre>{JSON.stringify(response, null, 2)}</pre>
// //           </div>
// //         )}

// //         {error && (
// //           <div className="mt-4 bg-red-500 text-white p-4 rounded">
// //             <p>{error}</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Equifax;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const Equifax = () => {
//   const [formData, setFormData] = useState({
//     fname: 'VIJAY',
//     lname: 'MEHTA',
//     phone_number: '7830645084',
//     dob: '',
//     id_type: [],
//     aadhar_num: '',
//     pan_num: '',
//     driving_num: '',
//     voter_num: '',
//     passport_num: '',
//   });

//   const [otp, setOtp] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState('');
//   const [idTypes, setIdTypes] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleIdTypeChange = (selectedIds) => {
//     setFormData((prev) => ({ ...prev, id_type: selectedIds }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     const token = Cookies.get('authToken');
    
//     try {
//       // Step 1: Submit form data to Equifax API
//       const equifaxResponse = await axios.post('http://localhost:8000/api/equifax', {
//         ...formData,
//         token: token
//       });

//       if (equifaxResponse.data.success) {
//         // Step 2: Send OTP
//         const otpResponse = await axios.post('http://localhost:8000/api/sendotp', {
//           phone: formData.phone_number,
//           token: token // Add CSRF token
//         });

//         if (otpResponse.data.success) {
//           setModalVisible(true);
//         } else {
//           alert(otpResponse.data.duplicate || 'OTP sending failed. Please try later.');
//         }
//       } else {
//         alert(equifaxResponse.data.error || 'Equifax request failed.');
//       }
//     } catch (err) {
//       setError('Server Error, Please try later');
//     }
//   };

//   const handleOtpVerify = async () => {
//     const token = Cookies.get('authToken');
//     try {
//       // Step 3: Verify OTP
//       const verifyResponse = await axios.post('http://localhost:8000/api/verifyotp', {
//         otp_code: otp,
//         token: token, // Add CSRF token
//       });

//       if (verifyResponse.data.success) {
//         setResponse(verifyResponse.data); // Handle the final response
//         setModalVisible(false);
//       } else {
//         alert('OTP does not match');
//       }
//     } catch (err) {
//       setError('Error verifying OTP');
//     }
//   };


//   return (
//     <div className="container mx-auto mt-8">
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h3 className="text-xl font-semibold mb-4">Ecredit API</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="fname"
//               value={formData.fname}
//               onChange={handleChange}
//               className="border rounded w-full p-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Last Name</label>
//             <input
//               type="text"
//               name="lname"
//               value={formData.lname}
//               onChange={handleChange}
//               className="border rounded w-full p-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               name="phone_number"
//               value={formData.phone_number}
//               onChange={handleChange}
//               className="border rounded w-full p-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Date of Birth (DOB)</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="border rounded w-full p-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Select ID Type</label>
//             <select
//               name="id_type"
//               multiple
//               value={formData.id_type}
//               onChange={(e) => handleIdTypeChange([...e.target.selectedOptions].map(o => o.value))}
//               className="border rounded w-full p-2"
//             >
//               {idTypes.map((type) => (
//                 <option key={type.value} value={type.value}>{type.name}</option>
//               ))}
//             </select>
//           </div>

//           {formData.id_type.includes('M') && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Aadhar Card Number</label>
//               <input
//                 type="text"
//                 name="aadhar_num"
//                 value={formData.aadhar_num}
//                 onChange={handleChange}
//                 className="border rounded w-full p-2"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes('T') && (
//             <div className="mb-4">
//               <label className="block text-gray-700">PAN Card Number</label>
//               <input
//                 type="text"
//                 name="pan_num"
//                 value={formData.pan_num}
//                 onChange={handleChange}
//                 className="border rounded w-full p-2"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes('DL') && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Driving Licence Number</label>
//               <input
//                 type="text"
//                 name="driving_num"
//                 value={formData.driving_num}
//                 onChange={handleChange}
//                 className="border rounded w-full p-2"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes('V') && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Voter ID</label>
//               <input
//                 type="text"
//                 name="voter_num"
//                 value={formData.voter_num}
//                 onChange={handleChange}
//                 className="border rounded w-full p-2"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes('P') && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Passport Number</label>
//               <input
//                 type="text"
//                 name="passport_num"
//                 value={formData.passport_num}
//                 onChange={handleChange}
//                 className="border rounded w-full p-2"
//                 required
//               />
//             </div>
//           )}

//           <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
//         </form>

//         {modalVisible && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded p-6">
//               <h5 className="text-lg font-bold">OTP has been Sent</h5>
//               <input
//                 type="number"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="border p-2 w-full mt-2"
//                 required
//               />
//               <div className="mt-4">
//                 <button onClick={handleOtpVerify} className="bg-blue-500 text-white py-2 px-4 rounded">Verify</button>
//                 <button onClick={() => setModalVisible(false)} className="bg-gray-500 text-white py-2 px-4 rounded ml-2">Close</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {response && (
//           <div className="mt-4 bg-green-200 p-4 rounded">
//             <h3 className="text-lg font-semibold">Response</h3>
//             <pre>{JSON.stringify(response, null, 2)}</pre>
//           </div>
//         )}

//         {error && (
//           <div className="mt-4 bg-red-500 text-white p-4 rounded">
//             <p>{error}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Equifax;












import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Equifax = () => {
  const [formData, setFormData] = useState({
    fname: 'VIJAY',
    lname: 'MEHTA',
    phone_number: '7830645084',
    dob: '',
    id_type: [],
    aadhar_num: '',
    pan_num: '',
    driving_num: '',
    voter_num: '',
    passport_num: '',
  });

  const [otp, setOtp] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [idTypes, setIdTypes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIdTypeChange = (selectedIds) => {
    setFormData((prev) => ({ ...prev, id_type: selectedIds }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const token = Cookies.get('authToken');
    
    try {
      const equifaxResponse = await axios.post('http://localhost:8000/api/equifax', {
        ...formData,
        token: token
      });

      console.log(equifaxResponse)

      if (equifaxResponse.status === 200) {
        const otpResponse = await axios.post('http://localhost:8000/api/sendotp', {
          phone: formData.phone_number,
          token: token
        });

        if (otpResponse.data.success) {
          setModalVisible(true);
        } else {
          alert(otpResponse.data.duplicate || 'OTP sending failed. Please try later.');
        }
      } else {
        alert(equifaxResponse.data.error || 'Equifax request failed.');
      }
    } catch (err) {
      setError('Server Error, Please try later');
    }
  };

  const handleOtpVerify = async () => {
    const token = Cookies.get('authToken');
    try {
      const verifyResponse = await axios.post('http://localhost:8000/api/verifyotp', {
        otp_code: otp,
        token: token,
      });

      if (verifyResponse.data.success) {
        setResponse(verifyResponse.data);
        setModalVisible(false);
      } else {
        alert('OTP does not match');
      }
    } catch (err) {
      setError('Error verifying OTP');
    }
  };

  useEffect(() => {
    const fetchIdTypes = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/idtypes');
        console.log(data)
        setIdTypes(data);
      } catch (err) {
        console.error('Error fetching ID types:', err);
      }
    };

    fetchIdTypes();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ecredit API</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth (DOB)</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Select ID Type</label>
            <select
              name="id_type"
              multiple
              value={formData.id_type}
              onChange={(e) => handleIdTypeChange([...e.target.selectedOptions].map(o => o.value))}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {idTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.name}</option>
              ))}
            </select>
          </div>

          {formData.id_type.includes('M') && (
            <div className="mb-4">
              <label className="block text-gray-700">Aadhar Card Number</label>
              <input
                type="text"
                name="aadhar_num"
                value={formData.aadhar_num}
                onChange={handleChange}
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}
          {formData.id_type.includes('T') && (
            <div className="mb-4">
              <label className="block text-gray-700">PAN Card Number</label>
              <input
                type="text"
                name="pan_num"
                value={formData.pan_num}
                onChange={handleChange}
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}
          {formData.id_type.includes('DL') && (
            <div className="mb-4">
              <label className="block text-gray-700">Driving Licence Number</label>
              <input
                type="text"
                name="driving_num"
                value={formData.driving_num}
                onChange={handleChange}
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}
          {formData.id_type.includes('V') && (
            <div className="mb-4">
              <label className="block text-gray-700">Voter ID</label>
              <input
                type="text"
                name="voter_num"
                value={formData.voter_num}
                onChange={handleChange}
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}
          {formData.id_type.includes('P') && (
            <div className="mb-4">
              <label className="block text-gray-700">Passport Number</label>
              <input
                type="text"
                name="passport_num"
                value={formData.passport_num}
                onChange={handleChange}
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}

          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">Submit</button>
        </form>

        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded p-6 shadow-lg">
              <h5 className="text-lg font-bold">OTP has been Sent</h5>
              <input
                type="number"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-300 p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <div className="mt-4">
                <button onClick={handleOtpVerify} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Verify</button>
                <button onClick={() => setModalVisible(false)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition ml-2">Close</button>
              </div>
            </div>
          </div>
        )}

        {response && (
          <div className="mt-4 bg-green-100 p-4 rounded">
            <h3 className="text-lg font-semibold">Response</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-500 text-white p-4 rounded">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Equifax;
