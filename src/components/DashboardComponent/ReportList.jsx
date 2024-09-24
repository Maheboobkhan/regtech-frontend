// // src/ReportComponent.jsx

// import React, { Component } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import withRouter from './withRouter';

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
//   };

//   componentDidMount() {
//     const token = Cookies.get('authToken');
//     this.fetchReportData(token);
//   }

//   getReportByYearMonthByAdmin = async () => {
//     const token = Cookies.get('authToken');
//     const formData = {
//       token: token,
//       year_month: this.state.yearMonth !== "" ? this.state.yearMonth : 0,
//       user: this.state.userService
//     }
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:8000/api/getuserreportwithyearmonth', formData);
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
//       });
//     } catch (error) {
//       console.error('Error fetching report data:', error);
//     }
//   }



//   getReportByYearMonth = async () => {
//     const token = Cookies.get('authToken');
//     const formData = {
//       token: token,
//       year_month: this.state.yearMonth,
//     }
//     try {
//       const response = await axios.post('http://localhost:8000/api/getuserreportwithyearmonth', formData);
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
//       });
//     } catch (error) {
//       console.error('Error fetching report data:', error);
//     }
//   }

//   generateBill = () => {
//     const { yearMonth } = this.state;
//     this.props.navigate(`/dashboard/get_report/${yearMonth}`);
//   }

//   fetchReportData = async (token) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/getuserreport/${token}`, {
//       });
//       console.log('report: ',response);
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
//       });
//     } catch (error) {
//       console.error('Error fetching report data:', error);
//     }
//   }

//   render() {
//     const { reports, isAdmin, count200, count101, count400, count500, userService, yearMonth, ddlYearMonth, users } = this.state;

//     return (
//       <div className="container mx-auto p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold text-white">Report ({userService !== 0 ? `User ${userService}` : 'All Users'})</h1>
//           <button
//             className={`btn ${userService !== 0 ? 'btn-warning' : 'btn-disabled'}`}
//             disabled={userService === 0}
//             onClick={this.generateBill}
//           >
//             Generate Bill
//           </button>
//         </div>
//         <div className="flex space-x-4 mb-4">
//           {isAdmin && (
//             <select
//               className="form-select"
//               value={userService}
//               onChange={e => this.setState({ userService: e.target.value })}
//             >
//               <option value="0">All</option>
//               {users.map(user => (
//                 <option key={user.id} value={user.id}>
//                   {user.name} : {user.email}
//                 </option>
//               ))}
//             </select>
//           )}
//           <select
//             className="form-select"
//             value={yearMonth}
//             onChange={e => this.setState({ yearMonth: e.target.value })}
//           >
//             <option value="0">All</option>
//             {ddlYearMonth?.map(option => (
//               <option key={option.hit_year_month} value={option.hit_year_month}>
//                 {option.hit_year_month}
//               </option>
//             ))}
//           </select>
//         </div>
//         {isAdmin ? <button onClick={this.getReportByYearMonthByAdmin}>Submit</button>: <button onClick={this.getReportByYearMonth}>Submit</button>}
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
//             <h3 className="text-xl">Status Code: 102</h3>
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









// src/ReportComponent.jsx

import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import withRouter from './withRouter';

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
    ddlYearMonth: [],
    users: [],
  };

  componentDidMount() {
    const token = Cookies.get('authToken');
    this.fetchReportData(token);
  }

  getReportByYearMonthByAdmin = async () => {
    const token = Cookies.get('authToken');
    const formData = {
      token: token,
      year_month: this.state.yearMonth !== "" ? this.state.yearMonth : 0,
      user: this.state.userService
    }
    try {
      const response = await axios.post('http://localhost:8000/api/getuserreportwithyearmonth', formData);
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
      console.error('Error fetching report data:', error);
    }
  }

  getReportByYearMonth = async () => {
    const token = Cookies.get('authToken');
    const formData = {
      token: token,
      year_month: this.state.yearMonth,
    }
    try {
      const response = await axios.post('http://localhost:8000/api/getuserreportwithyearmonth', formData);
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
      });
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
  }

  generateBill = () => {
    const { yearMonth } = this.state;
    this.props.navigate(`/dashboard/get_report/${yearMonth}`);
  }

  fetchReportData = async (token) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/getuserreport/${token}`);
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
      console.error('Error fetching report data:', error);
    }
  }

  render() {
    const { reports, isAdmin, count200, count101, count400, count500, userService, yearMonth, ddlYearMonth, users } = this.state;

    return (
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-[#00acc1]">Report ({userService !== 0 ? `User ${userService}` : 'All Users'})</h1>
          {isAdmin ?  <button
            className='bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed'
            disabled={true}
          >
            Generate Bill
          </button> : <button
            className={`btn ${userService !== 0 ? 'bg-[#00acc1] text-white' : 'bg-gray-400 text-white'} px-4 py-2 rounded`}
            disabled={userService === 0}
            onClick={this.generateBill}
          >
            Generate Bill
          </button>}
        </div>
        <div className="flex space-x-4 mb-4">
          {isAdmin && (
            <select
              className="form-select border-2 border-[#00acc1] cursor-pointer text-[#00acc1] p-2 rounded"
              value={userService}
              onChange={e => this.setState({ userService: e.target.value })}
            >
              <option value="0">All</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name} : {user.email}
                </option>
              ))}
            </select>
          )}
          <select
            className="form-select border-2 border-[#00acc1] cursor-pointer text-[#00acc1] p-2 rounded"
            value={yearMonth}
            onChange={e => this.setState({ yearMonth: e.target.value })}
          >
            <option value="0">All</option>
            {ddlYearMonth?.map(option => (
              <option key={option.hit_year_month} value={option.hit_year_month}>
                {option.hit_year_month}
              </option>
            ))}
          </select>
          {isAdmin ? <button onClick={this.getReportByYearMonthByAdmin} className="bg-[#00acc1] text-white px-4 py-2 rounded">Submit</button> : <button onClick={this.getReportByYearMonth} className="bg-[#00acc1] text-white px-4 py-2 rounded">Submit</button>}
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
