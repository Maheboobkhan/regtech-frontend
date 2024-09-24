import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class GSTINAPI extends Component {
  state = {
    expandedSection: null,
    showGSTINApis: false, // State to control the expansion of the GSTIN APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleGSTINApis = () => {
    this.setState({
      showGSTINApis: !this.state.showGSTINApis,
    });
  };

  render() {
    const { expandedSection, showGSTINApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* GSTIN APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showGSTINApis ? "h-auto transition-all duration-300" : "h-20 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showGSTINApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleGSTINApis}
            >
              GSTIN APIs
            </h3>

            {showGSTINApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* GSTIN Details */}
                <div className="bg-blue-300 p-4 rounded">
                  <h4 className="font-semibold underline">GSTIN Details</h4>
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/gstin_details
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "gstin_id": "27AABCZ2858B1ZC"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "data": {
    "Nature of Business Activities": "Service Provider and Others",
    "Dealing in Goods and Services": "Goods Services HSN Description HSN Description
998319 Other information technology services n.e.c
998313 Information technology (IT) consulting and support services
998314 Information technology (IT) design and development services
HSN: Harmonized System of Nomenclature of Goods and Services"
  },
  "statusCode": 200
}`}
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

export default GSTINAPI;
