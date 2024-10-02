import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import withRouter from "./withRouter";

class ReportList extends Component {
  state = {
    reports: [],
    isAdmin: false,
    count200: 0,
    count101: 0,
    count400: 0,
    count500: 0,
    userService: 0,
    yearMonth: "",
    loading: false,
    ddlYearMonth: [],
    users: [],
  };

  componentDidMount() {
    const token = Cookies.get("authToken");
    this.fetchReportData(token);
  }

  getReportByYearMonthByAdmin = async () => {
    const token = Cookies.get("authToken");
    this.setState({loading: true})
    const formData = {
      token: token,
      year_month: this.state.yearMonth !== "" ? this.state.yearMonth : 0,
      user: this.state.userService,
    };
    const domain = localStorage.getItem("domain");
    try {
      const response = await axios.post(
        `${domain}/getuserreportwithyearmonth`,
        formData
      );
      console.log(response);
      this.setState({
        reports: response.data.reports,
        isAdmin: response.data.isAdmin,
        count200: response.data.count200,
        count101: response.data.count101,
        count400: response.data.count400,
        count500: response.data.count500,
        userService: response.data.userService,
        yearMonth: response.data.year_month,
        ddlYearMonth: response.data.ddl_year_month,
        users: response.data.users,
        loading: false
      });
    } catch (error) {
      console.error("Error fetching report data:", error);
      this.setState({loading:false})
    }
  };

  getReportByYearMonth = async () => {
    const token = Cookies.get("authToken");
    this.setState({loading:true})
    const formData = {
      token: token,
      year_month: this.state.yearMonth,
    };
    const domain = localStorage.getItem("domain");
    try {
      const response = await axios.post(
        `${domain}/getuserreportwithyearmonth`,
        formData
      );

      this.setState({
        reports: response.data.reports,
        isAdmin: response.data.isAdmin,
        count200: response.data.count200,
        count101: response.data.count101,
        count400: response.data.count400,
        count500: response.data.count500,
        userService: response.data.userService,
        yearMonth: response.data.year_month,
        ddlYearMonth: response.data.ddl_year_month,
        loading: false
      });
    } catch (error) {
      console.error("Error fetching report data:", error);
      this.setState({loading:true})
    }
  };

  generateBill = () => {
    const { yearMonth } = this.state;
    this.props.navigate(`/dashboard/get_report/${yearMonth}`);
  };

  generateBillByAdmin = () => {
    const { yearMonth } = this.state;
    this.props.navigate(
      `/dashboard/get_report/${yearMonth}/${this.state.userService}`
    );
  };

