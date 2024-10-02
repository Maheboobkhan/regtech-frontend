// import React, { Component } from "react";
// import AadhaarAPI from "./AllApiComponent/AadharApi";

// class AllApi extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//       };
//     }

//     render(){
//         return (
//             <div className="mt-12">
//                 <h1>Api</h1>
//                 <AadhaarAPI />
//             </div>
//         )
//     }
// }

// export default AllApi;
import React from "react";
import RcVerfication from "../IndividualApi/RcVerification";
import VoterIDAPIs from "../IndividualApi/Voter";
import SearchKycAPIs from "../IndividualApi/SearchKyc";
import AadhaarAPI from "../IndividualApi/Aadhar";
import DrivingLicenseAPI from "../IndividualApi/DL";
import UdyamSearchAPI from "../IndividualApi/UdyamSearch";
import UdyogAadharAPI from "../IndividualApi/Udyog";


const AllInOneApi = () => {
    return (
        <>{/* Back Button */}
        <div className="pl-8 text-left mt-4">
          <button
            className="bg-blue-400 hover:bg-blue-300 text-white py-2 px-4 rounded"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
        <div className="mt-12 pl-4 font-montserrat">
            <RcVerfication />
            <VoterIDAPIs />
            <SearchKycAPIs />
            <AadhaarAPI />
            <DrivingLicenseAPI />
            <UdyamSearchAPI />
            <UdyogAadharAPI />
        </div>
        </>
    );
};

export default AllInOneApi;
