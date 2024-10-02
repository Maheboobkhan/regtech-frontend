import React, { Component } from "react";

class AadhaarAPI extends Component {
  state = {
    expandedSection: null,
    showAadhaarApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleAadhaarApis = () => {
    this.setState({
      showAadhaarApis: !this.state.showAadhaarApis,
    });
  };

  render() {
    const { expandedSection, showAadhaarApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Aadhaar APIs */}
          <div
            className={`bg-[#cee5ff] rounded transition-all duration-300 ${
              showAadhaarApis ? "h-auto" : "h-16 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full cursor-pointer transition-all duration-300 ${
                showAadhaarApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleAadhaarApis}
            >
              Aadhaar APIs
            </h3>

            {showAadhaarApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Aadhaar Validation */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("aadhaarValidation")}
                >
                  <h4 className="font-semibold underline">Aadhaar Validation</h4>
                </div>
                {expandedSection === "aadhaarValidation" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
                    </p>
                    <p>
                      <b>Request Method:</b> POST
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "aadhaar_number": "868889041183"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "aadhaar_validation": {
      "data": {
        "client_id": "aadhaar_validation_aIqubluqVsnmhWcebctf",
        "age_range": "30-40",
        "aadhaar_number": "868889041183",
        "state": "Maharashtra",
        "gender": "M",
        "last_digits": "693",
        "is_mobile": true,
        "less_info": false
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

                {/* Aadhaar OTP Generate */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("aadhaarOtpGenerate")}
                >
                  <h4 className="font-semibold underline">Aadhaar OTP Generate</h4>
                </div>
                {expandedSection === "aadhaarOtpGenerate" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
                    </p>
                    <p>
                      <b>Request Method:</b> POST
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "otp_aadhar_number": "868889041183"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "message_code": "success",
  "success": true,
  "status_code": 200,
  "data": {
    "otp_sent": true,
    "if_number": true,
    "client_id": "aadhaar_v2_UaMdUBdfmrSplknRSsep",
    "valid_aadhaar": true
  },
  "message": "OTP Sent."
}`}
                    </pre>
                  </div>
                )}

                {/* Aadhaar OTP Submit */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("aadhaarOtpSubmit")}
                >
                  <h4 className="font-semibold underline">Aadhaar OTP Submit</h4>
                </div>
                {expandedSection === "aadhaarOtpSubmit" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
                    </p>
                    <p>
                      <b>Request Method:</b> POST
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "client_id": "@{clientid}",
  "otp_aadhar": "@{otp_aadhar}"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "full_name": "Mohd. Asif Nazimuddin Sayyed",
    "has_image": true,
    "dob": "1995-10-04",
    "aadhaar_number": "592154824748",
    "gender": "M",
    "client_id": "aadhaar_v2_UaMdUBdfmrSplknRSsep",
    "status": "success_aadhaar"
  },
  "message_code": "success",
  "status_code": 200
}`}
                    </pre>
                  </div>
                )}

                {/* Aadhaar Card OCR */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("aadhaarOcr")}
                >
                  <h4 className="font-semibold underline">Aadhaar Card OCR</h4>
                </div>
                {expandedSection === "aadhaarOcr" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
                    </p>
                    <p>
                      <b>Request Method:</b> POST
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "file": "image file",
  "file_type": "aadharcard"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "status_code": 200,
  "aadharcard": {
    "aadhar_number": "781437028915",
    "date_of_birth": "24/03/2002",
    "gender": "Female",
    "name": "Hitashri Tushar Patil"
  }
}`}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          
        </div>
      </div>
    );
  }
}

export default AadhaarAPI;
