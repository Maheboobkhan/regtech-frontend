import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class CheckEmailStatusAPI extends Component {
  state = {
    expandedSection: null,
    showCheckEmailStatusApis: false, // State to control the expansion of the Check Email Status APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCheckEmailStatusApis = () => {
    this.setState({
      showCheckEmailStatusApis: !this.state.showCheckEmailStatusApis,
    });
  };

  render() {
    const { expandedSection, showCheckEmailStatusApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Check Email Status APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showCheckEmailStatusApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showCheckEmailStatusApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleCheckEmailStatusApis}
            >
              Check Email Status APIs
            </h3>

            {showCheckEmailStatusApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Check Email Status */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("emailStatus")}
                >
                  <h4 className="font-semibold underline">Check Email Status</h4>
                </div>
                {expandedSection === "emailStatus" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/check_verification_email_status
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "identity": "abhi@gmail.com"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "statusCode": 200,
  "data": {
    "identity": "abhi@gmail.com",
    "verification_status": "Pending"
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

export default CheckEmailStatusAPI;
