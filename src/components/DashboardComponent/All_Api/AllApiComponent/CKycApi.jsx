import React, { Component } from "react";

// Ensure Tailwind CSS is imported in your project

class CKycApi extends Component {
  state = {
    showDetails: false,  // Controls the visibility of the main section
    expandedSection: null,  // Controls the visibility of detailed sections
  };

  // Toggle function for showing or hiding main section details
  toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  // Toggle function for expanding/collapsing detailed sections
  toggleSection = (section) => {
    this.setState(prevState => ({
      expandedSection: prevState.expandedSection === section ? null : section,
    }));
  };

  render() {
    const { showDetails, expandedSection } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col space-y-4">
          {/* Main Section Header */}
          <div
            className={`bg-blue-400 text-white p-4 rounded cursor-pointer ${
              showDetails ? "bg-blue-600" : ""
            }`}
            onClick={this.toggleDetails}
          >
            <h3 className="text-2xl">CKYC Search Advance APIs</h3>
          </div>

          {/* Main Section Content */}
          {showDetails && (
            <div className="space-y-4">
              {/* CKYC Search Advance */}
              <div
                className="bg-blue-500 text-white p-4 rounded cursor-pointer"
                onClick={() => this.toggleSection("ckycSearchAdvance")}
              >
                <h4 className="text-xl underline">CKYC Search Advance</h4>
              </div>

              {expandedSection === "ckycSearchAdvance" && (
                <div className="bg-blue-400 p-4 rounded">
                  <p><b>Hitting URL:</b> http://regtechapi.in/api/ckyc_searchadvance</p>
                  <p><b>Header:</b></p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}
                  </pre>
                  <p><b>Request Body:</b></p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "pano": "HUHPS7607K",
  "client_ref_num": 7856,
  "dob": "12-02-1999",
  "identifier_type": "PAN"
}`}
                  </pre>
                  <p><b>Success Response:</b></p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`[{
  "statusCode": 200,
  "response": {
    "status": "VALID",
    "kycStatus": "null",
    "message": "Details downloaded successfully.",
    "kycDetails": {
      "personalIdentifiableData": {
        "personalDetails": {
          "constitution_type": "Individual",
          "account_type": "Normal",
          "ckyc_no": "60042994549621",
          "prefix": "MR",
          "firstName": "HARSHIT",
          "lastName": "SINGH",
          "fullName": "MR HARSHIT SINGH",
          "father_prefix": "MR",
          "father_fname": "Balram",
          "father_lname": "Singh",
          "father_fullname": "MR Balram Singh",
          "mother_prefix": "MRS",
          "mother_fname": "ANITA",
          "mother_lname": "SINGH",
          "mother_fullname": "MRS ANITA SINGH",
          "mobNum": "9450367613",
          "pan": "HUHPS7607K",
          "email": "luckyharshit741@gmail.com",
          "dob": "12-02-1999",
          "age": "25",
          "gender": "M",
          "permLine1": "S/O: BALRAM SINGH,934,RAJENDRA NAGAR UTTARI",
          "permLine2": "JATEPUR",
          "permCity": "Gorakhpur",
          "permState": "Uttar Pradesh",
          "permPin": "273001",
          "permCountry": "IN",
          "corresLine1": "S/O: BALRAM SINGH,934,RAJENDRA NAGAR UTTARI",
          "corresLine2": "JATEPUR",
          "corresCity": "Gorakhpur",
          "corresState": "Uttar Pradesh",
          "corresPin": "273001",
          "corresCountry": "IN",
          "resi_tel_num": "7734945195",
          "dec_date": "02-11-2023",
          "dec_place": "Gorakhpur"
        },
        "identity_details": {
          "identity": [
            {
              "sequence_no": "1",
              "ident_type": "H",
              "ident_num": "XXXXXXXX4191",
              "idver_status": "N"
            }
          ]
        },
        "image_details": {
          "image": [
            {
              "sequence_no": "1",
              "image_type": "pdf",
              "image_code": "PAN",
              "image_data": "JVBERi0xLjQNJeLjz9MNCjEgMCBvYmoNPDwvTWV0YWRhdGEgMTEgMCBSL1BhZ2VzIDMgMCBSL1R5cGIzMEJBNTVGOTQ2QkYyMDI1RUExRDM1NzAyNz5dPj4NCnN0YXJ0eHJlZg0KNDk0MDUNCiUlRU9GDQo=",
              "image_url": "https:/ap-south-1amazonaws.com/digitap-ckyc"
            },
            {
              "sequence_no": "2",
              "image_type": "JPG",
              "image_code": "Photograph",
              "image_data": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2",
              "image_url": "https://s3.ap-south-1.amazonaws.com/digitap-ckyc"
            },
            {
              "sequence_no": "3",
              "image_type": "pdf",
              "image_code": "Proof of Possession of Aadhaar",
              "image_data": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2",
              "image_url": "https://s3.ap-south-1.amazonaws.com/digitap-ckyc"
            }
          ]
        }
      }
    }
  }
}]`}
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

export default CKycApi;
