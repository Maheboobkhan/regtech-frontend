// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const CompanyProductDetails = () => {
//   const [companyName, setCompanyName] = useState('');
//   const [flrsLicenseNo, setFlrsLicenseNo] = useState('');
//   const [companyProductDetails, setCompanyProductDetails] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedDetails, setSelectedDetails] = useState({
//     companyName: false,
//     licenseNo: false
//   });

//   useEffect(() => {
//     // Reset form and details on component mount
//     setCompanyProductDetails(null);
//     setError(null);
//   }, []);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const token = Cookies.get('authToken');

//     if (!token) {
//       setError('Auth token is missing');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'http://regtechapi.in/api/company-products',
//         {
//           companyName,
//           flrsLicenseNo
//         },
//         {
//           headers: {
//             'AccessToken': token
//           }
//         }
//       );
//       console.log(response)
//       setCompanyProductDetails(response.data);
//       setError(null);
//     } catch (error) {
//       if (error.response) {
//         const statusCode = error.response.status;
//         if (statusCode === 400) {
//           setError('Invalid companyName or flrsLicenseNo');
//         } else if (statusCode === 403) {
//           setError('You are not registered to use this service. Please update your plan.');
//         } else if (statusCode === 500) {
//           setError('Internal Server Error. Please contact techsupport@docboyz.in for more details.');
//         } else {
//           setError('Error fetching company details');
//         }
//       } else {
//         setError('Network error, please try again later.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedDetails(prevState => ({
//       ...prevState,
//       [value]: checked
//     }));
//   };

//   return (
//     <div className="container mt-4">
//       <div className="card">
//         <div className="card-header d-flex justify-content-between align-items-center">
//           <h3 className="card-title">Company Product Details</h3>
//           <a className="btn btn-light" href="/company-product-api">
//             Company Product
//           </a>
//         </div>
//         <div className="card-body">
//           {error && (
//             <div className="alert alert-danger">
//               {error}
//             </div>
//           )}
//           {loading && (
//             <div className="alert alert-info">
//               Fetching company details... please wait.
//             </div>
//           )}
//           <form onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label><strong>Select Company Details</strong></label>
//               <select
//                 multiple
//                 className="form-control"
//                 onChange={handleSelectChange}
//               >
//                 <option value="companyName">Company Name</option>
//                 <option value="licenseNo">License No</option>
//               </select>
//             </div>
//             {selectedDetails.companyName && (
//               <div className="form-group">
//                 <label>CompanyName</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={companyName}
//                   onChange={(e) => setCompanyName(e.target.value)}
//                   placeholder="Enter company name"
//                   required
//                 />
//               </div>
//             )}
//             {selectedDetails.licenseNo && (
//               <div className="form-group">
//                 <label>LicenseNo</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={flrsLicenseNo}
//                   onChange={(e) => setFlrsLicenseNo(e.target.value)}
//                   placeholder="Enter license number"
//                   required
//                 />
//               </div>
//             )}
//             <button type="submit" className="btn btn-success">Submit</button>
//           </form>
//           {companyProductDetails && companyProductDetails.statusCode === 200 && (
//             <div className="card mt-4">
//               <div className="card-header">
//                 <h3 className="card-title">Company Details</h3>
//               </div>
//               <div className="card-body">
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>Apptypedesc</th>
//                       <th>Company Name</th>
//                       <th>Display Refid</th>
//                       <th>District</th>
//                       <th>Fboid</th>
//                       <th>Licenseactive Flag</th>
//                       <th>LicenseCategoryId</th>
//                       <th>LicenseCategoryName</th>
//                       <th>Licenseno</th>
//                       <th>PremiseAddress</th>
//                       <th>PremisePincode</th>
//                       <th>Refid</th>
//                       <th>StateName</th>
//                       <th>StatusDesc</th>
//                       <th>TalukName</th>
//                       <th>VillageName</th>
//                       <th className="text-center">Company Product Details</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {companyProductDetails.companyDetails.map((company, index) => (
//                       <tr key={index}>
//                         <td>{company.companyDetails?.Information?.apptypedesc || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.companyname || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.displayrefid || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.districtname || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.fboid || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.licenseactiveflag || 'false'}</td>
//                         <td>{company.companyDetails?.Information?.licensecategoryid || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.licensecategoryname || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.licenseno || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.premiseaddress || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.premisepincode || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.refid || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.statename || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.statusdesc || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.talukname || 'null'}</td>
//                         <td>{company.companyDetails?.Information?.villagename || 'null'}</td>
//                         <td>
//                           <table className="table table-sm table-bordered">
//                             <thead>
//                               <tr>
//                                 <th>ActiveFlag</th>
//                                 <th>CategoryName</th>
//                                 <th>FpvsProductId</th>
//                                 <th>IndexVal</th>
//                                 <th>KindOfBusinessType</th>
//                                 <th>ManufacturFlag</th>
//                                 <th>ProductId</th>
//                                 <th>ProductName</th>
//                                 <th>ProductNamef</th>
//                                 <th>RcProductId</th>
//                                 <th>RefId</th>
//                                 <th>SubCategoryId</th>
//                                 <th>SubCategoryName</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {company.companyDetails.products.map((product, pIndex) => (
//                                 <tr key={pIndex}>
//                                   <td>{product.activeFlag || 'false'}</td>
//                                   <td>{product.categoryName || 'null'}</td>
//                                   <td>{product.fpvsProductId || 'null'}</td>
//                                   <td>{product.indexVal || 'null'}</td>
//                                   <td>{product.kindOfBusinessType || 'null'}</td>
//                                   <td>{product.manufacturFlag || 'false'}</td>
//                                   <td>{product.productId || 'null'}</td>
//                                   <td>{product.productName || 'null'}</td>
//                                   <td>{product.productNamef || 'null'}</td>
//                                   <td>{product.rcProductId || 'null'}</td>
//                                   <td>{product.refId || 'null'}</td>
//                                   <td>{product.subCategoryId || 'null'}</td>
//                                   <td>{product.subCategoryName || 'null'}</td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </table>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyProductDetails;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// // import 'bootstrap-select/dist/css/bootstrap-select.min.css';

