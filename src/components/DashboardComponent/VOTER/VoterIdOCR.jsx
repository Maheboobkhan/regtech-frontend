// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Link } from 'react-router-dom';

// const VoterIDOCR = () => {
//   const [file, setFile] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = Cookies.get('authToken');

//     if (!token) {
//       setError('Auth token is missing');
//       return;
//     }

//     if (!file) {
//       setError('Please select a Voter ID image');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const { data } = await axios.post(
//         'http://regtechapi.in/api/voter_ocr',
//         formData,
//         {
//           headers: {
//             'AccessToken': token,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       setResponse(data);
//     } catch (err) {
//       setError(err.response ? err.response.data.message : 'Error uploading file');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-semibold">Voter OCR</h3>
//         </div>
//         <div className="mb-4">
//           {loading && <div className="text-blue-600">Processing image, please wait...</div>}
//           {error && <div className="bg-red-600 text-white p-3 rounded mb-4">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
//                 Voter Id Image
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleFileChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
//             >
//               Verify
//             </button>
//           </form>
//         </div>
//         {response && response.status_code === 200 && (
//           <div className="mt-6 bg-blue-600 text-white p-4 rounded">
//             <h3 className="text-lg font-semibold">Voter Details</h3>
//             <div className="mt-4">
//               <p><strong>Voter Description:&nbsp;&nbsp;</strong>
//                 {response.voterid && response.voterid.detected_text
//                   ? response.voterid.detected_text
//                   : 'null'}
//               </p>
//               <p><strong>Name:&nbsp;&nbsp;</strong>
//                 {response.voterid && response.voterid.extracted_info && response.voterid.extracted_info.name
//                   ? response.voterid.extracted_info.name
//                   : 'null'}
//               </p>
//               <p><strong>Voter Id:&nbsp;&nbsp;</strong>
//                 {response.voterid && response.voterid.extracted_info && response.voterid.extracted_info.voter_id
//                   ? response.voterid.extracted_info.voter_id
//                   : 'null'}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VoterIDOCR;




import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const VoterUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');

    if (!token) {
      setError('Auth token is missing');
      return;
    }

    if (!file) {
      setError('Please select a Voter ID image');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await axios.post(
        'http://regtechapi.in/api/voter_ocr',
        formData,
        {
          headers: {
            'AccessToken': token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setResponse(data);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error uploading file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Voter OCR</h3>
          <Link
            to="/dashboard/kyc/voter_api"
            className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-200"
          >
            Voter APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="text-center mb-4">
              <div className="text-xl text-blue-600">Uploading image, please wait...</div>
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                Voter ID Image
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Verify
            </button>
          </form>
          {response && response.status_code === 200 && (
            <div className="mt-6">
              <div className="bg-blue-600 text-white p-4 rounded">
                <h3 className="text-lg font-semibold">Voter Details</h3>
                <div className="mt-4">
                  <p><strong>Voter Description:&nbsp;&nbsp;</strong>
                    {response.voterid && response.voterid.detected_text
                      ? response.voterid.detected_text
                      : 'null'}
                  </p>
                  <p><strong>Name:&nbsp;&nbsp;</strong>
                    {response.voterid && response.voterid.extracted_info && response.voterid.extracted_info.name
                      ? response.voterid.extracted_info.name
                      : 'null'}
                  </p>
                  <p><strong>Voter Id:&nbsp;&nbsp;</strong>
                    {response.voterid && response.voterid.extracted_info && response.voterid.extracted_info.voter_id
                      ? response.voterid.extracted_info.voter_id
                      : 'null'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoterUpload;
