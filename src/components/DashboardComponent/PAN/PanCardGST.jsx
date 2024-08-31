// import React, { Component } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import js-cookie for handling cookies

// class PanCardGST extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             panNumber: '',
//             panCardInfo: null, // To store PAN card information
//             error: null,     // To store error message
//         };
//     }

//     handleInputChange = (event) => {
//         this.setState({ panNumber: event.target.value });
//     };

//     handleVerifyClick = async () => {
//         const { panNumber } = this.state;
//         const accessToken = Cookies.get('authToken'); // Fetch access token from cookies
//         let response;

//         if (!panNumber) {
//             this.setState({ error: 'Please enter a PAN number' });
//             return;
//         }

//         // Prepare form data
//         const formData = new FormData();
//         formData.append('pan_number', panNumber);

//         try {
//             response = await axios.post(
//                 'http://regtechapi.in/api/pancard_details',
//                 formData,
//                 {
//                     headers: {
//                         'AccessToken': accessToken,
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 }
//             );

//             console.log('API Response:', response.data);

//             // Assuming the API returns data with keys 'fullName', 'panNumber', and 'category'
//             if (response.data.pancard.data) {
//                 this.setState({
//                     panCardInfo: response.data.pancard.data,
//                     error: null,
//                 });
//             }
//         } catch (error) {
//             this.setState({
//                 panCardInfo: null,
//                 error: response.data.message,
//             });
//         }
//     };

//     render() {
//         const { panNumber, panCardInfo, error } = this.state;

//         return (
//             <div className="flex flex-col items-center min-h-screen bg-white font-montserrat">
//                 <div className="rounded-lg shadow-lg mt-6 text-black md:w-1/2 border-[1.5px] border-[#00acc1]">
//                     <div className="flex justify-between mb-6 bg-teal-400 px-6 py-4 text-white rounded-tl-lg rounded-tr-lg">
//                         <h1 className="text-xl font-semibold">PAN To GST</h1>
//                         <button
//                             onClick={this.handleVerifyClick}
//                             className="w-fit bg-white transition-all text-teal-400 hover:text-white p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-white"
//                         >
//                             PAN API
//                         </button>
//                     </div>
//                     <div className="mb-4 w-3/4 mx-auto">
//                         {error && <div className="bg-red-500 w-full px-2 py-2 text-white text-sm mb-2">{error}</div>}
//                         <label className="block text-lg">Pan Number</label>
//                         <input
//                             type="text"
//                             value={panNumber}
//                             onChange={this.handleInputChange}
//                             placeholder="Ex: ABCDE1234N"
//                             className="w-full p-2 border border-teal-400 rounded"
//                         />
//                     </div>
//                     <div className='flex justify-center'>
//                         <button
//                             onClick={this.handleVerifyClick}
//                             className="w-fit px-6 mt-4 mb-4 bg-teal-400 transition-all text-white hover:text-teal-500 p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-[#00acc1]"
//                         >
//                             Verify
//                         </button>
//                     </div>
//                 </div>

//                 {/* Display PAN card information below */}
//                 {panCardInfo &&
//                     <div className="mt-4 md:w-1/2 rounded-lg border-[1.5px] border-[#00acc1]">
//                         {panCardInfo && (
//                             <div className="bg-white rounded-lg text-black">
//                                 <h2 className="text-lg px-3 py-3 bg-green-500 rounded-tl-lg rounded-tr-lg text-white font-semibold">PAN Card Details</h2>
//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Full Name:</strong>
//                                     {panCardInfo.fullName ? panCardInfo.fullName : 'null'}

//                                 </p>
//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>PAN Number:</strong>
//                                     {panCardInfo.panNumber ? panCardInfo.panNumber : 'null'}

//                                 </p>

//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>is Valid:</strong>
//                                     {panCardInfo.isValid === true ? 'True' : 'False'}

//                                 </p>
//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>First Name:</strong>
//                                     {panCardInfo.firstName ? panCardInfo.firstName : 'null'}

//                                 </p>

//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Middle Name:</strong>
//                                     {panCardInfo.middleName ? panCardInfo.middleName : 'null'}