// const CompanyProductDetails = () => {
//   const [companyName, setCompanyName] = useState('');
//   const [flrsLicenseNo, setFlrsLicenseNo] = useState('');
//   const [selectedDetails, setSelectedDetails] = useState([]);
//   const [companyProductDetails, setCompanyProductDetails] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setError(null);
//     setCompanyProductDetails(null);
//   }, []);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const token = Cookies.get('authToken');

//     if (!token) {
//       setError('Auth token is missing');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'http://regtechapi.in/api/company-products',
//         {
//           companyName,
//           flrsLicenseNo,
//         },
//         {
//           headers: {
//             'AccessToken': token,
//           },
//         }
//       );
//       setCompanyProductDetails(response.data);
//       setError(null);
//     } catch (error) {
//       if (error.response) {
//         const statusCode = error.response.status;
//         if (statusCode === 400) {
//           setError('Invalid companyName or flrsLicenseNo');
//         } else if (statusCode === 403) {
//           setError('You are not registered to use this service. Please update your plan.');
//         } else if (statusCode === 500) {
//           setError('Internal Server Error. Please contact techsupport@docboyz.in for more details.');
//         } else {
//           setError('Error fetching company details');
//         }
//       } else {
//         setError('Network error, please try again later.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectChange = (e) => {
//     const value = Array.from(e.target.selectedOptions, (option) => option.value);
//     setSelectedDetails(value);
//   };

