import React, { Component } from "react";

class VoterIDAPIs extends Component {
  state = {
    expandedSection: null,
    showVoterIDAPIs: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleVoterIDAPIs = () => {
    this.setState({
      showVoterIDAPIs: !this.state.showVoterIDAPIs,
    });
  };

  render() {
    const { expandedSection, showVoterIDAPIs } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Voter ID APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showVoterIDAPIs ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showVoterIDAPIs ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleVoterIDAPIs}
            >
              Voter ID APIs
            </h3>

            {showVoterIDAPIs && (
              <div className="space-y-4 mt-2">
                {/* Voter ID Verification */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("voterVerification")}
                >
                  <h4 className="font-semibold underline">Voter ID Verification</h4>
                </div>
                {expandedSection === "voterVerification" && (
                  <div className="p-4 border border-black rounded bg-gray-50">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
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

                {/* Voter ID OCR */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("voterIDOCR")}
                >
                  <h4 className="font-semibold underline">Voter ID OCR</h4>
                </div>
                {expandedSection === "voterIDOCR" && (
                  <div className="p-4 border border-black rounded bg-gray-50">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
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
  "file": "image_file",
  "file_type": "voterid"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "status_code": 200,
  "voterid": {
    "name": "PREM RAJ THAKUR",
    "raw_ocr_texts": [
      "ELECTION COMMISSION OF INDIA",
      "added sict ELECTOR PHOTO IDENTITY CARD",
      "GDN0225185",
      "Raleth anT 714 : 44 TIT oligit",
      "ELECTOR'S NAME : PREM RAJ THAKUR",
      "14dl and HIH",
      ": 1972 ca dight",
      "FATHER'S NAME : KISHAN DEV THAKUR",
      "FIT / Sex",
      ": you / Male",
      "WITH at",
      "DATE OF BIRTH/AGE :",
      "15/02/1985"
    ],
    "voter_id_number": "GDN0225185"
  }
}`}
                    </pre>
                  </div>
                )}

                {/* Voter ID Upload */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("voterIDUpload")}
                >
                  <h4 className="font-semibold underline">Voter ID Upload</h4>
                </div>
                {expandedSection === "voterIDUpload" && (
                  <div className="p-4 border border-black rounded bg-gray-50">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
                    </p>
                    <p>
                      <b>Request form-data:</b> voterid_file – voter ID image file
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
        "full_name": {
          "value": "Rajesh",
          "confidence": 92.0
        },
        "age": {
          "value": "26",
          "confidence": 78.0
        },
        "care_of": {
          "value": "Saradaval",
          "confidence": 96.0
        },
        "dob": {
          "value": "1800-01-01",
          "confidence": 0.0
        },
        "doc": {
          "value": "2003-01-01",
          "confidence": 95.0
        },
        "gender": {
          "value": "M",
          "confidence": 95.0
        },
        "epic_number": {
          "value": "MTG1947852",
          "confidence": 92.0
        }
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
        </div>
      </div>
    );
  }
}

export default VoterIDAPIs;
