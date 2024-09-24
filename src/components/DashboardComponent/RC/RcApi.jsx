// import React from 'react';

// const RCAPI = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="space-y-4">
//         {/* RC APIs Title */}
//         <div className="flex items-center mb-4">
//           <div className="bg-gray-800 py-2 px-4 rounded">
//             <h3 className="text-xl font-bold">RC APIs</h3>
//           </div>
//         </div>

//         {/* RC Verification Section */}
//         <div className="bg-yellow-200 p-4 rounded-lg">
//           <h4 className="text-lg font-semibold underline">RC Verification</h4>
//           <p>
//             <b>Hitting URL:</b> http://regtechapi.in/api/rc_validation
//           </p>
//           <p>
//             <b>Header:</b>
//             <pre className="bg-gray-100 p-2 rounded mt-2">
//               {`{
//   "AccessToken": "xxxxxxxxxxxxx"
// }`}
//             </pre>
//           </p>
//           <p>
//             <b>Request Body:</b>
//             <pre className="bg-gray-100 p-2 rounded mt-2">
//               {`{
//   "rc_number": "mh11at9556"
// }`}
//             </pre>
//           </p>
//           <p>
//             <b>Success Response:</b>
//             <pre className="bg-gray-100 p-2 rounded mt-2">
//               {`[
//   {
//     "rc_validation": {
//       "data": {
//         "client_id": "rc_szGFosDXfTUuoejqRwLt",
//         "rc_number": "mh11at9556",
//         "registration_date": "2010-03-22",
//         "owner_name": "BHARAT BHALKE",
//         "present_address": "",
//         "permanent_address": "",
//         "mobile_number": "",
//         "vehicle_category": "",
//         "vehicle_chasi_number": "ME121C021A20XXXXX",
//         "vehicle_engine_number": "21C20XXXXX",
//         "maker_description": "",
//         "maker_model": "INDIA YAMAHA MOTOR PVT LTD / YAMAHA FZ S",
//         "body_type": "",
//         "fuel_type": "PETROL",
//         "color": "",
//         "norms_type": "NOT AVAILABLE",
//         "fit_up_to": "2025-03-21",
//         "financer": "",
//         "insurance_company": "",
//         "insurance_policy_number": "",
//         "insurance_upto": "2020-10-04",
//         "manufacturing_date": "",
//         "registered_at": "SATARA, MAHARASHTRA",
//         "latest_by": null,
//         "less_info": true,
//         "tax_upto": "1800-01-01",
//         "cubic_capacity": null,
//         "vehicle_gross_weight": null,
//         "no_cylinders": null,
//         "seat_capacity": null,
//         "sleeper_capacity": null,
//         "standing_capacity": null,
//         "wheelbase": null,
//         "unladen_weight": null,
//         "vehicle_category_description": null,
//         "pucc_number": null,
//         "pucc_upto": null,
//         "masked_name": false
//       },
//       "status_code": 200,
//       "success": true,
//       "message": null,
//       "message_code": "success"
//     },
//     "statusCode": null
//   }
// ]`}
//             </pre>
//           </p>
//         </div>

//         {/* RC Verification Lite Section */}
//         <div className="bg-blue-200 p-4 rounded-lg mt-4">
//           <h4 className="text-lg font-semibold underline">RC Verification Lite</h4>
//           <p>
//             <b>Hitting URL:</b> http://regtechapi.in/api/rc_validationlite
//           </p>
//           <p>
//             <b>Header:</b>
//             <pre className="bg-gray-100 p-2 rounded mt-2">
//               {`{
//   "AccessToken": "xxxxxxxxxxxxx"
// }`}
//             </pre>
//           </p>
//           <p>
//             <b>Request Body:</b>
//             <pre className="bg-gray-100 p-2 rounded mt-2">
//               {`{
//   "rc_number": "MH17BE1013"
// }`}
//             </pre>
//           </p>
//           <p>
//             <b>Success Response:</b>
//             <pre className="bg-gray-100 p-2 rounded mt-2">
//               {`[
//   {
//     "rc_validation": {
//       "data": {
//         "rc_number": "MH17BE1013",
//         "registration_date": "9/2014",
//         "owner_name": "P**I** L**X** M**H**",
//         "vehicle_category": "",
//         "fuel_type": "PETROL",
//         "fit_up_to": "2029-11-12",
//         "insurance_upto": "2017-05-02",
//         "registered_at": "SRIRAMPUR, Maharashtra",
//         "latest_by": null,
//         "pucc_upto": null
//       },
//       "status_code": 200,
//       "success": true,
//       "message": null,
//       "message_code": "success"
//     },
//     "statusCode": null
//   }
// ]`}
//             </pre>
//           </p>
//         </div>

