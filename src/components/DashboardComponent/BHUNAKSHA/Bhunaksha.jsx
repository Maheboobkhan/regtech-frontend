// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Cookies from "js-cookie";

// const StateForm = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [response, setResponse] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     br_district: "",
//     br_subdiv: "",
//     br_circle: "",
//     br_mauza: "",
//     br_surveytype: "",
//     br_mapinstance: "",
//     br_sheet_number: "",
//     br_plot_number: "",
//     jhar_district: "",
//     jhar_circle: "",
//     jhar_halka: "",
//     jhar_mauza: "",
//     jhar_sheet_number: "",
//     jhar_plot_number: "",
//     up_district: "",
//     up_tehsil: "",
//     up_village: "",
//     up_plot_number: "",
//     chha_distract: "",
//     chha_tehsil: "",
//     chha_ri_circle: "",
//     chha_village: "",
//     chha_plot_number: "",
//     ra_district: "",
//     ra_tehsil: "",
//     ra_ri_circle: "",
//     ra_ri_halkas: "",
//     ra_sheet_number: "",
//     ra_village: "",
//     ra_plot_number: "",
//     laksh_district: "",
//     laksh_taluk: "",
//     laksh_survey: "",
//     laksh_village: "",
//     laksh_plot_number: "",
//     ker_district: "",
//     ker_taluk: "",
//     ker_village: "",
//     ker_blockno: "",
//     ker_survey_number: "",
//     ker_subdivno: "",
//     goa_district: "",
//     goa_taluka: "",
//     goa_sheet_number: "",
//     goa_village: "",
//     goa_plot_number: "",
//     odi_district: "",
//     odi_tehsil: "",
//     odi_ri_circle: "",
//     odi_sheetnumber: "",
//     odi_village: "",
//     odi_plot_number: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     console.log(formData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const prefix =
//       selectedState === "bihar"
//         ? "br"
//         : selectedState === "jharkhand"
//         ? "jhar"
//         : selectedState === "uttar_pradesh"
//         ? "up"
//         : selectedState === "chhattisgarh"
//         ? "chha"
//         : selectedState === "rajasthan"
//         ? "ra"
//         : selectedState === "lakshadweep"
//         ? "laksh"
//         : selectedState === "kerala"
//         ? "ker"
//         : selectedState === "goa"
//         ? "goa"
//         : selectedState === "odisha"
//         ? "odi"
//         : "";

//     // Transform formData to match the desired format
//     const formattedData = {
//       state: selectedState,
//       District: formData[`${prefix}_district`] || "",
//       Subdiv: formData[`${prefix}_subdiv`] || "",
//       Circle: formData[`${prefix}_circle`] || "",
//       Mauza: formData[`${prefix}_mauza`] || "",
//       Surveytype: formData[`${prefix}_surveytype`] || "",
//       Mapinstance: formData[`${prefix}_mapinstance`] || "",
//       sheetno: formData[`${prefix}_sheet_number`] || "",
//       Sheetno: formData[`${prefix}_sheet_number`] || "",
//       Plotno: formData[`${prefix}_plot_number`] || "",
//       Halka: formData[`${prefix}_plot_number`] || "",
//       Tehsil: formData[`${prefix}_tehsil`] || "",
//       Village: formData[`${prefix}_village`] || "",
//       Ri: formData[`${prefix}_ri_circle`] || "",
//       Halkas: formData[`${prefix}_ri_halkas`] || "",
//       Taluk: formData[`${prefix}_taluk`] || "",
//       Survey: formData[`${prefix}_survey`] || "",
//       Blockno: formData[`${prefix}_blockno`],
//       Surveyno: formData[`${prefix}_survey_number`],
//       Subdivno: formData[`${prefix}_subdivno`],
//     };

//     for (const key in formattedData) {
//       if (formattedData.hasOwnProperty(key)) {
//         console.log(`${key}: ${formattedData[key]}`);
//       }
//     }

//     e.preventDefault();
//     const token = Cookies.get("authToken");

//     if (!token) {
//       return;
//     }

//     setLoading(true);

//     axios
//       .post("http://regtechapi.in/api/bhunaksha", formattedData, {
//         headers: {
//           AccessToken: token, // Send the token in the header
//         },
//       })
//       .then((response) => {
//         console.log(response);
//         setResponse(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-[#00acc1] p-4 flex justify-between">
//         <h3 className="text-xl font-semibold text-white">Bhunaksha</h3>
//         <Link
//           to="/dashboard/kyc/api/bhunakasha"
//           className="text-white underline hover:text-blue-100"
//         >
//           Bhunaksha APIs
//         </Link>
//       </div>
//       {loading && (
//         <div className="flex justify-center items-center mb-4">
//           <div className="text-xl text-blue-300">
//             Fetching Bhunaksha details
//             <span className="text-blue-300">please wait...</span>
//           </div>
//         </div>
//       )}

