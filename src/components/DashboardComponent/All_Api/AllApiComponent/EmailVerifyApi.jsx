import React, { Component } from "react";
// Import Tailwind CSS here if not already included

class EmailVerificationAPI extends Component {
  state = {
    expandedSection: null,
    showEmailVerificationApis: false, // New state to control the expansion of the Email Verification APIs section
  };

  toggleSection = (section) => {
    this.setState({
      expandedSection: this.state.expandedSection === section ? null : section,
    });
  };

  toggleEmailVerificationApis = () => {
    this.setState({
      showEmailVerificationApis: !this.state.showEmailVerificationApis,
    });
  };

  render() {
    const { expandedSection, showEmailVerificationApis } = this.state;

    return (
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Email Verification APIs */}
          <div
            className={`bg-[#cee5ff] rounded cursor-pointer transition-all duration-300 ${
              showEmailVerificationApis ? "h-auto transition-all duration-300" : "h-18 flex items-center"
            }`}
          >
            <h3
              className={`font-bold rounded pl-2 py-4 text-xl bg-blue-300 w-full ${
                showEmailVerificationApis ? "bg-[#4cb4ff] text-white" : ""
              }`}
              onClick={this.toggleEmailVerificationApis}
            >
              Email Verification APIs
            </h3>

            {showEmailVerificationApis && (
              <div className="space-y-4 mt-2 transition-all duration-300">
                {/* Email Verification */}
                <div
                  className="bg-blue-300 text-black p-4 rounded cursor-pointer"
                  onClick={() => this.toggleSection("emailVerification")}
                >
                  <h4 className="font-semibold underline">Email Verification</h4>
                </div>
                {expandedSection === "emailVerification" && (
                  <div className="p-4 border border-black rounded">
                    <p>
                      <b>Hitting URL:</b> http://regtechapi.in/api/verify_email
                    </p>
                    <p>
                      <b>Request Body:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "email_to_verify": "abhi@gmail.com"
}`}
                    </pre>
                    <p>
                      <b>Success Response:</b>
                    </p>
                    <pre className="bg-gray-100 p-2 rounded">
                      {`{
  "statusCode": 200,
  "data": {
    "email": "abhi@gmail.com",
    "HTTPStatusCode": 200,
    "RequestId": "eddd8f17-0e04-447c-b139-fa75a5cdce90",
    "RetryAttempts": 0,
    "verification_initiated": true,
    "verification_status": "Pending"
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

export default EmailVerificationAPI;
