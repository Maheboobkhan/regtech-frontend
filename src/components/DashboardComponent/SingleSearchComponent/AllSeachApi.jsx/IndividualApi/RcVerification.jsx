import React, { Component } from "react";

class RcVerfication extends Component {
  state = {
    expandedSection: null,
    showVoterIDApis: false,
    showRCVerification: false, // New state to control the expansion of the RC Verification section
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

  toggleRCVerification = () => {
    this.setState({
      showRCVerification: !this.state.showRCVerification,
    });
  };

  render() {
    const { expandedSection, showVoterIDApis, showRCVerification } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          

          {/* RC Verification Section */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showRCVerification ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showRCVerification ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleRCVerification}
            >
              RC Verification
            </h3>
            {showRCVerification && (
              <div className="space-y-4 mt-2">
                <div className="p-4 border border-black rounded">
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
  "rc_number": "mh11at9556"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`[
  {
    "rc_validation": {
      "data": {
        "client_id": "rc_szGFosDXfTUuoejqRwLt",
        "rc_number": "mh11at9556",
        ...
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

export default RcVerfication;
