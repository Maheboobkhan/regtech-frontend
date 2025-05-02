// import React, { useState } from "react"; // import your components
// import AadhaarValidation from "../AADHAR/AadharValidation";

// const SingleSearch = () => {
//   const [selectedApi, setSelectedApi] = useState("");

//   const handleChange = (event) => {
//     setSelectedApi(event.target.value);
//   };

//   const renderComponent = () => {
//     switch (selectedApi) {
//       case "AadharValidation":
//         return <AadhaarValidation />;
//       // Add cases for other components here
//       default:
//         // return <div>Please select an API.</div>;
//         '';
//     }
//   };

//   return (
//     <div className="bg-[#f2fbfc] min-h-screen container mx-auto p-4">
//       <div className="form-group mx-auto w-fit">
//         <div className="col-md-12">
//           <label htmlFor="select_apis" className="font-bold">
//             Search Api
//           </label>
//         </div>
//         <select
//           name="apies"
//           id="select_apis"
//           className="form-control mt-2 p-2 border rounded-md"
//           onChange={handleChange}
//           value={selectedApi}
//         >
//           <option value="">Select Api</option>
//           <option value="RcValidation">RC Validation</option>
//           <option value="RcValidationTest">RC Validation Test</option>
//           <option value="RcValidationLite">RC Validation Lite</option>
//           <option value="RcFullValidation">RC Full Validation</option>
//           <option value="FastTagInformation">Fast Tag Information</option>
//           <option value="SearchKyclite">SearchKyclite</option>
//           <option value="VoterId">VoterID Validation</option>
//           <option value="AadharValidation">Aadhar Validation</option>
//           {/* Add other options here */}
//         </select>
//       </div>
//       <div className="border-2 mt-8">{renderComponent()}</div>
//     </div>
//   );
// };

