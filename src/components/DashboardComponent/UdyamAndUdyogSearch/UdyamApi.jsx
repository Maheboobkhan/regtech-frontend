import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class UdhyogAadharAPI extends Component {
  state = {
    expandedSection: null,
    showUdhyogAadharApis: false, // Initial state to show the section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleUdhyogAadharApis = () => {
    this.setState({
      showUdhyogAadharApis: !this.state.showUdhyogAadharApis,
    });
  };

  render() {
    const { expandedSection, showUdhyogAadharApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Udhyog Aadhar APIs */}
          <div
            className={`bg-blue-400 rounded cursor-pointer transition-all duration-300 ${
              showUdhyogAadharApis ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-400 w-full ${
                showUdhyogAadharApis ? "bg-blue-600" : ""
              }`}
              onClick={this.toggleUdhyogAadharApis}
            >
              Udhyog Aadhar APIs
            </h3>

            {showUdhyogAadharApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Udhyog Aadhar Section */}
                <div
                  className="bg-blue-400 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("udhyogAadhar")}
                >
                  <h4 className="font-semibold underline">Udhyog Aadhar</h4>
                </div>
                {expandedSection === "udhyogAadhar" && (
                  <div className="p-4 border border-blue-700 rounded bg-blue-100">
                    <p>
                      <b>Hitting URL:</b>{" "}
                      http://regtechapi.in/api/udyogaadhaars
                    </p>
                    <p>
                      <b>Header:</b>
                    </p>
                    <pre className="bg-gray-300 p-2 rounded">
                      {`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}
                    </pre>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-300 p-2 rounded">
                      {`{
  "uamnumber": "MH26E0170657"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-300 p-2 rounded">
                      {`{
  "status_code": 200,
  "response": {
    "essentials": {
      "uamNumber": "MH26E0170657"
    },
    "result": {
      "uamNumber": "MH26E0170657",
      "nameofEnterprise": "ZAPFIN TEKNOLOGIES PRIVATE LIMITED",
      "majorActivity": "SERVICES",
      "socialCategory": "GENERAL",
      "enterpriseType": "SMALL",
      "dateofCommencement": "09/11/2018",
      "dicName": "PUNE",
      "state": "MAHARASHTRA",
      "appliedDate": "18/09/2019",
      "modifiedDate": "N/A",
      "validTillDate": "30/06/2022.",
      "nic2Digit": "66-OTHER FINANCIAL ACTIVITIES",
      "nic4Digit": "6619-ACTIVITIES AUXILIARY TO FINANCIAL SERVICE ACTIVITIES N.E.C.",
      "nic5DigitCode": "66190-ACTIVITIES AUXILIARY TO FINANCIAL SERVICE ACTIVITIES N.E.C.",
      "status": "ACTIVE"
    }
  }
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
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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

export default UdhyogAadharAPI;
