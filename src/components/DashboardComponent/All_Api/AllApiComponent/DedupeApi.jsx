import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class DedupeAPI extends Component {
  state = {
    expandedSection: null,
    showDedupeApis: false, // State to control the expansion of the Dedupe APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleDedupeApis = () => {
    this.setState({
      showDedupeApis: !this.state.showDedupeApis,
    });
  };

  render() {
    const { expandedSection, showDedupeApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Dedupe API */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showDedupeApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showDedupeApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleDedupeApis}
            >
              Dedupe API
            </h3>

            {showDedupeApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Dedupe */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("dedupe")}
                >
                  <h4 className="font-semibold underline">Dedupe</h4>
                </div>
                {expandedSection === "dedupe" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/dedupe_s3
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "bucket_name": "",
  "prefix": "",
  "aws_access_key_id": "",
  "aws_secret_access_key": "",
  "region_name": ""
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "statusCode": 200,
  "data": {
    "deleted_files": [
      "C:\\Users\\user\\Downloads\\video\\video1.mp4",
      "C:\\Users\\user\\Downloads\\image\\shirt.jpg",
      "C:\\Users\\user\\Downloads\\profile\\users.jpeg"
    ]
  }
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

export default DedupeAPI;
