import React, { Component } from "react";

class CorporateCINBasicAPI extends Component {
  state = {
    showDetails: false, // State to control the visibility of the API details
  };

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { showDetails } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Corporate CIN Basic APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showDetails ? "h-auto" : "h-20 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showDetails ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleDetails}
            >
              Corporate CIN Basic APIs
            </h3>

            {showDetails && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* CIN Basic Details */}
                <div className="bg-blue-300 p-4 rounded">
                  <h4 className="font-semibold underline">CIN Basic</h4>
                  <p>
                    <b>Hitting URL:</b> http://regtechapi.in/api/corporate_cin
                  </p>
                  <p>
                    <b>Request Body:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`{
  "cin_number": "L65190GJ1994PLC021012"
}`}
                  </pre>
                  <p>
                    <b>Success Response:</b>
                  </p>
                  <pre className="bg-gray-100 p-2 rounded">
                    {`[
  {
    "corporate_cin": {
      "data": {
        "cin": "L65190GJ1994PLC021012",
        "numberOfMembers": "",
        "subCategory": "NON-GOVERNMENT COMPANY",
        "classType": "PUBLIC",
        "companyType": "INDIAN COMPANY",
        "companyName": "ICICI BANK LIMITED",
        "paidUpCapital": "14038147356",
        "authorisedCapital": "25000000000",
        "whetherListed": "LISTED",
        "dateOfIncorporation": "05/01/1994",
        "registrationNumber": "021012",
        "registeredAddress": "ICICI BANK TOWER, OLD PADRA ROAD, VADODARA",
        "registeredDisctrict": "VADODARA",
        "registeredState": ["GUJARAT", "GJ"],
        "registeredCity": "VADODARA",
        "registeredPincode": "390007",
        "registeredCountry": "INDIA",
        "activeCompliance": "",
        "category": "COMPANY LIMITED BY SHARES",
        "status": "ACTIVE",
        "rocOffice": "ROC AHMEDABAD",
        "addressOtherThanRegisteredOffice": "ICICI BANK TOWER, NEAR CHAKLI CIRCLE, OLD PADRA ROAD, VADODARA, VADODARA, GUJARAT, INDIA, 390007",
        "emailId": "nysecretary@icicibank.com",
        "natureOfBusiness": "",
        "noOfDirectors": "14",
        "statusForEfiling": "ACTIVE"
      },
      "statusCode": 200,
      "success": true
    }
  }
]`}
                  </pre>
                </div>
              </div>
            )}
          </div>

          
        </div>
      </div>
    );
  }
}

export default CorporateCINBasicAPI;
