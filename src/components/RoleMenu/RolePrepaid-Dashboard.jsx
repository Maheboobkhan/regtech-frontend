// original code
import axios from "axios";
import Cookies from "js-cookie";
import React, { Component } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { GrDocumentVerified } from "react-icons/gr";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiKey } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { Link, Routes, Route } from "react-router-dom";
import { BsBank } from "react-icons/bs";
import "../../App.css";
import Users from "../DashboardComponent/Users";
import PrepaidDashboard from "../DashboardComponent/PrepaidDashboard";
import { MdDashboard } from "react-icons/md";
import UserForm from "../DashboardComponent/AddUser";
import UserAdminWallet from "../DashboardComponent/UserAdminWallet";
import BankAccountVerification from "../../pages/BankAccountVerification";
import { MdCorporateFare } from "react-icons/md";
import TransactionList from "../DashboardComponent/TransactionList";
import EditUser from "../DashboardComponent/EditUser";
import SetNewPassword from "../DashboardComponent/SetNewPassword";
import ProfileForm from "../DashboardComponent/Profile";
import ResetPassword from "../DashboardComponent/ResetPassword";
import withRouter from "../DashboardComponent/withRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReportList from "../DashboardComponent/ReportList";

import AadhaarValidation from "../DashboardComponent/AADHAR/AadharValidation";
import AadhaarAPI from "../DashboardComponent/AADHAR/AadharApi";
import AadhaarUpload from "../DashboardComponent/AADHAR/AadharUpload";
import AadhaarOtpGenerate from "../DashboardComponent/AADHAR/AadharOtpGenerate";
import AadhaarOtpSubmit from "../DashboardComponent/AADHAR/AadharOtpSubmit";
import AadhaarMasking from "../DashboardComponent/AADHAR/AadharMasking";
import AadharCardOCR from "../DashboardComponent/AADHAR/AadharCardOCR";
import AadharOCRMasking from "../DashboardComponent/AADHAR/AadharOCRMasking";
import VoterValidation from "../DashboardComponent/VOTER/VoterValidation";
import VoterAPI from "../DashboardComponent/VOTER/VoterApi";
import VoterUpload from "../DashboardComponent/VOTER/VoterUpload";
import VoterIDOCR from "../DashboardComponent/VOTER/VoterIdOCR";
import PanCardVerification from "../DashboardComponent/PAN/PanCardVerification";
import PanCardAPI from "../DashboardComponent/PAN/PanCardApi";
import PanCardUpload from "../DashboardComponent/PAN/PanCardUpload";
import PanCardInfo from "../DashboardComponent/PAN/PanCardInfo";
import PanDetails from "../DashboardComponent/PAN/PanDetails";
import PanCardOCR from "../DashboardComponent/PAN/PanCardOCR";
import PanToGST from "../DashboardComponent/PAN/PanToGST";
import ByPanCard from "../DashboardComponent/PAN/ByPanCard";
import PassportVerification from "../DashboardComponent/PASSPORT/PassportVerification";
import PassportAPI from "../DashboardComponent/PASSPORT/PassportApi";
import PassportCreateClient from "../DashboardComponent/PASSPORT/PassportCreateClient";
import PassportUpload from "../DashboardComponent/PASSPORT/PassportUpload";
import PassportVerify from "../DashboardComponent/PASSPORT/PassportVerify";
import PassportOCR from "../DashboardComponent/PASSPORT/PassportOCR";
import CorporateCIN from "../DashboardComponent/CORPORATE/CorporateCIN";
import CorporateCINAPI from "../DashboardComponent/CORPORATE/CorporateCINApi";
import CorporateDIN from "../DashboardComponent/CORPORATE/CorporateDIN";
import CorporateDINAPI from "../DashboardComponent/CORPORATE/CorporateDINApi";
import CorporateGSTIN from "../DashboardComponent/CORPORATE/CorporateGSTIN";
import CorporateGSTINAPI from "../DashboardComponent/CORPORATE/CorporateGSTINApi";
import GSTINDetails from "../DashboardComponent/CORPORATE/CorporateGSTINDetails";
import GSTINAPI from "../DashboardComponent/CORPORATE/CorporateGSTINDetailsApi";
import CorporateGstinConfidence from "../DashboardComponent/CORPORATE/CorporateGSTINConfidence";
import GSTINWithConfidenceAPI from "../DashboardComponent/CORPORATE/CorporateGSTINConfidenceApi";
import BasicGSTIN from "../DashboardComponent/CORPORATE/BasicGSTIN";
import BasicGSTINAPI from "../DashboardComponent/CORPORATE/BasicGSTINApi";
import CINBasic from "../DashboardComponent/CORPORATE/CINBasic";
import CorporateCINBasicAPI from "../DashboardComponent/CORPORATE/CINBasicApi";
import CINAdvance from "../DashboardComponent/CORPORATE/CINAdvance";
import CorporateCINAdvanceAPI from "../DashboardComponent/CORPORATE/CINAdvanceApi";
import RCValidation from "../DashboardComponent/RC/RcValidation";
import RCAPI from "../DashboardComponent/RC/RcApi";
import RCValidationMP from "../DashboardComponent/RC/RCValidationMP";
import RcValidationLite from "../DashboardComponent/RC/RCValidationLite";
import RCFullValidation from "../DashboardComponent/RC/RCFullValidation";
import FastTagInformation from "../DashboardComponent/RC/FastTagInformation";
import BankVerification from "../DashboardComponent/BANK/BankVerification";
import BankIFSCVerification from "../DashboardComponent/BANK/BankIFSC";
import BankStatement from "../DashboardComponent/BANK/BankStatement";
import BankStatementReader from "../DashboardComponent/BANK/BankStatementReader";
import BankAnalyser from "../DashboardComponent/BANK/BankStatementAnalyser";
import LicenseValidation from "../DashboardComponent/DL/LicenseValidation";
import DrivingLicenseAPI from "../DashboardComponent/DL/DLApi";
import LicenseUpload from "../DashboardComponent/DL/LicenseUpload";
import LicenseOCR from "../DashboardComponent/DL/LicenseOCR";
import FaceMatch from "../DashboardComponent/VIDEOKYC/FaceMatch";
import FaceMatchAPI from "../DashboardComponent/VIDEOKYC/FaceMatchApi";
import FaceMatchRegtech from "../DashboardComponent/VIDEOKYC/FaceMatchRegTech";
import FaceDetectionRegTech from "../DashboardComponent/VIDEOKYC/FaceDetectionRegTech";
import FaceDetectionAPI from "../DashboardComponent/VIDEOKYC/FaceDetectionRegTechApi";
import DetectionEmotion from "../DashboardComponent/VIDEOKYC/DetectionEmotion";
import DetectionEmotionAPI from "../DashboardComponent/VIDEOKYC/DetectionEmotionApi";
import VerifyAddress from "../DashboardComponent/ADDRESS/VerifyAddress";
import GetPlace from "../DashboardComponent/ADDRESS/GetPlace";
import CreateGeofence from "../DashboardComponent/ADDRESS/CreateGeofence";
import AutoCompleteAPI from "../DashboardComponent/ADDRESS/AutoComplate";
import GetCoordinateAPI from "../DashboardComponent/ADDRESS/GetCoordinate";
import EmailVerification from "../DashboardComponent/E-MAIL/EmailVerify";
import EmailVerificationAPI from "../DashboardComponent/E-MAIL/EmailVerifyApi";
import CheckEmailVerificationStatus from "../DashboardComponent/E-MAIL/CheckVerifyEmailStatus";
import CheckEmailStatusAPI from "../DashboardComponent/E-MAIL/CheckVerifyEmailStatusApi";
import ImageScanner from "../DashboardComponent/ImageScnanner/ImageScannerRegTech";
import ImageScannerAPI from "../DashboardComponent/ImageScnanner/ImageScannerRegTechApi";
import PredictPPL from "../DashboardComponent/PredictPPl/PredictPPl";
import PredictPPLAPI from "../DashboardComponent/PredictPPl/PredictPPlApi";
import DedupeS3 from "../DashboardComponent/Dedupe/Dedupe";
import DedupeAPI from "../DashboardComponent/Dedupe/DedupeApi";
import CommunityArea from "../DashboardComponent/CommunityArea/CommunityArea";
import CommunityAreaAPI from "../DashboardComponent/CommunityArea/CommunityAreaApi";
import SearchKyc from "../DashboardComponent/SEARCH/SearchKyc";
import SearchV2API from "../DashboardComponent/SEARCH/SearchKycApi";
import KycLiteSearch from "../DashboardComponent/SEARCH/SearchKycLite";
import SingleSearch from "../DashboardComponent/SEARCH/SingleSearch";
import CKyc from "../DashboardComponent/SEARCH/CKyc";
import CKycApi from "../DashboardComponent/SEARCH/CKycApi";
import PinCode from "../DashboardComponent/PinCode/PinCode";
import PinCodeAPI from "../DashboardComponent/PinCode/PinCodeApi";
import Electricity from "../DashboardComponent/Other/Electricity";
import ShopEstablishmentSearch from "../DashboardComponent/Other/ShopEstablishment";
import Telecom from "../DashboardComponent/Other/Telecom";
import TelecomApi from "../DashboardComponent/Other/TelecomApi";
import Fssai from "../DashboardComponent/Other/FSSAI";
import FssaiApi from "../DashboardComponent/Other/FSSAIApi";
import Upivalidation from "../DashboardComponent/Other/UpiValidation";
import EpfoOtpGeneration from "../DashboardComponent/EPFO/PfGenerateOTP";
import EpfoOtpSubmission from "../DashboardComponent/EPFO/PfSubmitOTP";
import EpfoWithoutOtp from "../DashboardComponent/EPFO/PfWithoutOTP";
import UanDetails from "../DashboardComponent/EPFO/UANDetails";
import CompanySearch from "../DashboardComponent/EPFO/CompanySearch";
import CompanyDetails from "../DashboardComponent/EPFO/CompanyDetails";
import CompanyProductDetails from "../DashboardComponent/EPFO/CompanyProducts";
import CompanyProductAPI from "../DashboardComponent/EPFO/CompanyProductApi";
import UdyamSearch from "../DashboardComponent/UdyamAndUdyogSearch/UdyamSearch";
import UdyamSearchAPI from "../DashboardComponent/UdyamAndUdyogSearch/UdyamApi";
import UdhyogAadhaarSearch from "../DashboardComponent/UdyamAndUdyogSearch/UdhyogAadharDetails";
import UdhyogAadharAPI from "../DashboardComponent/UdyamAndUdyogSearch/UdhyogAadharApi";
import BhunakashaForm from "../DashboardComponent/BHUNAKSHA/Bhunaksha";
import BhunakshaApis from "../DashboardComponent/BHUNAKSHA/BhunakshaApi";
import LandRecord from "../DashboardComponent/BHUNAKSHA/LandRecord";
import LandRecordAPIs from "../DashboardComponent/BHUNAKSHA/LandRecordApi";
import AllApi from "../DashboardComponent/All_Api/AllApi";
import ApiDocumentation from "../DashboardComponent/ApiDocs";
import BillReport from "../DashboardComponent/BillReport";
import ITRInitiate from "../DashboardComponent/ITR/ITR_Initiate";
import ITREnterClientId from "../DashboardComponent/ITR/ITREnterClientId";
import ITRProfile from "../DashboardComponent/ITR/ITRDownloadProfile";
import ITRDownload from "../DashboardComponent/ITR/ITRDownload";
import ITRDownload26AS from "../DashboardComponent/ITR/ITRDownload26AS";
import ITRSubmitOTP from "../DashboardComponent/ITR/ITRSubmitOTP";
import ITRForgetPassword from "../DashboardComponent/ITR/ITRForgotPassword";
import CreditScoreReport from "../DashboardComponent/CREDIT SCORE/CreditReport";
import Equifax from "../DashboardComponent/CREDIT SCORE/Equifax";
import EquifaxScore from "../DashboardComponent/CREDIT SCORE/EquifaxScore";
import AllInOneApi from "../DashboardComponent/SingleSearchComponent/AllSeachApi.jsx/AllInOneSearchApi/AllInOneSearchApi";
import TelecomSubmitOtp from "../DashboardComponent/Other/TelecomSubmitOTP";
import Usage from "../DashboardComponent/Other/Usage";
import CkycDownloadApi from "../DashboardComponent/Other/CkycDownloadApi";
import CkycDownload from "../DashboardComponent/Other/CkycDownload";
import CkycSearchAPI from "../DashboardComponent/Other/CkycSearchApi";
import CkycSearch from "../DashboardComponent/Other/CkycSearch";
import BankAnalyserV1 from "../DashboardComponent/BANK/BankStatementAnalyserV1";
import BankStatementReaderV1 from "../DashboardComponent/BANK/BankStatementReaderV1";
import ApiUsageAlert from "../DashboardComponent/DemoWarning";
class RolePrepaid_Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      kycDropdownOpen: false,
      CorporateDropdownOpen: false,
      BankVerificationDropdownOpen: false,
      CourierDropdownOpen: false,
      eSignDropdownOpen: false,
      VideoDropdownOpen: false,
      openWalletModal: false,
      IVRCallingDropdownOpen: false,
      PassportDropdownOpen: false,
      OtherDropdownOpen: false,
      amount: "",
      balance: 2708.38,
      activeMenu: this.getActiveMenu(props.location.pathname),
      kycVerifyMenus: [],
      corporateMenus: [],
      bankVerificationMenus: [],
      groupIdArray: [],
      userMenuPermission: [],
      user: {},
    };
  }

  componentDidMount() {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }
    this.fetchUserSpecificApiGroupId();
    this.fetchApiMaster(token);
    this.fetchUserMenuPermission();
    this.getUser();
  }

  // fetch api master
  fetchApiMaster = async (token) => {
    const domain = localStorage.getItem("domain");
    try {
      const response = await axios.get(`${domain}/apimaster/${token}`);
      const data = response.data;
      
      if (this.state.groupIdArray.includes(1)) {
        const kycverifymenus = data.filter((menu) => menu.api_group_id === 1);
        
        this.setState({ kycVerifyMenus: kycverifymenus });
      }
      if (this.state.groupIdArray.includes(6)) {
        const corporatemenus = data.filter((menu) => menu.api_group_id === 6);
        this.setState({ corporateMenus: corporatemenus });
      }

      if (this.state.groupIdArray.includes(7)) {
        const bankverification = data.filter((menu) => menu.api_group_id === 7);
        this.setState({ bankVerificationMenus: bankverification });
      }
    } catch (error) {
      console.error("There was an error fetching the menus!", error);
    }
  };

  //   fetch api group id
  fetchUserSpecificApiGroupId = async () => {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }
    const domain = localStorage.getItem("domain");

    try {
      const response = await axios.get(`${domain}/getspecificuserapi/${token}`);
      const groupIdArray = response.data;
      this.setState({ groupIdArray });
    } catch (error) {
      this.setState({ error: "Error fetching user data" });
    }
  };

  //fetch user menu permission
  fetchUserMenuPermission = async () => {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }
    const domain = localStorage.getItem("domain");
    try {
      const response = await axios.get(
        `${domain}/getusermenupermission/${token}`
      );

      const userMenuPermission = response.data;
      this.setState({ userMenuPermission });
    } catch (error) {
      this.setState({ error: "Error fetching user data" });
    }
  };

  getUser = async () => {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }
    const domain = localStorage.getItem("domain");

    try {
      const response = await axios.get(`${domain}/getuser/${token}`);
      const user = response.data;
      this.setState({ user });
    } catch (error) {
      this.setState({ error: "Error fetching user data" });
    }
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.setState({ activeMenu: this.getActiveMenu(location.pathname) });
    }
  }

  getActiveMenu(path) {
    const pathToMenu = {
      "/": "Prepaid Dashboard",
      "/dashboard/users": "Users",
      "/dashboard/transactionList": "Transaction",
      "/dashboard/report": "Report",
      "/dashboard/apiMaster": "API Master",
      "/dashboard/schemetypeList": "Scheme Type Master",
      "/dashboard/api_docs": "API Docs",
      "/dashboard/resetPassword": "Change Password",
    };

    return pathToMenu[path] || "Prepaid Dashboard";
  }

  handleInputChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleOptionClick = (value) => {
    this.setState({ amount: value });
  };

  toggleKYC = () => {
    this.setState({ kycDropdownOpen: !this.state.kycDropdownOpen });
  };

  toggleCourier = () => {
    this.setState({ CourierDropdownOpen: !this.state.CourierDropdownOpen });
  };

  toggleeSign = () => {
    this.setState({ eSignDropdownOpen: !this.state.eSignDropdownOpen });
  };

  toggleVideo = () => {
    this.setState({ VideoDropdownOpen: !this.state.VideoDropdownOpen });
  };

  toggleIVRCalling = () => {
    this.setState({
      IVRCallingDropdownOpen: !this.state.IVRCallingDropdownOpen,
    });
  };

  togglePassport = () => {
    this.setState({ PassportDropdownOpen: !this.state.PassportDropdownOpen });
  };

  toggleOther = () => {
    this.setState({ OtherDropdownOpen: !this.state.OtherDropdownOpen });
  };

  openWalletModal = () => {
    this.setState({ openWalletModal: true });
  };

  toggleCorporate = () => {
    this.setState({ CorporateDropdownOpen: !this.state.CorporateDropdownOpen });
  };
  toggleBankVerification = () => {
    this.setState({
      BankVerificationDropdownOpen: !this.state.BankVerificationDropdownOpen,
    });
  };

  setActiveMenu = (menu) => {
    this.setState({ activeMenu: menu });
  };

  logOut = () => {
    Cookies.remove("authToken");
    toast.success("LogOut Successfully");
    setTimeout(() => {
      this.props.navigate("/login");
    }, 1000);
  };

  handlePayment = async (id, name, email, token) => {
    const { amount } = this.state;

    // Prepare formData similar to how it's done in jQuery
    const formData = {
      _token: token,
      name: name,
      email: email,
      amount: amount,
      total_amounts: (
        parseFloat(amount) + parseFloat((amount * 0.18).toFixed(2))
      ).toFixed(2),
    };
    const domain = localStorage.getItem("domain");

    try {
      // Send POST request using Axios
      const response = await axios.post(`${domain}/billingaddamount`, formData);
      

      // Assuming response.data structure
      const responseData = response.data;

      if (responseData.data.status === 1) {
        const easebuzzCheckout = new window.EasebuzzCheckout(
          "7PQJ3ZJPRQ",
          "prod"
        );
       

        const options = {
          access_key: responseData.data.data,
          onResponse: (response_data) => {
        
            if (response_data.status === true) {
        

              const amount = this.state.amount;
              const txnid = response_data.txnid ? response_data.txnid : null;
              const email = response_data.email ? response_data.email : null;
              const successUrl = `${window.location.origin}/success_url/${amount}/${txnid}/${email}`;
              window.location.href = successUrl;
            } else {
        
              const name_on_card = response_data.name_on_card
                ? response_data.name_on_card
                : null;
              const error_Message = response_data.error_Message
                ? response_data.error_Message
                : null;
              // const failureUrl = `${window.location.origin}/failure_url/${name_on_card}/${error_Message}`;
              // window.location.href = failureUrl;
            }
          },
          theme: "#123456", // color hex
        };

        

        easebuzzCheckout.initiatePayment(options);
      } else {
        // Handle cases where status is not 1
        console.error("Unexpected response status");
      }
    } catch (error) {
      
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        if (errors.amount) {
          // Handle validation error for amount
          console.error(errors.amount);
        }
      } else {
        console.error(error);
      }
    }
  };

  render() {
    const {
      sidebarOpen,
      amount,
      activeMenu,
      balance,
      openWalletModal,
      kycVerifyMenus,
      corporateMenus,
      bankVerificationMenus,
      kycDropdownOpen,
      CorporateDropdownOpen,
      BankVerificationDropdownOpen,
      userMenuPermission,
      user,
    } = this.state;
    const tax = (amount * 0.18).toFixed(2);
    const totalAmount = (parseFloat(amount) + parseFloat(tax)).toFixed(2);
    return (
      // sidebar
      <div className="font-halvetica hidden md:flex relative">
        {/* <div className={`${sidebarOpen ? 'w-0' : 'w-96'} shadow-2xl transition-all h-screen bg-[#e27daa] bg-opacity-10`}> */}
        <div
          className={`sidebar-transition fixed shadow-2xl min-h-screen max-h-screen overflow-y-auto bg-black ${
            sidebarOpen ? "close" : "w-[22vw]"
          }`}
          style={{
            backgroundImage: 'url("/sidebar10.png")',
            backgroundPosition: "bottom",
          }}
        >
          <Link to="/">
            <div className="h-[11%] bg-white border-b-[1px] border-b-white">
              <img src="/logo/logo2.png" alt="Logo" className="w-1/2 pl-4" />
            </div>
          </Link>
          {!sidebarOpen && (
            <ul className="flex flex-col justify-between min-h-[89%] mt-1 text-sm px-4 gap-y-1">
              <Link to="/dashboard">
                <div
                  className={`button flex font-montserrat font-light cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white ${
                    activeMenu === "Prepaid Dashboard" ? "bg-[#00acc1]" : ""
                  }`}
                  onClick={() => this.setActiveMenu("Prepaid Dashboard")}
                >
                  <MdDashboard className="text-2xl ml-8" />
                  <li>Prepaid Dashboard</li>
                </div>
              </Link>

              <div
                className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                  activeMenu === "My Prapaid Scheme" ? "bg-[#00acc1]" : ""
                }`}
                onClick={() => this.setActiveMenu("My Prapaid Scheme")}
              >
                <FaIndianRupeeSign className="text-xl ml-8" />
                <li>My Prepaid Scheme</li>
              </div>

              {userMenuPermission.map((user_menu) => {
                if (user_menu.menu === "Users") {
                  return (
                    <Link to="/dashboard/users" key={user_menu.id}>
                      <div
                        className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                          activeMenu === "Users" ? "bg-[#00acc1]" : ""
                        }`}
                        onClick={() => this.setActiveMenu("Users")}
                      >
                        <FaRegUser className="text-xl ml-8" />
                        <li>Users</li>
                      </div>
                    </Link>
                  );
                }

                if (user_menu.menu === "Report") {
                  return (
                    <Link to="/dashboard/report" key={user_menu.id}>
                      <div
                        className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                          activeMenu === "Report" ? "bg-[#00acc1]" : ""
                        }`}
                        onClick={() => this.setActiveMenu("Report")}
                      >
                        <MdOutlineReportGmailerrorred className="text-xl ml-8" />
                        <li>Report</li>
                      </div>
                    </Link>
                  );
                }
              })}

              <Link to="/dashboard/transactionList">
                <div
                  className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                    activeMenu === "Transaction" ? "bg-[#00acc1]" : ""
                  }`}
                  onClick={() => this.setActiveMenu("Transaction")}
                >
                  <FaIndianRupeeSign className="text-xl ml-8" />
                  <li>Transaction</li>
                </div>
              </Link>

              <Link to="/dashboard/api_docs">
                <div
                  className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                    activeMenu === "API Docs" ? "bg-[#00acc1]" : ""
                  }`}
                  onClick={() => this.setActiveMenu("API Docs")}
                >
                  <IoDocumentTextOutline className="text-xl ml-8" />
                  <li>API Docs</li>
                </div>
              </Link>

              {/* 1st dropdown */}
              {this.state.groupIdArray.includes(1) ? (
                <div>
                  <div
                    className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                      kycDropdownOpen ? "bg-[#00acc1]" : ""
                    }`}
                    onClick={this.toggleKYC}
                  >
                    <GrDocumentVerified className="text-xl ml-8" />
                    <li className="">Kyc Verification</li>
                    <RiArrowDropUpLine
                      className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${
                        kycDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <ul
                    className={`dropdown-transition bg-white ${
                      kycDropdownOpen ? "pb-4 open" : ""
                    }`}
                  >
                    {kycVerifyMenus.map((menu, index) => {
                      // const formattedRouteName = menu.route_name
                      //   ? menu.route_name.replace(/\./g, "/")
                      //   : "#";
                      let formattedRouteName = "#"; // Default to "#" if route_name is not present

                      if (menu.route_name) {
                        switch (menu.route_name) {
                          case "kyc.pancard.upload":
                            formattedRouteName = "kyc/pancard_upload";
                            break;
                          case "kyc.aadhaar.upload":
                            formattedRouteName = "kyc/aadhaar_upload";
                            break;

                          case "kyc.voter.upload":
                            formattedRouteName = "kyc/voter_upload";
                            break;
                          case "kyc.license.upload":
                            formattedRouteName = "kyc/license_upload";
                            break;
                          case "kyc.pancard.details":
                            formattedRouteName = "kyc/pancard_details";
                            break;
                          case "kyc.searchkyc.lite":
                            formattedRouteName = "kyc/searchkyc_lite";
                            break;
                          case "kyc.pancard.new_info":
                            formattedRouteName = "kyc/pancard_new_info";
                            break;
                          case "aadharExtract":
                            formattedRouteName = "kyc/extract_aadharcard_text";
                            break;
                          case "pancardExtract":
                            formattedRouteName = "kyc/extract_pancard_text";
                            break;
                          case "voterExtract":
                            formattedRouteName = "kyc/extract_voterId_text";
                            break;
                          case "drivingLicenseExtract":
                            formattedRouteName =
                              "kyc/extract_drivinglicense_text";
                            break;
                          case "pancard_ocr":
                            formattedRouteName = "kyc/pancard/ocr";
                            break;
                          case "aadharcard_mask":
                            formattedRouteName = "kyc/aadhaar_masking";
                            break;
                          case "voter_ocr":
                            formattedRouteName = "kyc/voterid/ocr";
                            break;
                          case "drivingLicense_ocr":
                            formattedRouteName = "kyc/license/ocr";
                            break;
                          case "passport_ocr":
                            formattedRouteName = "kyc/passport/ocr";
                            break;

                          default:
                            formattedRouteName = menu.route_name.replace(
                              /\./g,
                              "/"
                            );
                        }
                      }
                      return (
                        <Link to={formattedRouteName}>
                          <li
                            className="w-full mx-auto text-left mt-2 py-3 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer"
                            key={menu.id}
                          >
                            {menu.api_name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}

              {/* 2nd dropdown */}
              {this.state.groupIdArray.includes(6) ? (
                <div>
                  <div
                    className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                      CorporateDropdownOpen ? "bg-[#00acc1]" : ""
                    }`}
                    onClick={this.toggleCorporate}
                  >
                    <MdCorporateFare className="text-xl ml-8" />
                    <li>Corporate</li>
                    <RiArrowDropUpLine
                      className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${
                        CorporateDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <ul
                    className={`text-left dropdown-transition bg-white ${
                      CorporateDropdownOpen ? "pb-4 open" : ""
                    }`}
                  >
                    {corporateMenus.map((menu, index) => {
                      // const formattedRouteName = menu.route_name
                      //   ? menu.route_name.replace(/\./g, "/")
                      //   : "#";
                      let formattedRouteName = "#";
                      if (menu.route_name) {
                        switch (menu.route_name) {
                          case "gstverification":
                            formattedRouteName = "kyc/basic/gstin";
                            break;
                          case "corporate_cin_basic":
                            formattedRouteName = "kyc/corporate/basic";
                            break;

                          case "corporate_cin_advance":
                            formattedRouteName = "kyc/corporate/advanced";
                            break;
                          case "gstin_details":
                            formattedRouteName = "kyc/gstin_details";
                            break;

                          default:
                            formattedRouteName = menu.route_name.replace(
                              /\./g,
                              "/"
                            );
                        }
                      }
                      return (
                        <Link to={formattedRouteName}>
                          <li
                            className="w-full mx-auto text-left mt-2 py-3 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer"
                            key={menu.id}
                          >
                            {menu.api_name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}

              {/* 3rd dropdown */}
              {this.state.groupIdArray.includes(7) ? (
                <div>
                  <div
                    className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                      BankVerificationDropdownOpen ? "bg-[#00acc1]" : ""
                    }`}
                    onClick={this.toggleBankVerification}
                  >
                    <BsBank className="text-xl ml-8" />
                    <li>Bank Verification</li>
                    <RiArrowDropUpLine
                      className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${
                        BankVerificationDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <ul
                    className={`text-left dropdown-transition bg-white ${
                      BankVerificationDropdownOpen ? "pb-4 open" : ""
                    }`}
                  >
                    {bankVerificationMenus.map((menu, index) => {
                      const formattedRouteName = menu.route_name
                        ? menu.route_name.replace(/\./g, "/")
                        : "#";
                      return (
                        <Link to={formattedRouteName}>
                          <li
                            className="w-full mx-auto text-left mt-2 py-3 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer"
                            key={menu.id}
                          >
                            {menu.api_name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}

              <Link to="/dashboard/resetPassword">
                <div
                  className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
                    activeMenu === "Change Password" ? "bg-[#00acc1]" : ""
                  } `}
                  onClick={() => this.setActiveMenu("Change Password")}
                >
                  <PiKey className="text-xl ml-8" />
                  <li>Change Password</li>
                </div>
              </Link>

              <div
                className="button font-montserrat font-light flex items-center cursor-pointer py-2 transition-all gap-x-2 mt-2 px-4 bg-transparent border-[1.5px] mx-auto border-[#00acc1] rounded-sm text-white hover:bg-[#00acc1] w-fit active:bg-[#21a2b3]"
                onClick={this.logOut}
              >
                <CiLogout className="text-xl" />
                <li>Logout</li>
              </div>
            </ul>
          )}
        </div>

        {/* navbar */}
        <div
          className={`ml-auto bg-[#fbfafa] min-h-screen ${
            !sidebarOpen ? "w-[78vw]" : "w-full"
          }`}
        >
          <div className="py-1 flex justify-between pr-4 items-center bg-[#00acc1]">
            <div className="flex items-center">
              <div
                className="cursor-pointer text-2xl"
                onClick={() => {
                  this.setState({ sidebarOpen: !sidebarOpen });
                }}
              >
                {sidebarOpen ? (
                  <RiMenuFold2Line className="font-bold text-white text-3xl hover:text-gray-600 ml-4" />
                ) : (
                  <RiMenuFoldLine className="font-bold text-3xl text-white hover:text-gray-600 ml-5" />
                )}
              </div>
              <h1 className="text-3xl ml-8 text-white">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col mr-10 text-white">
                <h3 className="font-semibold">
                  Available Bal: <span className="font-bold">₹</span>{" "}
                  {user.wallet_amount ? user.wallet_amount : 0}
                </h3>
                <button
                  className="hover:bg-white hover:rounded-sm active:bg-transparent w-fit rounded-sm hover:text-[#00acc1] transition-all border-[2px] text-base text-white bg-transparent border-white px-3 py-1"
                  onClick={this.openWalletModal}
                >
                  Add Amount
                </button>
              </div>
              <Link to="/dashboard/profile">
                <div className="flex items-center mr-4 text-black hover:text-gray-600 cursor-pointer">
                  <FaRegUser className="mr-2" />
                  <h3 className="font-bold">{user.name}</h3>
                </div>
              </Link>
            </div>
          </div>

          {user.scheme_type === 'demo' && <ApiUsageAlert />}

          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<ProfileForm />} />
            <Route path="adduser" element={<UserForm />} />
            <Route path="transactionList" element={<TransactionList />} />
            <Route path="api_docs" element={<ApiDocumentation />} />
            <Route path="report" element={<ReportList />} />
            <Route
              path="get_report/:yearMonth/:userId"
              element={<BillReport />}
            />
            <Route path="get_report/:yearMonth" element={<BillReport />} />
            <Route path="edituser/:id" element={<EditUser />} />
            <Route path="setNewPassword/:id" element={<SetNewPassword />} />
            <Route path="resetPassword" element={<ResetPassword />} />
            <Route path="transactionList" element={<TransactionList />} />
            <Route path="wallet" element={<UserAdminWallet />} />

            <Route path="/" element={<PrepaidDashboard />} />

            {/* KYC */}
            {/* Aadhar */}
            <Route
              path="/kyc/aadhaar_validation"
              element={<AadhaarValidation />}
            />
            <Route path="/kyc/aadhaar_api" element={<AadhaarAPI />} />
            <Route path="/kyc/aadhaar_upload" element={<AadhaarUpload />} />
            <Route
              path="/kyc/aadhaar_otp_genrate"
              element={<AadhaarOtpGenerate />}
            />
            <Route
              path="/kyc/aadhaar_otp_submit"
              element={<AadhaarOtpSubmit />}
            />
            <Route path="/kyc/aadhaar_masking" element={<AadhaarMasking />} />
            <Route path="/kyc/aadharcard/ocr" element={<AadharCardOCR />} />
            <Route
              path="/kyc/aadhar_ocr_masking"
              element={<AadharOCRMasking />}
            />

            {/* VOTER */}
            <Route path="/kyc/voter_validation" element={<VoterValidation />} />
            <Route path="/kyc/voter_api" element={<VoterAPI />} />
            <Route path="/kyc/voter_upload" element={<VoterUpload />} />
            <Route path="/kyc/voterid/ocr" element={<VoterIDOCR />} />

            {/* PAN */}
            <Route path="/kyc/pancard" element={<PanCardVerification />} />
            <Route path="/kyc/pancard_api" element={<PanCardAPI />} />
            <Route path="/kyc/pancard_upload" element={<PanCardUpload />} />
            <Route path="/kyc/pancard_details" element={<PanCardInfo />} />
            <Route path="/kyc/pancard_new_info" element={<PanDetails />} />
            <Route path="/kyc/pancard/ocr" element={<PanCardOCR />} />
            <Route path="/kyc/pantogst" element={<PanToGST />} />
            <Route path="/kyc/by_pancard" element={<ByPanCard />} />

            {/* PASSPORT */}
            <Route
              path="/kyc/passport/passportverify"
              element={<PassportVerification />}
            />
            <Route path="/kyc/passport_api" element={<PassportAPI />} />
            <Route
              path="/kyc/passport_create_client"
              element={<PassportCreateClient />}
            />
            <Route path="/kyc/passport_upload" element={<PassportUpload />} />
            <Route path="/kyc/passport_verify" element={<PassportVerify />} />
            <Route path="/kyc/passport/ocr" element={<PassportOCR />} />

            {/* CORPORATE */}
            <Route path="/kyc/corporate_cin" element={<CorporateCIN />} />
            <Route
              path="/kyc/corporate_cin_apis"
              element={<CorporateCINAPI />}
            />
            <Route path="/kyc/corporate_din" element={<CorporateDIN />} />
            <Route
              path="/kyc/corporate_din_apis"
              element={<CorporateDINAPI />}
            />
            <Route path="/kyc/corporate_gstin" element={<CorporateGSTIN />} />
            <Route
              path="/kyc/corporate_gstin_apis"
              element={<CorporateGSTINAPI />}
            />
            <Route path="/kyc/gstin_details" element={<GSTINDetails />} />
            <Route path="/kyc/gstin_details_api" element={<GSTINAPI />} />
            <Route
              path="/kyc/corporate_gstin_confidence"
              element={<CorporateGstinConfidence />}
            />
            <Route
              path="/kyc/corporate_gstin_confidence_api"
              element={<GSTINWithConfidenceAPI />}
            />
            <Route path="/kyc/basic/gstin" element={<BasicGSTIN />} />
            <Route path="/kyc/basic/gstin_api" element={<BasicGSTINAPI />} />
            <Route path="/kyc/corporate/basic" element={<CINBasic />} />
            <Route
              path="/kyc/corporate/basic/api"
              element={<CorporateCINBasicAPI />}
            />
            <Route path="/kyc/corporate/advanced" element={<CINAdvance />} />
            <Route
              path="/kyc/corporate/advanced/api"
              element={<CorporateCINAdvanceAPI />}
            />

            {/* RC */}
            <Route path="/kyc/rc_validation" element={<RCValidation />} />
            <Route path="/kyc/rc_api" element={<RCAPI />} />
            <Route path="/kyc/rc_validationmp" element={<RCValidationMP />} />
            <Route
              path="/kyc/rc_validationlite"
              element={<RcValidationLite />}
            />
            <Route
              path="/kyc/rc_full_validation"
              element={<RCFullValidation />}
            />
            <Route
              path="/kyc/fasttag_information"
              element={<FastTagInformation />}
            />

            {/* BANK */}
            <Route
              path="/kyc/bank_verification"
              element={<BankVerification />}
            />
            <Route path="/kyc/bank_ifsc" element={<BankIFSCVerification />} />
            <Route path="/kyc/bankstatement" element={<BankStatement />} />
            <Route
              path="/kyc/bank_statement"
              element={<BankStatementReader />}
            />
            <Route
              path="/kyc/bankstatement/reader"
              element={<BankStatementReaderV1 />}
            />
            <Route path="/kyc/bank_analyser" element={<BankAnalyser />} />
            <Route path="/kyc/bankanalyser" element={<BankAnalyserV1 />} />

            {/* DL */}
            <Route
              path="/kyc/license_validation"
              element={<LicenseValidation />}
            />
            <Route path="/kyc/license_api" element={<DrivingLicenseAPI />} />
            <Route path="/kyc/license_upload" element={<LicenseUpload />} />
            <Route path="/kyc/license/ocr" element={<LicenseOCR />} />

            {/* ITR */}
            <Route path="/itr/itr_initiate" element={<ITRInitiate />} />
            <Route
              path="/itr/itr_enter_clientid"
              element={<ITREnterClientId />}
            />
            <Route path="/itr/itr_download_profile" element={<ITRProfile />} />
            <Route path="/itr/itr_download" element={<ITRDownload />} />
            <Route
              path="/itr/itr_download_26AS"
              element={<ITRDownload26AS />}
            />
            <Route path="/itr/itr_submit_otp" element={<ITRSubmitOTP />} />
            <Route
              path="/itr/itr_forget_password"
              element={<ITRForgetPassword />}
            />

            {/* VIDEO */}
            <Route path="/kyc/face_match" element={<FaceMatch />} />
            <Route path="/kyc/face_match_api" element={<FaceMatchAPI />} />
            <Route path="/kyc/facematch" element={<FaceMatchRegtech />} />
            <Route
              path="/kyc/detection_face"
              element={<FaceDetectionRegTech />}
            />
            <Route
              path="/kyc/detection_face_api"
              element={<FaceDetectionAPI />}
            />
            <Route
              path="/kyc/detection_emotion"
              element={<DetectionEmotion />}
            />
            <Route
              path="/kyc/detection_emotion_api"
              element={<DetectionEmotionAPI />}
            />

            {/* ADDRESS */}
            <Route path="/kyc/verify_address" element={<VerifyAddress />} />
            <Route path="/kyc/get_place" element={<GetPlace />} />
            <Route path="/kyc/create_geofence" element={<CreateGeofence />} />
            <Route path="/kyc/autocomplete" element={<AutoCompleteAPI />} />
            <Route path="/kyc/getcoordinate" element={<GetCoordinateAPI />} />

            {/* EMAIL */}
            <Route path="/kyc/verify_email" element={<EmailVerification />} />
            <Route
              path="/kyc/verify_email_api"
              element={<EmailVerificationAPI />}
            />
            <Route
              path="/kyc/check_verify_email_status"
              element={<CheckEmailVerificationStatus />}
            />
            <Route
              path="/kyc/check_verify_email_status_api"
              element={<CheckEmailStatusAPI />}
            />

            {/* IMAGE SCANNER */}
            <Route path="/kyc/img_scanner" element={<ImageScanner />} />
            <Route
              path="/kyc/image_scanner_api"
              element={<ImageScannerAPI />}
            />

            {/* PREDICTPPL */}
            <Route path="/kyc/predictppl" element={<PredictPPL />} />
            <Route path="/kyc/predictppl/api" element={<PredictPPLAPI />} />

            {/* Dedupe */}
            <Route path="/kyc/dedupe" element={<DedupeS3 />} />
            <Route path="/kyc/dedupe_api" element={<DedupeAPI />} />

            {/* Community Area */}
            <Route path="/kyc/community_area" element={<CommunityArea />} />
            <Route
              path="/kyc/community_area_api"
              element={<CommunityAreaAPI />}
            />

            {/* SEARCH */}
            <Route path="/kyc/searchkyc" element={<SearchKyc />} />
            <Route path="/kyc/search_api" element={<SearchV2API />} />
            <Route path="/kyc/searchkyc_lite" element={<KycLiteSearch />} />
            <Route path="/kyc/single/search" element={<SingleSearch />} />
            <Route path="/kyc/ckycsearchadvance" element={<CKyc />} />
            <Route path="/kyc/ckysearch_advance_api" element={<CKycApi />} />

            {/* PinCode */}
            <Route path="/kyc/pincode" element={<PinCode />} />
            <Route path="/kyc/pincode_api" element={<PinCodeAPI />} />

            {/* Other*/}
            <Route path="/kyc/electricity" element={<Electricity />} />
            <Route
              path="/kyc/shopestablishment"
              element={<ShopEstablishmentSearch />}
            />
            <Route path="/kyc/telecom" element={<Telecom />} />
            <Route path="/kyc/telecom_apis" element={<TelecomApi />} />
            <Route path="/kyc/fssi" element={<Fssai />} />
            <Route path="/kyc/fssi_api" element={<FssaiApi />} />
            <Route path="/kyc/upi_validation" element={<Upivalidation />} />
            <Route
              path="/kyc/telecom_submit_otp"
              element={<TelecomSubmitOtp />}
            />
            <Route path="/kyc/usage" element={<Usage />} />
            <Route path="/kyc/ckycsearchdata" element={<CkycSearch />} />
            <Route path="/kyc/ckycsearch_api" element={<CkycSearchAPI />} />
            <Route path="/kyc/ckycdownload" element={<CkycDownload />} />
            <Route path="/kyc/ckycdownload_api" element={<CkycDownloadApi />} />

            {/* EPFO */}
            <Route
              path="/kyc/pf_generate_otp"
              element={<EpfoOtpGeneration />}
            />
            <Route path="/kyc/pf_submit_otp" element={<EpfoOtpSubmission />} />
            <Route path="/kyc/pf_without_otp" element={<EpfoWithoutOtp />} />
            <Route path="/kyc/uan_details" element={<UanDetails />} />
            <Route path="/kyc/company_search" element={<CompanySearch />} />
            <Route path="/kyc/company_details" element={<CompanyDetails />} />
            <Route
              path="/kyc/company_product"
              element={<CompanyProductDetails />}
            />
            <Route
              path="/kyc/company_product_api"
              element={<CompanyProductAPI />}
            />

            {/* UdyamSearch */}
            <Route path="/kyc/udyam_details" element={<UdyamSearch />} />
            <Route path="/kyc/udyam_api" element={<UdyamSearchAPI />} />
            <Route
              path="/kyc/udyogadhar_details"
              element={<UdhyogAadhaarSearch />}
            />
            <Route path="/kyc/udyamadhar_api" element={<UdhyogAadharAPI />} />

            {/* BHUNAKSHA */}
            <Route path="/kyc/bhunakasha" element={<BhunakashaForm />} />
            <Route path="/kyc/api/bhunakasha" element={<BhunakshaApis />} />
            <Route path="/kyc/land" element={<LandRecord />} />
            <Route path="/kyc/land_api" element={<LandRecordAPIs />} />
            {/* <Route path="kyc/aadhaar_api" element={<AadhaarValidation />} /> */}

            {/* CREDIT SCORE */}
            <Route path="/creditreport" element={<CreditScoreReport />} />
            <Route path="/equifax" element={<Equifax />} />
            <Route path="/equifax_score" element={<EquifaxScore />} />

            {/* All Api Component */}
            <Route path="/all_apis" element={<AllApi />} />

            {/* search api */}
            <Route path="/kyc/single/search/api" element={<AllInOneApi />} />
          </Routes>
        </div>

        {/* wallet comp */}
        <div
          className={`container mx-auto p-6 bg-black bg-opacity-70 text-white shadow-lg fixed ${
            openWalletModal
              ? "transition-all duration-1000 max-w-screen-sm w-full right-0"
              : "-right-16 w-0 transition-all duration-1000"
          }`}
        >
          <div className="flex justify-between pb-8">
            <RxCross2
              className="text-4xl cursor-pointer hover:text-[#e27daa]"
              onClick={() => this.setState({ openWalletModal: false })}
            />
            <h2 className="text-2xl font-semibold mb-4">
              Current Wallet Balance: ₹{" "}
              {user.wallet_amount ? user.wallet_amount : 0}
            </h2>
          </div>

          <label htmlFor="amount" className="block text-lg mb-2">
            Add Amount in Wallet
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={this.handleInputChange}
            placeholder="Enter Wallet Amount"
            className="text-black w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => this.handleOptionClick("20000")}
              className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
            >
              +20,000
            </button>
            <button
              onClick={() => this.handleOptionClick("50000")}
              className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
            >
              +50,000
            </button>
            <button
              onClick={() => this.handleOptionClick("100000")}
              className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
            >
              +1,00,000
            </button>
          </div>

          <div className="flex justify-between text-lg mb-4">
            <div className="flex-1">
              <p>Tax (18%):</p>
              <p>Total Amount:</p>
            </div>
            <div className="flex-1 text-right">
              <p>{tax} ₹</p>
              <p>{amount} ₹</p>
            </div>
          </div>

          <button
            className="w-full bg-[#0c8d9e] text-white py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
            onClick={() =>
              this.handlePayment(
                user.id,
                user.name,
                user.email,
                user.access_token
              )
            }
          >
            Proceed to Pay
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(RolePrepaid_Dashboard);