//                                 </p>
//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Last Name:</strong>
//                                     {panCardInfo.lastName ? panCardInfo.lastName : 'null'}

//                                 </p>

//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Pan Status Code:</strong>
//                                     {panCardInfo.panStatusCode ? panCardInfo.panStatusCode : 'null'}

//                                 </p>

//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Pan Status:</strong>
//                                     {panCardInfo.panStatus ? panCardInfo.panStatus : 'null'}

//                                 </p>

//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Aadhar Seeding Status:</strong>
//                                     {panCardInfo.aadhaarSeedingStatus === true ? 'True' : 'False'}

//                                 </p>

//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Aadhar Seeding Status Code:</strong>
//                                     {panCardInfo.aadhaarSeedingStatusCode ? panCardInfo.aadhaarSeedingStatusCode : 'null'}

//                                 </p>
//                                 <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Last updatedOn:</strong>
//                                     {panCardInfo.lastUpdatedOn ? panCardInfo.lastUpdatedOn : 'null'}

//                                 </p>
//                             </div>
//                         )}
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

// export default PanCardGST;























// import React, { Component } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import js-cookie for handling cookies

// class PanCardGST extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       panNumber: '',
//       gstDetails: null, // To store GST details
//       error: null,     // To store error message
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ panNumber: event.target.value });
//   };

//   handleVerifyClick = async () => {
//     const { panNumber } = this.state;
//     const accessToken = Cookies.get('authToken'); // Fetch access token from cookies

//     if (!panNumber) {
//       this.setState({ error: 'Please enter a PAN number' });
//       return;
//     }

//     try {
//       // Create a FormData object and append the PAN number
//       const formData = new FormData();
//       formData.append('pancard_number', panNumber);

//       // Request GST details
//       const gstResponse = await axios.post(
//         'http://regtechapi.in/api/pantogst', // Replace with your GST API URL
//         formData,
//         {
//           headers: {
//             'AccessToken': accessToken,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       // Process GST details response
//       if (gstResponse.data.response) {
//         const mergedData = gstResponse.data.response.map(gst => {
//           // Add address information to GST details
//           return {
//             ...gst,
//             address: gst.pradr ? gst.pradr.addr : {},
//           };
//         });
//         this.setState({
//           gstDetails: mergedData,
//           error: null,
//         });
//       }

//     } catch (error) {
//       this.setState({
//         gstDetails: null,
//         error: error.response ? error.response.data.message : 'An error occurred',
//       });
//     }
//   };

//   render() {
//     const { panNumber, gstDetails, error } = this.state;

//     return (
//       <div className="flex flex-col items-center min-h-screen bg-white font-montserrat">
//         <div className="rounded-lg shadow-lg mt-6 text-black md:w-3/4 border-[1.5px] border-[#00acc1]">
//           <div className="flex justify-between mb-6 bg-teal-400 px-6 py-4 text-white rounded-tl-lg rounded-tr-lg">
//             <h1 className="text-xl font-semibold">PAN To GST</h1>
//             <button
//               onClick={this.handleVerifyClick}
//               className="w-fit bg-white transition-all text-teal-400 hover:text-white p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-white"
//             >
//               PAN API
//             </button>
//           </div>
//           <div className="mb-4 w-3/4 mx-auto">
//             {error && <div className="bg-red-500 w-full px-2 py-2 text-white text-sm mb-2">{error}</div>}
//             <label className="block text-lg">Pan Number</label>
//             <input
//               type="text"
//               value={panNumber}
//               onChange={this.handleInputChange}
//               placeholder="Ex: ABCDE1234N"
//               className="w-full p-2 border border-teal-400 rounded"
//             />
//           </div>
//           <div className='flex justify-center'>
//             <button
//               onClick={this.handleVerifyClick}
//               className="w-fit px-6 mt-4 mb-4 bg-teal-400 transition-all text-white hover:text-teal-500 p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-[#00acc1]"
//             >
//               Verify
//             </button>
//           </div>
//         </div>