  fetchReportData = async (token) => {
    const domain = localStorage.getItem("domain");
    try {
      const response = await axios.get(`${domain}/getuserreport/${token}`);
      console.log("report: ", response);
      this.setState({
        reports: response.data.reports,
        isAdmin: response.data.isAdmin,
        count200: response.data.count200,
        count101: response.data.count101,
        count400: response.data.count400,
        count500: response.data.count500,
        userService: response.data.userService,
        yearMonth: response.data.year_month,
        ddlYearMonth: response.data.ddl_year_month,
        users: response.data.users,
      });
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  render() {
    const {
      reports,
      isAdmin,
      count200,
      count101,
      count400,
      count500,
      userService,
      yearMonth,
      ddlYearMonth,
      users,
      loading
    } = this.state;

    return (
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-[#00acc1]">
            Report ({userService !== 0 ? `User ${userService}` : "All Users"})
          </h1>
          {loading && (
            <span className="text-[#00acc1]">Report Details Fetching...</span>
          )}
          {isAdmin ? (
            // <button
            //   className={`${userService !== 0 && (yearMonth !== "" || yearMonth !== '0') ? 'bg-[#00acc1] text-white' : 'bg-gray-400 text-white'}bg-gray-400 text-white px-4 py-2 rounded cursor-pointer`}
            //   onClick={this.generateBillByAdmin}
            // >
            //   Generate Bill
            // </button>
            <button
              className={`${
                userService !== 0 && yearMonth !== "" && yearMonth !== "0"
                  ? "bg-[#00acc1] text-white cursor-pointer"
                  : "bg-gray-400 text-white"
              } px-4 py-2 rounded`}
              onClick={this.generateBillByAdmin}
              disabled={userService === 0 || yearMonth === '' || yearMonth === '0'}
            >
              Generate Bill
            </button>
          ) : (
            <button
              className={`${
                yearMonth !== "" && yearMonth !== "0"
                  ? "bg-[#00acc1] text-white cursor-pointer"
                  : "bg-gray-400 text-white"
              } px-4 py-2 rounded`}
              disabled={yearMonth === '' || yearMonth === '0'}
              onClick={this.generateBill}
            >
              Generate Bill
            </button>
          )}
          {/* <button
            className={`btn ${
              userService !== 0
                ? "bg-[#00acc1] text-white"
                : "bg-gray-400 text-white"
            } px-4 py-2 rounded`}
            disabled={userService === 0}
            onClick={this.generateBill}
          >
            Generate Bill
          </button> */}
        </div>
        <div className="flex space-x-4 mb-4 items-center">
          {isAdmin && (
            <div className="flex flex-col"><label className="text-[#00acc1] mb-1">Select User</label>
            <select
              className="form-select border-2 border-[#00acc1] cursor-pointer text-[#00acc1] p-2 rounded"
              value={userService}
              onChange={(e) => this.setState({ userService: e.target.value })}
            >
              <option value="0">All</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} : {user.email}
                </option>
              ))}
            </select></div>
          )}
          <div className="flex flex-col">
          <label className="text-[#00acc1] mb-1">Select YearMonth</label>
          <select
            className="form-select border-2 border-[#00acc1] cursor-pointer text-[#00acc1] p-2 rounded"
            value={yearMonth}
            onChange={(e) =>
              this.setState(
                { yearMonth: e.target.value },
                console.log(e.target.value)
              )
            }
          >
            <option value="0">All</option>
            {ddlYearMonth?.map((option) => (
              <option key={option.hit_year_month} value={option.hit_year_month}>
                {option.hit_year_month}
              </option>
            ))}
          </select>
          </div>
          {isAdmin ? (
            <button
              onClick={this.getReportByYearMonthByAdmin}
              className={`${
                userService !== 0 && yearMonth !== "" && yearMonth !== "0"
                  ? "bg-[#00acc1] text-white"
                  : "bg-gray-400 text-white"
              }bg-[#00acc1] text-white px-4 py-2 rounded mt-6`}
              disabled={userService === 0 || yearMonth === '' || yearMonth === '0'}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={this.getReportByYearMonth}
              className={`${
                yearMonth !== "" && yearMonth !== "0"
                  ? "bg-[#00acc1] text-white"
                  : "bg-gray-400 text-white"
              } bg-[#00acc1] text-white px-4 py-2 rounded mt-6`}
              disabled={yearMonth === '' || yearMonth === '0'}
            >
              Submit
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-green-600 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl">Status Code: 200</h3>
            <p className="text-2xl">{count200}</p>
          </div>
          <div className="bg-orange-600 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl">Status Code: 101</h3>
            <p className="text-2xl">{count101}</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl">Status Code: 400</h3>
            <p className="text-2xl">{count400}</p>
          </div>
          <div className="bg-red-600 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl">Status Code: 500</h3>
            <p className="text-2xl">{count500}</p>
          </div>
        </div>
        <div id="chart_div" className="bg-white p-4 rounded-lg shadow-md">
          {/* Google Chart integration will go here */}
        </div>
      </div>
    );
  }
}

export default withRouter(ReportList);


// import React, { Component } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import withRouter from "./withRouter";

// class ReportList extends Component {
//   state = {
//     reports: [],
//     isAdmin: false,
//     count200: 0,
//     count101: 0,
//     count400: 0,
//     count500: 0,
//     userService: 0,
//     yearMonth: "",
//     ddlYearMonth: [],
//     users: [],
//     loading: false,
//     searchUser: "", // State for user search input
//   };

//   componentDidMount() {
//     const token = Cookies.get("authToken");
//     this.fetchReportData(token);
//   }

//   getReportByYearMonthByAdmin = async () => {
//     const token = Cookies.get("authToken");
//     const formData = {
//       token: token,
//       year_month: this.state.yearMonth !== "" ? this.state.yearMonth : 0,
//       user: this.state.userService,
//     };
//     const domain = localStorage.getItem("domain");
//     this.setState({ loading: true });
//     try {
//       const response = await axios.post(
//         `${domain}/getuserreportwithyearmonth`,
//         formData
//       );
//       console.log(response);
//       this.setState({
//         reports: response.data.reports,
//         isAdmin: response.data.isAdmin,
//         count200: response.data.count200,
//         count101: response.data.count101,
//         count400: response.data.count400,
//         count500: response.data.count500,
//         userService: response.data.userService,
//         yearMonth: response.data.year_month,
//         ddlYearMonth: response.data.ddl_year_month,
//         users: response.data.users,
//         loading: false,
//       });
//     } catch (error) {
//       console.error("Error fetching report data:", error);
//       this.setState({ loading: false });
//     }
//   };

//   getReportByYearMonth = async () => {
//     const token = Cookies.get("authToken");
//     const formData = {
//       token: token,
//       year_month: this.state.yearMonth,
//     };
//     const domain = localStorage.getItem("domain");
//     this.setState({ loading: true });
//     try {
//       const response = await axios.post(
//         `${domain}/getuserreportwithyearmonth`,
//         formData
//       );

//       this.setState({
//         reports: response.data.reports,
//         isAdmin: response.data.isAdmin,
//         count200: response.data.count200,
//         count101: response.data.count101,
//         count400: response.data.count400,
//         count500: response.data.count500,
//         userService: response.data.userService,
//         yearMonth: response.data.year_month,
//         ddlYearMonth: response.data.ddl_year_month,
//         loading: false,
//       });
//     } catch (error) {
//       console.error("Error fetching report data:", error);
//       this.setState({ loading: false });
//     }
//   };

//   fetchReportData = async (token) => {
//     const domain = localStorage.getItem("domain");
//     this.setState({ loading: true });
//     try {
//       const response = await axios.get(`${domain}/getuserreport/${token}`);
//       console.log("report: ", response);
//       this.setState({
//         reports: response.data.reports,
//         isAdmin: response.data.isAdmin,
//         count200: response.data.count200,
//         count101: response.data.count101,
//         count400: response.data.count400,
//         count500: response.data.count500,
//         userService: response.data.userService,
//         yearMonth: response.data.year_month,
//         ddlYearMonth: response.data.ddl_year_month,
//         users: response.data.users,
//         loading: false,
//       });
//     } catch (error) {
//       console.error("Error fetching report data:", error);
//       this.setState({ loading: false });
//     }
//   };

//   handleSearchChange = (e) => {
//     this.setState({ searchUser: e.target.value });
//   };

//   render() {
//     const {
//       reports,
//       isAdmin,
//       count200,
//       count101,
//       count400,
//       count500,
//       userService,
//       yearMonth,
//       ddlYearMonth,
//       users,
//       loading,
//       searchUser,
//     } = this.state;

//     // Filter users based on search input
//     const filteredUsers = users.filter(user =>
//       user.name.toLowerCase().includes(searchUser.toLowerCase())
//     );

//     return (
//       <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold text-[#00acc1]">
//             Report ({userService !== 0 ? `User ${userService}` : "All Users"})
//           </h1>
          // {loading ? (
          //   <span className="text-[#00acc1]">Report Details Fetching...</span>
          // ) : (
//             <button
//               className={`${
//                 (isAdmin && userService !== 0 && yearMonth) ||
//                 (!isAdmin && userService !== 0)
//                   ? "bg-[#00acc1] text-white"
//                   : "bg-gray-400 text-white"
//               } px-4 py-2 rounded cursor-pointer`}
//               onClick={isAdmin ? this.generateBillByAdmin : this.generateBill}
//               disabled={isAdmin ? userService === 0 || !yearMonth : userService === 0}
//             >
//               Generate Bill
//             </button>
//           )}
//         </div>
//         <div className="flex space-x-4 mb-4">
//           {isAdmin && (
//             <div className="flex flex-col">
//               <label className="text-[#00acc1] mb-1">Select User</label>
//               <input
//                 type="text"
//                 placeholder="Search User"
//                 value={searchUser}
//                 onChange={this.handleSearchChange}
//                 className="border-2 border-[#00acc1] p-2 rounded"
//               />
//               <select
//                 className="form-select border-2 border-[#00acc1] cursor-pointer text-[#00acc1] p-2 rounded mt-2"
//                 value={userService}
//                 onChange={(e) => this.setState({ userService: e.target.value })}
//               >
//                 <option value="0">All</option>
//                 {filteredUsers.map((user) => (
//                   <option key={user.id} value={user.id}>
//                     {user.name} : {user.email}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           <div className="flex flex-col">
//             <label className="text-[#00acc1] mb-1">Select YearMonth</label>
//             <select
//               className="form-select border-2 border-[#00acc1] cursor-pointer text-[#00acc1] p-2 rounded"
//               value={yearMonth}
//               onChange={(e) =>
//                 this.setState({ yearMonth: e.target.value })
//               }
//             >
//               <option value="0">All</option>
//               {ddlYearMonth?.map((option) => (
//                 <option key={option.hit_year_month} value={option.hit_year_month}>
//                   {option.hit_year_month}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             onClick={isAdmin ? this.getReportByYearMonthByAdmin : this.getReportByYearMonth}
//             className="bg-[#00acc1] text-white px-4 py-2 rounded"
//           >
//             Submit
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//           <div className="bg-green-600 text-white p-4 rounded-lg shadow-md">
//             <h3 className="text-xl">Status Code: 200</h3>
//             <p className="text-2xl">{count200}</p>
//           </div>
//           <div className="bg-orange-600 text-white p-4 rounded-lg shadow-md">
//             <h3 className="text-xl">Status Code: 101</h3>
//             <p className="text-2xl">{count101}</p>
//           </div>
//           <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
//             <h3 className="text-xl">Status Code: 400</h3>
//             <p className="text-2xl">{count400}</p>
//           </div>
//           <div className="bg-red-600 text-white p-4 rounded-lg shadow-md">
//             <h3 className="text-xl">Status Code: 500</h3>
//             <p className="text-2xl">{count500}</p>
//           </div>
//         </div>
//         <div id="chart_div" className="bg-white p-4 rounded-lg shadow-md">
//           {/* Google Chart integration will go here */}
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(ReportList);
