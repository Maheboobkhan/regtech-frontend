import React, { Component } from "react";

class FssaiApi extends Component {
  state = {
    showFssaiDetails: false, // Controls the visibility of the main section
    expandedSection: null,  // Controls the visibility of detailed sections
  };

  // Toggle function for showing or hiding main section details
  toggleFssaiDetails = () => {
    this.setState(prevState => ({ showFssaiDetails: !prevState.showFssaiDetails }));
  };

  // Toggle function for expanding/collapsing detailed sections
  toggleSection = (section) => {
    this.setState(prevState => ({
      expandedSection: prevState.expandedSection === section ? null : section,
    }));
  };

  render() {
    const { showFssaiDetails, expandedSection } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col space-y-4">
          {/* Main Section Header */}
          <div
            className={`bg-blue-400 text-white p-4 rounded cursor-pointer ${
              showFssaiDetails ? "bg-gray-900" : ""
            }`}
            onClick={this.toggleFssaiDetails}
          >
            <h3 className="text-2xl">FSSAI APIs</h3>
          </div>

          {/* Main Section Content */}
          {showFssaiDetails && (
            <div className="space-y-4">
              {/* FSSAI Validation */}
              <div
                className="bg-blue-400 text-black p-4 rounded cursor-pointer"
                onClick={() => this.toggleSection("fssaiValidation")}
              >
                <h4 className="text-xl underline">FSSAI Validation</h4>
              </div>

              {expandedSection === "fssaiValidation" && (
                <div className="bg-gray-100 p-4 border border-gray-300 rounded">
                  <p><b>Hitting URL:</b> http://regtechapi.in/api/fssi</p>
                  <p><b>Request Method:</b> POST</p>
                  <p><b>Request Body:</b></p>
                  <pre className="bg-gray-200 p-2 rounded">
                    {`{
  "id_number": "22819015001312"
}`}
                  </pre>
                  <p><b>Success Response:</b></p>
                  <pre className="bg-gray-200 p-2 rounded">
                    {`[
  {
    "fssai_validation": {
      "data": {
        "client_id": "corporate_fssai_JYzkscgMaYbuxblNynuy",
        "fssai_number": "22819015001312",
        "Details": {
          "address": "EXTENTION BUILDING, MANGUSHREE COMPLEX, POST-KHANJANCHAK",
          "license_no": "22819015001312",
          "fbo_id": 8026290,
          "display_ref_id": "30191207152500067",
          "license_category_name": "Registration",
          "state_name": "West Bengal",
          "status_desc": "License Issued",
          "license_category_id": 3,
          "company_name": "SURYODOY ENTERPRISE",
          "license_active_flag": false,
          "ref_id": 105813727,
          "app_type_desc": "New Registration",
          "premise_pincode": 721602
        },
        "status_code": 200,
        "success": true,
        "message": null,
        "message_code": "success"
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
      </div>
    );
  }
}

export default FssaiApi;
