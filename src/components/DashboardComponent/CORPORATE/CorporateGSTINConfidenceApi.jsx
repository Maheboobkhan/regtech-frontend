import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class GSTINWithConfidenceAPI extends Component {
  state = {
    expandedSection: null,
    showGSTINWithConfidenceApis: false, // State to control the expansion of the GSTIN With Confidence APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleGSTINWithConfidenceApis = () => {
    this.setState({
      showGSTINWithConfidenceApis: !this.state.showGSTINWithConfidenceApis,
    });
  };

  render() {
    const { expandedSection, showGSTINWithConfidenceApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* GSTIN With Confidence APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showGSTINWithConfidenceApis ? "h-auto transition-all duration-300" : "h-20 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showGSTINWithConfidenceApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleGSTINWithConfidenceApis}
            >
              Corporate GSTIN With<br/> Confidence APIs
            </h3>

            {showGSTINWithConfidenceApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* GSTIN With Confidence Details */}
                <div className="bg-blue-300 p-4 rounded">
                  <h4 className="font-semibold underline">GSTIN With Confidence</h4>
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/gstin_pan_confidence
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "corporate_gstin": "{{@gstin_number}}",
  "name": "{{@name}}",
  "mobile_number": "{{@mobile_number}}",
  "address": "{{@address}}",
  "state": "{{@state}}",
  "city": "{{@city}}",
  "pincode": "{{@pincode}}"
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
        "gstin": "{{@gstin_number}}",
        "legal_name": "{{@legal_name}}",
        "jurisdiction": "{{@jurisdiction}}",
        "reg_date": "{{@reg_date}}",
        "taxpayer_type": "{{@taxpayer_type}}",
        "status": "{{@status}}",
        "address": "{{@address}}",
        "business_type": "{{@business_type}}",
        "nature": "{{@nature}}",
        "last_update": "{{@last_update}}",
        "state_code": "{{@state_code}}"
      },
    },
    "confidence": "100%",
    "statusCode": "200"
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

export default GSTINWithConfidenceAPI;
