import React, { Component } from "react";

class UdyamSearchAPI extends Component {
  state = {
    expandedSection: null,
    showUdyamSearchApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleUdyamSearchApis = () => {
    this.setState({
      showUdyamSearchApis: !this.state.showUdyamSearchApis,
    });
  };

  render() {
    const { expandedSection, showUdyamSearchApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Udyam Search APIs */}
          <div className={`bg-[#d3e0ff] rounded transition-all duration-300 ${showUdyamSearchApis ? "h-auto" : "h-16 flex items-center"}`}>
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full cursor-pointer transition-all duration-300 ${showUdyamSearchApis ? "bg-[#4cb4ff] text-white" : ""}`}
              onClick={this.toggleUdyamSearchApis}
            >
              Udyam Search APIs
            </h3>

            {showUdyamSearchApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Udyam Search */}
                <div className="badge badge-warning">
                  <h4 className="font-semibold underline cursor-pointer" onClick={() => this.toggleSection("udyamSearch")}>
                    Udyam Search
                  </h4>
                </div>
                {expandedSection === "udyamSearch" && (
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
  "udyamNumber": "UDYAM-MH-26-01944567"
}`}
                    </pre>
                    <b>Success Response:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "status_code": 200,
  "response": {
    "essentials": {
      "udyamNumber": "UDYAM-MH-26-01944567"
    },
    "result": {
      "generalInfo": {
        "udyamRegistrationNumber": "UDYAM-MH-26-0194830",
        "nameOfEnterprise": "M/S ZAPFIN TEKNOLOGIES PRIVATE LIMITED",
        // ...other fields...
      }
    }
  }
}`}
                    </pre>
                  </div>
                )}

                {/* Udyam Search v2 */}
                <div className="badge badge-warning">
                  <h4 className="font-semibold underline cursor-pointer" onClick={() => this.toggleSection("udyamSearchV2")}>
                    Udyam Search v2
                  </h4>
                </div>
                {expandedSection === "udyamSearchV2" && (
                  <div className="p-4 border border-black rounded">
                    <p><b>Hitting URL:</b> http://regtechapi.in/api/udyamdetails</p>
                    <b>Header:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}
                    </pre>
                    <b>Request Body:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "UdyamRegNumber": "UDYAM-MH-26-0194834"
}`}
                    </pre>
                    <b>Success Response:</b>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "status_code": 200,
  "response": {
    "essentials": {
      "udyamNumber": "UDYAM-MH-26-0194834"
    },
    "result": {
      "generalInfo": {
        "udyamRegistrationNumber": "UDYAM-MH-26-0194834",
        // ...other fields...
      }
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

export default UdyamSearchAPI;
