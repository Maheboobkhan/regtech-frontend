// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const ResponseNew = () => {
//     const [responseData, setResponseData] = useState(null);
//     const location = useLocation();

//     useEffect(() => {
//         // Extract id and sign_method from the query string
//         const queryParams = new URLSearchParams(location.search);
//         const id = queryParams.get('id');
//         const signMethod = queryParams.get('sign_method');

//         // Log id and sign_method to the console
//         console.log('ID:', id);
//         console.log('Sign Method:', signMethod);

//         // Make an API call to the Laravel backend
//         if (id && signMethod) {
//             axios.get(`http://localhost:8000/api/getsign/${id}/${signMethod}`)
//                 .then(response => {
//                     // Log the response from Laravel API
//                     console.log('API Response:', response.data);
//                     setResponseData(response.data); // Save the response data to state
//                 })
//                 .catch(error => {
//                     console.error('Error making API call:', error);
//                 });
//         }
//     }, [location]);

//     return (
//         <div>
//             <h1>Response New</h1>
//             {responseData && (
//                 <div>
//                     <h2>API Response:</h2>
//                     <pre>{JSON.stringify(responseData, null, 2)}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ResponseNew;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ResponseNew = () => {
//     const [responseData, setResponseData] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Extract id and sign_method from the query string
//         const queryParams = new URLSearchParams(location.search);
//         const params = queryParams.get('params');

//         // Log id and sign_method to the console
//         console.log('params:', params);

//         // if(params == 'e'){
//         //     setErrorMessage(params);
//         // }
//         // else{
//         //     setResponseData(params);
//         // }

//         const cleanParams = params ? params.replace(/^"|"$/g, '') : '';

//         // Log the cleaned-up params value
//         console.log('cleaned params:', cleanParams);

//         // Check if the cleaned params value is 'e'
//         if (cleanParams === 'e') {
//             setErrorMessage('Authorization Failed. Try Again');
//         } else {
//             setResponseData(params);  // Use original params (which might be a URL or data for download)
//         }

//         const removeParamsFromURL = () => {
//             const url = new URL(window.location.href);
//             url.searchParams.delete('params');
//             window.history.replaceState({}, '', url);
//         };

//         // removeParamsFromURL();
//     }, []);

//     const handleDownload = () => {
//         if (responseData) {
//             const link = document.createElement('a');
//             link.href = responseData;
//             link.download = 'signed_document.pdf';  // Optional: specify a filename
//             link.click();
//         }
//     };

//     return (
//         <div className="p-4">
//             {/* <h1 className="text-2xl font-bold">Response New</h1> */}
//             {errorMessage || responseData === null ? (
//                 <div className="mt-4 min-h-screen flex justify-center items-center"><p className="text-red-500 text-4xl bg-gray-200 rounded-lg bg-opacity-50 p-24 items-center">Authorization Failed. Try Again</p></div>
//             ) : (
//                 responseData && (
//                     <div className="mt-4 min-h-screen flex justify-center items-center">
//                         <div className='bg-gray-100 h-[250px] w-[500px] flex flex-col justify-between items-center'>
//                         <h2 className="text-2xl font-medium text-gray-600 w-full text-center mt-3 uppercase">PDF Ready for Download</h2>
//                         <button
//                             onClick={handleDownload}
//                             className="mt-2 px-4 py-3 bg-blue-500 text-xl text-white w-full hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 ease-in-out"
//                         >
//                             Download Signed PDF
//                         </button>
//                         </div>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default ResponseNew;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const GetSignDocument = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState(null);
//   const [authorizationFailed, setAuthorizationFailed] = useState(false);
//   const [download, setDownload] = useState(false);

//   // Extract 'id' and 'sign_method' from the URL using useParams
//   const { id, sign_method } = useParams();
//   console.log("id: ", id, "sign_method: ", sign_method);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id && sign_method) {
//       console.log("Making API call with id and sign_method:", id, sign_method);
//       const domain = localStorage.getItem('domain');
//       // Make an API call with the parameters 'id' and 'sign_method'
//       axios
//         .get(`${domain}/getsign/${id}/${sign_method}`)
//         .then((response) => {
//           const result = response.data;
//           console.log("result: ", result);

