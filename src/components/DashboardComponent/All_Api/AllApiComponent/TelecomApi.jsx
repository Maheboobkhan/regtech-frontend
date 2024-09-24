import React, { Component } from "react";

class TelecomApi extends Component {
  state = {
    showTelecomDetails: false,  // Controls the visibility of the main section
    expandedSection: null,      // Controls the visibility of detailed sections
  };

  // Toggle function for showing or hiding main section details
  toggleTelecomDetails = () => {
    this.setState(prevState => ({ showTelecomDetails: !prevState.showTelecomDetails }));
  };

  // Toggle function for expanding/collapsing detailed sections
  toggleSection = (section) => {
    this.setState(prevState => ({
      expandedSection: prevState.expandedSection === section ? null : section,
    }));
  };

  render() {
    const { showTelecomDetails, expandedSection } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col space-y-4">
          {/* Main Section Header */}
          <div
            className={`bg-blue-400 text-white p-4 rounded cursor-pointer ${
              showTelecomDetails ? "bg-gray-900" : ""
            }`}
            onClick={this.toggleTelecomDetails}
          >
            <h3 className="text-2xl">Telecom APIs</h3>
          </div>

          {/* Main Section Content */}
          {showTelecomDetails && (
            <div className="space-y-4">
              {/* Telecom Generate OTP */}
              <div
                className="bg-blue-400 text-black p-4 rounded cursor-pointer"
                onClick={() => this.toggleSection("generateOtp")}
              >
                <h4 className="text-xl underline">Telecom Generate OTP</h4>
              </div>

              {expandedSection === "generateOtp" && (
                <div className="bg-gray-100 p-4 border border-gray-300 rounded">
                  <p><b>Hitting URL:</b> http://regtechapi.in/api/telecom</p>
                  <p><b>Request Method:</b> POST</p>
                  <p><b>Request Body:</b></p>
                  <pre className="bg-gray-200 p-2 rounded">
                    {`{
  "id_number": "9840115789"
}`}
                  </pre>
                  <p><b>Success Response:</b></p>
                  <pre className="bg-gray-200 p-2 rounded">
                    {`{
  "data": {
    "client_id": "telecom_FSuewlwSuVZzfBAiEgqq",
    "operator": "vi",
    "otp_sent": "true",
    "if_number": "true"
  },
  "status_code": 200,
  "message_code": "success",
  "message": "OTP generated",
  "success": "true"
}`}
                  </pre>
                </div>
              )}

              {/* Telecom OTP Submit */}
              <div
                className="bg-blue-400 text-black p-4 rounded cursor-pointer"
                onClick={() => this.toggleSection("otpSubmit")}
              >
                <h4 className="text-xl underline">Telecom OTP Submit</h4>
              </div>

              {expandedSection === "otpSubmit" && (
                <div className="bg-gray-100 p-4 border border-gray-300 rounded">
                  <p><b>Hitting URL:</b> http://regtechapi.in/api/</p>
                  <p><b>Request Method:</b> POST</p>
                  <p><b>Request Body:</b></p>
                  <pre className="bg-gray-200 p-2 rounded">
                    {`{
  "client_id": "@{{client_id}}",
  "otp": "@{{otp}}"
}`}
                  </pre>
                  <p><b>Success Response:</b></p>
                  <pre className="bg-gray-200 p-2 rounded">
                    {`{
  "data": {
    "client_id": "telecom_vKTrdfluunadpDzxocIH",
    "mobile_number": "9404758963",
    "address": "SAPTASUR A-404, D.S.K. VISHWA  TALUKA HAWELI, Vadgaon Budruk, PUNE, DHAYARI, Maharashtra, 411041",
    "city": "DHAYARI",
    "state": "Maharashtra",
    "pin_code": "411041",
    "full_name": "DEVANAND KUMAR",
    "dob": "1966-11-02",
    "parsed_dob": "1966-11-02",
    "user_email": null,
    "operator": "vi",
    "billing_type": "prepaid",
    "alternate_phone": "8745125987",
    "extra_fields": null
  },
  "status_code": 200,
  "success": true,
  "message": "Success",
  "message_code": "success"
}`}
                  </pre>
                </div>
              )}
            </div>
          )}

          
        </div>
      </div>
    );
  }
}

export default TelecomApi;
