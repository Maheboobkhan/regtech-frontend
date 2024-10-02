// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const BankAnalyser = () => {
//   const [file, setFile] = useState(null);
//   const [bank, setBank] = useState('SBI');
//   const [password, setPassword] = useState('Password');
//   const [accountType, setAccountType] = useState('SAVING');
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleBankChange = (e) => {
//     setBank(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleAccountTypeChange = (e) => {
//     setAccountType(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     try {
//       const token = Cookies.get('authToken');
//       const headers = {
//         'AccessToken': token,
//         'Content-Type': 'multipart/form-data'
//       };

//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('password', password);
//       formData.append('bank', bank);
//       formData.append('accountType', accountType);
//       formData.append('country', 'INDIA');

//       const res = await axios.post('http://regtechapi.in/api/bank_anlyser', formData, { headers });
//       console.log(res)
//       setResponse(res.data);
//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-[#00acc1] p-4 flex justify-between">
//           <h3 className="text-xl font-semibold text-white">Bank Analyser</h3>
//         </div>
//         <div className="p-4">
//           {loading && (
//             <div className="flex justify-center items-center mb-4">
//               <div className="text-xl text-blue-500">
//                 Uploading Bank Statement <span className="text-blue-500">please wait...</span>
//               </div>
//             </div>
//           )}
//           {error && (
//             <div className="bg-red-500 text-white p-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
//                 Bank Statement
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleFileChange}
//                 required
//                 className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="bank" className="block text-gray-700 text-sm font-bold mb-2">
//                 Bank
//               </label>
//               <input
//                 type="text"
//                 id="bank"
//                 name="bank"
//                 value={bank}
//                 onChange={handleBankChange}
//                 placeholder="Enter Bank Name"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 type="text"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Enter Password"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="accountType" className="block text-gray-700 text-sm font-bold mb-2">
//                 Account Type
//               </label>
//               <input
//                 type="text"
//                 id="accountType"
//                 name="accountType"
//                 value={accountType}
//                 onChange={handleAccountTypeChange}
//                 placeholder="Enter Account Type"
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
//           {response && (
//             <div className="mt-4">
//               {response.statusCode === 200 && (
//                 <div className="bg-green-400 text-white p-3 rounded">
//                   <h3 className="text-lg font-semibold">Bank Statement Data</h3>
//                   {response.statmendata.map((item, index) => (
//                     <div key={index} className="mb-2">
//                       <p><strong>Amount:</strong> {item.amount}</p>
//                       <p><strong>Balance After Transaction:</strong> {item.balanceAfterTransaction}</p>
//                       <p><strong>Bank:</strong> {item.bank}</p>
//                       <p><strong>Batch ID:</strong> {item.batchID}</p>
//                       <p><strong>Category:</strong> {item.category}</p>
//                       <p><strong>Date Time:</strong> {item.dateTime}</p>
//                       <p><strong>Description:</strong> {item.description}</p>
//                       <p><strong>Remark:</strong> {item.remark}</p>
//                       <p><strong>Transaction ID:</strong> {item.transactionId}</p>
//                       <p><strong>Transaction Number:</strong> {item.transactionNumber}</p>
//                       <p><strong>Type:</strong> {item.type}</p>
//                       <p><strong>Value Date:</strong> {item.valueDate}</p>
//                       <hr className="border-1 border-gray-300"/>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {response.statusCode === 422 && (
//                 <div className="bg-red-500 text-white p-3 rounded">
//                   PAN is Invalid
//                 </div>
//               )}
//               {(response.statusCode === 404 || response.statusCode === 400) && (
//                 <div className="bg-red-500 text-white p-3 rounded">
//                   Server Error, Please try later.
//                 </div>
//               )}
//               {response.statusCode === 500 && (
//                 <div className="bg-red-500 text-white p-3 rounded">
//                   Internal Server Error. Please contact techsupport@docboyz.in for more details.
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankAnalyser;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const BankAnalyser = () => {
//   const [file, setFile] = useState(null);
//   const [bank, setBank] = useState('SBI');
//   const [password, setPassword] = useState('Password');
//   const [accountType, setAccountType] = useState('SAVING');
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleBankChange = (e) => {
//     setBank(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleAccountTypeChange = (e) => {
//     setAccountType(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     try {
//       const token = Cookies.get('authToken');
//       const headers = {
//         'AccessToken': token,
//         'Content-Type': 'multipart/form-data'
//       };

//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('password', password);
//       formData.append('bank', bank);
//       formData.append('accountType', accountType);
//       formData.append('country', 'INDIA');

//       const res = await axios.post('http://regtechapi.in/api/bank_anlyser', formData, { headers });
//       setResponse(res.data);
//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-[#00acc1] p-4 flex justify-between">
//           <h3 className="text-xl font-semibold text-white">Bank Analyser</h3>
//         </div>
//         <div className="p-4">
//           {loading && (
//             <div className="flex justify-center items-center mb-4">
//               <div className="text-xl text-blue-500">
//                 Uploading Bank Statement <span className="text-blue-500">please wait...</span>
//               </div>
//             </div>
//           )}
//           {error && (
//             <div className="bg-red-500 text-white p-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
//                 Bank Statement
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleFileChange}
//                 required
//                 className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="bank" className="block text-gray-700 text-sm font-bold mb-2">
//                 Bank
//               </label>
//               <input
//                 type="text"
//                 id="bank"
//                 name="bank"
//                 value={bank}
//                 onChange={handleBankChange}
//                 placeholder="Enter Bank Name"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 type="text"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Enter Password"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="accountType" className="block text-gray-700 text-sm font-bold mb-2">
//                 Account Type
//               </label>
//               <input
//                 type="text"
//                 id="accountType"
//                 name="accountType"
//                 value={accountType}
//                 onChange={handleAccountTypeChange}
//                 placeholder="Enter Account Type"
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

//           {/* Displaying the response data */}
//           {response && response.statusCode === 200 && (
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold">Bank Statement Data</h3>

//               {/* Average Monthly Balance */}
//               {response.response.averageMonthlyBalance.length > 0 && (
//                 <div className="bg-green-100 p-3 rounded mb-4">
//                   <h4 className="text-md font-semibold">Average Monthly Balance</h4>
//                   {response.response.averageMonthlyBalance.map((item, index) => (
//                     <div key={index} className="mb-2">
//                       <p><strong>Month & Year:</strong> {item.monthAndYear}</p>
//                       <p><strong>Net Average Balance:</strong> {item.netAverageBalance}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Expenses */}
//               {response.response.expenses.length > 0 && (
//                 <div className="bg-blue-100 p-3 rounded mb-4">
//                   <h4 className="text-md font-semibold">Expenses</h4>
//                   {response.response.expenses.map((item, index) => (
//                     <div key={index} className="mb-2">
//                       <p><strong>Amount:</strong> {item.amount}</p>
//                       <p><strong>Category:</strong> {item.category}</p>
//                       <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
//                       <p><strong>Description:</strong> {item.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* High Value Transactions */}
//               {response.response.high_value_transactions.length > 0 && (
//                 <div className="bg-yellow-100 p-3 rounded mb-4">
//                   <h4 className="text-md font-semibold">High Value Transactions</h4>
//                   {response.response.high_value_transactions.map((item, index) => (
//                     <div key={index} className="mb-2">
//                       <p><strong>Amount:</strong> {item.amount}</p>
//                       <p><strong>Balance After Transaction:</strong> {item.balanceAfterTranscation}</p>
//                       <p><strong>Category:</strong> {item.category}</p>
//                       <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
//                       <p><strong>Description:</strong> {item.description}</p>
//                       <p><strong>Type:</strong> {item.type}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Incomes */}
//               {response.response.incomes.length > 0 && (
//                 <div className="bg-green-100 p-3 rounded mb-4">
//                   <h4 className="text-md font-semibold">Incomes</h4>
//                   {response.response.incomes.map((item, index) => (
//                     <div key={index} className="mb-2">
//                       <p><strong>Amount:</strong> {item.amount}</p>
//                       <p><strong>Balance After Transaction:</strong> {item.balanceAfterTransaction}</p>
//                       <p><strong>Category:</strong> {item.category}</p>
//                       <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
//                       <p><strong>Description:</strong> {item.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//           {response && (response.statusCode === 422 || response.statusCode === 404 || response.statusCode === 400 || response.statusCode === 500) && (
//             <div className="mt-4 bg-red-500 text-white p-3 rounded">
//               {response.statusCode === 422 && 'PAN is Invalid'}
//               {(response.statusCode === 404 || response.statusCode === 400) && 'Server Error, Please try later.'}
//               {response.statusCode === 500 && 'An internal server error occurred.'}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankAnalyser;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import jsPDF from 'jspdf';

// const BankAnalyser = () => {
//   const [file, setFile] = useState(null);
//   const [bank, setBank] = useState('SBI');
//   const [password, setPassword] = useState('Password');
//   const [accountType, setAccountType] = useState('SAVING');
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleBankChange = (e) => {
//     setBank(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleAccountTypeChange = (e) => {
//     setAccountType(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     try {
//       const token = Cookies.get('authToken');
//       const headers = {
//         'AccessToken': token,
//         'Content-Type': 'multipart/form-data'
//       };

//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('password', password);
//       formData.append('bank', bank);
//       formData.append('accountType', accountType);
//       formData.append('country', 'INDIA');

//       const res = await axios.post('http://regtechapi.in/api/bank_anlyser', formData, { headers });
//       console.log(res)
//       setResponse(res.data);

//       // Generate PDF after receiving the response
//       generatePDF(res.data);
//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generatePDF = (data) => {
//     const doc = new jsPDF();

//     // Title
//     doc.setFontSize(20);
//     doc.text('Bank Statement Data', 10, 10);

//     // Average Monthly Balance
//     doc.setFontSize(16);
//     doc.text('Average Monthly Balance', 10, 20);
//     let y = 30; // Starting Y position
//     if (data.response.averageMonthlyBalance.length > 0) {
//       data.response.averageMonthlyBalance.forEach(item => {
//         doc.setFontSize(12);
//         doc.text(`Month & Year: ${item.monthAndYear}`, 10, y);
//         doc.text(`Net Average Balance: ${item.netAverageBalance}`, 10, y + 10);
//         y += 20; // Move Y position down
//       });
//     }

//     // Expenses
//     doc.setFontSize(16);
//     doc.text('Expenses', 10, y);
//     y += 10;
//     if (data.response.expenses.length > 0) {
//       data.response.expenses.forEach(item => {
//         doc.setFontSize(12);
//         doc.text(`Amount: ${item.amount}`, 10, y);
//         doc.text(`Category: ${item.category}`, 10, y + 10);
//         doc.text(`Date: ${new Date(item.date).toLocaleDateString()}`, 10, y + 20);
//         doc.text(`Description: ${item.description}`, 10, y + 30);
//         y += 40; // Move Y position down
//       });
//     }

//     // More sections can be added similarly...

//     // Save the PDF
//     doc.save('bank_statement_data.pdf');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-[#00acc1] p-4 flex justify-between">
//           <h3 className="text-xl font-semibold text-white">Bank Analyser</h3>
//         </div>
//         <div className="p-4">
//           {loading && (
//             <div className="flex justify-center items-center mb-4">
//               <div className="text-xl text-blue-500">
//                 Uploading Bank Statement <span className="text-blue-500">please wait...</span>
//               </div>
//             </div>
//           )}
//           {error && (
//             <div className="bg-red-500 text-white p-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             {/* Form fields for file, bank, password, account type... */}
//             <div className="mb-4">
//               <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Bank Statement</label>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleFileChange}
//                 required
//                 className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-blue-500"
//               />
//             </div>
//             {/* Other input fields... */}
//             <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
//               Upload
//             </button>
//           </form>

//           {/* Displaying the response data */}
//           {response && response.statusCode === 200 && (
//             <div className="mt-4">
//               {/* Render response data here as you did previously */}
//             </div>
//           )}
//           {response && (response.statusCode === 422 || response.statusCode === 404 || response.statusCode === 400 || response.statusCode === 500) && (
//             <div className="mt-4 bg-red-500 text-white p-3 rounded">
//               {response.statusCode === 422 && 'PAN is Invalid'}
//               {(response.statusCode === 404 || response.statusCode === 400) && 'Server Error, Please try later.'}
//               {response.statusCode === 500 && 'An internal server error occurred.'}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankAnalyser;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PdfDocument from './PdfDocument'; // Import your PDF document component

// const BankAnalyser = () => {
//   const [formData, setFormData] = useState({
//     accountId: '',
//     startDate: '',
//     endDate: '',
//   });
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const headers = {
//       Authorization: `Bearer ${Cookies.get('authToken')}`,
//       'Content-Type': 'application/json',
//     };

//     try {
//       const res = await axios.post('http://regtechapi.in/api/bank_anlyser', formData, { headers });
//       setResponse(res.data);

//       // Open PDF after response
//       const pdfWindow = window.open('', '_blank');
//       pdfWindow.document.write('<html><head><title>Bank Statement</title></head><body>');
//       pdfWindow.document.write('<h1>Loading PDF...</h1>');
//       pdfWindow.document.write('</body></html>');

//       // Use PDFDownloadLink to open the PDF
//       pdfWindow.document.body.appendChild(
//         <PDFDownloadLink document={<PdfDocument data={res.data} />} fileName="bank_statement.pdf">
//           {({ blob, url, loading }) => {
//             if (!loading) {
//               pdfWindow.location.href = url; // Redirect to PDF
//               return null;
//             }
//             return 'Loading...';
//           }}
//         </PDFDownloadLink>
//       );

//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Bank Analyser</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Account ID:
//             <input type="text" name="accountId" value={formData.accountId} onChange={handleChange} required />
//           </label>
//         </div>
//         <div>
//           <label>
//             Start Date:
//             <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
//           </label>
//         </div>
//         <div>
//           <label>
//             End Date:
//             <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
//           </label>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Loading...' : 'Analyze'}
//         </button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default BankAnalyser;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PdfDocument from './PdfDocument'; // Ensure this imports your PDF document component

// const BankAnalyser = () => {
//   const [file, setFile] = useState(null);
//   const [bank, setBank] = useState('SBI');
//   const [password, setPassword] = useState('');
//   const [accountType, setAccountType] = useState('SAVING');
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleBankChange = (e) => {
//     setBank(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleAccountTypeChange = (e) => {
//     setAccountType(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     try {
//       const token = Cookies.get('authToken');
//       const headers = {
//         'AccessToken': token,
//         'Content-Type': 'multipart/form-data',
//       };

//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('password', password);
//       formData.append('bank', bank);
//       formData.append('accountType', accountType);
//       formData.append('country', 'INDIA');

//       const res = await axios.post('http://regtechapi.in/api/bank_anlyser', formData, { headers });
//       console.log(res.data)
//       setResponse(res.data);

//       // Open PDF after receiving response
//       const pdfWindow = window.open('', '_blank');
//       pdfWindow.document.write('<html><head><title>Bank Statement</title></head><body>');
//       pdfWindow.document.write('<h1>Loading PDF...</h1>');
//       pdfWindow.document.write('</body></html>');

//       const pdfLink = document.createElement('div');
//       pdfWindow.document.body.appendChild(pdfLink);

//       // Use PDFDownloadLink to generate and download the PDF
//       pdfLink.innerHTML = `<a href="${URL.createObjectURL(new Blob([<PdfDocument data={res.data} />], { type: 'application/pdf' }))}" target="_blank">Download PDF</a>`;

//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-[#00acc1] p-4 flex justify-between">
//           <h3 className="text-xl font-semibold text-white">Bank Analyser</h3>
//         </div>
//         <div className="p-4">
//           {loading && (
//             <div className="flex justify-center items-center mb-4">
//               <div className="text-xl text-blue-500">
//                 Uploading Bank Statement <span className="text-blue-500">please wait...</span>
//               </div>
//             </div>
//           )}
//           {error && (
//             <div className="bg-red-500 text-white p-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
//                 Bank Statement
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleFileChange}
//                 required
//                 className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="bank" className="block text-gray-700 text-sm font-bold mb-2">
//                 Bank
//               </label>
//               <input
//                 type="text"
//                 id="bank"
//                 name="bank"
//                 value={bank}
//                 onChange={handleBankChange}
//                 placeholder="Enter Bank Name"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Enter Password"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="accountType" className="block text-gray-700 text-sm font-bold mb-2">
//                 Account Type
//               </label>
//               <input
//                 type="text"
//                 id="accountType"
//                 name="accountType"
//                 value={accountType}
//                 onChange={handleAccountTypeChange}
//                 placeholder="Enter Account Type"
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
//           {response && response.statusCode === 200 && (
//             <div className="mt-4">
//               <div className="bg-green-400 text-white p-3 rounded">
//                 <h3 className="text-lg font-semibold">Bank Statement Data</h3>
//                 <PDFDownloadLink document={<PdfDocument data={response.statmendata} />} fileName="bank_statement.pdf">
//                   {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
//                 </PDFDownloadLink>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankAnalyser;

import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { pdf } from "@react-pdf/renderer";
import StatementPDF from './PdfDocument';

const BankAnalyser = () => {
  const [file, setFile] = useState(null);
  const [bank, setBank] = useState("SBI");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("SAVING");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBankChange = (e) => {
    setBank(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const token = Cookies.get("authToken");
      const headers = {
        AccessToken: token,
        "Content-Type": "multipart/form-data",
      };

      const formData = new FormData();
      formData.append("file", file);
      formData.append("password", password);
      formData.append("bank", bank);
      formData.append("accountType", accountType);
      formData.append("country", "INDIA");

      const res = await axios.post(
        "http://regtechapi.in/api/bank_anlyser",
        formData,
        { headers }
      );
      console.log(res);
      setResponse(res.data);
      // atmWithdrawl, 
      // averageMonthlyBalance, 
      // averageQuarterlyBalance, 
      // expenses, 
      // highValueTransactions, 
      // incomes, 
      // minimumBalances, 
      // moneyReceivedTransactions,

      // Automatically open the PDF after receiving the response
      if (res.data && res.data.statusCode === 200) {
        // const pdfBlob = new Blob([<PdfDocument data={res.data} />], { type: 'application/pdf' });
        // const pdfUrl = URL.createObjectURL(pdfBlob);
        // const pdfWindow = window.open(pdfUrl);
        // if (pdfWindow) {
        //   pdfWindow.focus();
        // }
        const blob = await pdf(
          <StatementPDF
          atmWithdrawl={res.data.response.atm_withdrawls}
            averageMonthlyBalance={res.data.response.averageMonthlyBalance}
            averageQuarterlyBalance={res.data.response.averageQuarterlyBalance}
            expenses={res.data.response.expenses}
            highValueTransactions={res.data.response.high_value_transactions}
            incomes={res.data.response.incomes}
            minimumBalances={res.data.response.minimum_balances}
            moneyReceivedTransactions={res.data.response.money_received_transactions}
          />
        ).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Bank Analyser</h3>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-500">
                Uploading Bank Statement{" "}
                <span className="text-blue-500">please wait...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bank Statement
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                required
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bank"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bank
              </label>
              <input
                type="text"
                id="bank"
                name="bank"
                value={bank}
                onChange={handleBankChange}
                placeholder="Enter Bank Name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="accountType"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Account Type
              </label>
              <input
                type="text"
                id="accountType"
                name="accountType"
                value={accountType}
                onChange={handleAccountTypeChange}
                placeholder="Enter Account Type"
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
        </div>
      </div>
    </div>
  );
};

export default BankAnalyser;
