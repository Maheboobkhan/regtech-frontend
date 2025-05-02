import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

class AadhaarOtpGenerate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadhaarNumber: "",
      response: null,
      otpResponse: null, // State to store OTP submission response
      error: null,
      loading: false,
      showOtpModal: false,
      otp: "",
    };
  }

  handleChange = (e) => {
    this.setState({ aadhaarNumber: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      this.setState({ error: "Auth token is missing" });
      return;
    }

    this.setState({ loading: true });

    const domain = localStorage.getItem("domain");

    axios
      .post(
        `${domain}/aadhaar_otp_genrate`,
        { aadhaar_number: this.state.aadhaarNumber },
        {
          headers: {
            AccessToken: token, // Send the token in the header
          },
        }
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          response: response.data,
          error: null,
          loading: false,
        });

        if (response.data[0]?.aadhaar_validation.data.otp_sent) {
          this.setState({ showOtpModal: true }); // Show the OTP modal if OTP is sent
        }
      })
      .catch((error) => {
        this.setState({
          error: "Error verifying Aadhaar number",
          loading: false,
        });
      });
  };

  handleOtpChange = (e) => {
    this.setState({ otp: e.target.value });
  };

  handleOtpSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { otp, response } = this.state;
    const token = Cookies.get("authToken");
    const domain = localStorage.getItem("domain");
    const clientId = response[0]?.aadhaar_validation.data.client_id;

    // console.log(clientId, this.state.aadhaarNumber, otp);

    axios
      .post(
        `${domain}/aadhaar_otp_submit`,
        { aadhaar_number: this.state.aadhaarNumber, client_id: clientId, otp },
        {
          headers: {
            AccessToken: token,
          },
        }
      )
      .then((otpResponse) => {
        // console.log(otpResponse);
        this.setState({
          otpResponse: otpResponse.data,
          showOtpModal: false,
          loading: false,
          otp: "",
          response: null,
          aadhaarNumber: "",
        }); // Clear previous response
      })
      .catch((error) => {
        this.setState({ error: "Error submitting OTP" });
      });
  };

  render() {
    const {
      aadhaarNumber,
      response,
      otpResponse,
      error,
      loading,
      showOtpModal,
      otp,
    } = this.state;

    return (
      <div
        className={`${
          otpResponse && otpResponse[0].aadhaar_otp_submit
            ? "mt-12 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50"
            : "flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50"
        }`}
      >
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#00acc1] p-4 flex justify-between">
            <h3 className="text-xl font-semibold text-white">
              Aadhaar OTP Generate
            </h3>
            <Link
              to="/dashboard/kyc/aadhaar_api"
              className="text-white underline hover:text-blue-100"
            >
              Aadhaar APIs
            </Link>
          </div>
          <div className="p-4">
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-blue-300">
                  Fetching Aadhaar details{" "}
                  <span className="text-blue-300">please wait...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="bg-red-500 text-white p-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={this.handleSubmit} className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="aadhaar_number"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhaar_number"
                  name="aadhaar_number"
                  value={aadhaarNumber}
                  onChange={this.handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ex: 1111 2222 3333"
                  required
                  maxLength="12"
                  minLength="12"
                />
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-blue-500 w-fit hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                >
                  Get OTP
                </button>
              </div>
            </form>

            {/* {otpResponse && otpResponse[0].aadhaar_otp_submit && (
              <div className="bg-green-100 text-green-800 p-3 rounded mt-4 mb-4">
                <h3 className="text-xl font-bold mb-4">Aadhaar OTP Response</h3>
                <p>
                  <span className="text-lg font-semibold">Client_id:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.client_id}
                </p>
                <p>
                  <span className="text-lg font-semibold">Full_name:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.full_name}
                </p>
                <p>
                  <span className="text-lg font-semibold">Aadhaar_number:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.aadhaar_number}
                </p>
                <p>
                  <span className="text-lg font-semibold">DOB:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.dob}
                </p>
                <p>
                  <span className="text-lg font-semibold">Gender:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.gender}
                </p>
                <p>
                  <span className="text-lg font-semibold">Country:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.country}
                </p>
                <p>
                  <span className="text-lg font-semibold">Dist:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.dist}
                </p>
                <p>
                  <span className="text-lg font-semibold">State:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.state}
                </p>
                <p>
                  <span className="text-lg font-semibold">PO:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.po}
                </p>
                <p>
                  <span className="text-lg font-semibold">Loc:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.loc}
                </p>
                <p>
                  <span className="text-lg font-semibold">VTC:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.vtc}
                </p>
                <p>
                  <span className="text-lg font-semibold">Subdist:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.subdist}
                </p>
                <p>
                  <span className="text-lg font-semibold">Street:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.street}
                </p>
                <p>
                  <span className="text-lg font-semibold">House:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.house}
                </p>
                <p>
                  <span className="text-lg font-semibold">Landmark:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.landmark}
                </p>
                <p>
                  <span className="text-lg font-semibold">Face_Status:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.face_status}
                </p>
                <p>
                  <span className="text-lg font-semibold">Face_Score:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.face_score}
                </p>
              </div>
            )} */}

            {otpResponse && otpResponse[0].aadhaar_otp_submit && (
              <div className="bg-green-100 text-green-800 p-3 rounded mt-4 mb-4">
                <h3 className="text-xl font-bold mb-4">Aadhaar OTP Response</h3>
                <p>
                  <span className="text-lg font-semibold">Client_id:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.client_id || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Full_name:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.full_name || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Aadhaar_number:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.aadhaar_number ||
                    null}
                </p>
                <p>
                  <span className="text-lg font-semibold">DOB:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.dob || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Gender:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.gender || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Country:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.country ||
                    null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Dist:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.dist || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">State:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.state || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">PO:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.po || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Loc:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.loc || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">VTC:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.vtc || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Subdist:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.subdist ||
                    null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Street:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.street ||
                    null}
                </p>
                <p>
                  <span className="text-lg font-semibold">House:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.house || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Landmark:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.address.landmark ||
                    null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Face_Status:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.face_status || null}
                </p>
                <p>
                  <span className="text-lg font-semibold">Face_Score:</span>
                  {otpResponse[0].aadhaar_otp_submit.data.face_score || null}
                </p>
                {/* Add more fields as necessary */}
              </div>
            )}

            {response &&
              response[0]?.aadhaar_validation?.statusCode === 404 && (
                <div className="bg-red-500 text-white p-3 rounded mb-4">
                  {response[0]?.aadhaar_validation?.response}
                </div>
              )}
            {response &&
              response[0]?.aadhaar_validation?.statusCode === 500 && (
                <div className="bg-red-500 text-white p-3 rounded mb-4">
                  Internal Server Error. Please contact techsupport@docboyz.in
                  for more details.
                </div>
              )}

            {response && response.statusCode === 403 && (
              <div className="bg-red-500 text-white p-3 rounded mb-4 mt-4">
                Internal Server Error. Please contact techsupport@docboyz.in for
                more details.
              </div>
            )}
          </div>
        </div>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 pl-36">
            <div className="bg-white p-6 rounded shadow-lg">
              {loading && (
                <div className="flex justify-center items-center mb-4">
                  <div className="text-xl text-blue-300">
                    Aadhaar details{" "}
                    <span className="text-blue-300">Fetching...</span>
                  </div>
                </div>
              )}
              <h2 className="text-xl mb-4">Enter OTP</h2>
              <form onSubmit={this.handleOtpSubmit}>
                <div className="mb-4">
                  <label htmlFor="otp" className="block text-gray-700">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={this.handleOtpChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter OTP"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                >
                  Submit OTP
                </button>
              </form>
              <button
                className="mt-4 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.setState({ showOtpModal: false })}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AadhaarOtpGenerate;