//       {/* <div className="mb-4 mt-8 flex flex-col items-center">
//         <label
//           htmlFor="state"
//           className="block text-2xl font-medium text-gray-700"
//         >
//           Select State
//         </label>
//         <select
//           id="state"
//           name="state"
//           className="form-select mt-1 block w-1/2 bg-blue-200 cursor-pointer border border-blue-300 rounded-lg shadow-sm py-4 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
//           value={selectedState}
//           onChange={(e) => setSelectedState(e.target.value)}
//         >
//           <option value="">--Select State--</option>
//           <option value="bihar">Bihar</option>
//           <option value="jharkhand">Jharkhand</option>
//           <option value="uttar_pradesh">Uttar Pradesh</option>
//           <option value="chhattisgarh">Chhattisgarh</option>
//           <option value="rajasthan">Rajasthan</option>
//           <option value="lakshadweep">Lakshadweep</option>
//           <option value="kerala">Kerala</option>
//           <option value="goa">Goa</option>
//           <option value="odisha">Odisha</option>
//         </select>
//       </div> */}

//       <div className="mb-4 mt-8 flex flex-col items-center">
//         <label
//           htmlFor="state"
//           className="block text-2xl font-medium text-gray-700"
//         >
//           Select State
//         </label>
//         <select
//           id="state"
//           name="state"
//           className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-4 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
//           value={selectedState}
//           onChange={(e) => setSelectedState(e.target.value)}
//         >
//           <option value="" className="text-gray-500">
//             --Select State--
//           </option>
//           <option value="bihar">Bihar</option>
//           <option value="jharkhand">Jharkhand</option>
//           <option value="uttar_pradesh">Uttar Pradesh</option>
//           <option value="chhattisgarh">Chhattisgarh</option>
//           <option value="rajasthan">Rajasthan</option>
//           <option value="lakshadweep">Lakshadweep</option>
//           <option value="kerala">Kerala</option>
//           <option value="goa">Goa</option>
//           <option value="odisha">Odisha</option>
//         </select>
//       </div>

