import React, { Component } from "react";

class CkycDownloadApi extends Component {
  state = {
    expandedSection: null,
    showCkycDownload: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCkycDownload = () => {
    this.setState({
      showCkycDownload: !this.state.showCkycDownload,
    });
  };

  render() {
    const { expandedSection, showCkycDownload } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* cKYC Download APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showCkycDownload ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showCkycDownload ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleCkycDownload}
            >
              cKYC Download APIs
            </h3>

            {showCkycDownload && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* ckycDownload Section */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("ckycDownload")}
                >
                  <h4 className="font-semibold underline">ckycDownload</h4>
                </div>
                {expandedSection === "ckycDownload" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/ckycDownload
                    </p>
                    <p>
                      <b>Header:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">{`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}</pre>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">{`{
  "pano": "CDEPD3027M",
  "dob": "1996-09-03",
  "ckycid": "XXXXXXXXXXXXX"
}`}</pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">{`{
  "pancard": {
    "response": {
      "status": "SUCCESS",
      "kycStatus": "SUCCESS",
      "message": "KYC Details for CKYC downloaded successfully.",
      "kycDetails": {
        "personalIdentifiableData": {
          "personalDetails": {
            "constituitonType": "Individual",
            "accountType": "Normal",
            "ckycNo": "30084056964342",
            "prefix": "MR",
            "firstName": "YREBDJC PDFHERN",
            // ... rest of the response
          },
          // ... other details
        }
      }
    }
  },
  "statusCode": null
}`}</pre>
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

export default CkycDownloadApi;
