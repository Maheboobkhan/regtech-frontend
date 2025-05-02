// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';

// const GetSignDocument = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Use useLocation hook to get query parameters from the URL
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Function to extract query parameters from URL
//   const getQueryParams = () => {
//     const params = new URLSearchParams(location.search);
//     const id = params.get('id');
//     const sign_method = params.get('sign_method');
//     return { id, sign_method };
//   };

//   useEffect(() => {
//     const { id, sign_method } = getQueryParams();

//     if (id && sign_method) {
//       // Make an API call using the extracted parameters
//       axios
//         .get(`http://localhost:8000/api/getsign/${id}/${sign_method}`)
//         .then((response) => {
//             const responseData = encodeURIComponent(JSON.stringify(response.data)); // Make sure to encode the data if it's complex
//         const redirectUrl = `http://localhost:5173/response_new?params=${responseData}&id=${id}&sign_method=${sign_method}`;
        
//         // Perform the redirect
//         // window.location.href = redirectUrl;
//           setData(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           setError('Error fetching data');
//           setLoading(false);
//         });
//     } else {
//       setError('Missing query parameters');
//       setLoading(false);
//     }
//   }, []); // Re-run the effect if query parameters change

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Sign Document Details</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default GetSignDocument;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const GetSignDocument = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState(null);

//   // Use useParams hook to get dynamic parameters from the URL
//   const { id, sign_method } = useParams();
//   console.log('data: ',id, sign_method);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id && sign_method) {
//       console.log(id, sign_method)
//       const domain = localStorage.getItem('domain');
//       // Make an API call using the extracted parameters
//       axios
//         .get(`${domain}/getsign/${id}/${sign_method}`)
//         .then((response) => {
//           const { status, message, download_pdf } = response.data;

//           if (status === 'success') {
//             // If the response indicates success, store the download URL
//             setDownloadUrl(download_pdf);
//             setLoading(false);
//           } else {
//             // Handle the error
//             setError(message);
//             setLoading(false);
//           }
//         })
//         .catch((error) => {
//           setError('Error fetching data');
//           setLoading(false);
//         });
//     } else {
//       setError('Missing parameters');
//       setLoading(false);
//     }
//   }, []); // Re-run when parameters change

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Sign Document Details</h1>

//       {/* If a download URL is present, provide the link to download the signed document */}
//       {downloadUrl ? (
//         <div>
//           <h3>Document Signed Successfully!</h3>
//           <a href={downloadUrl} download>Click here to download the signed document</a>
//         </div>
//       ) : (
//         <p>No download link available.</p>
//       )}
//     </div>
//   );
// };

// export default GetSignDocument;



// src/components/GetSignDocument.js

// src/components/GetSignDocument.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const GetSignDocument = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [fileUrl, setFileUrl] = useState(null);
//   const { id, sign_method } = useParams();

//   useEffect(() => {
//     if (id && sign_method) {
//       const domain = localStorage.getItem('domain');

//       // Send the GET request to the backend API
//       axios
//         .get(`${domain}/getsign/${id}/${sign_method}`, {
//           responseType: 'blob', // Expect the response to be a blob (binary data)
//         })
//         .then((response) => {
//           console.log('response: ', response);
//           // Create a blob URL from the binary data returned
//           const fileBlob = response.data;
//           const fileUrl = URL.createObjectURL(fileBlob);

//           // Set the file URL to be used for the download
//           setFileUrl(fileUrl);
//           setLoading(false);
//         })
//         .catch((error) => {
//           // Handle any errors that occur during the request
//           setError('Error fetching the signed PDF.');
//           setLoading(false);
//         });
//     } else {
//       setError('Missing parameters.');
//       setLoading(false);
//     }
//   }, [id, sign_method]);

//   // Function to trigger the download of the PDF
//   const handleDownload = () => {
//     if (fileUrl) {
//       // Create a temporary anchor tag to simulate a file download
//       const link = document.createElement('a');
//       link.href = fileUrl;
//       link.download = 'signed_document.pdf'; // You can set a custom filename here
//       link.click();
//     } else {
//       setError('File not available for download.');
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Document Sign Details</h1>
//       {/* Button to trigger the download */}
//       <button onClick={handleDownload}>Download Signed PDF</button>
//     </div>
//   );
// };

// export default GetSignDocument;


import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GetSignDocument = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id, sign_method } = useParams();

  const handleDownload = () => {
    setLoading(true);
    const domain = localStorage.getItem('domain');

    axios
      .get(`${domain}/getsign/${id}/${sign_method}`, {
        responseType: 'blob', // Expecting the file as a binary blob
      })
      .then((response) => {
        setLoading(false);

        // Create a download link for the blob
        const fileBlob = response.data;
        const downloadUrl = window.URL.createObjectURL(fileBlob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'signed_document.pdf'; // You can specify a custom filename
        link.click();

        // Clean up the blob URL after download
        window.URL.revokeObjectURL(downloadUrl);
      })
      .catch((err) => {
        setLoading(false);
        setError('Error fetching the signed PDF.');
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Document Sign Details sssss</h1>
      <button onClick={handleDownload}>Download Signed PDF</button>
    </div>
  );
};

export default GetSignDocument;