//       <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
//         {selectedState === "bihar" && (
//           <div
//             id="bihar_info"
//             className="mb-6 space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Bihar Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "br_district",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Subdiv",
//                   name: "br_subdiv",
//                   placeholder: "Enter Subdiv",
//                 },
//                 {
//                   label: "Circle",
//                   name: "br_circle",
//                   placeholder: "Enter Circle",
//                 },
//                 {
//                   label: "Mauza",
//                   name: "br_mauza",
//                   placeholder: "Enter Mauza",
//                 },
//                 {
//                   label: "Survey Type",
//                   name: "br_surveytype",
//                   placeholder: "Enter Survey Type",
//                 },
//                 {
//                   label: "Mapinstance",
//                   name: "br_mapinstance",
//                   placeholder: "Enter Mapinstance",
//                 },
//                 {
//                   label: "Sheet Number",
//                   name: "br_sheet_number",
//                   placeholder: "Enter Sheet Number",
//                 },
//                 {
//                   label: "Plot Number",
//                   name: "br_plot_number",
//                   placeholder: "Enter Plot Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>
//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "jharkhand" && (
//           <div id="jharkhand_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="jhar_district"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.jhar_district}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Circle</label>
//             <input
//               type="text"
//               name="jhar_circle"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Circle"
//               value={formData.jhar_circle}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Halka</label>
//             <input
//               type="text"
//               name="jhar_halka"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Halka"
//               value={formData.jhar_halka}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Mauza</label>
//             <input
//               type="text"
//               name="jhar_mauza"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Mauza"
//               value={formData.jhar_mauza}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Sheet Number</label>
//             <input
//               type="text"
//               name="jhar_sheet_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Sheet Number"
//               value={formData.jhar_sheet_number}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Plot Number</label>
//             <input
//               type="text"
//               name="jhar_plot_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Plot Number"
//               value={formData.jhar_plot_number}
//               onChange={handleInputChange}
//             />
//           </div>
//         )} */}
//         {selectedState === "jharkhand" && (
//           <div
//             id="jharkhand_info"
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Jharkhand Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "jhar_district",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Circle",
//                   name: "jhar_circle",
//                   placeholder: "Enter Circle",
//                 },
//                 {
//                   label: "Halka",
//                   name: "jhar_halka",
//                   placeholder: "Enter Halka",
//                 },
//                 {
//                   label: "Mauza",
//                   name: "jhar_mauza",
//                   placeholder: "Enter Mauza",
//                 },
//                 {
//                   label: "Sheet Number",
//                   name: "jhar_sheet_number",
//                   placeholder: "Enter Sheet Number",
//                 },
//                 {
//                   label: "Plot Number",
//                   name: "jhar_plot_number",
//                   placeholder: "Enter Plot Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>
//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "uttar_pradesh" && (
//           <div id="uttar_pradesh_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="up_district"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.up_district}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Tehsil</label>
//             <input
//               type="text"
//               name="up_tehsil"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Tehsil"
//               value={formData.up_tehsil}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Village</label>
//             <input
//               type="text"
//               name="up_village"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Village"
//               value={formData.up_village}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Plot Number</label>
//             <input
//               type="text"
//               name="up_plot_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Plot Number"
//               value={formData.up_plot_number}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )} */}
//         {selectedState === "uttar_pradesh" && (
//           <div
//             id="uttar_pradesh_info"
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Uttar Pradesh Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "up_district",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Tehsil",
//                   name: "up_tehsil",
//                   placeholder: "Enter Tehsil",
//                 },
//                 {
//                   label: "Village",
//                   name: "up_village",
//                   placeholder: "Enter Village",
//                 },
//                 {
//                   label: "Plot Number",
//                   name: "up_plot_number",
//                   placeholder: "Enter Plot Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "chhattisgarh" && (
//           <div id="chhattisgarh_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="chha_distract"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.chha_distract}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Tehsil</label>
//             <input
//               type="text"
//               name="chha_tehsil"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Tehsil"
//               value={formData.chha_tehsil}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">RI Circle</label>
//             <input
//               type="text"
//               name="chha_ri_circle"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter RI Circle"
//               value={formData.chha_ri_circle}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Village</label>
//             <input
//               type="text"
//               name="chha_village"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Village"
//               value={formData.chha_village}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Plot Number</label>
//             <input
//               type="text"
//               name="chha_plot_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Plot Number"
//               value={formData.chha_plot_number}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )} */}
//         {selectedState === "chhattisgarh" && (
//           <div
//             id="chhattisgarh_info"
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Chhattisgarh Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "chha_distract",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Tehsil",
//                   name: "chha_tehsil",
//                   placeholder: "Enter Tehsil",
//                 },
//                 {
//                   label: "RI Circle",
//                   name: "chha_ri_circle",
//                   placeholder: "Enter RI Circle",
//                 },
//                 {
//                   label: "Village",
//                   name: "chha_village",
//                   placeholder: "Enter Village",
//                 },
//                 {
//                   label: "Plot Number",
//                   name: "chha_plot_number",
//                   placeholder: "Enter Plot Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "rajasthan" && (
//           <div id="rajasthan_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="ra_district"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.ra_district}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Tehsil</label>
//             <input
//               type="text"
//               name="ra_tehsil"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Tehsil"
//               value={formData.ra_tehsil}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">RI Circle</label>
//             <input
//               type="text"
//               name="ra_ri_circle"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter RI Circle"
//               value={formData.ra_ri_circle}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Halkas</label>
//             <input
//               type="text"
//               name="ra_ri_halkas"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Halkas"
//               value={formData.ra_ri_halkas}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Sheet Number</label>
//             <input
//               type="text"
//               name="ra_sheet_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Sheet Number"
//               value={formData.ra_sheet_number}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Village</label>
//             <input
//               type="text"
//               name="ra_village"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Village"
//               value={formData.ra_village}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Plot Number</label>
//             <input
//               type="text"
//               name="ra_plot_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Plot Number"
//               value={formData.ra_plot_number}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )} */}
//         {selectedState === "rajasthan" && (
//           <div
//             id="rajasthan_info"
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Rajasthan Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "ra_district",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Tehsil",
//                   name: "ra_tehsil",
//                   placeholder: "Enter Tehsil",
//                 },
//                 {
//                   label: "RI Circle",
//                   name: "ra_ri_circle",
//                   placeholder: "Enter RI Circle",
//                 },
//                 {
//                   label: "Halkas",
//                   name: "ra_ri_halkas",
//                   placeholder: "Enter Halkas",
//                 },
//                 {
//                   label: "Sheet Number",
//                   name: "ra_sheet_number",
//                   placeholder: "Enter Sheet Number",
//                 },
//                 {
//                   label: "Village",
//                   name: "ra_village",
//                   placeholder: "Enter Village",
//                 },
//                 {
//                   label: "Plot Number",
//                   name: "ra_plot_number",
//                   placeholder: "Enter Plot Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "lakshadweep" && (
//           <div id="lakshadweep_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="laksh_district"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.laksh_district}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Taluk</label>
//             <input
//               type="text"
//               name="laksh_taluk"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Taluk"
//               value={formData.laksh_taluk}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Survey</label>
//             <input
//               type="text"
//               name="laksh_survey"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Survey"
//               value={formData.laksh_survey}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Village</label>
//             <input
//               type="text"
//               name="laksh_village"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Village"
//               value={formData.laksh_village}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Plot Number</label>
//             <input
//               type="text"
//               name="laksh_plot_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Plot Number"
//               value={formData.laksh_plot_number}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )} */}
//         {selectedState === "lakshadweep" && (
//           <div
//             id="lakshadweep_info"
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Lakshadweep Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "laksh_district",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Taluk",
//                   name: "laksh_taluk",
//                   placeholder: "Enter Taluk",
//                 },
//                 {
//                   label: "Survey",
//                   name: "laksh_survey",
//                   placeholder: "Enter Survey",
//                 },
//                 {
//                   label: "Village",
//                   name: "laksh_village",
//                   placeholder: "Enter Village",
//                 },
//                 {
//                   label: "Plot Number",
//                   name: "laksh_plot_number",
//                   placeholder: "Enter Plot Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "kerala" && (
//           <div id="kerala_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="ker_district"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.ker_district}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Taluk</label>
//             <input
//               type="text"
//               name="ker_taluk"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Taluk"
//               value={formData.ker_taluk}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Village</label>
//             <input
//               type="text"
//               name="ker_village"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Village"
//               value={formData.ker_village}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Block Number</label>
//             <input
//               type="text"
//               name="ker_blockno"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Block Number"
//               value={formData.ker_blockno}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Survey Number</label>
//             <input
//               type="text"
//               name="ker_survey_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Survey Number"
//               value={formData.ker_survey_number}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">
//               Sub Division Number
//             </label>
//             <input
//               type="text"
//               name="ker_subdivno"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Sub Division Number"
//               value={formData.ker_subdivno}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )} */}
//         {selectedState === "kerala" && (
//           <div
//             id="kerala_info"
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Kerala Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "ker_district",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Taluk",
//                   name: "ker_taluk",
//                   placeholder: "Enter Taluk",
//                 },
//                 {
//                   label: "Village",
//                   name: "ker_village",
//                   placeholder: "Enter Village",
//                 },
//                 {
//                   label: "Block Number",
//                   name: "ker_blockno",
//                   placeholder: "Enter Block Number",
//                 },
//                 {
//                   label: "Survey Number",
//                   name: "ker_survey_number",
//                   placeholder: "Enter Survey Number",
//                 },
//                 {
//                   label: "Sub Division Number",
//                   name: "ker_subdivno",
//                   placeholder: "Enter Sub Division Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "goa" && (
//           <div id="goa_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="goa_district"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.goa_district}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Taluka</label>
//             <input
//               type="text"
//               name="goa_taluka"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Taluka"
//               value={formData.goa_taluka}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Sheet Number</label>
//             <input
//               type="text"
//               name="goa_sheet_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Sheet Number"
//               value={formData.goa_sheet_number}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Village</label>
//             <input
//               type="text"
//               name="goa_village"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Village"
//               value={formData.goa_village}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Plot Number</label>
//             <input
//               type="text"
//               name="goa_plot_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Plot Number"
//               value={formData.goa_plot_number}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )} */}
//         {selectedState === "goa" && (
//           <div
//             id="goa_info"
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
//           >
//             <h2 className="text-xl font-semibold text-center text-[#00acc1]">
//               Goa Information
//             </h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "District",
//                   name: "goa_district",
//                   placeholder: "Enter District",
//                 },
//                 {
//                   label: "Taluka",
//                   name: "goa_taluka",
//                   placeholder: "Enter Taluka",
//                 },
//                 {
//                   label: "Sheet Number",
//                   name: "goa_sheet_number",
//                   placeholder: "Enter Sheet Number",
//                 },
//                 {
//                   label: "Village",
//                   name: "goa_village",
//                   placeholder: "Enter Village",
//                 },
//                 {
//                   label: "Plot Number",
//                   name: "goa_plot_number",
//                   placeholder: "Enter Plot Number",
//                 },
//               ].map(({ label, name, placeholder }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   <input
//                     type="text"
//                     name={name}
//                     className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
//                     placeholder={placeholder}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* {selectedState === "odisha" && (
//           <div id="odisha_info" className="mb-4">
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="odi_district"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter District"
//               value={formData.odi_district}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Tehsil</label>
//             <input
//               type="text"
//               name="odi_tehsil"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Tehsil"
//               value={formData.odi_tehsil}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">RI Circle</label>
//             <input
//               type="text"
//               name="odi_ri_circle"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter RI Circle"
//               value={formData.odi_ri_circle}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Sheet Number</label>
//             <input
//               type="text"
//               name="odi_sheetnumber"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Sheet Number"
//               value={formData.odi_sheetnumber}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Village</label>
//             <input
//               type="text"
//               name="odi_village"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Village"
//               value={formData.odi_village}
//               onChange={handleInputChange}
//             />
//             <label className="block text-sm font-medium">Plot Number</label>
//             <input
//               type="text"
//               name="odi_plot_number"
//               className="form-input mt-1 block w-full"
//               placeholder="Enter Plot Number"
//               value={formData.odi_plot_number}
//               onChange={handleInputChange}
//             />
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )} */}
//         {selectedState === "odisha" && (
//           <div
//             id="odisha_info"
//             className="mb-4 p-4 bg-white shadow-md rounded-lg"
//           >
//             <label className="block text-sm font-medium">District</label>
//             <input
//               type="text"
//               name="odi_district"
//               className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Enter District"
//               value={formData.odi_district}
//               onChange={handleInputChange}
//             />

