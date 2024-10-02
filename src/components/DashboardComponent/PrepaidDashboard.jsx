import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

class PrepaidDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandedPAN: false,
      isExpandedAadhar: false,
      isExpandedBankVerification: false,
      isExpandedPassport: false,
      isExpandedVoter: false,
      isExpandedVideokyc: false,
      isExpandedNach: false,
      isExpandedCin: false,
      isExpandedRC: false,
      isExpandedLiscense: false,
      isExpandedEquifax: false,
      isExpandedElectricity: false,
      isExpandedCibilEquifax: false,
      isExpandedEmailVerify: false,
      isExpandedDeupe: false,
      isExpandedPredictppl: false,
      isExpandedSearch: false,
      isExpandeCorporate: false,
      isExpandeEsign: false,
      isExpandedOther: false,
      isExpandedPayment: false,
      isExpandedBhunaksha: false,
      isExpandedUdyam: false,
      isExpandedITR: false,
      isExpandedEPFO: false,
      isExpandedAddress: false,
      isExpandedCommunity: false,
      isExpandedPincode: false,
      isExpandedImageScanner: false,
      user: {},
      scheme: [],
      aadharSchemes: null,
    };
  }

  componentDidMount() {
    this.getUser();
    this.getScheme();
  }

  getUser = async () => {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }

    try {
      const domain = localStorage.getItem("domain");
      const response = await axios.get(`${domain}/getuser/${token}`);
      const user = response.data;
      this.setState({ user });
    } catch (error) {
      this.setState({ error: "Error fetching user data" });
    }
  };

  getScheme = async () => {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }

    try {
      const domain = localStorage.getItem("domain");
      const response = await axios.get(`${domain}/getscheme/${token}`);
      const scheme = response.data;
      console.log("scheme: ", scheme);
      const aadharSchemes = scheme.filter(
        (schemeName) =>
          schemeName.api_slug === "aadhaar" ||
          schemeName.api_slug === "aadhaarupload" ||
          schemeName.api_slug === "aadhaarotpgenerate" ||
          schemeName.api_slug === "aadhaarmasking"
      );
      this.setState({ scheme, aadharSchemes });
    } catch (error) {
      this.setState({ error: "Error fetching user data" });
    }
  };

  //toggle cards
  toggleOptionsPAN = () => {
    this.setState((prevState) => ({ isExpandedPAN: !prevState.isExpandedPAN }));
  };

  toggleOptionsAadhar = () => {
    this.setState((prevState) => ({
      isExpandedAadhar: !prevState.isExpandedAadhar,
    }));
  };

  toggleOptionsBankVerification = () => {
    this.setState((prevState) => ({
      isExpandedBankVerification: !prevState.isExpandedBankVerification,
    }));
  };

  toggleOptionsVideokyc = () => {
    this.setState((prevState) => ({
      isExpandedVideokyc: !prevState.isExpandedVideokyc,
    }));
  };

  toggleOptionsSearch = () => {
    this.setState((prevState) => ({
      isExpandedSearch: !prevState.isExpandedSearch,
    }));
  };

  toggleOptionImageScanner = () => {
    this.setState((prevState) => ({
      isExpandedImageScanner: !prevState.isExpandedImageScanner,
    }));
  };

  toggleOptionsNach = () => {
    this.setState((prevState) => ({
      isExpandedNach: !prevState.isExpandedNach,
    }));
  };

  toggleOptionCommunity = () => {
    this.setState((prevState) => ({
      isExpandedCommunity: !prevState.isExpandedCommunity,
    }));
  };

  toggleOptionsPassport = () => {
    this.setState((prevState) => ({
      isExpandedPassport: !prevState.isExpandedPassport,
    }));
  };

  toggleOptionsVoter = () => {
    this.setState((prevState) => ({
      isExpandedVoter: !prevState.isExpandedVoter,
    }));
  };

  toggleOptionsCin = () => {
    this.setState((prevState) => ({
      isExpandedCin: !prevState.isExpandedCin,
    }));
  };

  toggleOptionsRC = () => {
    this.setState((prevState) => ({
      isExpandedRC: !prevState.isExpandedRC,
    }));
  };

  toggleOptionsLiscense = () => {
    this.setState((prevState) => ({
      isExpandedLiscense: !prevState.isExpandedLiscense,
    }));
  };

  toggleOptionPincode = () => {
    this.setState((prevState) => ({
      isExpandedPincode: !prevState.isExpandedPincode,
    }));
  };

  toggleOptionsEquifax = () => {
    this.setState((prevState) => ({
      isExpandedEquifax: !prevState.isExpandedEquifax,
    }));
  };

  toggleOptionCibilEquifax = () => {
    this.setState((prevState) => ({
      isExpandeCibilEquifax: !prevState.isExpandeCibilEquifax,
    }));
  };

  toggleOptionEPFO = () => {
    this.setState((prevState) => ({
      isExpandedEPFO: !prevState.isExpandedEPFO,
    }));
  };

  toggleOptionAddressa = () => {
    this.setState((prevState) => ({
      isExpandedAddress: !prevState.isExpandedAddress,
    }));
  };

  toggleOptionElectricity = () => {
    this.setState((prevState) => ({
      isExpandeElectricity: !prevState.isExpandeElectricity,
    }));
  };

  toggleOptionEmailVerify = () => {
    this.setState((prevState) => ({
      isExpandedEmailVerify: !prevState.isExpandedEmailVerify,
    }));
  };

  toggleOptionDeupe = () => {
    this.setState((prevState) => ({
      isExpandedDeupe: !prevState.isExpandedDeupe,
    }));
  };

  toggleOptionPredictppl = () => {
    this.setState((prevState) => ({
      isExpandedPredictppl: !prevState.isExpandedPredictppl,
    }));
  };

  toggleOptionCorporate = () => {
    this.setState((prevState) => ({
      isExpandedCorporate: !prevState.isExpandedCorporate,
    }));
  };

  toggleOptionEsign = () => {
    this.setState((prevState) => ({
      isExpandedEsign: !prevState.isExpandedEsign,
    }));
  };

  toggleOptionOther = () => {
    this.setState((prevState) => ({
      isExpandedOther: !prevState.isExpandedOther,
    }));
  };

  toggleOptionPayment = () => {
    this.setState((prevState) => ({
      isExpandedPayment: !prevState.isExpandedPayment,
    }));
  };

  toggleOptionBhunaksha = () => {
    this.setState((prevState) => ({
      isExpandedBhunaksha: !prevState.isExpandedBhunaksha,
    }));
  };

  toggleOptionUdyam = () => {
    this.setState((prevState) => ({
      isExpandedUdyam: !prevState.isExpandedUdyam,
    }));
  };

  toggleOptionITR = () => {
    this.setState((prevState) => ({
      isExpandedITR: !prevState.isExpandedITR,
    }));
  };

  render() {
    const {
      isExpandedPAN,
      isExpandedAadhar,
      isExpandedBankVerification,
      isExpandedPassport,
      isExpandedVoter,
      isExpandedVideokyc,
      isExpandedNach,
      isExpandedCin,
      isExpandedRC,
      isExpandedLiscense,
      isExpandedEquifax,
      isExpandedElectricity,
      isExpandedCibilEquifax,
      isExpandedEmailVerify,
      isExpandedDeupe,
      isExpandedPredictppl,
      isExpandedSearch,
      isExpandedCorporate,
      isExpandedEsign,
      isExpandedOther,
      isExpandedPincode,
      isExpandedPayment,
      isExpandedBhunaksha,
      isExpandedUdyam,
      isExpandedITR,
      isExpandedEPFO,
      isExpandedAddress,
      isExpandedCommunity,
      isExpandedImageScanner,
      user,
      scheme,
    } = this.state;
    let countaadhar = 0;
    let countvoter = 0;
    let countsearch = 0;
    let countbank = 0;
    let countvideokyc = 0;
    let countnach = 0;
    let countpayment = 0;
    let countpancard = 0;
    let countpassport = 0;
    let countcin = 0;
    let countrc = 0;
    let countlicense = 0;
    let countequifax = 0;
    let countelectricity = 0;
    let countcibilequifax = 0;
    let countcibiladdress = 0;
    let countemailverify = 0;
    let countdeupe = 0;
    let countpredictppl = 0;
    let countcorporate = 0;
    let countesign = 0;
    let countother = 0;
    let countbhunaksha = 0;
    let countudyam = 0;
    return user.role_id === 1 ? (
      <>
        <div className="bg-[#FFF4F3] w-full text-right pt-6 pr-20">
          <Link to="/dashboard/all_apis">
            <button className="bg-[#00acc1] hover:bg-transparent hover:text-[#00acc1] hover:border-[2px] hover:border-[#00acc1] transition-all text-white py-2 px-4">
              All Api Docs
            </button>
          </Link>
        </div>
        <div className="container bg-[#FFF4F3] px-4 py-8 md:flex md:flex-row md:flex-wrap md:mt-0 mt-12 md:justify-center flex-col font-montserrat">
          {scheme.map((schemeName) => {
            // **** aadhar card **** //
            if (
              (schemeName.api_slug === "aadhaar" ||
                schemeName.api_slug === "aadhaarupload" ||
                schemeName.api_slug === "aadharotpgenrate") &&
              countaadhar !== 1
            ) {
              countaadhar = 1;
              return (
                <div className="card border bg-white border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Aadhar
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedAadhar ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // aadhar
                      if (schemeOption.api_slug === "aadhaar") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/aadhaar_validation">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Aadhar Validation
                              </li>
                            </Link>
                            <Link to="/dashboard/kyc/aadharcard/ocr">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Aadhar OCR (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //aadhaar upload
                      if (schemeOption.api_slug === "aadhaarupload") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/aadhaar_upload">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Aadhar Upload
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //aadhar otp generate
                      if (schemeOption.api_slug === "aadharotpgenrate") {
                        return (
                          <>
                            <Link to="dashboard/kyc/aadhaar_otp_generate">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Aadhar OTP Generate
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //aadhar masking
                      if (schemeOption.api_slug === "aadharmasking") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/aadhaar_masking">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Aadhar Masking
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsAadhar}
                  >
                    {isExpandedAadhar ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** pan card **** //
            if (
              (schemeName.api_slug === "pancard" ||
                schemeName.api_slug === "pancardupload" ||
                schemeName.api_slug === "pantogst" ||
                schemeName.api_slug === "paninfo" ||
                schemeName.api_slug === "pandetails" ||
                schemeName.api_slug === "pandetals1") &&
              countpancard !== 1
            ) {
              countpancard = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Pan Card
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedPAN ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // pancard
                      if (schemeOption.api_slug === "pancard") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/pancard">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Pan Card Validation
                              </li>
                            </Link>
                            <Link to="/dashboard/kyc/pancard/ocr">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Pan Card OCR (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //pan details
                      if (schemeOption.api_slug === "pandetails") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/pancard_details">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Pan Card Info
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //pan to gst
                      if (schemeOption.api_slug === "pantogst") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/pantogst">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                PAN To GST
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //pancard upload
                      if (schemeOption.api_slug === "panuploadnew") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/pancard_upload">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                PanCard Upload
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsPAN}
                  >
                    {isExpandedPAN ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** passport **** //
            if (
              (schemeName.api_slug === "passport" ||
                schemeName.api_slug === "passportupload" ||
                schemeName.api_slug === "passportverify") &&
              countpassport !== 1
            ) {
              countpassport = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Passport
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedPassport ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // passport verification
                      if (schemeOption.api_slug === "passport") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/passport/passportverify">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Passport Verification
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //passport create client
                      if (schemeOption.api_slug === "passport") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/passport_create_client">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Passport Create Client
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //passport upload
                      if (schemeOption.api_slug === "passportupload") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/passport_upload">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Passport upload
                              </li>
                            </Link>

                            <Link to="/dashboard/kyc/passport/ocr">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Passport OCR (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //passport verify
                      if (schemeOption.api_slug === "passportverify") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/passport_verify">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Passport Verify
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsPassport}
                  >
                    {isExpandedPassport ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Corporate **** //
            if (
              (schemeName.api_slug === "cin" ||
                schemeName.api_slug === "din" ||
                schemeName.api_slug === "gstindetails" ||
                schemeName.api_slug === "cinbasic" ||
                schemeName.api_slug === "gstin" ||
                schemeName.api_slug === "gstinconfidence") &&
              countcorporate !== 1
            ) {
              countcorporate = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Corporate
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedCorporate ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // CIN
                      if (schemeOption.api_slug === "cin") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/corporate_cin">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                CIN
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //DIN
                      if (schemeOption.api_slug === "din") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/corporate_din">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                DIN
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //GSTIN
                      if (schemeOption.api_slug === "gstin") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/gstin">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                GSTIN
                              </li>
                            </Link>

                            <Link to="/dashboard/kyc/basic/gstin">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                GSTIN Basic
                              </li>
                            </Link>

                            <Link to="/dashboard/kyc/gstin_details">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                GSTIN Details (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //GSTIN Confidence
                      if (schemeOption.api_slug === "gstinconfidence") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/corporate_gstin_confidence">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                GSTIN With Confidence
                              </li>
                            </Link>
                          </>
                        );
                      }

                      // CIN Basic
                      if (schemeOption.api_slug === "cinbasic") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/corporate/basic">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                CIN Basic
                              </li>
                            </Link>
                          </>
                        );
                      }

                      // CIN Advance
                      if (schemeOption.api_slug === "cin") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/corporate/advanced">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                CIN Advance
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //GSTIN Details
                      if (schemeOption.api_slug === "gstindetails") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/gstin_details">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                GSTIN Details
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionCorporate}
                  >
                    {isExpandedCorporate ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** RC **** //
            if (
              (schemeName.api_slug === "rc" ||
                schemeName.api_slug === "rcfull" ||
                schemeName.api_slug === "rcfullvalidation" ||
                schemeName.api_slug === "rcvallite") &&
              countrc !== 1
            ) {
              countrc = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    RC Validate
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedRC ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "rc") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/rc_validation">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                RC Validation
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //Rc Full validation
                      if (schemeOption.api_slug === "rcfull") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/rc_full_validation">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                RC Full Validation
                              </li>
                            </Link>
                          </>
                        );
                      }

                      // Fast Tag Information
                      if (schemeOption.api_slug === "fasttag") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/fasttag_information">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Fast Tag Information
                              </li>
                            </Link>
                          </>
                        );
                      }

                      //RC Validation Lite
                      if (schemeOption.api_slug === "rcvallite") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/rc_validationlite">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                RC Validation Lite
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsRC}
                  >
                    {isExpandedRC ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Bank verification **** //
            if (
              (schemeName.api_slug === "bank_ifsc" ||
                schemeName.api_slug === "bank_anlyser") &&
              countbank !== 1
            ) {
              countbank = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Bank Verification
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedBankVerification ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      if (schemeOption.api_slug === "bank_anlyser") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/bank_analyser">
                              <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                                Bank Analyser
                              </li>
                            </Link>

                            {/* <Link to="/dashboard/kyc/bank_analyser">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        Bank Statement Analyser
                      </li>
                    </Link> */}
                          </>
                        );
                      }

                      if(schemeOption.api_slug === "bank_ifsc"){
                        return <>
                        <Link to="/dashboard/kyc/verify_ifsc">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        Verify IFSC
                      </li>
                    </Link>
                        </>
                      }

                      if(schemeOption.api_slug === "bank_statement"){
                        return <>
                        <Link to="/dashboard/kyc/bank_statement">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        Bank Statement Reader
                      </li>
                    </Link>
                        </>
                      }
                    })}

                    

                    
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsBankVerification}
                  >
                    {isExpandedBankVerification ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            } // **** License **** //
            if (
              (schemeName.api_slug === "license" ||
                schemeName.api_slug === "licenseupload") &&
              countlicense !== 1
            ) {
              countlicense = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Driving License
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedLiscense ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "license") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/license_validation">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Driving Verification
                              </li>
                            </Link>

                            <Link to="/dashboard/kyc/license/ocr">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Driving License OCR (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "licenseupload") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/license-upload">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Driving License upload
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsLiscense}
                  >
                    {isExpandedLiscense ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** ESign **** //
            if (schemeName.api_slug === "esign" && countesign !== 1) {
              countesign = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">eSign</h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedEsign ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    <Link to="/dashboard/kyc/esign-initialize">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        eSign
                      </li>
                    </Link>
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionEsign}
                  >
                    {isExpandedEsign ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Equifax **** //
            if (
              (schemeName.api_slug === "equifax" ||
                schemeName.api_slug === "equifax_score" ||
                schemeName.api_slug === "creditreport") &&
              countequifax !== 1
            ) {
              countequifax = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">SCORE</h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedEquifax ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "equifax") {
                        return (
                          <>
                            <Link to="/dashboard/creditreport">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                CRIF
                              </li>
                            </Link>

                            <Link to="/dashboard/equifax">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                ECredit
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "equifax_score") {
                        return (
                          <>
                            <Link to="/dashboard/equifax_score">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Score
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsEquifax}
                  >
                    {isExpandedEquifax ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Other **** //
            if (
              (schemeName.api_slug === "electricity" ||
                schemeName.api_slug === "shop_establishment" ||
                schemeName.api_slug === "telecom" ||
                schemeName.api_slug === "usage" ||
                schemeName.api_slug === "fssi" ||
                schemeName.api_slug === "upi" ||
                schemeName.api_slug === "companysearch") &&
              countother !== 1
            ) {
              countother = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">Other</h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedOther ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "electricity") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/electricity">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Electricity
                              </li>
                            </Link>

                            <Link to="/dashboard/kyc/shopestablishment">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Shop & Establishment
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "telecom") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/telecom">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Telecom
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "usage") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/usage">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Usage
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "fssi") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/fssi">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                FSSAI
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "pf_generate_otp") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/pf_generate_otp">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                EPFO
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "upi") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/upi_validation">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                UPI Validation
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "companysearch") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/company-product">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Company Product
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionOther}
                  >
                    {isExpandedOther ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Face Match **** //
            if (schemeName.api_slug === "facematch" && countvideokyc !== 1) {
              countvideokyc = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Video Kyc
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedVideokyc ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Video Kyc
                    </li>
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Video Kyc Docboyz
                    </li>
                    <Link to="/dashboard/kyc/face_match">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        Face Match
                      </li>
                    </Link>
                    <Link to="/dashboard/kyc/facematch">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        Face Match (RegTech)
                      </li>
                    </Link>
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsVideokyc}
                  >
                    {isExpandedVideokyc ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Enach **** //
            if (schemeName.api_slug === "enach" && countnach !== 1) {
              countnach = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">eNach</h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedNach ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    <Link to="/enach-seamless">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        Seamless
                      </li>
                    </Link>
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsNach}
                  >
                    {isExpandedNach ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Payment Gateway **** //
            if (schemeName.api_slug === "payment" && countpayment !== 1) {
              countpayment = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Payment Gateway
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedPayment ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    <Link to="/initiate-payment-integration">
                      <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                        Payment
                      </li>
                    </Link>
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionPayment}
                  >
                    {isExpandedPayment ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Search **** //
            if (
              (schemeName.api_slug === "searchkyclite" ||
                schemeName.api_slug === "searchkycdigitap" ||
                schemeName.api_slug === "searchkyc") &&
              countsearch !== 1
            ) {
              countsearch = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Search
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedSearch ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "searchkyc") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/searchkyc">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Search Data
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "searchkyclite") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/searchkyc-lite">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                SeachV1 Data
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "searchkycdigitap") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/ckycsearchadvance">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Ckyc
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsSearch}
                  >
                    {isExpandedSearch ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Bhunaksha **** //
            if (
              (schemeName.api_slug === "bhunaksha" ||
                schemeName.api_slug === "land") &&
              countbhunaksha !== 1
            ) {
              countbhunaksha = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Bhunaksha
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedBhunaksha ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "bhunaksha") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/bhunakasha">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Bhunaksha (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "land") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/land">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Land (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsSearch}
                  >
                    {isExpandedSearch ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Udyam Search **** //
            if (schemeName.api_slug === "udyamsearch" && countudyam !== 1) {
              countudyam = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Udyam & Udhyog Search
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedUdyam ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "udyamsearch") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/udyam_details">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Udyam Registration Search
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "udyamadhar") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/udyogadhar_details">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Udhyog Aadhaar Number Search
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionUdyam}
                  >
                    {isExpandedUdyam ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Verify Email **** //
            if (
              (schemeName.api_slug === "checkverificationemailstatus" ||
                schemeName.api_slug === "verifyemail") &&
              countemailverify !== 1
            ) {
              countemailverify = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Email Verification
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedEmailVerify ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "verifyemail") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/verify_email">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Verify Email (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (
                        schemeOption.api_slug === "checkverificationemailstatus"
                      ) {
                        return (
                          <>
                            <Link to="/dashboard/kyc/check_verify_email_status">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Check Verify Email Status
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionEmailVerify}
                  >
                    {isExpandedEmailVerify ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Dedupe **** //
            if (schemeName.api_slug === "dedupe" && countdeupe !== 1) {
              countdeupe = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Dedupe (RegTech)
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedDeupe ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "dedupe") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/dedupe">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Dedupe API
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionDeupe}
                  >
                    {isExpandedDeupe ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** Predictppl **** //
            if (schemeName.api_slug === "predictppl" && countpredictppl !== 1) {
              countpredictppl = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">
                    Predictppl
                  </h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedPredictppl ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "predictppl") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/predictppl">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                Predictppl (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionPredictppl}
                  >
                    {isExpandedPredictppl ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }

            // **** voter **** //
            if (
              (schemeName.api_slug === "voter_id" ||
                schemeName.api_slug === "voterupload") &&
              countvoter !== 1
            ) {
              countvoter = 1;
              return (
                <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
                  <h2 className="text-black text-2xl font-light mb-4">Voter</h2>
                  <ul
                    className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpandedVoter ? "max-h-screen" : "max-h-24"
                    }`}
                  >
                    {scheme.map((schemeOption) => {
                      // Rc validation
                      if (schemeOption.api_slug === "voter_id") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/voter_validation">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                VoterID Validation
                              </li>
                            </Link>

                            <Link to="/dashboard/kyc/voterid-ocr">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                VoterID OCR (RegTech)
                              </li>
                            </Link>
                          </>
                        );
                      }

                      if (schemeOption.api_slug === "voterupload") {
                        return (
                          <>
                            <Link to="/dashboard/kyc/voter-upload">
                              <li
                                className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer"
                                key={schemeOption.id}
                              >
                                VoterID Upload
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </ul>
                  <button
                    className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={this.toggleOptionsVoter}
                  >
                    {isExpandedVoter ? "Show Less" : "See More"}
                  </button>
                </div>
              );
            }
          })}
        </div>
      </>
    ) : (
      // *******************************  End User condition **********************************//

      // *******************************  start admin condition **********************************//
      <>
        <div className="bg-[#FFF4F3] w-full text-right pt-6 pr-20">
          <Link to="/dashboard/all_apis">
            <button className="bg-[#00acc1] hover:bg-transparent hover:text-[#00acc1] hover:border-[2px] hover:border-[#00acc1] transition-all text-white py-2 px-4">
              All Api Docs
            </button>
          </Link>
        </div>

        <div className="container px-4 py-4 md:flex md:flex-row md:flex-wrap bg-[#FFF4F3] md:mt-0 mt-12 md:justify-center flex-col font-montserrat">
          {/* Aadhar Card */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Aadhar</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedAadhar ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/aadhaar_validation">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer visited:text-visited">
                  Aadhar Validation
                </li>
              </Link>
              <Link to="/dashboard/kyc/aadhaar_upload">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Aadhar Upload
                </li>
              </Link>
              {isExpandedAadhar && (
                <>
                  <Link to="/dashboard/kyc/aadhaar_otp_genrate">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Aadhar OTP Generate
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/aadhaar_masking">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Aadhar Masking
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/aadharcard/ocr">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Aadhar OCR (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/aadhar_ocr_masking">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Aadhar OCR Masking (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/extract_aadharcard_text">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Aadhar Extract (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsAadhar}
            >
              {isExpandedAadhar ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Voter */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Voter</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedVoter ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/voter_validation">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  VoterID Validation
                </li>
              </Link>
              <Link to="/dashboard/kyc/voter_upload">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  VoterID Upload
                </li>
              </Link>
              {isExpandedVoter && (
                <>
                  <Link to="/dashboard/kyc/voterid/ocr">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      VoterId OCR (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/extract_voterId_text">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      VoterId Extract (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsVoter}
            >
              {isExpandedVoter ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Pancard */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Pan Card</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedPAN ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/pancard">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Pan Card Validation
                </li>
              </Link>
              <Link to="/dashboard/kyc/pancard_upload">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Pan Card Upload
                </li>
              </Link>
              {isExpandedPAN && (
                <>
                  <Link to="/dashboard/kyc/pancard_details">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Pan Card Info
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/pancard_new_info">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Pan Details
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/pancard/ocr">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Pan Card OCR (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/pantogst">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Pan Card GST
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/by_pancard">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      By Pan Card (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/extract_pancard_text">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Pan Card Extract (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsPAN}
            >
              {isExpandedPAN ? "Show Less" : "See More"}
            </button>
          </div>

          {/* passsport */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Passport</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedPassport ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/passport/passportverify">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Passport Verification
                </li>
              </Link>
              <Link to="/dashboard/kyc/passport_create_client">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Passport Create Client
                </li>
              </Link>
              {isExpandedPassport && (
                <>
                  <Link to="/dashboard/kyc/passport_upload">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Passport Upload
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/passport_verify">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Passport Verify
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/passport/ocr">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Passport OCR (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsPassport}
            >
              {isExpandedPassport ? "Show Less" : "See More"}
            </button>
          </div>

          {/* corporate */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Corporate</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedCorporate ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/corporate_cin">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  CIN
                </li>
              </Link>
              <Link to="/dashboard/kyc/corporate_din">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  DIN
                </li>
              </Link>
              {isExpandedCorporate && (
                <>
                  <Link to="/dashboard/kyc/corporate_gstin">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      GSTIN
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/gstin_details">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      GSTIN Details (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/corporate_gstin_confidence">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      GSTIN With Confidence
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/basic/gstin">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      GSTIN Basic
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/corporate/basic">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      CIN Basic
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/corporate/advanced">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      CIN Advance
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionCorporate}
            >
              {isExpandedCorporate ? "Show Less" : "See More"}
            </button>
          </div>

          {/* RC Validate */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">RC Validate</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedRC ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/rc_validation">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  RC Validation
                </li>
              </Link>
              <Link to="/dashboard/kyc/rc_validationmp">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  RC Validation Test
                </li>
              </Link>
              {isExpandedRC && (
                <>
                  <Link to="/dashboard/kyc/rc_validationlite">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      RC Validation Lite
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/rc_full_validation">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      RC Full Validation
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/fasttag_information">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Fast Tag Information
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsRC}
            >
              {isExpandedRC ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Bank Verification */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">
              Bank Verification
            </h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedBankVerification ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/bank_verification">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Bank Validation
                </li>
              </Link>
              <Link to="/dashboard/kyc/bank_ifsc">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Verify IFSC
                </li>
              </Link>
              {isExpandedBankVerification && (
                <>
                  <Link to="/dashboard/kyc/bankstatement">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Bank Statement
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/bank_statement">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Bank Statement Reader
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/bank_analyser">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Bank Statement Analyser
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/bankstatement/reader">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Bank Statement Reader (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/bankanalyser">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Bank Statement Analyser (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsBankVerification}
            >
              {isExpandedBankVerification ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Driving license */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">
              Driving License
            </h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedLiscense ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/license_validation">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Driving Verification
                </li>
              </Link>
              <Link to="/dashboard/kyc/license_upload">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Driving License Upload
                </li>
              </Link>
              {isExpandedLiscense && (
                <>
                  <Link to="/dashboard/kyc/license/ocr">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Driving License OCR (RegTech)
                    </li>
                  </Link>
                  <Link to="/dashboard/kyc/extract_drivinglicense_text">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">
                      Driving License Extract (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsLiscense}
            >
              {isExpandedLiscense ? "Show Less" : "See More"}
            </button>
          </div>

          {/* eSign */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">eSign</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedEsign ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/esign-initialize">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  eSign
                </li>
              </Link>
              {isExpandedLiscense && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionEsign}
            >
              {isExpandedEsign ? "Show Less" : "See More"}
            </button>
          </div>

          {/* ITR */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">ITR</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedITR ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/itr/itr_initiate">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  ITR Initiate
                </li>
              </Link>

              <Link to="/dashboard/itr/itr_enter_clientid">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  ITR Client Id Verify
                </li>
              </Link>
              {isExpandedITR && (
                <>
                  <Link to="/dashboard/itr/itr_download_profile">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      ITR Download Profile
                    </li>
                  </Link>

                  <Link to="/dashboard/itr/itr_download">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      ITR Download
                    </li>
                  </Link>

                  <Link to="/dashboard/itr/itr_download_26AS">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      ITR Download 26AS
                    </li>
                  </Link>

                  <Link to="/dashboard/itr/itr_submit_otp">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      ITR Submit OTP
                    </li>
                  </Link>

                  <Link to="/dashboard/itr/itr_forget_password">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      ITR Forget Password
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionITR}
            >
              {isExpandedITR ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Other */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Other</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedOther ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/electricity">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Electricity
                </li>
              </Link>

              <Link to="/dashboard/kyc/shopestablishment">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Shop & Establishment
                </li>
              </Link>
              {isExpandedOther && (
                <>
                  <Link to="/dashboard/kyc/telecom">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Telecom
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/usage">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Usage
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/fssi">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      FSSAI
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/upi_validation">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      UPI Validation
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionOther}
            >
              {isExpandedOther ? "Show Less" : "See More"}
            </button>
          </div>

          {/* EPFO */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">EPFO</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedEPFO ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/pf_generate_otp">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  EPFO (With OTP)
                </li>
              </Link>

              <Link to="/dashboard/kyc/pf_without_otp">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  EPFO (Without OTP)
                </li>
              </Link>
              {isExpandedEPFO && (
                <>
                  <Link to="/dashboard/kyc/uan_details">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      UAN Details
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/company_search">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Company Search
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/company_details">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Company Details
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/company_product">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Company Products (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionEPFO}
            >
              {isExpandedEPFO ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Credit Score */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">
              CREDIT SCORE
            </h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedEquifax ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/creditreport">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  CRIF
                </li>
              </Link>

              <Link to="/dashboard/equifax">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  ECredit
                </li>
              </Link>
              {isExpandedEquifax && (
                <>
                  <Link to="/dashboard/equifax_score">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Score
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsEquifax}
            >
              {isExpandedEquifax ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Video kyc */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Video Kyc</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedVideokyc ? "max-h-screen" : "max-h-24"
              }`}
            >
              <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                Video Kyc
              </li>

              <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                Video Kyc Docboyz
              </li>

              {isExpandedVideokyc && (
                <>
                  <Link to="/dashboard/kyc/face_match">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Face Match
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/facematch">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Face Match (RegTech)
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/detection_face">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Face Detection (RegTech)
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/detection_emotion">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Detected Emotion (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsVideokyc}
            >
              {isExpandedVideokyc ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Search */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Search</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedSearch ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/searchkyc">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Search Data
                </li>
              </Link>

              <Link to="/dashboard/kyc/searchkyc_lite">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Search lite Data
                </li>
              </Link>

              {isExpandedSearch && (
                <>
                  <Link to="/dashboard/kyc/pancard_details">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Pan Card Info
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/single/search">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Search
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/ckycsearchadvance">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Ckyc
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsSearch}
            >
              {isExpandedSearch ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Udhyam & Udhyog Search */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">
              Udyam & Udhyog Search
            </h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedUdyam ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/udyam_details">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Udyam Registration Search
                </li>
              </Link>

              <Link to="/dashboard/kyc/udyogadhar_details">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Udhyog Aadhaar Number Search
                </li>
              </Link>

              {isExpandedUdyam && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionUdyam}
            >
              {isExpandedUdyam ? "Show Less" : "See More"}
            </button>
          </div>

          {/* eNach */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Enach</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedNach ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/enach-seamless">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  seamless
                </li>
              </Link>

              <Link to="/enach-initiate-payment">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Nonseamless
                </li>
              </Link>

              {isExpandedNach && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionsNach}
            >
              {isExpandedNach ? "Show Less" : "See More"}
            </button>
          </div>

          {/* payment */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">
              Payment Gateway
            </h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedPayment ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/initiate-payment-integration">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Payment
                </li>
              </Link>

              {isExpandedPayment && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionPayment}
            >
              {isExpandedPayment ? "Show Less" : "See More"}
            </button>
          </div>

          {/* bhunaksha */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Bhunaksha</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedBhunaksha ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/bhunakasha">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Bhunaksha (RegTech)
                </li>
              </Link>

              <Link to="/dashboard/kyc/land">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Land Record (RegTech)
                </li>
              </Link>

              {isExpandedBhunaksha && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionBhunaksha}
            >
              {isExpandedBhunaksha ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Verify Address */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Address</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedAddress ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/verify_address">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Verify Address (RegTech)
                </li>
              </Link>

              <Link to="/dashboard/kyc/get_place">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Get Place (RegTech)
                </li>
              </Link>

              {isExpandedAddress && (
                <>
                  <Link to="/dashboard/kyc/create_geofence">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Create Geofence (RegTech)
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/autocomplete">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      AutoComplate Address (RegTech)
                    </li>
                  </Link>

                  <Link to="/dashboard/kyc/getcoordinate">
                    <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                      Get Coordinate (RegTech)
                    </li>
                  </Link>
                </>
              )}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionAddressa}
            >
              {isExpandedAddress ? "Show Less" : "See More"}
            </button>
          </div>

          {/* verify email */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Email</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedEmailVerify ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/verify_email">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Verify Email (RegTech)
                </li>
              </Link>

              <Link to="/dashboard/kyc/check_verify_email_status">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Check Verify Email (RegTech)
                </li>
              </Link>

              {isExpandedEmailVerify && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionEmailVerify}
            >
              {isExpandedEmailVerify ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Dedupe */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Dedupe</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedDeupe ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/dedupe">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Dedupe API (RegTech)
                </li>
              </Link>

              {isExpandedDeupe && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionDeupe}
            >
              {isExpandedDeupe ? "Show Less" : "See More"}
            </button>
          </div>

          {/* community */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Community</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedCommunity ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/community_area">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Community Area (RegTech)
                </li>
              </Link>

              {isExpandedCommunity && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionCommunity}
            >
              {isExpandedCommunity ? "Show Less" : "See More"}
            </button>
          </div>

          {/* pincode */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Pincode</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedPincode ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/pincode">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Pincode Distance (RegTech)
                </li>
              </Link>

              {isExpandedPincode && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionPincode}
            >
              {isExpandedPincode ? "Show Less" : "See More"}
            </button>
          </div>

          {/* image scanner */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">
              Image Scanner
            </h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedImageScanner ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/img_scanner">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Image Scanner (RegTech)
                </li>
              </Link>

              {isExpandedImageScanner && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionImageScanner}
            >
              {isExpandedImageScanner ? "Show Less" : "See More"}
            </button>
          </div>

          {/* Predictppl */}
          <div className="card bg-white border border-gray-200 rounded-lg shadow-xl p-4 mx-auto md:m-2 mt-4 md:w-[30%] w-3/4 h-fit">
            <h2 className="text-black text-2xl font-light mb-4">Predictppl</h2>
            <ul
              className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedPredictppl ? "max-h-screen" : "max-h-24"
              }`}
            >
              <Link to="/dashboard/kyc/predictppl">
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">
                  Predictppl (RegTech)
                </li>
              </Link>

              {isExpandedPredictppl && <></>}
            </ul>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={this.toggleOptionPredictppl}
            >
              {isExpandedPredictppl ? "Show Less" : "See More"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default PrepaidDashboard;
