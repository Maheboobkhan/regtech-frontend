import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class PredictPPLAPI extends Component {
  state = {
    expandedSection: null,
    showPredictPPLApis: false, // State to control the expansion of the PredictPPL APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  togglePredictPPLApis = () => {
    this.setState({
      showPredictPPLApis: !this.state.showPredictPPLApis,
    });
  };

  render() {
    const { expandedSection, showPredictPPLApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* PredictPPL APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showPredictPPLApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showPredictPPLApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.togglePredictPPLApis}
            >
              PredictPPL APIs
            </h3>

            {showPredictPPLApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* PredictPPL */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("predictPPL")}
                >
                  <h4 className="font-semibold underline">PredictPPL</h4>
                </div>
                {expandedSection === "predictPPL" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/predictppl
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "file": "predict_report.csv"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "statusCode": 200,
  "data": [
    {
      "LoanAmount": 10000,
      "LoanIntent": "PERSONAL",
      "LoanInterestRate": 8.5,
      "LoanPercentIncome": 0.15,
      "PersonAge": 25,
      "PersonHomeOwnership": "RENT",
      "PersonIncome": 70000,
      "Prediction": "No Default"
    },
    {
      "LoanAmount": 15000,
      "LoanIntent": "EDUCATION",
      "LoanInterestRate": 10.2,
      "LoanPercentIncome": 0.12,
      "PersonAge": 35,
      "PersonHomeOwnership": "OWN",
      "PersonIncome": 120000,
      "Prediction": "No Default"
    },
    {
      "LoanAmount": 20000,
      "LoanIntent": "PERSONAL",
      "LoanInterestRate": 13,
      "LoanPercentIncome": 0.2,
      "PersonAge": 40,
      "PersonHomeOwnership": "MORTGAGE",
      "PersonIncome": 95000,
      "Prediction": "No Default"
    },
    {
      "LoanAmount": 8000,
      "LoanIntent": "EDUCATION",
      "LoanInterestRate": 16,
      "LoanPercentIncome": 0.18,
      "PersonAge": 29,
      "PersonHomeOwnership": "RENT",
      "PersonIncome": 45000,
      "Prediction": "Default"
    }
  ]
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

export default PredictPPLAPI;
