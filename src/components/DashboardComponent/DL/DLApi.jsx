// import React, { Component } from 'react';

// class DrivingLicenseAPI extends Component {
//   state = {
//     expandedSection: null,
//     showDrivingLicenseApis: false,
//   };

//   toggleSection = (section) => {
//     this.setState({
//       expandedSection: this.state.expandedSection === section ? null : section,
//     });
//   };

//   toggleDrivingLicenseApis = () => {
//     this.setState({
//       showDrivingLicenseApis: !this.state.showDrivingLicenseApis,
//     });
//   };

//   render() {
//     const { expandedSection, showDrivingLicenseApis } = this.state;

//     return (
//       <div className="container mx-auto p-4">
//         <div className="space-y-4">
//           {/* Driving License APIs */}
//           <div
//             className={`bg-[#4e4e4e] rounded cursor-pointer transition-all duration-300 ${
//               showDrivingLicenseApis ? "h-auto" : "h-16 flex items-center"
//             }`}
//           >
//             <h3
//               className={`font-bold rounded pl-2 py-4 text-xl text-white bg-gray-800 w-full ${
//                 showDrivingLicenseApis ? "bg-[#333] text-white" : ""
//               }`}
//               onClick={this.toggleDrivingLicenseApis}
//             >
//               Driving License APIs
//             </h3>

//             {showDrivingLicenseApis && (
//               <div className="space-y-4 mt-2 transition-all duration-300">
//                 {/* DL Verification */}
//                 <div
//                   className="bg-yellow-500 text-white p-4 rounded cursor-pointer"
//                   onClick={() => this.toggleSection("dlVerification")}
//                 >
//                   <h4 className="font-semibold underline">DL Verification</h4>
//                 </div>
//                 {expandedSection === "dlVerification" && (
//                   <div className="p-4 border border-black rounded">
//                     <p>
//                       <b>Hitting URL:</b> http://regtechapi.in/api/license_validation
//                     </p>
//                     <p>
//                       <b>Request Body:</b>
//                     </p>
//                     <pre className="bg-gray-100 p-2 rounded">
//                       {`{
//   "license_number": "UP20 20150000000",
//   "dob": "DD/MM/YYYY"
// }`}
//                     </pre>
//                     <p>
//                       <b>Success Response:</b>
//                     </p>
//                     <pre className="bg-gray-100 p-2 rounded">
//                       {`{
//   "data": {
//     "temporary_address": "TRIPATHI HAVELI, MIRZAPUR",
//     "father_or_husband_name": "KALEEN BHAIYA",
//     "doe": "2032-07-23",
//     "temporary_zip": "231001",
//     "permanent_address": "TRIPATHI HAVELI, MIRZAPUR",
//     "doi": "2012-07-24",
//     "client_id": "dIysSjHnIG",
//     "citizenship": "IND",
//     "dob": "1990-08-31",
//     "permanent_zip": "231001",
//     "gender": "Male",
//     "license_number": "UP20 20150000000",
//     "name": "MUNNA BHAIYA",
//     "state": "UP",
//     "ola_name": "DISTRICT TRANSPORT OFFICE, MIRZAPUR",
//     "ola_code": "UP20"
//   },
//   "status_code": 200,
//   "message": "",
//   "success": true
// }`}
//                     </pre>
//                   </div>
//                 )}

//                 {/* DL Upload */}
//                 <div
//                   className="bg-yellow-500 text-white p-4 rounded cursor-pointer"
//                   onClick={() => this.toggleSection("dlUpload")}
//                 >
//                   <h4 className="font-semibold underline">DL Upload</h4>
//                 </div>
//                 {expandedSection === "dlUpload" && (
//                   <div className="p-4 border border-black rounded">
//                     <p>
//                       <b>Hitting URL:</b> http://regtechapi.docboyz.in/api/driving_upload
//                     </p>
//                     <p>
//                       <b>Request form-data:</b> front – driving license front image file<br />
//                       back - driving license back image file
//                     </p>
//                     <p>
//                       <b>Success Response:</b>
//                     </p>
//                     <pre className="bg-gray-100 p-2 rounded">
//                       {`{
//   "data": {
//     "document_type": null,
//     "license_number": {"value": "MH13 20100006214", "confidence": 80.0},
//     "dob": {"value": "1991-07-04", "confidence": 90.0},
//     "image_url": null
//   },
//   "status_code": 200,
//   "success": true,
//   "message": null,
//   "message_code": "success"
// }`}
//                     </pre>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Back Button */}
//           <div className="text-center mt-4">
//             <button
//               className="bg-gray-800 text-white py-2 px-4 rounded"
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

// export default DrivingLicenseAPI;





import React, { Component } from 'react';

// Component for Driving License API
class DrivingLicenseAPI extends Component {
  state = {
    expandedSection: null,
    showDrivingLicenseApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleDrivingLicenseApis = () => {
    this.setState({
      showDrivingLicenseApis: !this.state.showDrivingLicenseApis,
    });
  };

  render() {
    const { expandedSection, showDrivingLicenseApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Driving License APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showDrivingLicenseApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showDrivingLicenseApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleDrivingLicenseApis}
            >
              Driving License APIs
            </h3>

            {showDrivingLicenseApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* DL Verification */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("dlVerification")}
                >
                  <h4 className="font-semibold underline">DL Verification</h4>
                </div>
                {expandedSection === "dlVerification" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/license_validation
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "license_number": "UP20 20150000000",
  "dob": "DD/MM/YYYY"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "temporary_address": "TRIPATHI HAVELI, MIRZAPUR",
    "father_or_husband_name": "KALEEN BHAIYA",
    "doe": "2032-07-23",
    "temporary_zip": "231001",
    "permanent_address": "TRIPATHI HAVELI, MIRZAPUR",
    "doi": "2012-07-24",
    "client_id": "dIysSjHnIG",
    "citizenship": "IND",
    "dob": "1990-08-31",
    "permanent_zip": "231001",
    "gender": "Male",
    "license_number": "UP20 20150000000",
    "name": "MUNNA BHAIYA",
    "state": "UP",
    "ola_name": "DISTRICT TRANSPORT OFFICE, MIRZAPUR",
    "ola_code": "UP20"
  },
  "status_code": 200,
  "message": "",
  "success": true
}`}
                    </pre>
                  </div>
                )}

                {/* DL Upload */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("dlUpload")}
                >
                  <h4 className="font-semibold underline">DL Upload</h4>
                </div>
                {expandedSection === "dlUpload" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.docboyz.in/api/driving_upload
                    </p>
                    <p>
                      <b>Request form-data:</b> front – driving license front image file<br />
                      back - driving license back image file
                    </p>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "document_type": null,
    "license_number": {"value": "MH13 20100006214", "confidence": 80.0},
    "dob": {"value": "1991-07-04", "confidence": 90.0},
    "image_url": null
  },
  "status_code": 200,
  "success": true,
  "message": null,
  "message_code": "success"
}`}
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

export default DrivingLicenseAPI;
