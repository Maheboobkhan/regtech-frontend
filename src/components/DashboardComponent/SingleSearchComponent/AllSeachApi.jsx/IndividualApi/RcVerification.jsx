import React, { Component } from "react";

class RCAPIs extends Component {
  state = {
    expandedSection: null,
    showRCAPIs: false,
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleRCAPIs = () => {
    this.setState({
      showRCAPIs: !this.state.showRCAPIs,
    });
  };

  render() {
    const { expandedSection, showRCAPIs } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* RC APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showRCAPIs ? "h-auto" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showRCAPIs ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleRCAPIs}
            >
              RC APIs
            </h3>

            {showRCAPIs && (
              <div className="space-y-4 mt-2">
                {/* RC Verification */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("rcVerification")}
                >
                  <h4 className="font-semibold underline">RC Verification</h4>
                </div>
                {expandedSection === "rcVerification" && (
                  <div className="p-4 border border-black rounded bg-gray-50">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
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
  "rc_number":"mh11at9556"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "rc_validation": {
      "data": {
        "client_id": "rc_szGFosDXfTUuoejqRwLt",
        "rc_number": "mh11at9556",
        "registration_date": "2010-03-22",
        "owner_name": "BHARAT BHALKE",
        "vehicle_engine_number": "21C20XXXXX",
        "maker_model": "INDIA YAMAHA MOTOR PVT LTD / YAMAHA FZ S",
        "fuel_type": "PETROL",
        "insurance_upto": "2020-10-04",
        "registered_at": "SATARA, MAHARASHTRA",
        "masked_name": false
      },
      "status_code": 200,
      "success": true,
      "message_code": "success"
    }
  }
]`}
                    </pre>
                  </div>
                )}

                {/* RC Verification Lite */}
                <div
                  className="bg-blue-300 text-white p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("rcVerificationLite")}
                >
                  <h4 className="font-semibold underline">RC Verification Lite</h4>
                </div>
                {expandedSection === "rcVerificationLite" && (
                  <div className="p-4 border border-black rounded bg-gray-50">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/seachv4
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
  "Rc_Number":"MH17BE1013"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`[
  {
    "rc_validation": {
      "data": {
        "rc_number": "MH17BE1013",
        "registration_date": "9/2014",
        "owner_name": "P**I** L**X** M**H**",
        "fuel_type": "PETROL",
        "registered_at": "SRIRAMPUR, Maharashtra"
      },
      "status_code": 200,
      "success": true,
      "message_code": "success"
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

export default RCAPIs;
