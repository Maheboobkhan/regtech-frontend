// import React, { Component } from 'react';
// import { FaEye, FaEyeSlash, FaCopy } from 'react-icons/fa';

// class ApiDocumentation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showToken: false,
//       accessToken: 'sdsfdfdfdfee33434f',
//     };
//   }

//   toggleTokenVisibility = () => {
//     this.setState(prevState => ({
//       showToken: !prevState.showToken,
//     }));
//   };

//   copyToClipboard = () => {
//     navigator.clipboard.writeText(this.state.accessToken);
//     alert('Access token copied to clipboard!');
//   };

//   render() {
//     const { showToken, accessToken } = this.state;
//     return (
//       <div className="bg-[#00acc1] text-white p-6 w-full">
//         <div className="ribbon bg-black text-white py-2 text-center font-bold">
//           API Documentation
//         </div>
//         <div className="mt-4 p-4 bg-white text-black rounded shadow-lg">
//           <div className="flex items-center justify-between">
//             <label className="font-semibold">Access Token:</label>
//             <button onClick={this.toggleTokenVisibility} className="text-[#00acc1]">
//               {showToken ? <FaEyeSlash /> : <FaEye />}
//             </button>
//           </div>
//           <div className="mt-2">
//             {showToken ? (
//               <div className="flex items-center">
//                 <span>{accessToken}</span>
//                 <button onClick={this.copyToClipboard} className="ml-2 text-[#00acc1]">
//                   <FaCopy />
//                 </button>
//               </div>
//             ) : (
//               <input
//                 type="password"
//                 value={accessToken}
//                 readOnly
//                 className="border border-gray-300 rounded p-1 w-full mt-1"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ApiDocumentation;











import React, { Component } from 'react';
import { FaEye, FaEyeSlash, FaCopy } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import axios from 'axios';

class ApiDocumentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToken: false,
      accessToken: '',
    };
  }

  componentDidMount(){
    this.getToken();
  }

  getToken = async () => {
    const token = Cookies.get("authToken");
    if (!token) {
        this.setState({ error: "Token not found" });
        return;
    }
    const domain = localStorage.getItem('domain');

    try {
        const response = await axios.get(
            `${domain}/getuser/${token}`
        );

        this.setState({ accessToken: response.data.access_token });
    } catch (error) {
        this.setState({ error: "Error fetching user data" });
    }
}

  toggleTokenVisibility = () => {
    this.setState(prevState => ({
      showToken: !prevState.showToken,
    }));
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.state.accessToken);
    toast.success('Access token copied to clipboard!', {
    //   position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  render() {
    const { showToken, accessToken } = this.state;
    return (
      <div className="mt-32 mx-auto bg-[#00acc1] text-white p-6 w-3/4">
        <div className="ribbon bg-black text-white py-2 text-center font-bold">
          API Documentation
        </div>
        <div className="mt-4 p-4 bg-white text-black rounded shadow-lg">
          <div className="flex items-center justify-between">
            <label className="font-semibold">Access Token:</label>
            <button onClick={this.toggleTokenVisibility} className="text-[#00acc1]">
              {showToken ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mt-2">
            {showToken ? (
              <div className="flex items-center">
                <span>{accessToken}</span>
                <button onClick={this.copyToClipboard} className="ml-2 text-[#00acc1]">
                  <FaCopy />
                </button>
              </div>
            ) : (
              <input
                type="password"
                value={accessToken}
                readOnly
                className="border border-gray-300 rounded p-1 w-full mt-1"
              />
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default ApiDocumentation;
