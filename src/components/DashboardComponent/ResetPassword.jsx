// import React, { Component } from "react";
// import axios from "axios";
// import withRouter from "./withRouter";
// import { ToastContainer, toast } from "react-toastify";
// import Cookies from "js-cookie";
// import "react-toastify/dist/ReactToastify.css";

// class ResetPassword extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       oldPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//       error: "",
//       success: "",
//       user: {},
//     };
//   }

//   componentDidMount() {
//     const token = Cookies.get("authToken");
//     if (!token) return;
//     this.getUserByToken(token);
//   }

//   getUserByToken = async (token) => {
//     const respnse = await axios.get(
//       `http://localhost:8000/api/getuser/${token}`
//     );
//     this.setState({ user: respnse.data });
//   };

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { newPassword, confirmPassword, user } = this.state;

//     if (newPassword !== confirmPassword) {
//       this.setState({ error: "Passwords do not match" });
//       return;
//     }
//     console.log(oldPassword.value);

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/resetuserpassword",
//         {
//           user_id: this.state.user.id,
//           oldpassword: oldPassword.value,
//           password: newPassword,
//           confirm_password: confirmPassword,
//         }
//       );

//       console.log(response);

//     //   this.setState({ success: "Password reset successfully", error: "" });
//       if (response.data.success) {
//         toast.success(response.data.success);
//         setTimeout(() => {
//           this.props.navigate("/dashboard/users");
//         }, 2000);
//       }
//       else if (response.data.error) {
//         toast.error(response.data.error);
//       }
//       else if (response.data.warning) {
//         toast.warning(response.data.warning);
//       }
//     } catch (error) {
//       this.setState({ error: "Error resetting password", success: "" });
//     // toast.error('Error resetting password');
//     }
//   };

//   render() {
//     const { oldPassword, newPassword, confirmPassword, error, success } = this.state;

//     return (
//       <div className="flex font-montserrat items-center justify-center min-h-screen bg-gray-100">
//         <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//           <h1 className="text-2xl font-bold text-center text-black mb-6">
//             Reset Password
//           </h1>
//           <div className="flex flex-col items-left">
//             <p className="text-base text-gray-600 font-bold">
//               Name:{" "}
//               <span className="text-[#00acc1] font-light">
//                 {this.state.user.name}
//               </span>
//             </p>
//             <p className="mb-4 text-base text-gray-600 font-bold">
//               Email:{" "}
//               <span className="text-[#00acc1] font-light">
//                 {this.state.user.email}
//               </span>
//             </p>
//           </div>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           {success && <div className="text-green-500 mb-4">{success}</div>}
//           <form onSubmit={this.handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="newPassword"
//                 className="block text-sm font-medium text-black mb-1"
//               >
//                 Old Password
//               </label>
//               <input
//                 type="password"
//                 id="oldPassword"
//                 name="oldPassword"
//                 placeholder="Enter Old Password"
//                 value={oldPassword}
//                 onChange={this.handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="newPassword"
//                 className="block text-sm font-medium text-black mb-1"
//               >
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 placeholder="Enter New Password"
//                 name="newPassword"
//                 value={newPassword}
//                 onChange={this.handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-black mb-1"
//               >
//                 Confirm New Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Enter Confirm Password"
//                 value={confirmPassword}
//                 onChange={this.handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#00acc1] text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         </div>
//         <ToastContainer />
//       </div>
//     );
//   }
// }

// export default withRouter(ResetPassword);








import React, { Component } from "react";
import axios from "axios";
import withRouter from "./withRouter";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      error: "",
      success: "",
      user: {},
      showOldPassword: false, // State to manage visibility of old password
      showNewPassword: false, // State to manage visibility of new password
      showConfirmPassword: false // State to manage visibility of confirm password
    };
  }

  componentDidMount() {
    const token = Cookies.get("authToken");
    if (!token) return;
    this.getUserByToken(token);
  }

  getUserByToken = async (token) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/getuser/${token}`
      );
      this.setState({ user: response.data });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { oldPassword, newPassword, confirmPassword, user } = this.state;

    if (newPassword !== confirmPassword) {
      this.setState({ error: "Passwords do not match" });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/resetuserpassword",
        {
          user_id: this.state.user.id,
          oldpassword: oldPassword,
          password: newPassword,
          confirm_password: confirmPassword,
        }
      );

      if (response.data.success) {
        toast.success(response.data.success);
        setTimeout(() => {
          this.props.navigate("/dashboard/users");
        }, 2000);
      } else if (response.data.error) {
        toast.error(response.data.error);
      } else if (response.data.warning) {
        toast.warning(response.data.warning);
      }
    } catch (error) {
      toast.error("Error resetting password");
    }
  };

  togglePasswordVisibility = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  };

  render() {
    const {
      oldPassword,
      newPassword,
      confirmPassword,
      error,
      success,
      showOldPassword,
      showNewPassword,
      showConfirmPassword,
    } = this.state;

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-black mb-6">
            Reset Password
          </h1>
          <div className="flex flex-col items-left">
            <p className="text-base text-gray-600 font-bold">
              Name:{" "}
              <span className="text-[#00acc1] font-light">
                {this.state.user.name}
              </span>
            </p>
            <p className="mb-4 text-base text-gray-600 font-bold">
              Email:{" "}
              <span className="text-[#00acc1] font-light">
                {this.state.user.email}
              </span>
            </p>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">{success}</div>}
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4 relative">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-black mb-1"
              >
                Old Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                id="oldPassword"
                name="oldPassword"
                placeholder="Enter Old Password"
                value={oldPassword}
                onChange={this.handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => this.togglePasswordVisibility("showOldPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-black mb-1"
              >
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={this.handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => this.togglePasswordVisibility("showNewPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-black mb-1"
              >
                Confirm New Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={this.handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => this.togglePasswordVisibility("showConfirmPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00acc1] text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Reset Password
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(ResetPassword);
