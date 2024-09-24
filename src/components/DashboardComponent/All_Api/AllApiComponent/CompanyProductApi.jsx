
import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class CompanyProductAPI extends Component {
  state = {
    expandedSection: null,
    showCompanyProductApis: false, // Initial state to show the section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleCompanyProductApis = () => {
    this.setState({
      showCompanyProductApis: !this.state.showCompanyProductApis,
    });
  };

  render() {
    const { expandedSection, showCompanyProductApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Company Product APIs */}
          <div
            className={`bg-blue-400 rounded cursor-pointer transition-all duration-300 ${
              showCompanyProductApis ? "h-auto" : "h-18 flex items-center"
            }`}
            
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-400 w-full ${
                showCompanyProductApis ? "bg-blue-600" : ""
              }`}
              onClick={this.toggleCompanyProductApis}
            >
              Company Product APIs
            </h3>

            {showCompanyProductApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Company Product Section */}
                <div
                  className="bg-blue-400 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("companyProduct")}
                >
                  <h4 className="font-semibold underline">Company Product</h4>
                </div>
                {expandedSection === "companyProduct" && (
                  <div className="p-4 border border-blue-700 rounded bg-blue-100">
                    <p>
                      <b>Hitting URL:</b>{" "}
                      http://regtechapi.in/api/company-products
                    </p>
                    <p>
                      <b>Header:</b>
                    </p>
                    <pre className="bg-gray-300 p-2 rounded">
                      {`{
  "AccessToken": "xxxxxxxxxxxxx"
}`}
                    </pre>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-300 p-2 rounded">
                      {`{
  "companyName": "",
  "flrsLicenseNo": "21523032001008"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-300 p-2 rounded">
                      {`{
  "companyDetails": {
    "Information": {
      "apptypedesc": "New Registration",
      "companyname": "VAISHNAVI MEDICAL STORES/GHODE",
      "displayrefid": "30230721113957150",
      "districtname": "Ahmadnagar",
      "fboid": 182393994316199886,
      "licenseactiveflag": true,
      "licensecategoryid": 3,
      "licensecategoryname": "Registration",
      "licenseno": "21523032001008",
      "premiseaddress": "SH.NO.1,GRD FL,PR.NO.Z166000099,GT NO.75/3/4A/4B,PLT.NO.41, BOLHEGAON GAWTHAN,CHATRAPATI SHIVAJI MAHARAJ MARG,BOLHEGAON,AHMEDNAGAR",
      "premisepincode": 414111,
      "refid": 113957150,
      "statename": "Maharashtra",
      "statusdesc": "Registration Certificate issued",
      "talukname": "Ahmednagar (Mun Corp) Zone 1",
      "villagename": "Adhodi"
    },
    "products": [
      {
        "activeFlag": true,
        "categoryName": null,
        "fpvsProductId": null,
        "indexVal": null,
        "kindOfBusinessType": null,
        "manufacturFlag": false,
        "productId": 5,
        "productName": "05 - Confectionery",
        "productNamef": "05 - Confectionery",
        "rcProductId": 101141843,
        "refId": 113957150,
        "subCategoryId": null,
        "subCategoryName": null
      }
    ]
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

export default CompanyProductAPI;
