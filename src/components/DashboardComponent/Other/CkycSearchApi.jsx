import React, { Component } from "react";
// Import Tailwind CSS in your index.js or App.js if not already included

class CkycSearchAPI extends Component {
  state = {
    expandedSection: null,
    showCkycApis: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCkycApis = () => {
    this.setState({
      showCkycApis: !this.state.showCkycApis,
    });
  };

  render() {
    const { expandedSection, showCkycApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* CKYC Search APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showCkycApis ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showCkycApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleCkycApis}
            >
              CKYC Search APIs
            </h3>

            {showCkycApis && (
              <div className="space-y-4 mt-2">
                {/* CKYC Search */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("ckycSearch")}
                >
                  <h4 className="font-semibold underline">ckycSearch</h4>
                </div>
                {expandedSection === "ckycSearch" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/ckycSearch
                    </p>
                    <p>
                      <b>Header:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "AccessToken":"xxxxxxxxxxxxx"
}`}
                    </pre>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "pano":"CDEPD3027M"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "pancard": {
      "response": {
        "status": "SUCCESS",
        "kycStatus": "SUCCESS",
        "message": "KYC Details for CKYC fetched successfully.",
        "kycDetails": {
          "ckycId": "30084056964342",
          "fullName": "MR MEHETRE PRITESH LAXMAN",
          "age": "30",
          "kycDate": "22-08-2018",
          "updatedDate": "20-08-2022",
          "fathersFullName": "MR LAXMAN MURLIDHAR MEHETRE",
          "imageType": "jpg",
          "photo": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/+lcdvLypEYW7mujB6j51FzJJqTkKdB2eWTvT1JK53qJuVdXlsBS2H/2Q==",
          "identityDetails": {
            "identity": [
              {
                "status": "03",
                "type": "Aadhaar"
              },
              {
                "status": "03",
                "type": "PAN"
              }
            ]
          },
          "remarks": "OK"
        }
      },
      "statusCode": null
    }
  }
]`}
                    </pre>
                  </div>
                )}
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

export default CkycSearchAPI;
