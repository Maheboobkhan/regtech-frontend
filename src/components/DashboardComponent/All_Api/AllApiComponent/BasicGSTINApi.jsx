import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class BasicGSTINAPI extends Component {
  state = {
    expandedSection: null,
    showBasicGSTINApis: false, // State to control the expansion of the Basic GSTIN APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleBasicGSTINApis = () => {
    this.setState({
      showBasicGSTINApis: !this.state.showBasicGSTINApis,
    });
  };

  render() {
    const { expandedSection, showBasicGSTINApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Basic GSTIN APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showBasicGSTINApis ? "h-auto transition-all duration-300" : "h-20 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showBasicGSTINApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleBasicGSTINApis}
            >
              BASIC GSTIN API
            </h3>

            {showBasicGSTINApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* GSTIN Details */}
                <div className="bg-blue-300 p-4 rounded">
                  <h4 className="font-semibold underline">BASIC GSTIN</h4>
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/gstverification
                  </p>
                  <p>
                    <b>Request Method:</b> POST
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
  "gstin_number": "08AABCM1857H2ZF"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "response": {
    "stjCd": "RJ812",
    "lgnm": "MEGHA FINLOAN PRIVATE LIMITED",
    "stj": "Circle-I, Jaipur III, AC / CTO Ward",
    "dty": "Regular",
    "adadr": [
      {
        "addr": {
          "bnm": "HP HONDA",
          "st": "NEAR NAGAR PALIKA",
          "loc": "NAWALGARH",
          "bno": "WARD NO. 7",
          "dst": "Jhunjhunu",
          "lt": "",
          "locality": "",
          "pncd": "333042",
          "landMark": "",
          "stcd": "Rajasthan",
          "geocodelvl": "NA",
          "flno": "",
          "lg": ""
        },
        "ntr": "Supplier of Services"
      },
      {
        "addr": {
          "bnm": "JAIN MARKET",
          "st": "OPPOSITE PAHARIYA TOWER, STATION ROAD",
          "loc": "SIKAR",
          "bno": ".",
          "dst": "Sikar",
          "lt": "",
          "locality": "",
          "pncd": "332001",
          "landMark": "",
          "stcd": "Rajasthan",
          "geocodelvl": "NA",
          "flno": "1ST FLOOR",
          "lg": ""
        },
        "ntr": "Supplier of Services"
      }
    ],
    "cxdt": "",
    "gstin": "08AABCM1857H2ZF",
    "nba": [
      "Supplier of Services"
    ],
    "lstupdt": "03/07/2023",
    "rgdt": "16/08/2017",
    "ctb": "Private Limited Company",
    "pradr": {
      "addr": {
        "bnm": "PARIJAT BUILDING",
        "st": "ASHOK MARG",
        "loc": "C-SCHEME",
        "bno": "9",
        "dst": "Jaipur",
        "lt": "",
        "locality": "",
        "pncd": "302001",
        "landMark": "",
        "stcd": "Rajasthan",
        "geocodelvl": "NA",
        "flno": "2nd floor O-12",
        "lg": ""
      },
      "ntr": "Supplier of Services"
    },
    "sts": "Active",
    "ctjCd": "WM0802",
    "tradeNam": "MEGHA FINLOAN PRIVATE LIMITED",
    "ctj": "GST RANGE-XXXVII",
    "einvoiceStatus": "Yes"
  },
  "status_code": 200,
  "message_code": "success",
  "success": true
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

export default BasicGSTINAPI;
