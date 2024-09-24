import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class CorporateGSTINAPI extends Component {
  state = {
    expandedSection: null,
    showCorporateGSTINApis: false, // State to control the expansion of the Corporate GSTIN APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCorporateGSTINApis = () => {
    this.setState({
      showCorporateGSTINApis: !this.state.showCorporateGSTINApis,
    });
  };

  render() {
    const { expandedSection, showCorporateGSTINApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Corporate GSTIN APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showCorporateGSTINApis ? "h-auto transition-all duration-300" : "h-20 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showCorporateGSTINApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleCorporateGSTINApis}
            >
              Corporate GSTIN APIs
            </h3>

            {showCorporateGSTINApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Corporate GSTIN API Details */}
                <div className="bg-blue-300 p-4 rounded">
                  <h4 className="font-semibold underline">GSTIN</h4>
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/corporate_gstin
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "corporate_gstin": "27AABCZ2858B1ZC"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`[
  {
    "corporate_gstin": {
      "code": "200",
      "status": "success",
      "response": {
        "gstin": "{@gstin_number}",
        "legal_name": "{@legal_name}",
        "jurisdiction": "{@jurisdiction}",
        "reg_date": "{@reg_date}",
        "taxpayer_type": "{@taxpayer_type}",
        "status": "{@status}",
        "address": "{@address}",
        "business_type": "{@business_type}",
        "nature": "{@nature}",
        "last_update": "{@last_update}",
        "state_code": "{@state_code}"
      }
    },
    "statusCode": "200"
  }
]`}
                  </pre>
                </div>
              </div>
            )}
          </div>

          
        </div>
      </div>
    );
  }
}

export default CorporateGSTINAPI;