// export default SingleSearch;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RCValidation from "../SingleSearchComponent/RcValidation";
import RCValidationMP from "../SingleSearchComponent/RcValidationMP";
import RcValidationLite from "../SingleSearchComponent/RcValidationLite";
import RCFullValidation from "../SingleSearchComponent/RcFullValidation";
import FastTagInformation from "../SingleSearchComponent/FastTagInformation";
import KycLiteSearch from "../SingleSearchComponent/SearchKycLite";
import VoterValidation from "../SingleSearchComponent/VoterValidation";
import AadhaarValidation from "../SingleSearchComponent/AadharValidation";
import AadhaarOtpGenerate from "../SingleSearchComponent/AadharOtpGenerate";
import LicenseValidation from "../SingleSearchComponent/LicenseValidation";
import LicenseUpload from "../SingleSearchComponent/LicenseUpload";
import UdyamSearch from "../SingleSearchComponent/UdyamSearch";
import UdyamSearchV2 from "../SingleSearchComponent/UdyamSearchV2";
import UdhyogAadhaarSearch from "../SingleSearchComponent/UdhyogAadharDetails";
import PanCardOCR from "../SingleSearchComponent/PanCardOCR";
import VoterUpload from "../SingleSearchComponent/VoterIdOCR";
import PassportOCR from "../SingleSearchComponent/PassportOCR";
import AadharCardOCR from "../SingleSearchComponent/AadharOCR";
import AadharOCRMasking from "../SingleSearchComponent/AadharOCRMaking";
import LicenseOCR from "../SingleSearchComponent/LicenseOCR";
import VerifyAddress from "../SingleSearchComponent/VerifyAddress";
import GetPlace from "../SingleSearchComponent/GetPlace";
import CreateGeofence from "../SingleSearchComponent/CreateGeoFence";
import GetCoordinateAPI from "../SingleSearchComponent/GetCoordinate";
import AutoCompleteAPI from "../SingleSearchComponent/AutoComplate";
import BankStatement from "../SingleSearchComponent/BankStatement";
import BankVerification from "../SingleSearchComponent/BankValidation";
import BankIFSCVerification from "../SingleSearchComponent/VerifyIFSC";
import BankAnalyser from "../SingleSearchComponent/BankStatementAnalyser";
import BankStatementReader from "../SingleSearchComponent/BankStatementReader";
import PanToGST from "../SingleSearchComponent/PanCardGST";
import BasicGSTIN from "../SingleSearchComponent/GSTINBasic";
import PanCard from "../SingleSearchComponent/Pancard";
import CorporateCIN from "../SingleSearchComponent/CIN";
import CorporateDIN from "../SingleSearchComponent/DIN";
import CINBasic from "../SingleSearchComponent/CINBasic";
import CINAdvance from "../SingleSearchComponent/CINAdvance";
import DedupeS3 from "../SingleSearchComponent/Dedupe";
import EmailVerification from "../SingleSearchComponent/EmailVerify";
import CheckEmailVerificationStatus from "../SingleSearchComponent/CheckEmailVerify";
import CKyc from "../SingleSearchComponent/Ckyc";
import Bhunaksha from "../SingleSearchComponent/Bhunaksha";
import CorporateGSTIN from "../SingleSearchComponent/GSTIN";
import PanCardValidation from "../SingleSearchComponent/PanCardValidation";
import PanCardInfo from "../SingleSearchComponent/PanCardInfo";
import PanDetails from "../SingleSearchComponent/PanDetails";
import PassportVerify from "../SingleSearchComponent/PassportVerify";
import PassportVerification from "../SingleSearchComponent/PassportVerification";
import PassportCreateClient from "../SingleSearchComponent/PassportCreateClient";
import PassportUpload from "../SingleSearchComponent/PassportUpload";
import FaceMatch from "../SingleSearchComponent/FaceMatch";
import AadhaarUpload from "../SingleSearchComponent/AadharUpload";
import AadhaarMasking from "../SingleSearchComponent/AadharMasking";
import PanCardUpload from "../SingleSearchComponent/PanCardUpload";
import Electricity from "../SingleSearchComponent/Electricity";
import ShopEstablishmentSearch from "../SingleSearchComponent/ShopandEstablishment";
import Telecom from "../SingleSearchComponent/Telecom";
import Upivalidation from "../SingleSearchComponent/UpiValidation";
import Fssai from "../SingleSearchComponent/FSSAI";
import EpfoWithoutOtp from "../SingleSearchComponent/pfWithoutOTP";
import UanDetails from "../SingleSearchComponent/UANDetails";
import CompanySearch from "../SingleSearchComponent/CompanySearch";
import CompanyDetails from "../SingleSearchComponent/CompanyDetails";
import ByPanCard from "../SingleSearchComponent/ByPanCard";
import GSTINDetails from "../SingleSearchComponent/GSTINDetails";
import CompanyProductDetails from "../SingleSearchComponent/CompanyProducts";
import LandRecord from "../SingleSearchComponent/LandRecord";
import CommunityArea from "../SingleSearchComponent/CommunityArea";
import PinCode from "../SingleSearchComponent/PinCde";
import ImageScanner from "../SingleSearchComponent/ImageScanner";
import FaceDetectionRegTech from "../SingleSearchComponent/FaceDetection";
import FaceMatchRegtech from "../SingleSearchComponent/FaceMatchV1";
import DetectionEmotion from "../SingleSearchComponent/DetectionEmotin";
import PredictPPL from "../SingleSearchComponent/PredictPPl";
import EquifaxScore from "../SingleSearchComponent/EquifaxScore";
import Equifax from "../SingleSearchComponent/Equifax";
import AadharExtract from "../SingleSearchComponent/AadharExtract";
import LicenseExtract from "../SingleSearchComponent/LicenseExtract";
import PanCardExtract from "../SingleSearchComponent/PancardExtract";
import VoterIdExtract from "../SingleSearchComponent/VoterIdExtract";
import BankAnalyserV1 from "../SingleSearchComponent/BankStatementAnalyserv1";
import BankStatementReaderV1 from "../SingleSearchComponent/BankStatementReaderV1";

