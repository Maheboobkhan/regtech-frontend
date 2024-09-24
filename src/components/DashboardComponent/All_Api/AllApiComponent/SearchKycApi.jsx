import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class SearchV2API extends Component {
  state = {
    expandedSection: null,
    showSearchV2Apis: false, // State to control the expansion of the Search V2 APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleSearchV2Apis = () => {
    this.setState({
      showSearchV2Apis: !this.state.showSearchV2Apis,
    });
  };

  render() {
    const { expandedSection, showSearchV2Apis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Search V2 APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showSearchV2Apis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showSearchV2Apis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleSearchV2Apis}
            >
              Search V2 APIs
            </h3>

            {showSearchV2Apis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* PAN Details */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("panDetails")}
                >
                  <h4 className="font-semibold underline">PAN Details</h4>
                </div>
                {expandedSection === "panDetails" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/search_v2
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
  "pano": "BXXXXXXXXM"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "statusCode": 200,
  "response": {
    "statusCode": 200,
    "message": "Details downloaded successfully",
    "success": true,
    "kycDetails": {
      "personalIdentifiableData": {
        "personalDetails": {
          "searchkyclite": null,
          "pan": "AHEPP2012J",
          "maskedAadhaar": "XXXXXXXX5758",
          "lastFourDigit": "5758",
          "typeOfHolder": "Individual or Person",
          "fullName": "PRASHANT KUMAR",
          "firstName": "PRASHANT",
          "middleName": "",
          "lastName": "KUMAR",
          "mobNum": "7762912451",
          "email": "prashant61_2000@yahoo.com",
          "dob": "09/03/1975",
          "address": "D4-101, Bramha Suncity Wadgaon Sheri Wadgaon Sheri Wadgaon Sheri Pune None null",
          "city": "Pune",
          "state": null,
          "country": "INDIA",
          "pincode": "None",
          "gender": "M",
          "isValid": true,
          "aadhaarSeedingStatus": true,
          "serviceCode": "1"
        }
      }
    }
  }
}`}
                    </pre>
                  </div>
                )}

                {/* Search Kyc */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("searchKyc")}
                >
                  <h4 className="font-semibold underline">Search Kyc</h4>
                </div>
                {expandedSection === "searchKyc" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/ckycSearch
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
  "pano": "CDEPD3027M",
  "dob": "1996-09-03"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "pancard": {
    "response": {
      "ckycNo": "30084056964342",
      "pan": "CDEPD3027M",
      "fullName": "MR UMESH BALASO DAMAME",
      "mobNum": "8830369298",
      "address": "PANDURANG NIVAS, MAIN ROAD, SANGLI",
      "permCity": "SANGLI",
      "permDist": "SANGLI",
      "permState": "MH",
      "permPin": "416301",
      "corresLine1": "PANDURANG NIVAS, MAIN ROAD, SANGLI",
      "corresCity": "SANGLI",
      "corresDist": "SANGLI",
      "corresState": "MH",
      "corresPin": "416301",
      "category": "person"
    },
    "status_code": 200,
    "success": true,
    "message": null,
    "message_code": "success"
  },
  "statusCode": null
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

export default SearchV2API;
