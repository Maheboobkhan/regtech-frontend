// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EquifaxScore = () => {
//   const [formData, setFormData] = useState({
//     FirstName: '',
//     LastName: '',
//     MobileNumber: '',
//     DOB: '',
//     id_type: [],
//     IdValue: '',
//   });

//   const [idTypes, setIdTypes] = useState([]);
//   const [panVisible, setPanVisible] = useState(false);
//   const [responseMessage, setResponseMessage] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   useEffect(() => {
//     // Fetch ID types from API
//     axios.get('http://localhost:8000/api/equifax_score_idtypes')
//       .then(response => {
//         setIdTypes(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching ID types!", error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     if (name === 'id_type') {
//       setPanVisible(value.includes('T'));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/api/equifax_score_submit', formData)
//       .then(response => {
//         setResponseMessage(response.data);
//         setErrorMessage(null);
//       })
//       .catch(error => {
//         setErrorMessage(error.response.data.message || 'An error occurred');
//         setResponseMessage(null);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h3 className="text-xl font-bold mb-4">Score API</h3>
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
//         {errorMessage && (
//           <div className="mb-4 text-red-500">{errorMessage}</div>
//         )}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
//           <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter First Name" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
//           <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter Last Name" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
//           <input type="text" name="MobileNumber" value={formData.MobileNumber} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter phone number" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth (DOB)</label>
//           <input type="text" name="DOB" value={formData.DOB} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="YYYY-MM-DD" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Select ID Type</label>
//           <select name="id_type" onChange={handleChange} multiple className="shadow border rounded w-full py-2 px-3 text-gray-700">
//             {idTypes.map((type) => (
//               <option key={type.value} value={type.value}>{type.name}</option>
//             ))}
//           </select>
//         </div>
//         {panVisible && (
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">PAN Card Number</label>
//             <input type="text" name="IdValue" value={formData.IdValue} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter PAN card number" />
//           </div>
//         )}
//         <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
//       </form>

//       {responseMessage && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
//           <p className="font-bold">Success!</p>
//           <p>{JSON.stringify(responseMessage)}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EquifaxScore;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const EquifaxScore = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    MobileNumber: '',
    DOB: '',
    id_type: [],
    IdValue: '',
  });

  const [idTypes, setIdTypes] = useState([]);
  const [panVisible, setPanVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/equifax_score_idtypes')
      .then(response => {
        setIdTypes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching ID types!", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'id_type') {
      setPanVisible(value.includes('T'));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = Cookies.get('authToken');

    try {
      const response = await axios.post(
        'http://localhost:8000/api/equifax_score_submit',
        formData,
        { headers: { AccessToken: token } }
      );
      console.log(JSON.parse(response.data[1]));

      setResponseMessage(JSON.parse(response.data[1]));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred');
      setResponseMessage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#00acc1] p-4 flex justify-between">
          <h3 className="text-xl font-semibold text-white">Score API</h3>
          <Link to="/dashboard/kyc/credit_report_api" className="text-white underline hover:text-blue-100">
            Credit Report APIs
          </Link>
        </div>
        <div className="p-4">
          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-blue-300">
                Processing... Please wait...
              </div>
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            {['FirstName', 'LastName', 'MobileNumber', 'DOB', 'IdValue'].map((field) => (
              <div className="mb-4" key={field}>
                <label htmlFor={field} className="block text-gray-700 text-sm font-bold mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`Ex: ${field === 'DOB' ? 'YYYY-MM-DD' : 'Example'}`}
                  required={field !== 'IdValue' || panVisible}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Select ID Type</label>
              <select name="id_type" onChange={handleChange} multiple className="shadow border rounded w-full py-2 px-3 text-gray-700">
                {idTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.name}</option>
                ))}
              </select>
            </div>
            {panVisible && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">PAN Card Number</label>
                <input
                  type="text"
                  name="IdValue"
                  value={formData.IdValue}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter PAN card number"
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          {responseMessage && responseMessage.statusCode === 200 && (
            <div className="bg-green-400 text-white p-3 rounded mt-4">
              <h3 className="text-lg font-semibold">Details</h3>
              <p><span>Full Name: </span>{responseMessage.full_name}</p>
              <p className='uppercase'><span>PAN No: </span>{responseMessage.pan_no}</p>
              <p><span>Score Value: </span>{responseMessage.score_value}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquifaxScore;
