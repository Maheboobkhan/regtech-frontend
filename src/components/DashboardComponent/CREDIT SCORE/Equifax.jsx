// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { pdf } from "@react-pdf/renderer";
// import EquifaxPdfReport from "./EquifaxPdfReport";

// const Equifax = () => {
//   const [formData, setFormData] = useState({
//     fname: "VIJAY",
//     lname: "MEHTA",
//     phone_number: "7830645084",
//     dob: "",
//     id_type: [],
//     aadhar_num: "",
//     pan_num: "",
//     driving_num: "",
//     voter_num: "",
//     passport_num: "",
//   });

//   const [otp, setOtp] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");
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
//     const domain = localStorage.getItem("domain");
//     setError("");

//     const token = Cookies.get("authToken");

//     try {
//       const equifaxResponse = await axios.post(`${domain}/equifax`, {
//         ...formData,
//         token: token,
//       });

//       console.log("equifaxResponse: ", equifaxResponse);
//       if (equifaxResponse && equifaxResponse.status === 200) {

//         try {
//           const blob = await pdf(
//             <EquifaxPdfReport
//               equifaxDetails={equifaxResponse.data.equifaxdetails}
//               panNum={equifaxResponse.data.pan_num}
//               // myarray={equifaxResponse.data.myarray?.message || ""}
//             />
//           ).toBlob();
//           const url = URL.createObjectURL(blob);
//           window.open(url, "_blank");
//         } catch (pdfError) {
//           console.error("Error generating PDF: ", pdfError);
//           setError("Error generating PDF. Please try again.");
//         }
//       }
//       // First request to send OTP
//       // const otpResponse = await axios.post(`${domain}/sendotp`, {
//       //   phone: formData.phone_number,
//       //   token: token,
//       // });

//       // console.log('otpResponse: ',otpResponse)

//       // if (otpResponse.data.success) {
//       //   setModalVisible(true);
//       // } else {
//       //   alert(otpResponse.data.duplicate || 'OTP sending failed. Please try later.');
//       // }
//     } catch (err) {
//       setError("Server Error, Please try later");
//     }
//   };

//   // const handleOtpVerify = async () => {
//   //   const domain = localStorage.getItem('domain');
//   //   const token = Cookies.get('authToken');

//   //   try {
//   //     // Verify OTP
//   //     const verifyResponse = await axios.post(`${domain}/verifyotp`, {
//   //       otp_code: otp,
//   //       phone: formData.phone_number,
//   //       token: token,
//   //     });

//   //     console.log('verifyResponse: ',verifyResponse)

//   //     if (verifyResponse.data.success) {
//   //       // OTP verified successfully, now make request to Equifax
//   //       setModalVisible(false);
//   //       const equifaxResponse = await axios.post(`${domain}/equifax`, {
//   //         ...formData,
//   //         token: token,
//   //       });

//   //       console.log('equifaxResponse: ',equifaxResponse);

//   //       if (res.data && res.data.statusCode === 200) {
//   //         const blob = await pdf(
//   //           <StatementPDF
//   //           atmWithdrawl={res.data.response.atm_withdrawls}
//   //           />
//   //         ).toBlob();
//   //         const url = URL.createObjectURL(blob);
//   //         window.open(url, "_blank");
//   //       }

//   //       setModalVisible(false);
//   //     } else {
//   //       alert('OTP does not match');
//   //     }
//   //   } catch (err) {
//   //     setError('Error verifying OTP or making Equifax request');
//   //   }
//   // };

//   useEffect(() => {
//     const domain = localStorage.getItem("domain");
//     const fetchIdTypes = async () => {
//       try {
//         const { data } = await axios.get(`${domain}/idtypes`);
//         setIdTypes(data);
//       } catch (err) {
//         console.error("Error fetching ID types:", err);
//       }
//     };