// Custom dropdown component
const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-3/4 mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border rounded-md bg-white text-black flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <span>{value || "Select API"}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-[#00acc1] rounded-md shadow-lg transition-transform transform duration-300 ease-in-out">
          <input
            type="text"
            className="w-full p-2 border-b border-[#00acc1] rounded-t-md focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => (
              <button
                key={option}
                className="w-full text-left p-3 hover:bg-[#00acc1] hover:text-white transition-colors duration-200"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SingleSearch = () => {
  const [selectedApi, setSelectedApi] = useState("");

  const handleChange = (option) => {
    setSelectedApi(option);
  };

  const renderComponent = () => {
    // switch (selectedApi) {
    //     case "Rc Validation":
    //     return <RCValidation />;

    //   case "Rc Validation Test":
    //     return <RCValidationMP />

    //     case "Rc Validation Lite":
    //     return <RcValidationLite />

    //     case "Rc Full Validation":
    //     return <RCFullValidation />

    //     case "Fast Tag Information":
    //     return <FastTagInformation />

    //     case "Search Kyc Lite":
    //     return <KycLiteSearch />

    //     case "VoterID Validation":
    //     return <VoterValidation />

    //     case "Aadhar Validation":
    //     return <AadhaarValidation />

    //     case "Aadhar OTP Generate":
    //     return <AadhaarOtpGenerate />
    //   // Add cases for other components here
    //   default:
    //     return <div className="p-4 text-center text-black"></div>;
    // }
    switch (selectedApi) {
      case "Rc Validation":
        return <RCValidation />;

      case "Rc Validation Test":
        return <RCValidationMP />;

      case "Rc Validation Lite":
        return <RcValidationLite />;

      case "Rc Full Validation":
        return <RCFullValidation />;

      case "Fast Tag Information":
        return <FastTagInformation />;

      case "Search Kyc Lite":
        return <KycLiteSearch />;

      case "VoterID Validation":
        return <VoterValidation />;

      case "Aadhar Validation":
        return <AadhaarValidation />;

      case "Aadhar OTP Generate":
        return <AadhaarOtpGenerate />;

      case "Driving Verification":
        return <LicenseValidation />;

      case "Driving License Upload":
        return <LicenseUpload />;

      case "Udyam Search":
        return <UdyamSearch />;

      case "Udyam Searchv2":
        return <UdyamSearchV2 />;

      case "Udhyog Aadhaar":
        return <UdhyogAadhaarSearch />;

      case "Pan Card OCR":
        return <PanCardOCR />;

      case "VoterID OCR":
        return <VoterUpload />;

      case "Passport OCR":
        return <PassportOCR />;

      case "Aadhar OCR":
        return <AadharCardOCR />;

      case "Aadhar OCR Masking":
        return <AadharOCRMasking />;

      case "Driving License OCR":
        return <LicenseOCR />;

      case "Bhunaksha":
        return <Bhunaksha />;

      case "Verify Address":
        return <VerifyAddress />;

      case "Get Place":
        return <GetPlace />;

      case "Create Geofence":
        return <CreateGeofence />;

      case "GET Coordinate":
        return <GetCoordinateAPI />;

      case "Auto Complate":
        return <AutoCompleteAPI />;

      case "Bank Statement":
        return <BankStatement />;

      case "Bank Validation":
        return <BankVerification />;

      case "Verify IFSC":
        return <BankIFSCVerification />;

      case "Bank Statement Analyser":
        return <BankAnalyser />;

      case "Bank Statement Reader":
        return <BankStatementReader />;

      case "Pan Card GST":
        return <PanToGST />;

      case "GSTIN Basic":
        return <BasicGSTIN />;

      case "pancard":
        return <PanCard />;

      case "Cin":
        return <CorporateCIN />;

      case "Din":
        return <CorporateDIN />;

      case "Cin Basic":
        return <CINBasic />;

      case "Cin Advanced":
        return <CINAdvance />;

      case "Dedupe":
        return <DedupeS3 />;

      case "Score":
        return <EquifaxScore />;

      case "Ecredit":
        return <Equifax />;

      case "Email Verify":
        return <EmailVerification />;

      case "Check Email Verify":
        return <CheckEmailVerificationStatus />;

      case "Ckyc":
        return <CKyc />;

      case "GSTIN":
        return <CorporateGSTIN />;

      case "Pan Card Validation":
        return <PanCardValidation />;

      case "PAN CARD INFO":
        return <PanCardInfo />;

      case "PAN Details":
        return <PanDetails />;

      case "Passport Verification":
        return <PassportVerification />;

      case "Passport Create Client":
        return <PassportCreateClient />;

      case "Passport Upload":
        return <PassportUpload />;

      case "Passport Verify":
        return <PassportVerify />;

      case "Face Match":
        return <FaceMatch />;

      case "Aadhar Upload":
        return <AadhaarUpload />;

      case "Aadhar Masking":
        return <AadhaarMasking />;

      case "Voter Upload":
        return <VoterUpload />;

      case "Pan Card Upload":
        return <PanCardUpload />;

      case "Electricity":
        return <Electricity />;

      case "Shop & Establishment":
        return <ShopEstablishmentSearch />;

      case "Telecom":
        return <Telecom />;

      case "UPI Validation":
        return <Upivalidation />;

      case "FSSAI":
        return <Fssai />;

      case "EPFO Without OTP":
        return <EpfoWithoutOtp />;

      case "UAN Details":
        return <UanDetails />;

      case "Company Search":
        return <CompanySearch />;

      case "Company Details":
        return <CompanyDetails />;

      case "Search Data":
        return <SearchData />;

      case "Search Lite Data":
        return <KycLiteSearch />;

      case "By Pancard":
        return <ByPanCard />;

      case "Gstin Details":
        return <GSTINDetails />;

      case "Company Product":
        return <CompanyProductDetails />;

      case "Land Record":
        return <LandRecord />;

      case "Community Area":
        return <CommunityArea />;

      case "Pincode":
        return <PinCode />;

      case "Image Scanner":
        return <ImageScanner />;

      case "Face Detection":
        return <FaceDetectionRegTech />;

      case "Face Match v1":
        return <FaceMatchRegtech />;

      case "Detected Emotion":
        return <DetectionEmotion />;

      case "Extract Aadhar":
        return <AadharExtract />;

      case "Extract Driving License":
        return <LicenseExtract />;

      case "Extract Pan Card":
        return <PanCardExtract />;

      case "Extract VoterId":
        return <VoterIdExtract />;

      case "Bank Statement Analyser v1":
        return <BankAnalyserV1 />;

      case "Bank Statement Reader v1":
        return <BankStatementReaderV1 />;

      case "Predict PPL":
        return <PredictPPL />;

      default:
        return <div className="p-4 text-center text-black"></div>;
    }
  };

  const apiOptions = [
    "Rc Validation",
    "Rc Validation Test",
    "Rc Validation Lite",
    "Rc Full Validation",
    "Fast Tag Information",
    "Search Kyc Lite",
    "VoterID Validation",
    "Aadhar Validation",
    "Aadhar OTP Generate",
    "Driving Verification",
    "Driving License Upload",
    "Udyam Search",
    "Udyam Searchv2",
    "Udhyog Aadhaar",
    "Pan Card OCR",
    "VoterID OCR",
    "Passport OCR",
    "Aadhar OCR",
    "Aadhar OCR Masking",
    "Driving License OCR",
    "Bhunaksha",
    "Verify Address",
    "Get Place",
    "Create Geofence",
    "GET Coordinate",
    "Auto Complate",
    "Bank Statement",
    "Bank Validation",
    "Verify IFSC",
    "Bank Statement Analyser",
    "Bank Statement Reader",
    "Pan Card GST",
    "GSTIN Basic",
    "pancard",
    "Cin",
    "Din",
    "Cin Basic",
    "Cin Advanced",
    "Dedupe",
    "Score",
    "Ecredit",
    "Email Verify",
    "Check Email Verify",
    "Ckyc",
    "GSTIN",
    "Pan Card Validation",
    "PAN CARD INFO",
    "PAN Details",
    "Passport Verification",
    "Passport Create Client",
    "Passport Upload",
    "Passport Verify",
    "Face Match",
    "Aadhar Upload",
    "Aadhar Masking",
    "Voter Upload",
    "Pan Card Upload",
    "Electricity",
    "Shop & Establishment",
    "Telecom",
    "UPI Validation",
    "FSSAI",
    "EPFO Without OTP",
    "UAN Details",
    "Company Search",
    "Company Details",
    "Search Data",
    "Search Lite Data",
    "By Pancard",
    "Gstin Details",
    "Company Product",
    "Land Record",
    "Community Area",
    "Pincode",
    "Image Scanner",
    "Face Detection",
    "Face Match v1",
    "Detected Emotion",
    "Extract Aadhar",
    "Extract Driving License",
    "Extract Pan Card",
    "Extract VoterId",
    "Bank Statement Analyser v1",
    "Bank Statement Reader v1",
    "Predict PPL",
    // Add other options here
  ];

  return (
    <div className="bg-[#f2fbfc] min-h-screen container mx-auto p-4">
      <div className="mb-8 flex justify-between w-3/4 mx-auto bg-[#00c3db] px-3 py-4 rounded">
        <h1 className="text-3xl font-bold inline-block relative">
          <span className="pb-2 text-white text-black hover:border-[#21a2b3] transition-colors">
            Search API
          </span>
        </h1>
        <Link
          to="/dashboard/kyc/single/search/api"
          className="hover:text-white bg-light px-3 py-1 rounded underline"
          role="button"
        >
          Search All API
        </Link>
      </div>
      <div className="mx-auto w-3/4">
        <Dropdown
          options={apiOptions}
          onChange={handleChange}
          value={selectedApi}
        />
      </div>
      {/* <div className="border-2 mt-8 p-4 bg-white rounded-md shadow-md"> */}
      <div className="mt-8 p-4 rounded-md">{renderComponent()}</div>
    </div>
  );
};

export default SingleSearch;
