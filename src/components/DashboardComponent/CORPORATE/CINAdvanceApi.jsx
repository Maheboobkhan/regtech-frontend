import React, { useState } from 'react';

const CorporateCINAdvanceAPI = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {/* Corporate CIN Advance APIs */}
        <div
          className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
            showDetails ? 'h-auto' : 'h-20 flex items-center'
          }`}
        >
          <h3
            className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
              showDetails ? 'bg-[#4cb4ff] text-white' : ''
            }`}
            onClick={toggleDetails}
          >
            Corporate CIN Advance APIs
          </h3>

          {showDetails && (
            <div className="space-y-4 mt-2 transition-all duration-300">
              {/* CIN Advance Details */}
              <div className="bg-blue-300 p-4 rounded">
                <h4 className="font-semibold underline">CIN Advance</h4>
                <p>
                  <b>Hitting URL:</b> http://regtechapi.in/api/corporate_cin
                </p>
                <p>
                  <b>Request Body:</b>
                </p>
                <pre className="bg-gray-100 p-2 rounded">
                  {`{
  "cinNumber": "L65190GJ1994PLC021012"
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
        "class": "PUBLIC",
        "companyType": "INDIAN COMPANY",
        "companyName": "ICICI BANK LIMITED",
        "paidUpCapital": "14038147356",
        "authorisedCapital": "25000000000",
        "whetherListed": "LISTED",
        "dateOfIncorporation": "05/01/1994",
        "lastAgmDate": "30/08/2023",
        "registrationNumber": "021012",
        "registeredAddress": "ICICI BANK TOWER",
        "activeCompliance": "",
        "suspendedAtStockExchange": "",
        "balanceSheetDate": "31/03/2023",
        "category": "COMPANY LIMITED BY SHARES",
        "status": "ACTIVE",
        "rocOffice": "ROC AHMEDABAD",
        "countryOfIncorporation": "INDIAN",
        "descriptionOfMainDivision": "",
        "addressOtherThanRegisteredOffice": "ICICI BANK TOWER",
        "emailId": "nysecretary@icicibank.com",
        "natureOfBusiness": "",
        "noOfDirectors": "14",
        "statusForEfiling": "ACTIVE",
        "statusUnderCirp": "",
        "pan": "",
        "directors": [
          {
            "din": "05180796",
            "designation": "DIRECTOR",
            "dateOfAppointment": "23/01/2022",
            "address": "*****, HARYANA, INDIA, 122009",
            "name": "VIBHA PAUL RISHI",
            "whetherDscRegistered": "",
            "dscExpiryDate": "-",
            "pan": "*****1495E",
            "fatherName": "**** *** ****",
            "dob": "19/06/1960",
            "splitAddress": {
              "district": ["GURGAON"],
              "state": [["HARYANA", "HR"]],
              "city": ["GURGAON"],
              "pincode": "122009",
              "country": ["IN", "IND", "INDIA"],
              "addressLine": "INDIA"
            },
            "otherDirectorships": {
              "listOfLLPs": [],
              "listOfCompanies": [
                {
                  "cin": "L24220MH1945PLC004598",
                  "companyName": "ASIAN PAINTS LIMITED",
                  "beginDate": "23/01/2022",
                  "endDate": "-"
                },
                {
                  "cin": "L24239MH1939PLC002893",
                  "companyName": "TATA CHEMICALS LIMITED",
                  "beginDate": "23/01/2022",
                  "endDate": "-"
                }
              ],
              "din": "05180796"
            }
          }
        ],
        "splitAddress": {
          "district": ["VADODARA"],
          "state": [["GUJARAT", "GJ"]],
          "city": ["VADODARA"],
          "pincode": "390007",
          "country": ["IN", "IND", "INDIA"],
          "addressLine": "ICICI BANK TOWER, NEAR CHAKLI CIRCLE"
        }
      },
      "status_code": 200,
      "success": true
    }
  }
]`}
                </pre>
              </div>
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
};

export default CorporateCINAdvanceAPI;