//         {/* Display GST details below */}
//         {gstDetails && (
//           <div className="container mx-auto px-4 py-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-auto">
//               {/* Main Data Table */}
//               <div className="">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">stjCd</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LegalName</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stj</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dty</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adadr</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cxdt</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GSTIN</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nba</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LastUpdate</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RegisterDate</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ctb</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STS</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TradeName</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CtjCd</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ctj</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EinvoiceStatus</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     <tr>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DL101</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SELHUVO LOHE</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ward 101</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regular</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">null</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07BFAPL9762A1ZK</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Retail Business</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24/05/2024</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18/12/2021</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Proprietorship</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SEMCO CORPORATION</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ZJ0304</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">RANGE - 59</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               {/* Address Table */}
//               <div className="flex flex-col">
//                 <div className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Address
//                 </div>
//                 <div className="mt-2">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BNM</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ST</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BNO</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latitude</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Locality</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pincode</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LandMark</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stcd</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Geocodelvl</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FlateNo</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Longitude</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NTR</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       <tr>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">F/F NIPUN APPTT</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NEW DELHI</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">MEHRAULI</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PROP NO 889 W.NO 8 FLAT NO 3</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">South West Delhi</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">77.179549</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">110030</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Delhi</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NA</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28.514291</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Retail Business, Office / Sale Office, Warehouse / Depot, Wholesale Business</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default PanCardGST;
















// import React, { Component } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import js-cookie for handling cookies

// class PanCardGST extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       panNumber: '',
//       gstDetails: null, // To store GST details
//       error: null,     // To store error message
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ panNumber: event.target.value });
//   };

//   handleVerifyClick = async () => {
//     const { panNumber } = this.state;
//     const accessToken = Cookies.get('authToken'); // Fetch access token from cookies

//     if (!panNumber) {
//       this.setState({ error: 'Please enter a PAN number' });
//       return;
//     }

//     try {
//       // Create a FormData object and append the PAN number
//       const formData = new FormData();
//       formData.append('pancard_number', panNumber);

//       // Request GST details
//       const gstResponse = await axios.post(
//         'http://regtechapi.in/api/pantogst', // Replace with your GST API URL
//         formData,
//         {
//           headers: {
//             'AccessToken': accessToken,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       console.log('GST Response:', gstResponse.data);

//       // Process GST details response
//       this.setState({
//         gstDetails: gstResponse.data.response,
//         error: null,
//       });

//     } catch (error) {
//       this.setState({
//         gstDetails: null,
//         error: error.response ? error.response.data.message : 'An error occurred',
//       });
//     }
//   };

//   render() {
//     const { panNumber, gstDetails, error } = this.state;

//     return (
//       <div className="flex flex-col items-center min-h-screen bg-white font-montserrat">
//         <div className="rounded-lg shadow-lg mt-6 text-black md:w-3/4 border-[1.5px] border-[#00acc1]">
//           <div className="flex justify-between mb-6 bg-teal-400 px-6 py-4 text-white rounded-tl-lg rounded-tr-lg">
//             <h1 className="text-xl font-semibold">PAN To GST</h1>
//             <button
//               onClick={this.handleVerifyClick}
//               className="w-fit bg-white transition-all text-teal-400 hover:text-white p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-white"
//             >
//               PAN API
//             </button>
//           </div>
//           <div className="mb-4 w-3/4 mx-auto">
//             {error && <div className="bg-red-500 w-full px-2 py-2 text-white text-sm mb-2">{error}</div>}
//             <label className="block text-lg">Pan Number</label>
//             <input
//               type="text"
//               value={panNumber}
//               onChange={this.handleInputChange}
//               placeholder="Ex: ABCDE1234N"
//               className="w-full p-2 border border-teal-400 rounded"
//             />
//           </div>
//           <div className='flex justify-center'>
//             <button
//               onClick={this.handleVerifyClick}
//               className="w-fit px-6 mt-4 mb-4 bg-teal-400 transition-all text-white hover:text-teal-500 p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-[#00acc1]"
//             >
//               Verify
//             </button>
//           </div>
//         </div>

