import React, { Component } from "react";

class PassportAPI extends Component {
  state = {
    expandedSection: null,
    showPassportApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  togglePassportApis = () => {
    this.setState({
      showPassportApis: !this.state.showPassportApis,
    });
  };

  render() {
    const { expandedSection, showPassportApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Passport APIs */}
          <div
            className={`bg-[#d0d6f1] rounded cursor-pointer transition-all duration-300 ${
              showPassportApis ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showPassportApis ? "bg-[#4cb4ff] text-white" : "text-blue-900"
              }`}
              onClick={this.togglePassportApis}
            >
              Passport APIs
            </h3>

            {showPassportApis && (
              <div className="space-y-4 mt-2">
                {/* Passport Create Client */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("passportCreateClient")}
                >
                  <h4 className="font-semibold underline">Passport Create Client</h4>
                </div>
                {expandedSection === "passportCreateClient" && (
                  <div className="p-4 border border-black rounded">
                    <p><b>Hitting URL:</b> http://regtechapi.in/api/pancard</p>
                    <p><b>Request Method:</b> POST</p>
                    <p><b>Success Response:</b></p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "client_id": "takdTqhCxo"
  },
  "status_code": 201,
  "message": "",
  "success": true
}`}
                    </pre>
                  </div>
                )}

                {/* Passport Upload */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("passportUpload")}
                >
                  <h4 className="font-semibold underline">Passport Upload</h4>
                </div>
                {expandedSection === "passportUpload" && (
                  <div className="p-4 border border-black rounded">
                    <p><b>Hitting URL:</b> http://regtechapi.docboyz.in/api/</p>
                    <p><b>Request Method:</b> POST</p>
                    <p><b>Request Body:</b></p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  file – passport image file
}`}
                    </pre>
                    <p><b>Success Response:</b></p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "doe": "2020-09-15",
    "dob": "1990-08-31",
    "father": "KALEEN BHAIYA",
    "given_name": "MUNNA BHAIYA",
    "mrz_line_1": "PPINDBHAIYA&lt;&lt;MUNNA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;",
    "old_passport_num": "F0233736",
    "file_num": "UPHM00597710",
    "client_id": "TTJmMxbZQi",
    "place_of_issue": "MIRZAPUR",
    "spouse": "",
    "country_code": "IND",
    "address": "TRIPATHI HAVELI, MIRZAPUR",
    "surname": "BAGGA",
    "mrz_line_2": "J0933933<1IND9008319M2009155<<<<<<<<<<<<<<04",
    "passport_num": "J0933836",
    "doi": "2010-10-15",
    "old_doi": "2005-10-15",
    "gender": "MALE",
    "nationality": "INDIAN",
    "place_of_birth": " MIRZAPUR",
    "mother": "BEENA TRIPATHI",
    "old_place_of_issue": "MIRZAPUR",
    "pin": "231001",
    "verified": null
  },
  "status_code": 200,
  "message": "",
  "success": true
}`}
                    </pre>
                  </div>
                )}

                {/* Verify Passport */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("verifyPassport")}
                >
                  <h4 className="font-semibold underline">Verify Passport</h4>
                </div>
                {expandedSection === "verifyPassport" && (
                  <div className="p-4 border border-black rounded">
                    <p><b>Hitting URL:</b> http://regtechapi.docboyz.in/api/</p>
                    <p><b>Request Method:</b> POST</p>
                    <p><b>Request Body:</b></p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "client_id": "@{{client_id}}"
}`}
                    </pre>
                    <p><b>Success Response:</b></p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "doe": "2020-09-15",
    "dob": "1990-08-31",
    "father": "KALEEN BHAIYA",
    "given_name": "MUNNA BHAIYA",
    "mrz_line_1": "PPINDBHAIYA&lt;&lt;MUNNA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;",
    "old_passport_num": "F0233736",
    "file_num": "UPHM00597710",
    "client_id": "TTJmMxbZQi",
    "place_of_issue": "MIRZAPUR",
    "spouse": "",
    "country_code": "IND",
    "address": "TRIPATHI HAVELI, MIRZAPUR",
    "surname": "BAGGA",
    "mrz_line_2": "J0933933<1IND9008319M2009155<<<<<<<<<<<<<<04",
    "passport_num": "J0933836",
    "doi": "2010-10-15",
    "old_doi": "2005-10-15",
    "gender": "MALE",
    "nationality": "INDIAN",
    "place_of_birth": " MIRZAPUR",
    "mother": "BEENA TRIPATHI",
    "old_place_of_issue": "MIRZAPUR",
    "pin": "231001",
    "passport_validity": true
  },
  "status_code": 200,
  "message": "Passport Verified.",
  "success": true
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

export default PassportAPI;