//     fetchIdTypes();
//   }, []);

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg p-6">
//         <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//           Ecredit API
//         </h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="fname"
//               value={formData.fname}
//               onChange={handleChange}
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Select ID Type</label>
//             <select
//               name="id_type"
//               multiple
//               value={formData.id_type}
//               onChange={(e) =>
//                 handleIdTypeChange(
//                   [...e.target.selectedOptions].map((o) => o.value)
//                 )
//               }
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               {idTypes.map((type) => (
//                 <option key={type.value} value={type.value}>
//                   {type.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {formData.id_type.includes("M") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Aadhar Card Number</label>
//               <input
//                 type="text"
//                 name="aadhar_num"
//                 value={formData.aadhar_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("T") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">PAN Card Number</label>
//               <input
//                 type="text"
//                 name="pan_num"
//                 value={formData.pan_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("DL") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">
//                 Driving Licence Number
//               </label>
//               <input
//                 type="text"
//                 name="driving_num"
//                 value={formData.driving_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("V") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Voter ID</label>
//               <input
//                 type="text"
//                 name="voter_num"
//                 value={formData.voter_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("P") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Passport Number</label>
//               <input
//                 type="text"
//                 name="passport_num"
//                 value={formData.passport_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//           >
//             Send OTP
//           </button>
//         </form>

//         {modalVisible && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded p-6 shadow-lg">
//               <h5 className="text-lg font-bold">OTP has been Sent</h5>
//               <input
//                 type="number"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="border border-gray-300 p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//               <div className="mt-4">
//                 <button
//                   onClick={handleOtpVerify}
//                   className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//                 >
//                   Verify OTP
//                 </button>
//                 <button
//                   onClick={() => setModalVisible(false)}
//                   className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition ml-2"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {response && (
//           <div className="mt-4">
//             <h4 className="font-bold">Response:</h4>
//             <pre>{JSON.stringify(response, null, 2)}</pre>
//           </div>
//         )}
//         {error && <div className="text-red-500 mt-2">{error}</div>}
//       </div>
//     </div>
//   );
// };

// export default Equifax;

// 2nd code
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { pdf } from "@react-pdf/renderer";
// import EquifaxPdfReport from "./EquifaxPdfReport";

// const Equifax = () => {
//   const [formData, setFormData] = useState({
//     fname: "VIJAY",
//     lname: "MEHTA",
//     phone_number: "7830645084",
//     dob: "",
//     id_type: [],
//     aadhar_num: "",
//     pan_num: "",
//     driving_num: "",
//     voter_num: "",
//     passport_num: "",
//   });

//   const [otp, setOtp] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");
//   const [idTypes, setIdTypes] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleIdTypeChange = (id) => {
//     setFormData((prev) => {
//       const updatedIdTypes = prev.id_type.includes(id)
//         ? prev.id_type.filter((type) => type !== id)
//         : [...prev.id_type, id];
//       return { ...prev, id_type: updatedIdTypes };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const domain = localStorage.getItem("domain");
//     setError("");

//     const token = Cookies.get("authToken");

//     try {
//       const equifaxResponse = await axios.post(`${domain}/equifax`, {
//         ...formData,
//         token: token,
//       });

//       console.log("equifaxResponse: ", equifaxResponse);
//       if (equifaxResponse && equifaxResponse.status === 200) {
//         try {
//           const blob = await pdf(
//             <EquifaxPdfReport
//               equifaxDetails={equifaxResponse.data.equifaxdetails}
//               panNum={equifaxResponse.data.pan_num}
//             />
//           ).toBlob();
//           const url = URL.createObjectURL(blob);
//           window.open(url, "_blank");
//         } catch (pdfError) {
//           console.error("Error generating PDF: ", pdfError);
//           setError("Error generating PDF. Please try again.");
//         }
//       }
//     } catch (err) {
//       setError("Server Error, Please try later");
//     }
//   };

//   useEffect(() => {
//     const domain = localStorage.getItem("domain");
//     const fetchIdTypes = async () => {
//       try {
//         const { data } = await axios.get(`${domain}/idtypes`);
//         setIdTypes(data);
//       } catch (err) {
//         console.error("Error fetching ID types:", err);
//       }
//     };

//     fetchIdTypes();
//   }, []);

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg p-6">
//         <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ecredit API</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="fname"
//               value={formData.fname}
//               onChange={handleChange}
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Select ID Type</label>
//             <div className="border border-gray-300 rounded w-full p-2">
//               {idTypes.map((type) => (
//                 <div key={type.value} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={type.value}
//                     checked={formData.id_type.includes(type.value)}
//                     onChange={() => handleIdTypeChange(type.value)}
//                     className="mr-2"
//                   />
//                   <label htmlFor={type.value} className="text-gray-700">
//                     {type.name}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {formData.id_type.includes("M") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Aadhar Card Number</label>
//               <input
//                 type="text"
//                 name="aadhar_num"
//                 value={formData.aadhar_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("T") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">PAN Card Number</label>
//               <input
//                 type="text"
//                 name="pan_num"
//                 value={formData.pan_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("DL") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Driving Licence Number</label>
//               <input
//                 type="text"
//                 name="driving_num"
//                 value={formData.driving_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("V") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Voter ID</label>
//               <input
//                 type="text"
//                 name="voter_num"
//                 value={formData.voter_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("P") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Passport Number</label>
//               <input
//                 type="text"
//                 name="passport_num"
//                 value={formData.passport_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//           >
//             Send OTP
//           </button>
//         </form>

//         {modalVisible && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded p-6 shadow-lg">
//               <h5 className="text-lg font-bold">OTP has been Sent</h5>
//               <input
//                 type="number"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="border border-gray-300 p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//               <div className="mt-4">
//                 <button
//                   onClick={handleOtpVerify}
//                   className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//                 >
//                   Verify OTP
//                 </button>
//                 <button
//                   onClick={() => setModalVisible(false)}
//                   className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition ml-2"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {response && (
//           <div className="mt-4">
//             <h4 className="font-bold">Response:</h4>
//             <pre>{JSON.stringify(response, null, 2)}</pre>
//           </div>
//         )}
//         {error && <div className="text-red-500 mt-2">{error}</div>}
//       </div>
//     </div>
//   );
// };

// export default Equifax;

// 3rd code
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { pdf } from "@react-pdf/renderer";
import EquifaxPdfReport from "./EquifaxPdfReport";
import EquifaxPdfReportError from "./EquifaxPdfReportError";

const Equifax = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone_number: "",
    dob: "",
    id_type: [],
    aadhar_num: "",
    pan_num: "",
    driving_num: "",
    voter_num: "",
    passport_num: "",
  });

  const [otp, setOtp] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [idTypes, setIdTypes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIdTypeChange = (id) => {
    setFormData((prev) => {
      const updatedIdTypes = prev.id_type.includes(id)
        ? prev.id_type.filter((type) => type !== id)
        : [...prev.id_type, id];
      return { ...prev, id_type: updatedIdTypes };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const domain = localStorage.getItem("domain");
    setError("");

    const token = Cookies.get("authToken");

    try {
      const otpResponse = await axios.post(`${domain}/sendotp`, {
        phone: formData.phone_number,
        token: token,
      });

      // console.log("otpResponse: ", otpResponse);

      if (otpResponse.data.success) {
        setModalVisible(true);
      } else {
        alert(
          otpResponse.data.duplicate || "OTP sending failed. Please try later."
        );
      }
    } catch (err) {
      setError("Server Error, Please try later");
    }
  };

  const handleOtpVerify = async () => {
    const domain = localStorage.getItem("domain");
    const token = Cookies.get("authToken");

    try {
      // Verify OTP
      const verifyResponse = await axios.post(`${domain}/verifyotp`, {
        otp_code: otp,
        phone: formData.phone_number,
        token: token,
      });

      // console.log("verifyResponse: ", verifyResponse);

      if (verifyResponse.data.success) {
        // OTP verified successfully, now make request to Equifax
        setModalVisible(false);
        const equifaxResponse = await axios.post(`${domain}/equifax`, {
          ...formData,
          token: token,
        });
      //   const equifaxResponse = await axios.post(`${domain}/ecredit`, formData, {
      //     headers: {
      //         AccessToken: token, // Add the token here
      //     }
      // });

        console.log("equifaxResponse: ", equifaxResponse);

        if (equifaxResponse && equifaxResponse.status === 200) {
          setModalVisible(false);
          if(equifaxResponse.data.equifaxdetails){
            try {
              const blob = await pdf(
                <EquifaxPdfReportError
                  equifaxDetails={equifaxResponse.data.equifaxdetails}
                  panNum={equifaxResponse.data.pan_num}
                />
              ).toBlob();
              const url = URL.createObjectURL(blob);
              window.open(url, "_blank");
            } catch (pdfError) {
              console.error("Error generating PDF: ", pdfError);
              setError("Error generating PDF. Please try again.");
            }
          }
          else{
            try {
              const blob = await pdf(
                <EquifaxPdfReport
                  myarray={equifaxResponse.data.myarray}
                  equifax={equifaxResponse.data.equifax}
                />
              ).toBlob();
              const url = URL.createObjectURL(blob);
              window.open(url, "_blank");
            } catch (pdfError) {
              console.error("Error generating PDF: ", pdfError);
              setError("Error generating PDF. Please try again.");
            }
          }

          
        } else {
          alert("OTP does not match");
        }
      }
    } catch (err) {
      setError("Error verifying OTP or making Equifax request");
    }
  };

  useEffect(() => {
    const domain = localStorage.getItem("domain");
    const fetchIdTypes = async () => {
      try {
        const { data } = await axios.get(`${domain}/idtypes`);
        // console.log('idtypes: ',data);
        setIdTypes(data);
      } catch (err) {
        console.error("Error fetching ID types:", err);
      }
    };

    fetchIdTypes();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Ecredit API
        </h3>
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
            <div className="border border-gray-300 rounded w-full p-2">
              {idTypes.map((type) => (
                <div key={type.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={type.value}
                    checked={formData.id_type.includes(type.value)}
                    onChange={() => handleIdTypeChange(type.value)}
                    className="mr-2"
                  />
                  <label htmlFor={type.value} className="text-gray-700">
                    {type.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {formData.id_type.includes("M") && (
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
          {formData.id_type.includes("T") && (
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
          {formData.id_type.includes("DL") && (
            <div className="mb-4">
              <label className="block text-gray-700">
                Driving Licence Number
              </label>
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
          {formData.id_type.includes("V") && (
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
          {formData.id_type.includes("P") && (
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

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Send OTP
          </button>
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
                <button
                  onClick={handleOtpVerify}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Verify OTP
                </button>
                <button
                  onClick={() => setModalVisible(false)}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition ml-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {response && (
          <div className="mt-4">
            <h4 className="font-bold">Response:</h4>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default Equifax;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// const Equifax = () => {
//   const [formData, setFormData] = useState({
//     fname: "VIJAY",
//     lname: "MEHTA",
//     phone_number: "7830645084",
//     dob: "",
//     id_type: [],
//     aadhar_num: "",
//     pan_num: "",
//     driving_num: "",
//     voter_num: "",
//     passport_num: "",
//   });

//   const [idTypes, setIdTypes] = useState([]);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleIdTypeChange = (id) => {
//     setFormData((prev) => {
//       const updatedIdTypes = prev.id_type.includes(id)
//         ? prev.id_type.filter((type) => type !== id)
//         : [...prev.id_type, id];
//       return { ...prev, id_type: updatedIdTypes };
//     });
//   };

//   useEffect(() => {
//     const domain = localStorage.getItem("domain");
//     const fetchIdTypes = async () => {
//       try {
//         const { data } = await axios.get(`${domain}/idtypes`);
//         setIdTypes(data);
//       } catch (err) {
//         console.error("Error fetching ID types:", err);
//         setError("Error fetching ID types");
//       }
//     };

//     fetchIdTypes();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg p-6">
//         <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ecredit API</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="fname"
//               value={formData.fname}
//               onChange={handleChange}
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Select ID Type</label>
//             <div className="border border-gray-300 rounded w-full p-2">
//               {idTypes.map((type) => (
//                 <div key={type.value} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={type.value}
//                     checked={formData.id_type.includes(type.value)}
//                     onChange={() => handleIdTypeChange(type.value)}
//                     className="mr-2"
//                   />
//                   <label htmlFor={type.value} className="text-gray-700">
//                     {type.name}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Conditional input fields based on selected ID types */}
//           {formData.id_type.includes("M") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Aadhar Card Number</label>
//               <input
//                 type="text"
//                 name="aadhar_num"
//                 value={formData.aadhar_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("T") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">PAN Card Number</label>
//               <input
//                 type="text"
//                 name="pan_num"
//                 value={formData.pan_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("DL") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Driving Licence Number</label>
//               <input
//                 type="text"
//                 name="driving_num"
//                 value={formData.driving_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("V") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Voter ID</label>
//               <input
//                 type="text"
//                 name="voter_num"
//                 value={formData.voter_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}
//           {formData.id_type.includes("P") && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Passport Number</label>
//               <input
//                 type="text"
//                 name="passport_num"
//                 value={formData.passport_num}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//           >
//             Submit
//           </button>
//         </form>

//         {error && <div className="text-red-500 mt-2">{error}</div>}
//       </div>
//     </div>
//   );
// };

// export default Equifax;













// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const domain = localStorage.getItem("domain");
//   const token = Cookies.get("authToken");

//   try {
//     const equifaxResponse = await axios.post(`${domain}/equifax`, {
//       ...formData,
//       token: token,
//       headers: {AccessToken: token}
//     });

//     // const equifaxResponse = await axios.post(`${domain}/ecredit`, formData, {
//     //   headers: { AccessToken: token }
//     // });
    
  
//     console.log("equifaxResponse: ", equifaxResponse);
  
//     if (equifaxResponse && equifaxResponse.status === 200) {
//       setModalVisible(false);
      
//       if (equifaxResponse.data.equifax && equifaxResponse.data.myarray) {
//         const blob = await pdf(
//           <EquifaxPdfReport
//             myarray={equifaxResponse.data.myarray}
//             equifax={equifaxResponse.data.equifax}
//           />
//         ).toBlob();
//         const url = URL.createObjectURL(blob);
//         window.open(url, "_blank");
//         // const blob = await pdf(
//         //   <EquifaxPdfReportError
//         //     equifaxDetails={equifaxResponse.data.equifaxdetails}
//         //     panNum={equifaxResponse.data.pan_num}
//         //   />
//         // ).toBlob();
//         // const url = URL.createObjectURL(blob);
//         // window.open(url, "_blank");
//       } else {
//         // const blob = await pdf(
//         //   <EquifaxPdfReport
//         //     myarray={equifaxResponse.data.myarray}
//         //     equifax={equifaxResponse.data.equifax}
//         //   />
//         // ).toBlob();
//         // const url = URL.createObjectURL(blob);
//         // window.open(url, "_blank");
//         const blob = await pdf(
//           <EquifaxPdfReportError
//             equifaxDetails={equifaxResponse.data.equifaxdetails}
//             panNum={equifaxResponse.data.pan_num}
//           />
//         ).toBlob();
//         const url = URL.createObjectURL(blob);
//         window.open(url, "_blank");
//       }
//     }
//   } catch (error) {
//     console.error("Error occurred: ", error);
//     setError("Consumer Details Not Found");
//   }
  

  // const domain = localStorage.getItem("domain");
  // setError("");

  // const token = Cookies.get("authToken");

  // try {
  //   const otpResponse = await axios.post(`${domain}/sendotp`, {
  //     phone: formData.phone_number,
  //     token: token,
  //   });

  //   console.log("otpResponse: ", otpResponse);

  //   if (otpResponse.data.success) {
  //     setModalVisible(true);
  //   } else {
  //     alert(
  //       otpResponse.data.duplicate || "OTP sending failed. Please try later."
  //     );
  //   }
  // } catch (err) {
  //   setError("Server Error, Please try later");
  // }
// };