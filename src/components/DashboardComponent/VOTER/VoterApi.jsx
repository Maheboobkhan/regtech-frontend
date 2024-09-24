import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class VoterAPI extends Component {
  state = {
    expandedSection: null,
    showVoterIDApis: false, // New state to control the expansion of the Voter ID APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleVoterIDApis = () => {
    this.setState({
      showVoterIDApis: !this.state.showVoterIDApis,
    });
  };

  render() {
    const { expandedSection, showVoterIDApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Voter ID APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showVoterIDApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showVoterIDApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleVoterIDApis}
            >
              Voter ID APIs
            </h3>

            {showVoterIDApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Voter ID Verification */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("voterVerification")}
                >
                  <h4 className="font-semibold underline">Voter ID Verification</h4>
                </div>
                {expandedSection === "voterVerification" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/voter_validation
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "voter_number": ""
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "relation_type": "F",
    "gender": "M",
    "age": "29",
    "epic_no": "NLN2089555",
    "client_id": "bkpkzGyssQ",
    "dob": "1990-08-31",
    "relation_name": "KALEEN BHAIYA",
    "name": "MUNNA BHAIYA",
    "area": "Mirzapur",
    "state": "Uttar Pradesh",
    "house_no": "Tripathi Haveli"
  },
  "status_code": 200,
  "message": "",
  "success": true
}`}
                    </pre>
                  </div>
                )}

                {/* Voter ID Upload */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("voterUpload")}
                >
                  <h4 className="font-semibold underline">Voter ID Upload</h4>
                </div>
                {expandedSection === "voterUpload" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.docboyz.in/api/voter_upload
                    </p>
                    <p>
                      <b>Request form-data:</b> file – voter ID image file
                    </p>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "client_id": "ocr_voter_JJqCfxggzTMswegksvdp",
    "ocr_fields": [
      {
        "document_type": "voterid_front",
        "full_name": {"value": "Rajesh", "confidence": 92.0},
        "age": {"value": "26", "confidence": 78.0},
        "care_of": {"value": "Saradaval", "confidence": 96.0},
        "dob": {"value": "1800-01-01", "confidence": 0.0},
        "doc": {"value": "2003-01-01", "confidence": 95.0},
        "gender": {"value": "M", "confidence": 95.0},
        "epic_number": {"value": "MTG1947852", "confidence": 92.0}
      }
    ]
  },
  "status_code": 200,
  "success": true,
  "message": null,
  "message_code": "success"
}`}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="text-center mt-4">
            <button
              className="bg-blue-300 text-white py-2 px-4 rounded"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VoterAPI;