//           // Check if the response is 'e' (authorization failed)
//           if (result == 'authorization failed') {
//             setAuthorizationFailed(true);
//             setLoading(false);
//           } else {
//             setDownload(true);
//             // If the response is a URL, save it to the state
//             setDownloadUrl(result);
//             setLoading(false);
//           }
//         })
//         .catch((error) => {
//           setError("Error fetching data");
//           setLoading(false);
//         });
//     } else {
//       setError("Missing parameters");
//       setLoading(false);
//     }
//   }, []); // Re-run the effect when parameters change

// //   const handleDownload = () => {
// //             if (downloadUrl) {
// //                 const link = document.createElement('a');
// //                 link.href = downloadUrl;
// //                 link.download = 'signed_document.pdf';  // Optional: specify a filename
// //                 link.click();
// //             }
// //         };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="p-4">
//       {/* <h1>Sign Document Details</h1> */}

//       {/* If the authorization failed, show the authorization error message */}
//       {authorizationFailed && (
//         <div className="mt-4 min-h-screen flex justify-center items-center">
//           <p className="text-red-500 text-4xl bg-gray-200 rounded-lg bg-opacity-50 p-24 items-center">
//             Authorization Failed. Try Again
//           </p>
//         </div>
//       )}
//       {download && (
//         <div className="mt-4 min-h-screen flex justify-center items-center">
//           <div className="bg-gray-100 h-[250px] w-[500px] flex flex-col justify-between items-center">
//             <h2 className="text-2xl font-medium text-green-600 w-full text-center mt-3 uppercase">
//               PDF Signed Successfully !!
//             </h2>
//             <a href={downloadUrl} download className=" mt-2 bg-blue-500 text-xl text-white w-full hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 ease-in-out">
//               <button className="px-4 py-3 w-full">
//                 Download Signed PDF
//               </button>
//               </a>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetSignDocument;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const GetSignDocument = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isResponse, setResponse] = useState();
  const { id, sign_method } = useParams();

  useEffect(()=>{
    setLoading(true);
    const domain = localStorage.getItem("domain");

    axios
      .get(`${domain}/getsign/${id}/${sign_method}`, {
        responseType: "blob", // Expecting the file as a binary blob
      })
      .then((response) => {
        console.log('response: ',response);
        const fileBlob = response.data;
        const downloadUrl = window.URL.createObjectURL(fileBlob);
        setResponse(downloadUrl);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Error fetching the signed PDF.");
      });
  },[])

  const handleDownload = () => {
    const pdfFileName = localStorage.getItem('pdfFileName');
        const link = document.createElement("a");
        link.href = isResponse;
        link.download = pdfFileName+"_"+"signedFinal.pdf"; // You can specify a custom filename
        link.click();

        // Clean up the blob URL after download
        window.URL.revokeObjectURL(isResponse);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      {error && (
        <div className="mt-4 min-h-screen flex justify-center items-center">
          <p className="text-red-500 text-4xl bg-gray-200 rounded-lg bg-opacity-50 p-24 items-center">
            Authorization Failed. Try Again
          </p>
        </div>
      )}

      {isResponse && (
        <div className="mt-4 min-h-screen flex justify-center items-center flex-col">
          <div className="bg-gray-100 h-[250px] w-[500px] flex flex-col justify-between items-center">
            <h2 className="text-2xl font-medium text-green-600 w-full text-center mt-3 uppercase">
              PDF Signed Successfully !!
            </h2>

            <button
              onClick={handleDownload}
              className="mt-2 py-3 bg-blue-500 text-xl text-white w-full hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 ease-in-out"
            >
              Download Signed PDF
            </button>
          </div>
          <Link to="/dashboard" className="mt-4 text-lg underline text-gray-700 hover:text-gray-500 transition-all">Go Back To Home Page</Link>
        </div>
      )}
      
    </div>
  );
};

export default GetSignDocument;
