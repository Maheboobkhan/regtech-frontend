import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class ImageScannerAPI extends Component {
  state = {
    expandedSection: null,
    showImageScannerApis: false, // State to control the expansion of the Image Scanner APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleImageScannerApis = () => {
    this.setState({
      showImageScannerApis: !this.state.showImageScannerApis,
    });
  };

  render() {
    const { expandedSection, showImageScannerApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Image Scanner APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showImageScannerApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showImageScannerApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleImageScannerApis}
            >
              Image Scanner APIs
            </h3>

            {showImageScannerApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Image Scanner */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("imageScanner")}
                >
                  <h4 className="font-semibold underline">Image Scanner</h4>
                </div>
                {expandedSection === "imageScanner" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/image_scanner
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "file": "happy.jpg"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": "EHhvwn8H9Y0zwxBqmqXdjqVvp914lguL1dHh1C3h1nxBhY9XMl/a6LbwQwveQLczy2csa/pt/wcE6F8L/F+n/Bf4fzFLv9aT9oD/gnz4Q8NftWaZ/wUM+EPwwtPEfiPT/k8SeGHlEbXq7fL",
  "statusCode": 200
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

export default ImageScannerAPI;