//             <label className="block text-sm font-medium mt-4">Tehsil</label>
//             <input
//               type="text"
//               name="odi_tehsil"
//               className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Enter Tehsil"
//               value={formData.odi_tehsil}
//               onChange={handleInputChange}
//             />

//             <label className="block text-sm font-medium mt-4">RI Circle</label>
//             <input
//               type="text"
//               name="odi_ri_circle"
//               className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Enter RI Circle"
//               value={formData.odi_ri_circle}
//               onChange={handleInputChange}
//             />

//             <label className="block text-sm font-medium mt-4">
//               Sheet Number
//             </label>
//             <input
//               type="text"
//               name="odi_sheetnumber"
//               className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Enter Sheet Number"
//               value={formData.odi_sheetnumber}
//               onChange={handleInputChange}
//             />

//             <label className="block text-sm font-medium mt-4">Village</label>
//             <input
//               type="text"
//               name="odi_village"
//               className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Enter Village"
//               value={formData.odi_village}
//               onChange={handleInputChange}
//             />

//             <label className="block text-sm font-medium mt-4">
//               Plot Number
//             </label>
//             <input
//               type="text"
//               name="odi_plot_number"
//               className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Enter Plot Number"
//               value={formData.odi_plot_number}
//               onChange={handleInputChange}
//             />

