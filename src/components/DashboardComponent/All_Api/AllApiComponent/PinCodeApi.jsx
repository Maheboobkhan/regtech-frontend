import React, { Component } from "react";

// React Component for PinCode APIs
class PinCodeAPI extends Component {
  state = {
    expandedSection: null,
    showPinCodeApis: false, // New state to control the expansion of the Pin Code APIs section
  };

  // Toggle function for section expansion
  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  // Toggle function for Pin Code APIs section visibility
  togglePinCodeApis = () => {
    this.setState({
      showPinCodeApis: !this.state.showPinCodeApis,
    });
  };

  render() {
    const { expandedSection, showPinCodeApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Pin Code APIs Section */}
          <div
            className={`bg-blue-400 rounded cursor-pointer transition-all duration-300 ${
              showPinCodeApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-500 w-full ${
                showPinCodeApis ? "bg-blue-600 text-white" : ""
              }`}
              onClick={this.togglePinCodeApis}
            >
              Pin Code APIs
            </h3>

            {showPinCodeApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Pincode */}
                <div
                  className="bg-blue-500 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("pincode")}
                >
                  <h4 className="font-semibold underline">Pincode</h4>
                </div>
                {expandedSection === "pincode" && (
                  <div className="p-4 border border-gray-300 rounded bg-gray-50">
                    <p><b>Hitting URL:</b> http://regtechapi.in/api/pincode</p>
                    <p><b>Request Body:</b></p>
                    <pre className="bg-gray-100 p-2 rounded">
{`{
  "from_pin": "411006",
  "to_pin": "411057"
}`}
                    </pre>
                    <p><b>Success Response:</b></p>
                    <pre className="bg-gray-100 p-2 rounded">
{`{
  "data": {
    "fromPin": "411006",
    "toPin": "411057",
    "distance": 22
  },
  "statusCode": 200
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

export default PinCodeAPI;