//         {/* Back Button */}
//         <div className="text-center mt-4">
//           <button
//             className="bg-blue-500 py-2 px-4 rounded"
//             onClick={() => window.history.back()}
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RCAPI;



import React, { Component } from 'react';

class RCAPI extends Component {
  state = {
    expandedSection: null,
    showRCAPIs: false, // New state to control the expansion of the RC APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleRCAPIs = () => {
    this.setState({
      showRCAPIs: !this.state.showRCAPIs,
    });
  };

  render() {
    const { expandedSection, showRCAPIs } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* RC APIs Title */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showRCAPIs ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showRCAPIs ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleRCAPIs}
            >
              RC APIs
            </h3>

            {showRCAPIs && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* RC Verification */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("rcVerification")}
                >
                  <h4 className="font-semibold underline">RC Verification</h4>
                </div>
                {expandedSection === "rcVerification" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/rc_validation
                    </p>
                    <p>
                      <b>Header:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}
                    </pre>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "rc_number": "mh11at9556"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "rc_validation": {
      "data": {
        "client_id": "rc_szGFosDXfTUuoejqRwLt",
        "rc_number": "mh11at9556",
        "registration_date": "2010-03-22",
        "owner_name": "BHARAT BHALKE",
        "present_address": "",
        "permanent_address": "",
        "mobile_number": "",
        "vehicle_category": "",
        "vehicle_chasi_number": "ME121C021A20XXXXX",
        "vehicle_engine_number": "21C20XXXXX",
        "maker_description": "",
        "maker_model": "INDIA YAMAHA MOTOR PVT LTD / YAMAHA FZ S",
        "body_type": "",
        "fuel_type": "PETROL",
        "color": "",
        "norms_type": "NOT AVAILABLE",
        "fit_up_to": "2025-03-21",
        "financer": "",
        "insurance_company": "",
        "insurance_policy_number": "",
        "insurance_upto": "2020-10-04",
        "manufacturing_date": "",
        "registered_at": "SATARA, MAHARASHTRA",
        "latest_by": null,
        "less_info": true,
        "tax_upto": "1800-01-01",
        "cubic_capacity": null,
        "vehicle_gross_weight": null,
        "no_cylinders": null,
        "seat_capacity": null,
        "sleeper_capacity": null,
        "standing_capacity": null,
        "wheelbase": null,
        "unladen_weight": null,
        "vehicle_category_description": null,
        "pucc_number": null,
        "pucc_upto": null,
        "masked_name": false
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
                )}

                {/* RC Verification Lite */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("rcVerificationLite")}
                >
                  <h4 className="font-semibold underline">RC Verification Lite</h4>
                </div>
                {expandedSection === "rcVerificationLite" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/rc_validationlite
                    </p>
                    <p>
                      <b>Header:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}
                    </pre>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "rc_number": "MH17BE1013"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "rc_validation": {
      "data": {
        "rc_number": "MH17BE1013",
        "registration_date": "9/2014",
        "owner_name": "P**I** L**X** M**H**",
        "vehicle_category": "",
        "fuel_type": "PETROL",
        "fit_up_to": "2029-11-12",
        "insurance_upto": "2017-05-02",
        "registered_at": "SRIRAMPUR, Maharashtra",
        "latest_by": null,
        "pucc_upto": null
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
                )}
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

export default RCAPI;
