import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class AadhaarAPI extends Component {
  state = {
    expandedSection: null,
    showAadhaarApis: false, // New state to control the expansion of the Aadhaar APIs section
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
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showAadhaarApis
                ? "h-auto transition-all duration-300"
                : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-[100%] ${
                showAadhaarApis ? "bg-[#4cb4ff] text-white" : "h-[100%]"
              }
            `}
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
                  <h4 className="font-semibold underline">
                    Aadhaar Validation
                  </h4>
                </div>
                {expandedSection === "aadhaarValidation" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b>{" "}
                      http://regtechapi.in/api/aadhaar_validation
                    </p>
                    <p>
                      <b>Request Method:</b> POST
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
  "aadhaar_number": "868889041183"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded text-wrap">
                      {`[
  {
    "aadhaar_validation": {
      "data": {
        "client_id": "aadhaar_validation_aIqubluqVsnmhWcebctf",
        "age_range": "30-40",
        "aadhaar_number": "868889041183",
        "profile_image": "/9j/4AAQSkZ/9j/4AAQSkZ/9j/4AAQSkZ/9j/4AAQSkZ/9j/4AAQSkZ/9j/4AAQSkZ/9j/4AAQSkZ",
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
                  <h4 className="font-semibold underline">
                    Aadhaar OTP Generate
                  </h4>
                </div>
                {expandedSection === "aadhaarOtpGenerate" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b>{" "}
                      http://regtechapi.in/api/aadhaar_otp_genrate
                    </p>
                    <p>
                      <b>Request Method:</b> GET
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
  "aadhaar_number": "868889041183"
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
                  <h4 className="font-semibold underline">
                    Aadhaar OTP Submit
                  </h4>
                </div>
                {expandedSection === "aadhaarOtpSubmit" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b>{" "}
                      http://regtechapi.in/api/aadhaar_otp_submit
                    </p>
                    <p>
                      <b>Request Method:</b> POST
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
  "client_id": "@{{clientid}}",
  "otp": "@{{otp}}"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "message": null,
  "success": true,
  "status_code": 200,
  "data": {
    "full_name": "Mohd.Asif Nazimuddin Sayyed",
    "has_image": true,
    "dob": "1995-10-04",
    "raw_xml": "https://aadhaar-api-docs.s3.amazonaws.com/docboyz/aadhaar_xml/474820200725131929442/474820200725131929442-2020-07-25-074929.xml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIARVQSU3FJ26BNVN6C%2F20200725%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200725T074929Z&X-Amz-Signature=b9e307b9511ae2b8ac3f5a9df2eba39f7e2fe9e24eb4225c641fb5549e8123cb",
    "address": {
      "loc": "kondhwa khurd",
      "vtc": "Pune City",
      "street": "S.N.54 Bhagyoday Nagar",
      "dist": "Pune",
      "landmark": "jamatul salehat madrsha",
      "po": "N I B M",
      "house": "Flat n.9 Basera Complex",
      "subdist": "Pune City",
      "country": "India",
      "state": "Maharashtra"
    },
    "zip_data": "https://aadhaar-api-docs.s3.amazonaws.com/docboyz/aadhaar_xml/474820200725131929442/474820200725131929442-2020-07-25-074928.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIARVQSU3FJ26BNVN6C%2F20200725%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200725T074929Z&X-Amz-Signature=17669310952ee6b20b4371da6c69f20f2e97b8a922394cad095b2435d5a01e61",
    "share_code": "5929",
    "care_of": "",
    "zip": "411048",
    "face_status": false,
    "aadhaar_number": "592154824748",
    "face_score": -1,
    "mobile_verified": false,
    "gender": "M",
    "client_id": "aadhaar_v2_UaMdUBdfmrSplknRSsep"
  },
  "message_code": "success"
}`}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Show content if Aadhaar APIs section is expanded */}
        </div>
      </div>
    );
  }
}

export default AadhaarAPI;