//   return (
//     <div className="container mx-auto mt-6 px-4">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-semibold">Company Product Details</h3>
//           <a className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded" href="/company-product-api">
//             Company Product
//           </a>
//         </div>
//         <div className="mb-4">
//           {error && (
//             <div className="bg-red-200 text-red-800 p-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           {loading && (
//             <div className="bg-blue-200 text-blue-800 p-3 rounded mb-4">
//               Fetching company details... please wait.
//             </div>
//           )}
//           <form onSubmit={handleFormSubmit}>
//             <div className="mb-4">
//               <label htmlFor="company_details_id" className="block text-gray-700 font-semibold mb-2">
//                 <strong>Select Company Details</strong>
//               </label>
//               <select
//                 id="company_details_id"
//                 className="form-select block w-full mt-1"
//                 multiple
//                 onChange={handleSelectChange}
//                 data-live-search="true"
//                 data-actions-box="true"
//               >
//                 <option value="company_name">Company Name</option>
//                 <option value="license_no">License No</option>
//               </select>
//             </div>
//             {selectedDetails.includes('company_name') && (
//               <div className="mb-4" id="company_name_id">
//                 <label htmlFor="company_name" className="block text-gray-700 font-semibold mb-2">Company Name</label>
//                 <input
//                   type="text"
//                   className="form-input block w-full mt-1"
//                   id="company_name"
//                   name="company_name"
//                   value={companyName}
//                   onChange={(e) => setCompanyName(e.target.value)}
//                   placeholder="Enter company name"
//                   required={selectedDetails.includes('company_name')}
//                 />
//               </div>
//             )}
//             {selectedDetails.includes('license_no') && (
//               <div className="mb-4" id="license_no_id">
//                 <label htmlFor="license_no" className="block text-gray-700 font-semibold mb-2">License No</label>
//                 <input
//                   type="text"
//                   className="form-input block w-full mt-1"
//                   id="license_no"
//                   name="license_no"
//                   value={flrsLicenseNo}
//                   onChange={(e) => setFlrsLicenseNo(e.target.value)}
//                   placeholder="Enter license number"
//                   required={selectedDetails.includes('license_no')}
//                 />
//               </div>
//             )}
//             <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
//               Submit
//             </button>
//           </form>
//           {companyProductDetails && companyProductDetails.statusCode === 200 && (
//             <div className="mt-6 bg-green-100 border border-green-200 rounded-lg p-6">
//               <h3 className="text-lg font-semibold mb-4">Company Details</h3>
//               <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//                 <thead>
//                   <tr className="bg-gray-100 text-gray-700">
//                     <th className="py-2 px-4 border-b">Apptypedesc</th>
//                     <th className="py-2 px-4 border-b">Company Name</th>
//                     <th className="py-2 px-4 border-b">Display Refid</th>
//                     <th className="py-2 px-4 border-b">District</th>
//                     <th className="py-2 px-4 border-b">Fboid</th>
//                     <th className="py-2 px-4 border-b">Licenseactive Flag</th>
//                     <th className="py-2 px-4 border-b">LicenseCategoryId</th>
//                     <th className="py-2 px-4 border-b">LicenseCategoryName</th>
//                     <th className="py-2 px-4 border-b">Licenseno</th>
//                     <th className="py-2 px-4 border-b">PremiseAddress</th>
//                     <th className="py-2 px-4 border-b">PremisePincode</th>
//                     <th className="py-2 px-4 border-b">Refid</th>
//                     <th className="py-2 px-4 border-b">StateName</th>
//                     <th className="py-2 px-4 border-b">StatusDesc</th>
//                     <th className="py-2 px-4 border-b">TalukName</th>
//                     <th className="py-2 px-4 border-b">VillageName</th>
//                     <th className="py-2 px-4 border-b text-center">Company Product Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {companyProductDetails.companyDetails.map((company, index) => (
//                     <tr key={index}>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.apptypedesc || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.companyname || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.displayrefid || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.districtname || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.fboid || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.licenseactiveflag || 'false'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.licensecategoryid || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.licensecategoryname || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.licenseno || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.premiseaddress || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.premisepincode || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.refid || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.statename || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.statusdesc || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.talukname || 'null'}</td>
//                       <td className="py-2 px-4 border-b">{company.companyDetails?.Information?.villagename || 'null'}</td>
//                       <td className="py-2 px-4 border-b">
//                         <div className="overflow-x-auto">
//                           <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//                             <thead className="bg-gray-100 text-gray-700">
//                               <tr>
//                                 <th className="py-2 px-4 border-b">ActiveFlag</th>
//                                 <th className="py-2 px-4 border-b">CategoryName</th>
//                                 <th className="py-2 px-4 border-b">FpvsProductId</th>
//                                 <th className="py-2 px-4 border-b">IndexVal</th>
//                                 <th className="py-2 px-4 border-b">KindOfBusinessType</th>
//                                 <th className="py-2 px-4 border-b">ManufacturFlag</th>
//                                 <th className="py-2 px-4 border-b">ProductId</th>
//                                 <th className="py-2 px-4 border-b">ProductName</th>
//                                 <th className="py-2 px-4 border-b">ProductNamef</th>
//                                 <th className="py-2 px-4 border-b">RcProductId</th>
//                                 <th className="py-2 px-4 border-b">RefId</th>
//                                 <th className="py-2 px-4 border-b">SubCategoryId</th>
//                                 <th className="py-2 px-4 border-b">SubCategoryName</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {company.companyDetails.products.map((product, index) => (
//                                 <tr key={index}>
//                                   <td className="py-2 px-4 border-b">{product.activeFlag || 'false'}</td>
//                                   <td className="py-2 px-4 border-b">{product.categoryName || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.fpvsProductId || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.indexVal || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.kindOfBusinessType || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.manufacturFlag || 'false'}</td>
//                                   <td className="py-2 px-4 border-b">{product.productId || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.productName || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.productNamef || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.rcProductId || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.refId || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.subCategoryId || 'null'}</td>
//                                   <td className="py-2 px-4 border-b">{product.subCategoryName || 'null'}</td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </table>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyProductDetails;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// // Custom dropdown component
// const Dropdown = ({ options, onChange, value }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const filteredOptions = options.filter((option) =>
//     option.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative w-full max-w-md mx-auto">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-3 border rounded-md bg-white text-black flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-200"
//       >
//         <span>{value || 'Select Criteria'}</span>
//         <svg
//           className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
//       {isOpen && (
//         <div ref={dropdownRef} className="absolute z-10 w-full mt-2 bg-white border border-[#00acc1] rounded-md shadow-lg transition-transform transform duration-300 ease-in-out">
//           <input
//             type="text"
//             className="w-full p-2 border-b border-[#00acc1] rounded-t-md focus:outline-none"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="max-h-60 overflow-y-auto">
//             {filteredOptions.length > 0 ? (
//               filteredOptions.map((option) => (
//                 <button
//                   key={option}
//                   className="w-full text-left p-3 hover:bg-[#00acc1] hover:text-white transition-colors duration-200"
//                   onClick={() => {
//                     onChange(option);
//                     setIsOpen(false);
//                   }}
//                 >
//                   {option}
//                 </button>
//               ))
//             ) : (
//               <div className="p-3 text-gray-500">No results found</div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const CompanyProductDetails = () => {
//   const [selectedCriteria, setSelectedCriteria] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [licenseNo, setLicenseNo] = useState('');
//   const [companyDetails, setCompanyDetails] = useState(null);
//   const [error, setError] = useState('');

