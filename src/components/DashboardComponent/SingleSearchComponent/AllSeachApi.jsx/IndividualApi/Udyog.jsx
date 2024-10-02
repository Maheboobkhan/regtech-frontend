import React, { Component } from "react";

class UdyogAadharAPI extends Component {
  state = {
    expandedSection: null,
    showUdyogAadharApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleUdyogAadharApis = () => {
    this.setState({
      showUdyogAadharApis: !this.state.showUdyogAadharApis,
    });
  };

  render() {
    const { expandedSection, showUdyogAadharApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Udyog Aadhar APIs */}
          <div className={`bg-[#cee5ff] rounded transition-all duration-300 ${showUdyogAadharApis ? "h-auto" : "h-16 flex items-center"}`}>
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full cursor-pointer transition-all duration-300 ${showUdyogAadharApis ? "bg-[#4cb4ff] text-white" : ""}`}
              onClick={this.toggleUdyogAadharApis}
            >
              Udyog Aadhar APIs
            </h3>

            {showUdyogAadharApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                <div className="badge badge-warning">
                  <h4 className="font-semibold underline cursor-pointer" onClick={() => this.toggleSection("udyogAadharDetails")}>
                    Udyog Aadhar Details
                  </h4>
                </div>
                {expandedSection === "udyogAadharDetails" && (
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
  "uamnumber": "MH26E0170657"
}`}
                    </pre>
                    <b>Success Response:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "statusCode": 200,
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
      "validTillDate": "30/06/2022",
      "nic2Digit": "66 - OTHER FINANCIAL ACTIVITIES",
      "nic4Digit": "6619 - ACTIVITIES AUXILIARY TO FINANCIAL SERVICE ACTIVITIES N.E.C.",
      "nic5DigitCode": "66190 - ACTIVITIES AUXILIARY TO FINANCIAL SERVICE ACTIVITIES N.E.C.",
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

          
        </div>
      </div>
    );
  }
}

export default UdyogAadharAPI;
