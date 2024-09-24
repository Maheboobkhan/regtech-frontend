import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class CorporateDINAPI extends Component {
  state = {
    expandedSection: null,
    showCorporateDINApis: false, // State to control the expansion of the Corporate DIN APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCorporateDINApis = () => {
    this.setState({
      showCorporateDINApis: !this.state.showCorporateDINApis,
    });
  };

  render() {
    const { expandedSection, showCorporateDINApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Corporate DIN APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showCorporateDINApis ? "h-auto transition-all duration-300" : "h-20 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showCorporateDINApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleCorporateDINApis}
            >
              Corporate DIN APIs
            </h3>

            {showCorporateDINApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Corporate DIN API Details */}
                <div className="bg-blue-300 p-4 rounded">
                  <h4 className="font-semibold underline">DIN</h4>
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/corporate_din
                  </p>
                  <p>
                    <b>Request Method:</b> POST
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "id_number": "@{{din_number}}"
}`}
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

export default CorporateDINAPI;
