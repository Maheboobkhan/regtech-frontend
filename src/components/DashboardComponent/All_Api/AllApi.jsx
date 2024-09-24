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
import AadhaarAPI from "./AllApiComponent/AadharApi";
import VoterAPI from "./AllApiComponent/VoterApi";
import PanCardAPI from "./AllApiComponent/PancardApi";
import PassportAPI from "./AllApiComponent/PassportApi";
import CorporateCINAPI from "./AllApiComponent/CorporateCinAPi";
import CorporateDINAPI from "./AllApiComponent/CorporateDinApi";
import CorporateCINAdvanceAPI from "./AllApiComponent/CinAdvanceApi";
import CorporateGSTINAPI from "./AllApiComponent/CorporateGSTINApi";
import GSTINAPI from "./AllApiComponent/CorporateGSTINDetailsApi";
import CorporateCINBasicAPI from "./AllApiComponent/CinBasicApi";
import GSTINWithConfidenceAPI from "./AllApiComponent/CorporateGSTINConfidenceApi";
import BasicGSTINAPI from "./AllApiComponent/BasicGSTINApi";
import RCAPI from "./AllApiComponent/RcApi";
import DrivingLicenseAPI from "./AllApiComponent/DLApi";
import TelecomApi from "./AllApiComponent/TelecomApi";
import FssaiApi from "./AllApiComponent/FSSAIApi";
import CompanyProductAPI from "./AllApiComponent/CompanyProductApi";
import BhunakshaApis from "./AllApiComponent/BhunakshaApi";
import LandRecordAPIs from "./AllApiComponent/LandRecordApi";
import EmailVerificationAPI from "./AllApiComponent/EmailVerifyApi";
import CheckEmailStatusAPI from "./AllApiComponent/CheckEmailVerifyStatusApi";
import DedupeAPI from "./AllApiComponent/DedupeApi";
import CommunityAreaAPI from "./AllApiComponent/CommunityAreaApi";
import PredictPPLAPI from "./AllApiComponent/PredictPPlApi";
import PinCodeAPI from "./AllApiComponent/PinCodeApi";
import ImageScannerAPI from "./AllApiComponent/ImageScannerRegTechSApi";

const AllApi = () => {
    console.log('api');
    return (
        <div className="mt-12 pl-4 font-montserrat">
            <AadhaarAPI />
            <VoterAPI />
            <PanCardAPI />
            <PassportAPI />
            <CorporateCINAPI />
            <CorporateDINAPI />
            <BasicGSTINAPI />
            <CorporateCINAdvanceAPI />
            <CorporateCINBasicAPI />
            <CorporateGSTINAPI />
            <GSTINAPI />
            <GSTINWithConfidenceAPI />
            <RCAPI />
            <DrivingLicenseAPI />
            <TelecomApi />
            <FssaiApi />
            <CompanyProductAPI />
            <BhunakshaApis />
            <LandRecordAPIs />
            <EmailVerificationAPI />
            <CheckEmailStatusAPI />
            <DedupeAPI />
            <CommunityAreaAPI />
            <PinCodeAPI />
            <ImageScannerAPI />
            <PredictPPLAPI />
            
        </div>
    );
};

export default AllApi;