//   const criteriaOptions = ['Company Name', 'License No'];

//   const handleCriteriaChange = (option) => {
//     setSelectedCriteria(option);
//   };

//   const handleSearch = async () => {
//     if (!companyName && !licenseNo) {
//       setError('Please enter company name or license number.');
//       return;
//     }
//     setError('');
//     try {
//       const response = await axios.get('/api/company-product-details', {
//         params: {
//           companyName,
//           licenseNo,
//         },
//       });
//       console.log(response)
//       setCompanyDetails(response.data);
//     } catch (err) {
//       setError('Error fetching company product details.');
//     }
//   };

//   return (
//     <div className="bg-[#f2fbfc] min-h-screen flex flex-col items-center p-4">
//       {/* <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold inline-block relative">
//           <span className="border-b-4 border-[#00acc1] pb-2 text-black hover:border-[#21a2b3] transition-colors">
//             Company Product Details
//           </span>
//         </h1>
//       </div> */}
//       <div className="w-full mb-4 mt-8 bg-blue-500 p-4 flex justify-between items-center">
//           <h3 className="text-xl font-semibold text-white">Company Product Details</h3>
//           <Link
//             to="/dashboard/kyc/company_product_api"
//             className="text-white underline hover:text-blue-200"
//           >
//             Company Product
//           </Link>
//         </div>
//       <div className="w-full max-w-md mb-4">
//         <Dropdown
//           options={criteriaOptions}
//           onChange={handleCriteriaChange}
//           value={selectedCriteria}
//         />
//       </div>
//       {selectedCriteria === 'Company Name' && (
//         <input
//           type="text"
//           className="w-full max-w-md p-3 border rounded-md mb-4"
//           placeholder="Enter company name"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//         />
//       )}
//       {selectedCriteria === 'License No' && (
//         <input
//           type="text"
//           className="w-full max-w-md p-3 border rounded-md mb-4"
//           placeholder="Enter license number"
//           value={licenseNo}
//           onChange={(e) => setLicenseNo(e.target.value)}
//         />
//       )}
//       <button
//         onClick={handleSearch}
//         className="w-full max-w-md p-3 bg-[#00acc1] text-white rounded-md shadow-md hover:bg-[#008c95] transition-colors duration-200"
//       >
//         Search
//       </button>
//       {error && <div className="text-red-500 mt-4">{error}</div>}
//       {companyDetails && (
//         <div className="border-2 mt-8 p-4 bg-white rounded-md shadow-md w-full max-w-4xl">
//           <table className="w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-[#00acc1] text-white">
//                 <th className="p-2">Apptypedesc</th>
//                 <th className="p-2">Company Name</th>
//                 <th className="p-2">Display Refid</th>
//                 <th className="p-2">District</th>
//                 <th className="p-2">Fboid</th>
//                 <th className="p-2">Licenseactive Flag</th>
//                 <th className="p-2">LicenseCategoryId</th>
//                 <th className="p-2">LicenseCategoryName</th>
//                 <th className="p-2">Licenseno</th>
//                 <th className="p-2">PremiseAddress</th>
//                 <th className="p-2">PremisePincode</th>
//                 <th className="p-2">Refid</th>
//                 <th className="p-2">StateName</th>
//                 <th className="p-2">StatusDesc</th>
//                 <th className="p-2">TalukName</th>
//                 <th className="p-2">VillageName</th>
//                 <th className="p-2">Company Product Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {companyDetails.map((company, index) => (
//                 <tr key={index}>
//                   <td className="p-2">{company.apptypedesc || 'null'}</td>
//                   <td className="p-2">{company.companyName || 'null'}</td>
//                   <td className="p-2">{company.displayRefid || 'null'}</td>
//                   <td className="p-2">{company.district || 'null'}</td>
//                   <td className="p-2">{company.fboid || 'null'}</td>
//                   <td className="p-2">{company.licenseactiveFlag || 'false'}</td>
//                   <td className="p-2">{company.licenseCategoryId || 'null'}</td>
//                   <td className="p-2">{company.licenseCategoryName || 'null'}</td>
//                   <td className="p-2">{company.licenseNo || 'null'}</td>
//                   <td className="p-2">{company.premiseAddress || 'null'}</td>
//                   <td className="p-2">{company.premisePincode || 'null'}</td>
//                   <td className="p-2">{company.refid || 'null'}</td>
//                   <td className="p-2">{company.stateName || 'null'}</td>
//                   <td className="p-2">{company.statusDesc || 'null'}</td>
//                   <td className="p-2">{company.talukName || 'null'}</td>
//                   <td className="p-2">{company.villageName || 'null'}</td>
//                   <td className="p-2">
//                     <table className="w-full table-auto border-collapse mt-2">
//                       <thead>
//                         <tr className="bg-[#00acc1] text-white">
//                           <th className="p-2">ActiveFlag</th>
//                           <th className="p-2">BaseUOM</th>
//                           <th className="p-2">Product Category</th>
//                           <th className="p-2">ProductCode</th>
//                           <th className="p-2">ProductDesc</th>
//                           <th className="p-2">ProductGroup</th>
//                           <th className="p-2">ProductId</th>
//                           <th className="p-2">ProductName</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {company.productDetails.map((product, idx) => (
//                           <tr key={idx}>
//                             <td className="p-2">{product.activeFlag || 'null'}</td>
//                             <td className="p-2">{product.baseUOM || 'null'}</td>
//                             <td className="p-2">{product.productCategory || 'null'}</td>
//                             <td className="p-2">{product.productCode || 'null'}</td>
//                             <td className="p-2">{product.productDesc || 'null'}</td>
//                             <td className="p-2">{product.productGroup || 'null'}</td>
//                             <td className="p-2">{product.productId || 'null'}</td>
//                             <td className="p-2">{product.productName || 'null'}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompanyProductDetails;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Make sure to install js-cookie package

