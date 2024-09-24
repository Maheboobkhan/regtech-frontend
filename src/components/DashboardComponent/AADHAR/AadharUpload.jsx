// import React, { Component } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";

// class AadhaarUpload extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       aadhaarNumber: "",
//       file: null,
//       response: null,
//       error: null,
//       loading: false,
//     };
//   }

//   handleChange = (e) => {
//     console.log(e.target.files[0]);
//       this.setState({ file: e.target.files[0] });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const token = Cookies.get("authToken");

//     if (!token) {
//       this.setState({ error: "Auth token is missing" });
//       return;
//     }

//     this.setState({ loading: true });

//       axios.post(
//         'http://localhost:8000/api/aadharupload',
//         { file: this.state.file },
//         {
//           headers: {
//             'AccessToken': token, // Send the token in the header
//             'Content-Type': 'multipart/form-data', // Specify the content type for file upload
//           }
//         }
//       )
//       .then((response) => {
//         this.setState({
//           response: response.data,
//           error: null,
//           loading: false,
//           file: null,
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           error: "Error uploading Aadhaar file",
//           loading: false,
//         });
//       });
//   };

//   render() {
//     const { aadhaarNumber, file, response, error, loading } = this.state;

//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
//         <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="bg-[#00acc1] p-4 flex justify-between">
//             <h3 className="text-xl font-semibold text-white">
//               Aadhaar Upload
//             </h3>
//             <Link
//               to="/dashboard/kyc/aadhaar_api"
//               className="text-white underline hover:text-blue-100"
//             >
//               Aadhaar APIs
//             </Link>
//           </div>
//           <div className="p-4">
//             {loading && (
//               <div className="flex justify-center items-center mb-4">
//                 <div className="text-xl text-blue-300">Fetching details, please wait...</div>
//               </div>
//             )}
//             {error && (
//               <div className="bg-red-500 text-white p-3 rounded mb-4">
//                 {error}
//               </div>
//             )}
//             <form onSubmit={this.handleSubmit} className="mt-4">
//               <div className="mb-4">
//                 <label
//                   htmlFor="file"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Upload Aadhaar File
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   name="file"
//                   onChange={this.handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
//               >
//                 {loading ? 'Processing...' : 'Submit'}
//               </button>
//             </form>
//             {response && (
//               <div className="bg-blue-400 text-white p-3 rounded mt-4">
//                 <h3 className="text-lg font-semibold">Response</h3>
//                 <pre>{JSON.stringify(response, null, 2)}</pre>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AadhaarUpload;







import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

class AadhaarUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      response: null,
      error: null,
      loading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      this.setState({ error: "Auth token is missing" });
      return;
    }

    if (!this.state.file) {
      this.setState({ error: "Please select a file to upload" });
      return;
    }

    this.setState({ loading: true });

    const formData = new FormData();
    formData.append('file', this.state.file);

    axios.post(
      'http://localhost:8000/api/aadhaar_upload',
      formData,
      {
        headers: {
          'AccessToken': token,
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    .then((response) => {
      this.setState({
        response: response.data,
        error: null,
        loading: false,
        file: null,
      });
    })
    .catch((error) => {
      this.setState({
        error: "Error uploading Aadhaar file",
        loading: false,
      });
    });
  };

  render() {
    const { file, response, error, loading } = this.state;

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#00acc1] p-4 flex justify-between">
            <h3 className="text-xl font-semibold text-white">
              Aadhaar Upload
            </h3>
            <Link
              to="/dashboard/kyc/aadhaar_api"
              className="text-white underline hover:text-blue-100"
            >
              Aadhaar APIs
            </Link>
          </div>
          <div className="p-4">
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-blue-300">Fetching details, please wait...</div>
              </div>
            )}
            {error && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={this.handleSubmit} className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload Aadhaar File
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={this.handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"

              >
                {loading ? 'Processing...' : 'Upload'}
              </button>
            </form>
            {response && (
              <div className="mt-4">
                {/* Aadhaar CARD OCR Information */}
                {response.aadhaar && response.statusCode === 200 && (
                  <div className="bg-green-100 border border-green-400 rounded-lg p-4 mb-4 shadow-md">
                    <div className="flex justify-between items-center border-b border-green-300 pb-2 mb-2">
                      <h3 className="text-xl font-semibold text-green-700">Aadhaar CARD OCR</h3>
                    </div>
                    <div>
                      <p className="text-gray-800"><strong>Aadhaar Number:</strong> {response.aadhaar[0]['aadhaar_validation']['data']['aadhaar_number'] ?? 'N/A'}</p>
                      <p className="text-gray-800"><strong>Full Name:</strong> {response.aadhaarOCR['data']['ocr_fields'][0]['full_name']['value'] ?? 'N/A'}</p>
                      <p className="text-gray-800"><strong>DOB:</strong> {response.aadhaarOCR['data']['ocr_fields'][0]['dob']['value'] ?? 'N/A'}</p>
                    </div>
                  </div>
                )}

                {/* Aadhaar Verification Information */}
                {response.aadhaar && (
                  <div className="bg-blue-100 border border-blue-400 rounded-lg p-4 mb-4 shadow-md">
                    <div className="flex justify-between items-center border-b border-blue-300 pb-2 mb-2">
                      <h3 className="text-xl font-semibold text-blue-700">Aadhaar Verification</h3>
                    </div>
                    <div>
                      <p className="text-gray-800"><strong>Aadhaar Number:</strong> {response.aadhaar[0]['aadhaar_validation']['data']['aadhaar_number'] ?? 'N/A'}</p>
                      <p className="text-gray-800"><strong>Age Range:</strong> {response.aadhaar[0]['aadhaar_validation']['data']['age_range'] ?? 'N/A'}</p>
                      <p className="text-gray-800"><strong>Gender:</strong> 
                        {response.aadhaar[0]['aadhaar_validation']['data']['gender'] === 'M' ? 'Male' : 
                         response.aadhaar[0]['aadhaar_validation']['data']['gender'] === 'F' ? 'Female' : 'N/A'}
                      </p>
                      <p className="text-gray-800"><strong>Mobile:</strong> {'*******' + (response.aadhaar[0]['aadhaar_validation']['data']['last_digits'] ?? 'N/A')}</p>
                      <p className="text-gray-800"><strong>State:</strong> {response.aadhaar[0]['aadhaar_validation']['data']['state'] ?? 'N/A'}</p>
                      <p className="text-gray-800"><strong>Aadhaar Verification:</strong> 
                        {response.aadhaar[0]['aadhaar_validation']['message_code'] === 'success' ? 'Success' : response.aadhaar[0]['aadhaar_validation']['message_code'] ?? 'N/A'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AadhaarUpload;
