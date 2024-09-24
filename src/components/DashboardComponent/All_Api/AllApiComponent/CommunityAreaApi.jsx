import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class CommunityAreaAPI extends Component {
  state = {
    expandedSection: null,
    showCommunityAreaApis: false, // State to control the expansion of the Community Area APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCommunityAreaApis = () => {
    this.setState({
      showCommunityAreaApis: !this.state.showCommunityAreaApis,
    });
  };

  render() {
    const { expandedSection, showCommunityAreaApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Community Area APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showCommunityAreaApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showCommunityAreaApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleCommunityAreaApis}
            >
              Community Area APIs
            </h3>

            {showCommunityAreaApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Community Area */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("communityArea")}
                >
                  <h4 className="font-semibold underline">Community Area</h4>
                </div>
                {expandedSection === "communityArea" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/community_area
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
  "latitude": "18.5538",
  "longitude": "73.9477"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "data": {
    "page": "community Domminated Area",
    "temple_count": 20,
    "church_count": 2,
    "mosque_count": 0,
    "gurudwara_count": 0,
    "Timestamp": 1721895266.7208543
  },
  "status_code": 200
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

export default CommunityAreaAPI;