//             <button
//               type="submit"
//               className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         )}
//       </form>
//       {response && response.status_code === 500 && (
//         <div className="bg-red-200 text-red-500 px-2 py-3">
//           {response.message}
//         </div>
//       )}
//       {response && response.status_code === 103 && (
//         <div className="bg-red-200 text-red-500 px-2 py-3">
//           {response.message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default StateForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Bhunaksha = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("");
  const [selectedHalka, setSelectedHalka] = useState("");
  const [selectedMauza, setSelectedMauza] = useState("");
  const [selectedSheet, setSelectedSheet] = useState("");
  const [selectedPlot, setSelectedPlot] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [selectedVilage, setSelectedVillage] = useState("");
  const [selectedRi, setSelectedRi] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const [selectedBlockno, setSelectedBlockno] = useState("");
  const [selectedSubdivno, setSelectedSubdivno] = useState("");

  const [jharkhandData, setjharkhandData] = useState([]);
  const [rajasthanData, setRajasthanData] = useState([]);
  const [lakshadweepData, setLakshadweepData] = useState([]);
  const [biharData, setBiharData] = useState([]);
  const [chhattisgarhData, setChhattisgarhData] = useState([]);
  const [keralaData, setKeralaData] = useState([]);
  const [goaData, setGoaData] = useState([]);
  const [odishaData, setOdishaData] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [responseData, setResponseData] = useState(null); // State to store response data

  useEffect(() => {
    const domain = localStorage.getItem("domain");

    fetchJharkhandData(domain);

    // fetchBiharData(domain);

    fetchChhattisgarhData(domain);

    fetchRajasthanData(domain);

    fetchLakshadweepData(domain);
    fetchKeralaData(domain);
    fetchGoaData(domain);
    fetchOdishaData(domain);
  }, []);

  const handleSubmit = async (e) => {
    const token = Cookies.get("authToken");
    e.preventDefault();
    setLoading(true); // Set loading to true before fetching data

    const requestData = {
      bhumi_type: "bhunaksha",
      State: selectedState,
      District: selectedDistrict,
      Circle: selectedCircle,
      Halka: selectedHalka,
      Mauza: selectedMauza,
      Sheetno: selectedSheet,
      Plotno: selectedPlot,
      Tehsil: selectedTehsil,
      Village: selectedVilage,
      Ri: selectedRi,
      Taluka: selectedTaluka,
      Surveyno: selectedSurvey,
      Blockno: selectedBlockno,
      Subdivno: selectedSubdivno,
    };

    console.log("Request Data:", requestData); // Log the request data

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/seachv4",
        {
          bhumi_type: "bhunaksha",
          State: selectedState,
          District: selectedDistrict,
          Circle: selectedCircle,
          Halka: selectedHalka,
          Mauza: selectedMauza,
          Sheetno: selectedSheet,
          Plotno: selectedPlot,
          Tehsil: selectedTehsil,
          Village: selectedVilage,
          Ri: selectedRi,
          Taluka: selectedTaluka,
          Blockno: selectedBlockno,
          Subdivno: selectedSubdivno,
          Surveyno: selectedSurvey,
        },
        {
          headers: { AccessToken: token },
        }
      );

      console.log("jhar: ", response);
      setResponseData(response.data); // Store response data
    } catch (error) {
      console.error("Error during the API call:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleBlocknoChange = (e) => {
    setSelectedBlockno(e.target.value);
  };

  const handleSubdivnoChange = (e) => {
    setSelectedSubdivno(e.target.value);
  };

  const handleSurveyChange = (e) => {
    setSelectedSurvey(e.target.value);
  };

  const handleTalukChange = (e) => {
    setSelectedTaluka(e.target.value);
  };

  const handleTehsilChange = (e) => {
    setSelectedTehsil(e.target.value);
  };

  const handleRiChange = (e) => {
    setSelectedRi(e.target.value);
  };

  const handleVillageChange = (e) => {
    setSelectedVillage(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleCircleChange = (e) => {
    setSelectedCircle(e.target.value);
  };

  const handleHalkaChange = (e) => {
    setSelectedHalka(e.target.value);
  };

  const handleMauzaChange = (e) => {
    setSelectedMauza(e.target.value);
  };

  const handleSheetChange = (e) => {
    setSelectedSheet(e.target.value);
  };

  const handlePlotChange = (e) => {
    setSelectedPlot(e.target.value);
  };

  // biharData
  const fetchBiharData = async (domain) => {
    const response = await axios.get(`${domain}/biharData`);
    setBiharData(response.data);
  };

  const fetchLakshadweepData = async (domain) => {
    const response = await axios.get(`${domain}/lakshadweepData`);
    setLakshadweepData(response.data);
  };

  // jharkhandData
  const fetchJharkhandData = async (domain) => {
    const response = await axios.get(`${domain}/jharkhandData`);
    console.log("jharkhandData: ", jharkhandData);
    setjharkhandData(response.data);
  };

  // chhattisgarh
  const fetchChhattisgarhData = async (domain) => {
    const response = await axios.get(`${domain}/chhattisgarhData`);
    console.log("chhatishgarhData: ", chhattisgarhData);
    setChhattisgarhData(response.data);
  };

  const fetchRajasthanData = async (domain) => {
    const response = await axios.get(`${domain}/rajasthanData`);
    setRajasthanData(response.data);
  };

  const fetchKeralaData = async (domain) => {
    const response = await axios.get(`${domain}/keralaData`);
    setKeralaData(response.data);
  };

  const fetchGoaData = async (domain) => {
    const response = await axios.get(`${domain}/goaData`);
    setGoaData(response.data);
  };

  const fetchOdishaData = async (domain) => {
    const response = await axios.get(`${domain}/odishaData`);
    setOdishaData(response.data);
  };

  const jharkhandDistricts = [
    ...new Set(jharkhandData.map((item) => item.District)),
  ];

  const biharDistricts = [...new Set(biharData.map((item) => item.District))];

  const chhattisgarhDistricts = [
    ...new Set(chhattisgarhData.map((item) => item.District)),
  ];

  const rajasthanDistricts = [
    ...new Set(rajasthanData.map((item) => item.District)),
  ];

  const lakshadweepDistricts = [
    ...new Set(lakshadweepData.map((item) => item.District)),
  ];

  const keralaDistricts = [...new Set(keralaData.map((item) => item.District))];

  const goaDistricts = [...new Set(goaData.map((item) => item.District))];

  const odishaDistricts = [...new Set(odishaData.map((item) => item.District))];

  let Tehsils;
  let RiCircles;
  let Halkas;
  let Villages;
  let Sheets;
  let Talukas;
  let Survey;

  if (selectedState === "lakshadweep") {
    Talukas = [
      ...new Set(
        lakshadweepData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Taluk)
      ),
    ];
  } else if (selectedState === "goa") {
    Talukas = [
      ...new Set(
        goaData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Taluka)
      ),
    ];
  } else if (selectedState === "kerala") {
    Talukas = [
      ...new Set(
        keralaData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Taluk)
      ),
    ];
  }

  if (selectedState === "chhattisgarh") {
    Tehsils = [
      ...new Set(
        chhattisgarhData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Tehsil)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Tehsils = [
      ...new Set(
        rajasthanData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Tehsil)
      ),
    ];
  } else if (selectedState === "odisha") {
    Tehsils = [
      ...new Set(
        odishaData
          .filter((item) => item.District === selectedDistrict)
          .map((item) => item.Tehsil)
      ),
    ];
  }

  if (selectedState === "chhattisgarh") {
    RiCircles = [
      ...new Set(
        chhattisgarhData
          .filter((item) => item.Tehsil === selectedTehsil)
          .map((item) => item.Ri)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    RiCircles = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Tehsil === selectedTehsil)
          .map((item) => item.Ri)
      ),
    ];
  } else if (selectedState === "odisha") {
    RiCircles = [
      ...new Set(
        odishaData
          .filter((item) => item.Tehsil === selectedTehsil)
          .map((item) => item.Ri)
      ),
    ];
  }

  if (selectedState === "chhattisgarh") {
    Villages = [
      ...new Set(
        chhattisgarhData
          .filter((item) => item.Ri === selectedRi)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Villages = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Halkas === selectedHalka)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "lakshadweep") {
    Villages = [
      ...new Set(
        lakshadweepData
          .filter((item) => item.Taluk === selectedTaluka)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "kerala") {
    Villages = [
      ...new Set(
        keralaData
          .filter((item) => item.Taluk === selectedTaluka)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "goa") {
    Villages = [
      ...new Set(
        goaData
          .filter((item) => item.Taluk === selectedTaluka)
          .map((item) => item.Village)
      ),
    ];
  } else if (selectedState === "odisha") {
    Villages = [
      ...new Set(
        odishaData
          .filter((item) => item.Ri === selectedRi)
          .map((item) => item.Village)
      ),
    ];
  }

  const Blocknos = [
    ...new Set(
      keralaData
        .filter((item) => item.Village === selectedVilage)
        .map((item) => item.Blockno)
    ),
  ];

  const Subdivnos = [
    ...new Set(
      keralaData
        .filter((item) => item.Surveyno === selectedSurvey)
        .map((item) => item.Blockno)
    ),
  ];

  if (selectedState === "lakshadweep") {
    Survey = [
      ...new Set(
        lakshadweepData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Surveyno)
      ),
    ];
  } else if (selectedState === "kerala") {
    Survey = [
      ...new Set(
        keralaData
          .filter((item) => item.Blockno === selectedBlockno)
          .map((item) => item.Survey)
      ),
    ];
  }

  const Circles = [
    ...new Set(
      jharkhandData
        .filter((item) => item.District === selectedDistrict)
        .map((item) => item.Circle)
    ),
  ];

  if (selectedState === "jharkhand") {
    Halkas = [
      ...new Set(
        jharkhandData
          .filter((item) => item.Circle === selectedCircle)
          .map((item) => item.Halka)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Halkas = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Ri === selectedRi)
          .map((item) => item.Halkas)
      ),
    ];
  }

  const Mauzas = [
    ...new Set(
      jharkhandData
        .filter((item) => item.Halka === selectedHalka)
        .map((item) => item.Mauza)
    ),
  ];

  if (selectedState === "jharkhand") {
    Sheets = [
      ...new Set(
        jharkhandData
          .filter((item) => item.Mauza === selectedMauza)
          .map((item) => item.Sheet)
      ),
    ];
  } else if (selectedState === "rajasthan") {
    Sheets = [
      ...new Set(
        rajasthanData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Sheet)
      ),
    ];
  } else if (selectedState === "goa") {
    Sheets = [
      ...new Set(
        goaData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Sheet)
      ),
    ];
  } else if (selectedState === "odisha") {
    Sheets = [
      ...new Set(
        odishaData
          .filter((item) => item.Village === selectedVilage)
          .map((item) => item.Sheet)
      ),
    ];
  }

  return (
    <div className="">
      <div className="bg-[#00acc1] p-4 flex justify-between mt-12">
        <h3 className="text-xl font-semibold text-white">Bhunaksha</h3>
        <Link
          to="/dashboard/kyc/api/bhunakasha"
          className="text-white underline hover:text-blue-100"
        >
          Bhunaksha APIs
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label
          htmlFor="state"
          className="block text-lg font-medium text-gray-700"
        >
          Select State
        </label>
        <select
          id="state"
          name="state"
          className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="" className="text-gray-500">
            --Select State--
          </option>
          <option value="bihar">Bihar</option>
          <option value="jharkhand">Jharkhand</option>
          <option value="up">Uttar Pradesh</option>
          <option value="chhattisgarh">Chhattisgarh</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="lakshadweep">Lakshadweep</option>
          <option value="kerala">Kerala</option>
          <option value="goa">Goa</option>
          <option value="odisha">Odisha</option>
        </select>

        {/* bihar */}
        {selectedState === "bihar" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {biharDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleCircleChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Circle</option>
              {Circles.map((circle) => (
                <option key={circle} value={circle}>
                  {circle}
                </option>
              ))}
            </select>

            <select
              onChange={handleHalkaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Halka</option>
              {Halkas.map((halka) => (
                <option key={halka} value={halka}>
                  {halka}
                </option>
              ))}
            </select>

            <select
              onChange={handleMauzaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Mauza</option>
              {Mauzas.map((mauza) => (
                <option key={mauza} value={mauza}>
                  {mauza}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* jharkhand */}
        {selectedState === "jharkhand" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {jharkhandDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleCircleChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Circle</option>
              {Circles.map((circle) => (
                <option key={circle} value={circle}>
                  {circle}
                </option>
              ))}
            </select>

            <select
              onChange={handleHalkaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Halka</option>
              {Halkas.map((halka) => (
                <option key={halka} value={halka}>
                  {halka}
                </option>
              ))}
            </select>

            <select
              onChange={handleMauzaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Mauza</option>
              {Mauzas.map((mauza) => (
                <option key={mauza} value={mauza}>
                  {mauza}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* chhattisgarh */}
        {selectedState === "chhattisgarh" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {chhattisgarhDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTehsilChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Tehsil</option>
              {Tehsils.map((tehsil) => (
                <option key={tehsil} value={tehsil}>
                  {tehsil}
                </option>
              ))}
            </select>

            <select
              onChange={handleRiChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Ri Circle</option>
              {RiCircles.map((RiCircle) => (
                <option key={RiCircle} value={RiCircle}>
                  {RiCircle}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* rajasthan */}
        {selectedState === "rajasthan" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {rajasthanDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTehsilChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Tehsil</option>
              {Tehsils.map((tehsil) => (
                <option key={tehsil} value={tehsil}>
                  {tehsil}
                </option>
              ))}
            </select>

            <select
              onChange={handleRiChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Ri Circle</option>
              {RiCircles.map((RiCircle) => (
                <option key={RiCircle} value={RiCircle}>
                  {RiCircle}
                </option>
              ))}
            </select>

            <select
              onChange={handleHalkaChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Halka</option>
              {Halkas.map((halka) => (
                <option key={halka} value={halka}>
                  {halka}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* lakshadweep */}
        {selectedState === "lakshadweep" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {lakshadweepDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTalukChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Taluk</option>
              {Talukas.map((taluk) => (
                <option key={taluk} value={taluk}>
                  {taluk}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSurveyChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Survey</option>
              {Survey.map((survey) => (
                <option key={survey} value={survey}>
                  {survey}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />

            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* kerala */}
        {selectedState === "kerala" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {keralaDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTalukChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Taluk</option>
              {Talukas.map((taluk) => (
                <option key={taluk} value={taluk}>
                  {taluk}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleBlocknoChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Block Number</option>
              {Blocknos.map((block) => (
                <option key={block} value={block}>
                  {block}
                </option>
              ))}
            </select>

            <select
              onChange={handleSurveyChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Survey Number</option>
              {Survey.map((survey) => (
                <option key={survey} value={survey}>
                  {survey}
                </option>
              ))}
            </select>

            <select
              onChange={handleSubdivnoChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sub Division Number</option>
              {Subdivnos.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* goa */}
        {selectedState === "goa" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {goaDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTalukChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Taluk</option>
              {Talukas.map((taluk) => (
                <option key={taluk} value={taluk}>
                  {taluk}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />
            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}

        {/* odisha */}
        {selectedState === "odisha" && (
          <>
            <select
              onChange={handleDistrictChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select District</option>
              {odishaDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              onChange={handleTehsilChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Tehsil</option>
              {Tehsils.map((tehsil) => (
                <option key={tehsil} value={tehsil}>
                  {tehsil}
                </option>
              ))}
            </select>

            <select
              onChange={handleRiChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Ri Circle</option>
              {RiCircles.map((Ri) => (
                <option key={Ri} value={Ri}>
                  {Ri}
                </option>
              ))}
            </select>

            <select
              onChange={handleVillageChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Village</option>
              {Villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>

            <select
              onChange={handleSheetChange}
              className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
            >
              <option>Select Sheet Number</option>
              {Sheets.map((sheet) => (
                <option key={sheet} value={sheet}>
                  {sheet}
                </option>
              ))}
            </select>

            <label
              htmlFor="plot"
              className="block mt-2 text-lg font-medium text-gray-700"
            >
              Enter Plot Number
            </label>
            <input
              id="plot"
              name="plot"
              className="block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="text"
              onChange={handlePlotChange}
              placeholder="Enter Plot Number"
            />
            <input
              className="mt-4 text-white block cursor-pointer bg-[#00acc1] w-1/2 border border-[#00acc1] hover:bg-gray-200 hover:text-black rounded-lg shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
              type="submit"
            />
          </>
        )}
      </form>

      {loading && <div className="mt-4 text-center">Data is fetching...</div>}

      {responseData && responseData.status_code === 200 && (
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <div className="card card-success">
              <div className="card-header">
                <h3 className="card-title">Bhumi Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <p>
                        <strong>Giscode:</strong>{" "}
                        {responseData.data.Giscode || "null"}
                      </p>
                      <p>
                        <strong>Plotno:</strong>{" "}
                        {responseData.data.Plotno || "null"}
                      </p>
                      {responseData.data.Plotinfo && (
                        <>
                          <p className="text-center">
                            <strong>Plot Description</strong>
                          </p>
                          <p>
                            <strong>Area Details:</strong>{" "}
                            {responseData.data.Plotinfo.Area_details || "null"}
                          </p>
                          <p>
                            <strong>Owner Details:</strong>{" "}
                            {responseData.data.Plotinfo.Owner_details || "null"}
                          </p>
                          <p>
                            <strong>Remark:</strong>{" "}
                            {responseData.data.Plotinfo.Remark || "null"}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {responseData && responseData.status_code === 500 && (
        <div className="text-white bg-red-500 p-4 mt-2 rounded">
          {responseData.message}
        </div>
      )}
    </div>
  );
};

export default Bhunaksha;
