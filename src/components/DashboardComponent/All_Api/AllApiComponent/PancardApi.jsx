import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class PanCardAPI extends Component {
  state = {
    expandedSection: null,
    showPanCardApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  togglePanCardApis = () => {
    this.setState({
      showPanCardApis: !this.state.showPanCardApis,
    });
  };

  render() {
    const { expandedSection, showPanCardApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Pan Card APIs */}
          <div
            className={`bg-[#d0d6f1] rounded cursor-pointer transition-all duration-300 ${
              showPanCardApis ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-[100%] ${
                showPanCardApis ? "bg-[#4cb4ff] text-white" : "h-[100%]"
              }`}
              onClick={this.togglePanCardApis}
            >
              Pan Card APIs
            </h3>

            {showPanCardApis && (
              <div className="space-y-4 mt-2">
                {/* PAN Verification */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("panVerification")}
                >
                  <h4 className="font-semibold underline">PAN Verification</h4>
                </div>
                {expandedSection === "panVerification" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/pancard
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
  "pan_number": "ARTPB4748P"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "pancard": {
      "data": {
        "client_id": "pan_WkNzvNBotdVtlscFqbur",
        "pan_number": "ARTPB4748P",
        "full_name": "DEVANAND PANNALAL SHARMA",
        "category": "person"
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

                {/* PAN Upload */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("panUpload")}
                >
                  <h4 className="font-semibold underline">PAN Upload</h4>
                </div>
                {expandedSection === "panUpload" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.docboyz.in/api/panupload
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
                      <b>Request form-data:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`file – pancard image file`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "client_id": "pan_photo_dfndubtlyasFUMojgfbw",
    "pan_number": "ARTPB4748P",
    "dob": "04/07/1991",
    "father_name": "Hiralal Chavan",
    "full_name": "Devanand Pannalal Sharma",
    "strict_status": false,
    "strict_check": false,
    "individual_pan": true,
    "pan_confidence": 99.0,
    "signature_confidence": 0.0,
    "information_mismatch": [],
    "valid_pan": true
  },
  "status_code": 200,
  "success": true,
  "message": null,
  "message_code": "success"
}`}
                    </pre>
                  </div>
                )}

                {/* PAN Info */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("panInfo")}
                >
                  <h4 className="font-semibold underline">PAN Info</h4>
                </div>
                {expandedSection === "panInfo" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/pancard_details
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
  "pan_number": "BPZPM1894M"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "pancard": {
      "data": {
        "panNumber": "BPZPM1894M",
        "fullName": "PRITESH LAXMAN MEHETRE",
        "isValid": "true",
        "firstName": "PRITESH",
        "middleName": "LAXMAN",
        "lastName": "MEHETRE",
        "title": "Shri",
        "panStatusCode": "E",
        "panStatus": "Valid",
        "aadhaarSeedingStatus": "Aadhaar seeding is Successful",
        "aadhaarSeedingStatusCode": "Y",
        "lastUpdatedOn": "18/08/2017"
      },
      "status_code": 200
    }
  }
]`}
                    </pre>
                  </div>
                )}

                {/* By PAN Card */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("byPanCard")}
                >
                  <h4 className="font-semibold underline">By PAN Card</h4>
                </div>
                {expandedSection === "byPanCard" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/bypan
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
  "bypan_id": "AABCZ2858B"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "data": {
      "SNO": "1",
      "GSTIN": "06AAJCC5200A1ZF",
      "GSTIN_STATUS": "Active",
      "STATE": "Haryana"
    },
    "statusCode": 200
  }
]`}
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

export default PanCardAPI;
