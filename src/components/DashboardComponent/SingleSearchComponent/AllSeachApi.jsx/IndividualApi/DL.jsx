import React, { Component } from "react";

class DrivingLicenseAPI extends Component {
  state = {
    expandedSection: null,
    showDrivingLicenseApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleDrivingLicenseApis = () => {
    this.setState({
      showDrivingLicenseApis: !this.state.showDrivingLicenseApis,
    });
  };

  render() {
    const { expandedSection, showDrivingLicenseApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Driving License APIs */}
          <div className={`bg-[#cee5ff] rounded transition-all duration-300 ${showDrivingLicenseApis ? "h-auto" : "h-16 flex items-center"}`}>
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full cursor-pointer transition-all duration-300 ${showDrivingLicenseApis ? "bg-[#4cb4ff] text-white" : ""}`}
              onClick={this.toggleDrivingLicenseApis}
            >
              Driving License APIs
            </h3>

            {showDrivingLicenseApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* DL Verification */}
                <div className="badge badge-warning">
                  <h4 className="font-semibold underline cursor-pointer" onClick={() => this.toggleSection("dlVerification")}>
                    DL Verification
                  </h4>
                </div>
                {expandedSection === "dlVerification" && (
                  <div className="p-4 border border-black rounded">
                    <p><b>Hitting URL:</b> http://regtechapi.in/api/seachv4</p>
                    <b>Request Body:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "license_number": "UP20 20150000000",
  "dob": "DD/MM/YYYY"
}`}
                    </pre>
                    <b>Success Response:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "license_number": "MH1220180035461",
    "dob": "16-09-1976",
    "name": "RAJESH KUMAR BHASKAR",
    "father_or_husband_name": "SARDAWAL RAM BHASKAR",
    "blood_group": "B+",
    "profile_image": "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/",
    "permanent_address": "S N0-45/3 ASTVINAYAK NAGAR  SADGURU SOC DATTA MANDIR CHANDAN NAGAR KHARDI ROAD  PUNE  411014",
    "state": "MAHARASHTRA",
    "district": "PUNE",
    "permanent_zip": 411014,
    "country": "",
    "type": "NA",
    "non_transport_doi": "",
    "non_transport_doe": false,
    "transport_doi": "14-08-2018",
    "transport_doe": "13-08-2021",
    "ola_code": "MH12",
    "cov": "LMV-TR",
    "issue_date": "14-08-2018"
  },
  "status_code": 200
}`}
                    </pre>
                  </div>
                )}

                {/* Driving License OCR */}
                <div className="badge badge-warning">
                  <h4 className="font-semibold underline cursor-pointer" onClick={() => this.toggleSection("dlOcr")}>
                    Driving License OCR
                  </h4>
                </div>
                {expandedSection === "dlOcr" && (
                  <div className="p-4 border border-black rounded">
                    <p><b>Hitting URL:</b> http://regtechapi.in/api/seachv4</p>
                    <b>Header:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}
                    </pre>
                    <b>Request Body:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "file": "image_file",
  "file_type": "drivinglicense"
}`}
                    </pre>
                    <b>Success Response:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "status_code": 200,
  "driving_license": {
    "birth_date": "01-12-1987",
    "dl_no": "MH03 20080022135",
    "expiry_date": "23-01-2027",
    "name": "",
    "raw_ocr_texts": [
      "THE UNION OF INDIA",
      "MAHARASHTRA STATE MOTOR DRIVING LICENCE",
      "DL No MH03 20080022135",
      "DOI : 24-01-2007",
      "Valid Till : 23-01-2027 (NT)",
      "09-03-2011 (TR)",
      "AED 15-03-2008",
      "FORM 7",
      "AUTHORISATION TO DRIVE FOLLOWING CLASS",
      "RULE 16 (2)",
      "OF VEHICLES THROUGHOUT INDIA",
      "COV",
      "DOI",
      "MCWG",
      "24-01-2007",
      "LMV 24-01-2007",
      "TRANS 10-03-2008",
      "DOB : 01-12-1987",
      "BG",
      "Name",
      "BABU KHAN",
      "S/D/W of JABBAR KHAN",
      "Add KAMLA RAMAN NAGAR, BAIGANWADI,",
      "R",
      "GOVANDI, MUMBAI.",
      "PIN 400043",
      "ABUKHAN",
      "Signature & ID of",
      "Signature/Thumb",
      "Issuing Authority MH03 2008261",
      "Impression of Holder"
    ]
  }
}`}
                    </pre>
                  </div>
                )}

                {/* DL Upload */}
                <div className="badge badge-warning">
                  <h4 className="font-semibold underline cursor-pointer" onClick={() => this.toggleSection("dlUpload")}>
                    DL Upload
                  </h4>
                </div>
                {expandedSection === "dlUpload" && (
                  <div className="p-4 border border-black rounded">
                    <p><b>Hitting URL:</b> http://regtechapi.in/api/seachv4</p>
                    <b>Request form-data:</b>
                    <p>dl_front – driving license front image file</p>
                    <p>back - driving license back image file</p>
                    <b>Success Response:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "document_type": null,
    "license_number": {
      "value": "MH13  20100006214",
      "confidence": 80.0
    },
    "dob": {
      "value": "1991-07-04",
      "confidence": 90.0
    },
    "image_url": null
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

export default DrivingLicenseAPI;
