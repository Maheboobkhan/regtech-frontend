
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const BillReport = () => {
//   const {yearMonth, userId} = useParams();
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
//   const [transactionTotal, setTransactionTotal] = useState(0);

//   useEffect(() => {
//     if(userId){
//       getUser(userId);
//     }
//     else{
//       const token = Cookies.get('authToken');
//       getUser(token);
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       getReport();
//     }
//   }, [user]);

//   const getUser = async (token) => {
//     const domain = localStorage.getItem('domain');
//     try {
//       const response = await axios.get(
//         `${domain}/getuser/${token}`
//       );
//       console.log('getUserByidtoken: ',response)
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setUser(null);
//     }
//   };

//   const getReport = async () => {
//     const domain = localStorage.getItem('domain');
//     if (user && yearMonth) {
//       try {
//         const response = await axios.post(`${domain}/getreport`, {
//           token: user.access_token,
//           userDetails: user.id,
//           yearMonth: yearMonth,
//         });
//         console.log('reportData: ',response)
//         const data = response.data;

//         // Extract users and reports
//         setReports(data.reports);

//         // Calculate total transaction
//         const total = data.reports.reduce((acc, report) => acc + (report.total || 0), 0);
//         setTransactionTotal(total);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//         setReports([]);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg">
//         <div className="bg-[#00acc1] text-white p-4 rounded-t-lg">
//           <h3 className="text-xl font-semibold">Bill Report</h3>
//         </div>
//         <div className="p-6">
//           {user ? (
//             <div className="mb-4">
//               <h5>Name: <span className="text-gray-600 text-lg">{user.name}</span></h5>
//               <h5>Email: <span className="text-gray-600 text-lg">{user.email}</span></h5>
//             </div>
//           ) : (
//             <p>Loading user data...</p>
//           )}
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#00acc1] text-white">
//                   <th className="border p-2">Sr</th>
//                   <th className="border p-2">Service</th>
//                   <th className="border p-2 text-right">Price</th>
//                   <th className="border p-2 text-center">Hit Count</th>
//                   <th className="border p-2 text-right">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reports.length > 0 ? (
//                   reports.map((value, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="border p-2">{index + 1}</td>
//                       <td className="border p-2">{value.api_name}</td>
//                       <td className="border p-2 text-right">{value.scheme_price}</td>
//                       <td className="border p-2 text-center">{value.hit_count}</td>
//                       <td className="border p-2 text-right">
//                         {user.scheme_type === "demo" ? "0" : value.total}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={5} className="border p-2 text-center">No reports available</td>
//                   </tr>
//                 )}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
//                   <td className="border p-2 text-right">{transactionTotal}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillReport;





// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import ReportPDF from "./PdfReport";

// const BillReport = () => {
//   const { yearMonth, userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
//   const [transactionTotal, setTransactionTotal] = useState(0);

//   useEffect(() => {
//     if (userId) {
//       getUser(userId);
//     } else {
//       const token = Cookies.get('authToken');
//       getUser(token);
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       getReport();
//     }
//   }, [user]);

//   const getUser = async (token) => {
//     const domain = localStorage.getItem('domain');
//     try {
//       const response = await axios.get(`${domain}/getuser/${token}`);
//       console.log('getUserByidtoken: ', response);
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setUser(null);
//     }
//   };

//   const getReport = async () => {
//     const domain = localStorage.getItem('domain');
//     if (user && yearMonth) {
//       try {
//         const response = await axios.post(`${domain}/getreport`, {
//           token: user.access_token,
//           userDetails: user.id,
//           yearMonth: yearMonth,
//         });
//         console.log('reportData: ', response);
//         const data = response.data;

//         // Extract users and reports
//         setReports(data.reports);

//         // Calculate total transaction
//         const total = data.reports.reduce((acc, report) => acc + (report.total || 0), 0);
//         setTransactionTotal(total);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//         setReports([]);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg">
//         <div className="bg-[#00acc1] text-white p-4 rounded-t-lg">
//           <h3 className="text-xl font-semibold">Bill Report</h3>
//         </div>
//         <div className="p-6">
//           {user ? (
//             <div className="mb-4">
//               <h5>Name: <span className="text-gray-600 text-lg">{user.name}</span></h5>
//               <h5>Email: <span className="text-gray-600 text-lg">{user.email}</span></h5>
//             </div>
//           ) : (
//             <p>Loading user data...</p>
//           )}
//           <div className="flex justify-between mb-4">
//             <PDFDownloadLink
//               document={<ReportPDF reports={reports} user={user} transactionTotal={transactionTotal} />}
//               fileName="report.pdf"
//               disabled={reports.length === 0}
//               className={`px-4 py-2 rounded ${reports.length === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//             >
//               {reports.length === 0 ? 'No Reports to Download' : 'Download Report PDF'}
//             </PDFDownloadLink>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#00acc1] text-white">
//                   <th className="border p-2">Sr</th>
//                   <th className="border p-2">Service</th>
//                   <th className="border p-2 text-right">Price</th>
//                   <th className="border p-2 text-center">Hit Count</th>
//                   <th className="border p-2 text-right">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reports.length > 0 ? (
//                   reports.map((value, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="border p-2">{index + 1}</td>
//                       <td className="border p-2">{value.api_name}</td>
//                       <td className="border p-2 text-right">{value.scheme_price}</td>
//                       <td className="border p-2 text-center">{value.hit_count}</td>
//                       <td className="border p-2 text-right">
//                         {user.scheme_type === "demo" ? "0" : value.total}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={5} className="border p-2 text-center">No reports available</td>
//                   </tr>
//                 )}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
//                   <td className="border p-2 text-right">{transactionTotal}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillReport;




// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ReportPDF from './ReportPDF'; // Import the PDF component

// const BillReport = () => {
//   const { yearMonth, userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
//   const [transactionTotal, setTransactionTotal] = useState(0);
//   const [isPdfOpen, setIsPdfOpen] = useState(false); // State for PDF visibility

//   useEffect(() => {
//     if (userId) {
//       getUser(userId);
//     } else {
//       const token = Cookies.get('authToken');
//       getUser(token);
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       getReport();
//     }
//   }, [user]);

//   const getUser = async (token) => {
//     const domain = localStorage.getItem('domain');
//     try {
//       const response = await axios.get(`${domain}/getuser/${token}`);
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setUser(null);
//     }
//   };

//   const getReport = async () => {
//     const domain = localStorage.getItem('domain');
//     if (user && yearMonth) {
//       try {
//         const response = await axios.post(`${domain}/getreport`, {
//           token: user.access_token,
//           userDetails: user.id,
//           yearMonth: yearMonth,
//         });
//         const data = response.data;
//         setReports(data.reports);
//         const total = data.reports.reduce((acc, report) => acc + (report.total || 0), 0);
//         setTransactionTotal(total);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//         setReports([]);
//       }
//     }
//   };

//   const openPdf = () => {
//     setIsPdfOpen(true);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg">
//         <div className="bg-[#00acc1] text-white p-4 rounded-t-lg">
//           <h3 className="text-xl font-semibold">Bill Report</h3>
//         </div>
//         <div className="p-6">
//           {user ? (
//             <div className="mb-4">
//               <h5>Name: <span className="text-gray-600 text-lg">{user.name}</span></h5>
//               <h5>Email: <span className="text-gray-600 text-lg">{user.email}</span></h5>
//             </div>
//           ) : (
//             <p>Loading user data...</p>
//           )}
//           <div className="flex justify-between mb-4">
//             <button
//               onClick={openPdf}
//               disabled={reports.length === 0}
//               className={`px-4 py-2 rounded ${reports.length === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//             >
//               {reports.length === 0 ? 'No Reports to View' : 'View Report PDF'}
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#00acc1] text-white">
//                   <th className="border p-2">Sr</th>
//                   <th className="border p-2">Service</th>
//                   <th className="border p-2 text-right">Price</th>
//                   <th className="border p-2 text-center">Hit Count</th>
//                   <th className="border p-2 text-right">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reports.length > 0 ? (
//                   reports.map((value, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="border p-2">{index + 1}</td>
//                       <td className="border p-2">{value.api_name}</td>
//                       <td className="border p-2 text-right">{value.scheme_price}</td>
//                       <td className="border p-2 text-center">{value.hit_count}</td>
//                       <td className="border p-2 text-right">
//                         {user.scheme_type === "demo" ? "0" : value.total}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={5} className="border p-2 text-center">No reports available</td>
//                   </tr>
//                 )}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
//                   <td className="border p-2 text-right">{transactionTotal}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {isPdfOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded">
//             <ReportPDF reports={reports} user={user} transactionTotal={transactionTotal} />
//             <button onClick={() => setIsPdfOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close PDF</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BillReport;


// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ReportPDF from './ReportPDF';
// import { PDFDownloadLink } from '@react-pdf/renderer';

// const BillReport = () => {
//   const { yearMonth, userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
//   const [transactionTotal, setTransactionTotal] = useState(0);

//   useEffect(() => {
//     if (userId) {
//       getUser(userId);
//     } else {
//       const token = Cookies.get('authToken');
//       getUser(token);
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       getReport();
//     }
//   }, [user]);

//   const getUser = async (token) => {
//     const domain = localStorage.getItem('domain');
//     try {
//       const response = await axios.get(`${domain}/getuser/${token}`);
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setUser(null);
//     }
//   };

//   const getReport = async () => {
//     const domain = localStorage.getItem('domain');
//     if (user && yearMonth) {
//       try {
//         const response = await axios.post(`${domain}/getreport`, {
//           token: user.access_token,
//           userDetails: user.id,
//           yearMonth: yearMonth,
//         });
//         const data = response.data;
//         setReports(data.reports);
//         const total = data.reports.reduce((acc, report) => acc + (report.total || 0), 0);
//         setTransactionTotal(total);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//         setReports([]);
//       }
//     }
//   };

//   const openPdfInNewTab = () => {
//     const pdfBlob = new Blob([<ReportPDF reports={reports} user={user} transactionTotal={transactionTotal} />], { type: 'application/pdf' });
//     const pdfUrl = URL.createObjectURL(pdfBlob);
//     window.open(pdfUrl, '_blank');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg">
//         <div className="bg-[#00acc1] text-white p-4 rounded-t-lg">
//           <h3 className="text-xl font-semibold">Bill Report</h3>
//         </div>
//         <div className="p-6">
//           {user ? (
//             <div className="mb-4">
//               <h5>Name: <span className="text-gray-600 text-lg">{user.name}</span></h5>
//               <h5>Email: <span className="text-gray-600 text-lg">{user.email}</span></h5>
//             </div>
//           ) : (
//             <p>Loading user data...</p>
//           )}
//           <div className="flex justify-between mb-4">
//             <button
//               onClick={openPdfInNewTab}
//               disabled={reports.length === 0}
//               className={`px-4 py-2 rounded ${reports.length === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//             >
//               {reports.length === 0 ? 'No Reports to View' : 'View Report PDF'}
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#00acc1] text-white">
//                   <th className="border p-2">Sr</th>
//                   <th className="border p-2">Service</th>
//                   <th className="border p-2 text-right">Price</th>
//                   <th className="border p-2 text-center">Hit Count</th>
//                   <th className="border p-2 text-right">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reports.length > 0 ? (
//                   reports.map((value, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="border p-2">{index + 1}</td>
//                       <td className="border p-2">{value.api_name}</td>
//                       <td className="border p-2 text-right">{value.scheme_price}</td>
//                       <td className="border p-2 text-center">{value.hit_count}</td>
//                       <td className="border p-2 text-right">
//                         {user.scheme_type === "demo" ? "0" : value.total}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={5} className="border p-2 text-center">No reports available</td>
//                   </tr>
//                 )}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
//                   <td className="border p-2 text-right">{transactionTotal}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillReport;



// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
// import ReportPDF from './ReportPDF';

// const BillReport = () => {
//   const { yearMonth, userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
//   const [transactionTotal, setTransactionTotal] = useState(0);

//   useEffect(() => {
//     if (userId) {
//       getUser(userId);
//     } else {
//       const token = Cookies.get('authToken');
//       getUser(token);
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       getReport();
//     }
//   }, [user]);

//   const getUser = async (token) => {
//     const domain = localStorage.getItem('domain');
//     try {
//       const response = await axios.get(`${domain}/getuser/${token}`);
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setUser(null);
//     }
//   };

//   const getReport = async () => {
//     const domain = localStorage.getItem('domain');
//     if (user && yearMonth) {
//       try {
//         const response = await axios.post(`${domain}/getreport`, {
//           token: user.access_token,
//           userDetails: user.id,
//           yearMonth: yearMonth,
//         });
//         console.log(response.data.reports)
//         const data = response.data;
//         setReports(data.reports);
//         const total = data.reports.reduce((acc, report) => acc + (report.total || 0), 0);
//         setTransactionTotal(total);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//         setReports([]);
//       }
//     }
//   };

//   const openPdfInNewTab = async () => {
//     const blob = await pdf(<ReportPDF reports={reports} user={user} transactionTotal={transactionTotal} />).toBlob();
//     const url = URL.createObjectURL(blob);
//     window.open(url, '_blank');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg">
//         <div className="bg-[#00acc1] text-white p-4 rounded-t-lg">
//           <h3 className="text-xl font-semibold">Bill Report</h3>
//         </div>
//         <div className="p-6">
//           {user ? (
//             <div className="mb-4">
//               <h5>Name: <span className="text-gray-600 text-lg">{user.name}</span></h5>
//               <h5>Email: <span className="text-gray-600 text-lg">{user.email}</span></h5>
//             </div>
//           ) : (
//             <p>Loading user data...</p>
//           )}
//           <div className="flex justify-between mb-4">
//             <button
//               onClick={openPdfInNewTab}
//               disabled={reports.length === 0}
//               className={`px-4 py-2 rounded ${reports.length === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
//             >
//               {reports.length === 0 ? 'No Reports to View' : 'View Report PDF'}
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#00acc1] text-white">
//                   <th className="border p-2">Sr</th>
//                   <th className="border p-2">Service</th>
//                   <th className="border p-2 text-right">Price</th>
//                   <th className="border p-2 text-center">Hit Count</th>
//                   <th className="border p-2 text-right">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reports.length > 0 ? (
//                   reports.map((value, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="border p-2">{index + 1}</td>
//                       <td className="border p-2">{value.api_name}</td>
//                       <td className="border p-2 text-right">{value.scheme_price}</td>
//                       <td className="border p-2 text-center">{value.hit_count}</td>
//                       <td className="border p-2 text-right">
//                         {user.scheme_type === "demo" ? "0" : value.total}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={5} className="border p-2 text-center">No reports available</td>
//                   </tr>
//                 )}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
//                   <td className="border p-2 text-right">{transactionTotal}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillReport;

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import { pdf } from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';

const BillReport = () => {
  const { yearMonth, userId } = useParams();
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [transactionTotal, setTransactionTotal] = useState(0);

  useEffect(() => {
    if (userId) {
      getUser(userId);
    } else {
      const token = Cookies.get('authToken');
      getUser(token);
    }
  }, []);

  useEffect(() => {
    if (user) {
      getReport();
    }
  }, [user]);

  const getUser = async (token) => {
    const domain = localStorage.getItem('domain');
    try {
      const response = await axios.get(`${domain}/getuser/${token}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  const getReport = async () => {
    const domain = localStorage.getItem('domain');
    if (user && yearMonth) {
      try {
        const response = await axios.post(`${domain}/getreport`, {
          token: user.access_token,
          userDetails: user.id,
          yearMonth: yearMonth,
        });
        const data = response.data;
        console.log('reportData: ',data)

        // Normalize reports: Check if it's an array or a nested object
        let reportData = [];

        if (Array.isArray(data.reports)) {
          reportData = data.reports; // Already an array
        } else if (typeof data.reports === 'object') {
          reportData = Object.values(data.reports); // Convert object to array
        }

        setReports(reportData);
        const total = reportData.reduce((acc, report) => acc + (report.total || 0), 0);
        setTransactionTotal(total);
      } catch (error) {
        console.error("Error fetching reports:", error);
        setReports([]);
      }
    }
  };

  const openPdfInNewTab = async () => {
    console.log('clicked');
    const blob = await pdf(<ReportPDF reports={reports} user={user} transactionTotal={transactionTotal} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg">
        <div className="bg-[#00acc1] text-white p-4 rounded-t-lg">
          <h3 className="text-xl font-semibold">Bill Report</h3>
        </div>
        <div className="p-6">
          {user ? (
            <div className="mb-4">
              <h5>Name: <span className="text-gray-600 text-lg">{user.name}</span></h5>
              <h5>Email: <span className="text-gray-600 text-lg">{user.email}</span></h5>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
          <div className="flex justify-between mb-4">
            <button
              onClick={openPdfInNewTab}
              disabled={reports.length === 0}
              className={`px-4 py-2 rounded ${reports.length === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
            >
              {reports.length === 0 ? 'No Reports to View' : 'View Report PDF'}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#00acc1] text-white">
                  <th className="border p-2">Sr</th>
                  <th className="border p-2">Service</th>
                  <th className="border p-2 text-right">Price</th>
                  <th className="border p-2 text-center">Hit Count</th>
                  <th className="border p-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {reports.length > 0 ? (
                  reports.map((value, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{value.api_name}</td>
                      <td className="border p-2 text-right">{value.scheme_price}</td>
                      <td className="border p-2 text-center">{value.hit_count}</td>
                      <td className="border p-2 text-right">
                        {user.scheme_type === "demo" ? "0" : value.total}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="border p-2 text-center">No reports available</td>
                  </tr>
                )}
                <tr className="font-bold">
                  <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
                  <td className="border p-2 text-right">{transactionTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillReport;
