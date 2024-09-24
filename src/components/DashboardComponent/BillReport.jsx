// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const BillReport = ({ users, reports }) => {
//   const [user, setUser] = useState([]);
//   const [yearMonth, setYearMonth] = useState('');

//   useEffect(() => {
//     const params = useParams();
//     console.log(params);
//     getUser();
//     getReport();
//   }, []);

//   const getUser = async () => {
//     const token = Cookies.get("authToken");

//     try {
//       const response = await axios.get(
//         `http://localhost:8000/api/getuser/${token}`
//       );
//       console.log(response);
//       setUser(response);
//     } catch (error) {
//       setResponse("Error fetching user data");
//     }
//   };

//   const getReport = async() => {
//     const response = await axios.post('http://localhost:8000/api/getreport', ) 
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg">
//         <div className="bg-[#00acc1] text-white p-4 rounded-t-lg">
//           <h3 className="text-xl font-semibold">Bill Report</h3>
//         </div>
//         <div className="p-6">
//           <div className="mb-4">
//             <h5>
//               Name: <span className="text-gray-600 text-lg">{user.name}</span>
//             </h5>
//             <h5>
//               Email:{" "}
//               <span className="text-gray-600 text-lg">{user.email}</span>
//             </h5>
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
//                 {/* {reports.map((value, index) => ( */}
//                   <tr 
//                   // key={index}
//                    className="hover:bg-gray-100">
//                     <td className="border p-2">
//                       {/* {index + 1} */}
//                       </td>
//                     <td className="border p-2">
//                       {/* {value.api_name} */}
//                       </td>
//                     <td className="border p-2 text-right">
//                       {/* {value.scheme_price} */}
//                     </td>
//                     <td className="border p-2 text-center">
//                       {/* {value.hit_count} */}
//                     </td>
//                     <td className="border p-2 text-right">
//                       {/* {Auth.user.scheme_type === "demo" ? "0" : value.total} */}
//                     </td>
//                   </tr>
//                 {/* ))} */}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">
//                     Total Transaction
//                   </td>
//                   <td className="border p-2 text-right">
//                     {/* {transactionTotal} */}
//                     </td>
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

// const BillReport = () => {
//   const params = useParams();
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
  
//   useEffect(() => {
//     console.log(params.yearMonth);
//     getUser();
//     getReport();
//   }, []);

//   const getUser = async () => {
//     const token = Cookies.get("authToken");
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/api/getuser/${token}`
//       );
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setUser(null);
//     }
//   };

//   const getReport = async () => {
//     const token = Cookies.get("authToken");
//     try {
//       const response = await axios.post('http://localhost:8000/api/getreport', {  });
//       setReports(response.data);
//     } catch (error) {
//       console.error("Error fetching reports:", error);
//       setReports([]);
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
//                 {reports.map((value, index) => (
//                   <tr key={index} className="hover:bg-gray-100">
//                     <td className="border p-2">{index + 1}</td>
//                     <td className="border p-2">{value.api_name}</td>
//                     <td className="border p-2 text-right">{value.scheme_price}</td>
//                     <td className="border p-2 text-center">{value.hit_count}</td>
//                     <td className="border p-2 text-right">
//                       {user.scheme_type === "demo" ? "0" : value.total}
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
//                   <td className="border p-2 text-right">
//                     {/* Calculate transaction total here */}
//                   </td>
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

// const BillReport = () => {
//   const params = useParams();
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     getUser();
//   }, []);

//   useEffect(() => {
//     if (user) {
//       getReport();
//     }
//   }, [user]);

//   const getUser = async () => {
//     const token = Cookies.get("authToken");
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/api/getuser/${token}`
//       );
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setUser(null);
//     }
//   };

//   const getReport = async () => {
//     console.log(params.yearMonth);
//     const token = Cookies.get("authToken");
//     if (user && params.yearMonth) {
//       try {
//         const response = await axios.post('http://localhost:8000/api/getreport', {
//           token: token, // Include the CSRF token if needed
//           userDetails: user.id,
//           yearMonth: params.yearMonth,
//         });
//         console.log('report: ',response);
//         setReports(response.data);
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
//                 {reports.length !== 0 && reports?.map((value, index) => (
//                   <tr key={index} className="hover:bg-gray-100">
//                     <td className="border p-2">{index + 1}</td>
//                     <td className="border p-2">{value?.api_name}</td>
//                     <td className="border p-2 text-right">{value?.scheme_price}</td>
//                     <td className="border p-2 text-center">{value?.hit_count}</td>
//                     <td className="border p-2 text-right">
//                       {user.scheme_type === "demo" ? "0" : value?.total}
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="font-bold">
//                   <td colSpan={4} className="border p-2 text-right">Total Transaction</td>
//                   <td className="border p-2 text-right">
//                     {/* Calculate transaction total here */}
//                   </td>
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

const BillReport = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [transactionTotal, setTransactionTotal] = useState(0);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getReport();
    }
  }, [user]);

  const getUser = async () => {
    const token = Cookies.get("authToken");
    try {
      const response = await axios.get(
        `http://localhost:8000/api/getuser/${token}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  const getReport = async () => {
    const token = Cookies.get("authToken");
    if (user && params.yearMonth) {
      try {
        const response = await axios.post('http://localhost:8000/api/getreport', {
          token: token,
          userDetails: user.id,
          yearMonth: params.yearMonth,
        });
        const data = response.data;

        // Extract users and reports
        setUser(data.users);
        setReports(data.reports);

        // Calculate total transaction
        const total = data.reports.reduce((acc, report) => acc + (report.total || 0), 0);
        setTransactionTotal(total);
      } catch (error) {
        console.error("Error fetching reports:", error);
        setReports([]);
      }
    }
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
