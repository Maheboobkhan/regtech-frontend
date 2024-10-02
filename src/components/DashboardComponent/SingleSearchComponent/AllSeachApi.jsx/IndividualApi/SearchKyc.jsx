import React, { Component } from "react";

class SearchKycAPIs extends Component {
  state = {
    expandedSection: null,
    showSearchKycAPIs: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleSearchKycAPIs = () => {
    this.setState({
      showSearchKycAPIs: !this.state.showSearchKycAPIs,
    });
  };

  render() {
    const { expandedSection, showSearchKycAPIs } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* SearchKyc APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showSearchKycAPIs ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showSearchKycAPIs ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleSearchKycAPIs}
            >
              SearchKyc APIs
            </h3>

            {showSearchKycAPIs && (
              <div className="space-y-4 mt-2">
                {/* SearchKyclite */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("searchKyclite")}
                >
                  <h4 className="font-semibold underline">SearchKyclite</h4>
                </div>
                {expandedSection === "searchKyclite" && (
                  <div className="p-4 border border-black rounded bg-gray-50">
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
  "pano": "CDEPD3027M",
  "dob": "1996-09-03"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "statusCode": 200,
    "response": {
      "kycStatus": 200,
      "message": "Details downloaded successfully",
      "success": true,
      "kycDetails": {
        "personalIdentifiableData": {
          "personalDetails": {
            "pan": "AOXPK6831J",
            "maskedAadhaar": "XXXXXXXX7179",
            "lastFourDigit": "7179",
            "typeOfHolder": "Individual or Person",
            "fullName": "PANKAJ MAHADEO KHARALKAR",
            "firstName": "PANKAJ",
            "lastName": "KHARALKAR",
            "mobNum": "9867151413",
            "email": "pankaj21in@gmail.com",
            "dob": "19/06/1980",
            "gender": "M",
            "address": "1005, Niraj park",
            "city": "Kalyan City H.O",
            "state": "Maharashtra",
            "country": "INDIA",
            "pincode": "421301"
          }
        }
      }
    }
  }
]`}
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

export default SearchKycAPIs;
