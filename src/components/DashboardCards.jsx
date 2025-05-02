import React, { Component } from 'react';
import "../App.css";

class DashboardCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandedPAN: false,
      isExpandedAadhar: false,
      isExpandedBankVerification: false
    };
  }

  toggleOptionsPAN = () => {
    this.setState(prevState => ({ isExpandedPAN: !prevState.isExpandedPAN }));
  }

  toggleOptionsAadhar = () => {
    this.setState(prevState => ({ isExpandedAadhar: !prevState.isExpandedAadhar }));
  }

  toggleOptionsBankVerification = () => {
    this.setState(prevState => ({ isExpandedBankVerification: !prevState.isExpandedBankVerification }));
  }

  render() {
    const { isExpandedPAN, isExpandedAadhar, isExpandedBankVerification } = this.state;

    return (
      <div className="container px-4 py-8 flex font-montserrat">
        {/* PAN CARD */}
        <div className="card bg-white border border-gray-200 rounded-lg shadow-md p-4 m-2 w-2/6 h-fit">
          <h2 className="text-black text-2xl font-light mb-4">PAN CARD</h2>
          <ul className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${isExpandedPAN ? 'max-h-screen' : 'max-h-24'}`}>
            <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Pan Car Info</li>
            <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Pan Card Details</li>
            {isExpandedPAN && (
              <>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">Pan Card Info</li>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">Pan Card Details</li>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">Pan Card OCR (RegTech)</li>
              </>
            )}
          </ul>
          <button
            className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={this.toggleOptionsPAN}
          >
            {isExpandedPAN ? 'Show Less' : 'See More'}
          </button>
        </div>


        {/* Aadhar Card */}
        <div className="card bg-white border border-gray-200 rounded-lg shadow-md p-4 m-2 w-2/6 h-fit">
          <h2 className="text-black text-2xl font-light mb-4">Aadhar</h2>
          <ul className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${isExpandedAadhar ? 'max-h-screen' : 'max-h-24'}`}>
            <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">Aadhar Upload</li>
            <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-sm text-[#00acc1] border-b-[1px] border-[#00acc1] cursor-pointer">Aadhar Validation</li>
            {isExpandedAadhar && (
              <>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Aadhar Upload</li>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Aadhar Validation</li>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Aadhar Upload</li>
              </>
            )}
          </ul>
          <button
            className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={this.toggleOptionsAadhar}
          >
            {isExpandedAadhar ? 'Show Less' : 'See More'}
          </button>
        </div>



        {/* Bank verification */}
        <div className="card bg-white border border-gray-200 rounded-lg shadow-md p-4 m-2 w-2/6 h-fit">
          <h2 className="text-black text-2xl font-light mb-4">Bank Verification</h2>
          <ul className={`list-decimal options-container transition-all duration-500 ease-in-out overflow-hidden ${isExpandedBankVerification ? 'max-h-screen' : 'max-h-24'}`}>
            <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Verify IFSC</li>
            <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Bank Statement Reader</li>
            {isExpandedBankVerification && (
              <>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Bank Statement Analyser</li>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Bank Validation</li>
                <li className="hover:text-gray-700 mb-4 ml-6 hover:border-b-[1px] hover:border-gray-700 w-fit text-[#00acc1] text-sm border-b-[1px] border-[#00acc1] cursor-pointer">Aadhar Upload</li>
              </>
            )}
          </ul>
          <button
            className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={this.toggleOptionsBankVerification}
          >
            {isExpandedBankVerification ? 'Show Less' : 'See More'}
          </button>
        </div>


      </div>
    );
  }
}

export default DashboardCards;