// Custom dropdown component
const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border rounded-md bg-white text-black flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <span>{value || "Select Criteria"}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-2 bg-white border border-[#00acc1] rounded-md shadow-lg transition-transform transform duration-300 ease-in-out"
        >
          <input
            type="text"
            className="w-full p-2 border-b border-[#00acc1] rounded-t-md focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  className="w-full text-left p-3 hover:bg-[#00acc1] hover:text-white transition-colors duration-200"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              ))
            ) : (
              <div className="p-3 text-gray-500">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CompanyProductDetails = () => {
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [companyDetails, setCompanyDetails] = useState(null);
  const [error, setError] = useState("");

  const criteriaOptions = ["Company Name", "License No"];

  const handleCriteriaChange = (option) => {
    setSelectedCriteria((prev) => {
      if (prev.includes(option)) {
        return prev.filter((criteria) => criteria !== option);
      }
      return [...prev, option];
    });
  };

  const handleSearch = async () => {
    const params = {};
    if (selectedCriteria.includes("Company Name"))
      params.companyName = companyName;
    if (selectedCriteria.includes("License No"))
      params.flrsLicenseNo = licenseNo;

    if (Object.keys(params).length === 0) {
      setError("Please enter company name or license number.");
      return;
    }

    setError("");
    const token = Cookies.get("authToken"); // Get token from cookies

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/company-products",
        params,
        {
          headers: {
            AccessToken: token,
          },
        }
      );
      console.log(response);
      setCompanyDetails(response.data);
    } catch (err) {
      setError("Error fetching company product details.");
    }
  };

  return (
    <div className="bg-[#f2fbfc] min-h-screen flex flex-col items-center p-4">
      <div className="w-full mb-4 mt-8 bg-blue-500 p-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">
          Company Product Details
        </h3>
        <Link
          to="/dashboard/kyc/company_product_api"
          className="text-white underline hover:text-blue-200"
        >
          Company Product
        </Link>
      </div>
      <div className="w-full max-w-md mb-4">
        <Dropdown
          options={criteriaOptions}
          onChange={handleCriteriaChange}
          value={selectedCriteria.join(", ")}
        />
      </div>
      {selectedCriteria.includes("Company Name") && (
        <input
          type="text"
          className="w-full max-w-md p-3 border rounded-md mb-4"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      )}
      {selectedCriteria.includes("License No") && (
        <input
          type="text"
          className="w-full max-w-md p-3 border rounded-md mb-4"
          placeholder="Enter license number"
          value={licenseNo}
          onChange={(e) => setLicenseNo(e.target.value)}
        />
      )}
      <button
        onClick={handleSearch}
        className="w-full max-w-md p-3 bg-[#00acc1] text-white rounded-md shadow-md hover:bg-[#008c95] transition-colors duration-200"
      >
        Search
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {companyDetails && companyDetails.status_code === 200 && (
        <div className="border-2 mt-8 p-4 bg-white rounded-md shadow-md w-full max-w-4xl overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#00acc1] text-white">
                <th className="p-2">Apptypedesc</th>
                <th className="p-2">Company Name</th>
                <th className="p-2">Display Refid</th>
                <th className="p-2">District</th>
                <th className="p-2">Fboid</th>
                <th className="p-2">Licenseactive Flag</th>
                <th className="p-2">LicenseCategoryId</th>
                <th className="p-2">LicenseCategoryName</th>
                <th className="p-2">Licenseno</th>
                <th className="p-2">PremiseAddress</th>
                <th className="p-2">PremisePincode</th>
                <th className="p-2">Refid</th>
                <th className="p-2">StateName</th>
                <th className="p-2">StatusDesc</th>
                <th className="p-2">TalukName</th>
                <th className="p-2">VillageName</th>
                <th className="p-2">Company Product Details</th>
              </tr>
            </thead>
            <tbody>
              {companyDetails &&
                companyDetails.map((company, index) => (
                  <tr key={index}>
                    <td className="p-2">{company.apptypedesc || "null"}</td>
                    <td className="p-2">{company.companyName || "null"}</td>
                    <td className="p-2">{company.displayRefid || "null"}</td>
                    <td className="p-2">{company.district || "null"}</td>
                    <td className="p-2">{company.fboid || "null"}</td>
                    <td className="p-2">
                      {company.licenseactiveFlag || "false"}
                    </td>
                    <td className="p-2">
                      {company.licenseCategoryId || "null"}
                    </td>
                    <td className="p-2">
                      {company.licenseCategoryName || "null"}
                    </td>
                    <td className="p-2">{company.licenseNo || "null"}</td>
                    <td className="p-2">{company.premiseAddress || "null"}</td>
                    <td className="p-2">{company.premisePincode || "null"}</td>
                    <td className="p-2">{company.refid || "null"}</td>
                    <td className="p-2">{company.stateName || "null"}</td>
                    <td className="p-2">{company.statusDesc || "null"}</td>
                    <td className="p-2">{company.talukName || "null"}</td>
                    <td className="p-2">{company.villageName || "null"}</td>
                    <td className="p-2">
                      {company.companyProductDetails || "null"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {companyDetails && companyDetails.status_code === 102 && (
        <div className="bg-red-500 text-white p-3 rounded mt-4">
        {companyDetails.message || 'An error occurred. Please try again later.'}
      </div>
      )}
    </div>
  );
};

export default CompanyProductDetails;
