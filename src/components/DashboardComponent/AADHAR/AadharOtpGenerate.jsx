// import React, { Component } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";

// class AadhaarOtpGenerate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       aadhaarNumber: "",
//       response: null,
//       error: null,
//       loading: false,
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ aadhaarNumber: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const token = Cookies.get("authToken");

//     if (!token) {
//       this.setState({ error: "Auth token is missing" });
//       return;
//     }

//     this.setState({ loading: true });

//     const domain = localStorage.getItem('domain');

//     axios.post(
//         `${domain}/aadhaar_otp_generate`,
//         { aadhaar_number: this.state.aadhaarNumber },
//         {
//           headers: {
//             'AccessToken': token // Send the token in the header
//           }
//         }
//       )
//       .then((response) => {
//         this.setState({
//           response: response.data,
//           error: null,
//           loading: false,
//           aadhaarNumber: "",
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           error: "Error verifying Aadhaar number",
//           loading: false,
//         });
//       });
//   };

//   render() {
//     const { aadhaarNumber, response, error, loading } = this.state;

//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
//         <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="bg-[#00acc1] p-4 flex justify-between">
//             <h3 className="text-xl font-semibold text-white">
//               Aadhaar Validation
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
//                 <div className="text-xl text-blue-300">
//                   Fetching Aadhaar details <span className="text-blue-300">please wait...</span>
//                 </div>
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
//                   htmlFor="aadhaar_number"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Aadhaar Number
//                 </label>
//                 <input
//                   type="text"
//                   id="aadhaar_number"
//                   name="aadhaar_number"
//                   value={aadhaarNumber}
//                   onChange={this.handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Ex: 1111 2222 3333"
//                   required
//                   maxLength="12"
//                   minLength="12"
//                 />
//               </div>
//               <div className="flex flex-col">
//               <button
//                 type="submit"
//                 className="bg-blue-500 w-fit hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
//               >
//                 Get OTP
//               </button>
//               <button
//                 type="submit"
//                 className="mt-4 w-fit mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
//               >
//                 Click to Submit OTP
//               </button>
//               </div>
//             </form>
//             {response && (
//               <>
//                 {response[0]?.aadhaar_validation?.status?.statusCode === 200 && (
//                   <div className="bg-blue-400 text-white p-3 rounded mt-4">
//                     <h3 className="text-lg font-semibold">Aadhaar Details</h3>
//                     <p>clinet_d: {response[0]?.aadhaar_validation.data.requestId}</p>
//                     <p>otp_sent: {response[0]?.aadhaar_validation.response.otpSentStatus}</p>
//                     <p>if_number: {response[0]?.aadhaar_validation.response.is_number}</p>
//                     <p>valid_aadhar: {response[0]?.aadhaar_validation.response.isValidAadhaar}</p>
//                   </div>
//                 )}
//                 {response[0]?.aadhaar_validation?.status?.statusCode === 404 && (
//                   <div className="bg-red-500 text-white p-3 rounded mb-4">
//                     {response[0]?.aadhaar_validation?.response}
//                   </div>
//                 )}
//                 {response[0]?.aadhaar_validation?.status?.statusCode === 500 && (
//                   <div className="bg-red-500 text-white p-3 rounded mb-4">
//                     Internal Server Error. Please contact techsupport@docboyz.in for more details.
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AadhaarOtpGenerate;








import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

class AadhaarOtpGenerate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadhaarNumber: "",
      response: null,
      error: null,
      loading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ aadhaarNumber: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      this.setState({ error: "Auth token is missing" });
      return;
    }

    this.setState({ loading: true });

    const domain = localStorage.getItem('domain');

    axios.post(
        `${domain}/aadhaar_otp_genrate`,
        { aadhaar_number: this.state.aadhaarNumber },
        {
          headers: {
            'AccessToken': token // Send the token in the header
          }
        }
      )
      .then((response) => {
        this.setState({
          response: response.data,
          error: null,
          loading: false,
          aadhaarNumber: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Error verifying Aadhaar number",
          loading: false,
        });
      });
  };

  render() {
    const { aadhaarNumber, response, error, loading } = this.state;

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#00acc1] p-4 flex justify-between">
            <h3 className="text-xl font-semibold text-white">
              Aadhaar Validation
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
                <div className="text-xl text-blue-300">
                  Fetching Aadhaar details <span className="text-blue-300">please wait...</span>
                </div>
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
                  htmlFor="aadhaar_number"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhaar_number"
                  name="aadhaar_number"
                  value={aadhaarNumber}
                  onChange={this.handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ex: 1111 2222 3333"
                  required
                  maxLength="12"
                  minLength="12"
                />
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-blue-500 w-fit hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                >
                  Get OTP
                </button>
                <Link to='/dashboard/kyc/aadhaar_otp_submit'><button
                  type="submit"
                  className="mt-4 w-fit mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                >
                  Click to Submit OTP
                </button></Link>
              </div>
            </form>
            {response && response.length > 0 && response[0]?.aadhaar_validation && (
              <div className="bg-blue-400 text-white p-3 rounded mt-4 mb-4">
                <h1 className="text-lg font-semibold">Aadhaar Details</h1>
                <p className="mt-2"><span className="text-xl">client_id:</span> {response[0].aadhaar_validation.data.requestId}</p>
                <p className="mt-2"><span className="text-xl">otp_sent:</span> {response[0].aadhaar_validation.data.otpSentStatus ? "1" : "0"}</p>
                <p className="mt-2"><span className="text-xl">if_number:</span> {response[0].aadhaar_validation.data.if_number ? "1" : "0"}</p>
                <p className="mt-2"><span className="text-xl">valid_aadhaar:</span> {response[0].aadhaar_validation.data.isValidAadhaar ? "1" : "0"}</p>
              </div>
            )}
            {response && response[0]?.aadhaar_validation?.statusCode === 404 && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                {response[0]?.aadhaar_validation?.response}
              </div>
            )}
            {response && response[0]?.aadhaar_validation?.statusCode === 500 && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                Internal Server Error. Please contact techsupport@docboyz.in for more details.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AadhaarOtpGenerate;
