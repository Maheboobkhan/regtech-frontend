// import React, { Component } from "react";

// class CorporateCINAPI extends Component {
//   state = {
//     expandedSection: null,
//     showCorporateCINApis: false,
//   };

//   toggleSection = (section) => {
//     this.setState({
//       expandedSection: this.state.expandedSection === section ? null : section,
//     });
//   };

//   toggleCorporateCINApis = () => {
//     this.setState({
//       showCorporateCINApis: !this.state.showCorporateCINApis,
//     });
//   };

//   render() {
//     const { expandedSection, showCorporateCINApis } = this.state;

//     return (
//       <div className="container mx-auto p-4">
//         <div className="flex flex-wrap space-y-4">
//           {/* Corporate CIN APIs */}
//           <div className="w-full md:w-1/3">
//             <span className="bg-gray-800 text-white p-2 rounded">
//               <h3 className="text-xl font-bold">Corporate CIN APIs</h3>
//             </span>
//           </div>
//           <div className="w-full md:w-2/3">
//             <div
//               className={`bg-blue-300 text-white p-4 rounded cursor-pointer transition-all duration-300 ${
//                 showCorporateCINApis ? "h-auto" : "h-20 flex items-center"
//               }`}
//               onClick={this.toggleCorporateCINApis}
//             >
//               <h4 className="font-semibold underline">CIN</h4>
//               {showCorporateCINApis && (
//                 <div className="mt-2">
//                   <p><b>Hitting URL:</b> http://regtechapi.in/api/corporate_cin</p>
//                   <p><b>Request Body:</b></p>
//                   <pre className="bg-gray-100 p-2 rounded">
//                     {`{
//   "corporate_cin": "U72900PN2018PTC180125"
// }`}
//                   </pre>
//                   <p><b>Success Response:</b></p>
//                   <pre className="bg-gray-100 p-2 rounded">
//                     {`[
//   {
//     "corporate_cin": {
//       "data": {
//         "client_id": "corporate_cin_wdDJojPsekbnkswTGxYk",
//         "cin_number": "U72900PN2018PTC180125",
//         "company_name": "ZAPFIN TEKNOLOGIES PRIVATE LIMITED",
//         "incorporation_date": "2018-11-09",
//         "phone_number": "+918470067555",
//         "company_address": "11B, Aditya Business Center$SN-1A,Kondhwa, Khurd$PUNE$Pune$Maharashtra$411048$India$",
//         "email": "ashokonly@gmail.com",
//         "company_class": "PRIV",
//         "zip": "411048",
//         "directors": [
//           {
//             "din_number": "00517254",
//             "director_name": "ASHOK KUMAR"
//           },
//           {
//             "din_number": "08862561",
//             "director_name": "PRASHANT KUMAR"
//           }
//         ],
//         "authorized_capital": "2500000",
//         "paid_up_capital": "1628370",
//         "last_agm_date": "2019-09-30",
//         "last_bs_date": "2019-03-31",
//         "company_status": "Active",
//         "listed_status": "Unlisted"
//       },
//       "status_code": 200,
//       "success": true,
//       "message": null,
//       "message_code": "success"
//     },
//     "statusCode": null
//   }
// ]`}
//                   </pre>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="w-full text-center mt-4">
//             <button
//               className="bg-blue-300 text-white py-2 px-4 rounded"
//               onClick={() => window.history.back()}
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CorporateCINAPI;












import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class CorporateCINAPI extends Component {
  state = {
    expandedSection: null,
    showCorporateCINApis: false, // New state to control the expansion of the Corporate CIN APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCorporateCINApis = () => {
    this.setState({
      showCorporateCINApis: !this.state.showCorporateCINApis,
    });
  };

  render() {
    const { expandedSection, showCorporateCINApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Corporate CIN APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showCorporateCINApis ? "h-auto transition-all duration-300" : "h-20 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showCorporateCINApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleCorporateCINApis}
            >
              Corporate CIN APIs
            </h3>

            {showCorporateCINApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Corporate CIN API Details */}
                <div className="bg-blue-300 p-4 rounded">
                  <h4 className="font-semibold underline">CIN</h4>
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/corporate_cin
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "corporate_cin": "U72900PN2018PTC180125"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`[
  {
    "corporate_cin": {
      "data": {
        "client_id": "corporate_cin_wdDJojPsekbnkswTGxYk",
        "cin_number": "U72900PN2018PTC180125",
        "company_name": "ZAPFIN TEKNOLOGIES PRIVATE LIMITED",
        "incorporation_date": "2018-11-09",
        "phone_number": "+918470067555",
        "company_address": "11B, Aditya Business Center$SN-1A,Kondhwa, Khurd$PUNE$Pune$Maharashtra$411048$India$",
        "email": "ashokonly@gmail.com",
        "company_class": "PRIV",
        "zip": "411048",
        "directors": [
          {
            "din_number": "00517254",
            "director_name": "ASHOK KUMAR"
          },
          {
            "din_number": "08862561",
            "director_name": "PRASHANT KUMAR"
          }
        ],
        "authorized_capital": "2500000",
        "paid_up_capital": "1628370",
        "last_agm_date": "2019-09-30",
        "last_bs_date": "2019-03-31",
        "company_status": "Active",
        "listed_status": "Unlisted"
      },
      "status_code": 200,
      "success": true,
      "message": null,
      "message_code": "success"
    },
    "statusCode": null
  }
]`}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="text-center mt-4">
            <button
              className="bg-blue-300 text-white py-2 px-4 rounded"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CorporateCINAPI;