//         {/* Display GST details below */}
//         {gstDetails && (
//           <div className="container mx-auto px-4 py-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-auto">
//               {/* Main Data Table */}
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">stjCd</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LegalName</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stj</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dty</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GSTIN</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nba</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LastUpdate</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RegisterDate</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ctb</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STS</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TradeName</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CtjCd</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ctj</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EinvoiceStatus</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">

//                     <tr

//                     >

//                       <td>main table</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               {/* Address Table */}
//               <div className="overflow-x-auto mt-4">
//                 <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BNM</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ST</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BNO</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PinCode</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DataState</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DataCity</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DataPin</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     <tr

//                     >
//                       <td>address</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default PanCardGST;















import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for handling cookies

class PanCardGST extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panNumber: '',
      gstDetails: null, // To store GST details
      error: null,     // To store error message
    };
  }

  handleInputChange = (event) => {
    this.setState({ panNumber: event.target.value });
  };

  handleVerifyClick = async () => {
    const { panNumber } = this.state;
    const accessToken = Cookies.get('authToken'); // Fetch access token from cookies

    if (!panNumber) {
      this.setState({ error: 'Please enter a PAN number' });
      return;
    }

    try {
      // Create a FormData object and append the PAN number
      const formData = new FormData();
      formData.append('pancard_number', panNumber);

      // Request GST details
      const gstResponse = await axios.post(
        'http://regtechapi.in/api/pantogst', // Replace with your GST API URL
        formData,
        {
          headers: {
            'AccessToken': accessToken,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('GST Response:', gstResponse.data);

      // Process GST details response
      this.setState({
        gstDetails: gstResponse.data.response,
        error: null,
      });

    } catch (error) {
      this.setState({
        gstDetails: null,
        error: error.response ? error.response.data.message : 'An error occurred',
      });
    }
  };

  render() {
    const { panNumber, gstDetails, error } = this.state;

    return (
      <div className="flex flex-col items-center min-h-screen bg-white font-montserrat">
        <div className="rounded-lg shadow-lg mt-6 text-black md:w-3/4 border-[1.5px] border-[#00acc1]">
          <div className="flex justify-between mb-6 bg-teal-400 px-6 py-4 text-white rounded-tl-lg rounded-tr-lg">
            <h1 className="text-xl font-semibold">PAN To GST</h1>
            <button
              onClick={this.handleVerifyClick}
              className="w-fit bg-white transition-all text-teal-400 hover:text-white p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-white"
            >
              PAN API
            </button>
          </div>
          <div className="mb-4 w-3/4 mx-auto">
            {error && <div className="bg-red-500 w-full px-2 py-2 text-white text-sm mb-2">{error}</div>}
            <label className="block text-lg">Pan Number</label>
            <input
              type="text"
              value={panNumber}
              onChange={this.handleInputChange}
              placeholder="Ex: ABCDE1234N"
              className="w-full p-2 border border-teal-400 rounded"
            />
          </div>
          <div className='flex justify-center'>
            <button
              onClick={this.handleVerifyClick}
              className="w-fit px-6 mt-4 mb-4 bg-teal-400 transition-all text-white hover:text-teal-500 p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-[#00acc1]"
            >
              Verify
            </button>
          </div>
        </div>

        {/* Display GST details below */}
        {/* {gstDetails && ( */}
        <div className="container mx-auto px-4 py-6 overflow-x-auto">
          <table className="flex min-w-full divide-y divide-gray-200 border border-gray-300">
            <div>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">stjCd</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LegalName</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stj</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GSTIN</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nba</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LastUpdate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RegisterDate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ctb</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TradeName</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CtjCd</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ctj</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EinvoiceStatus</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                {/* Data rows */}
                <td>data</td>
                {/* ... other data cells */}
              </tr>

            </tbody></div>
            <tr>
              <td className='w-full'>Address</td>
              {/* <td colSpan="13"> */}
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BNM</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ST</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BNO</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PinCode</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DataState</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DataCity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DataPin</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td>address</td>
                      <td>addressssess</td>
                      <td>addresss</td>
                      {/* ... other address cells */}
                    </tr>
                  </tbody>
                </table>
              {/* </td> */}
            </tr>
          </table>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default PanCardGST;
