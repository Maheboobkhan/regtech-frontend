import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Make sure to install js-cookie package

// Custom dropdown component
const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border rounded-md bg-white text-black flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <span>{value || "Select Criteria"}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-2 bg-white border border-[#00acc1] rounded-md shadow-lg transition-transform transform duration-300 ease-in-out"
        >
          <input
            type="text"
            className="w-full p-2 border-b border-[#00acc1] rounded-t-md focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  className="w-full text-left p-3 hover:bg-[#00acc1] hover:text-white transition-colors duration-200"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              ))
            ) : (
              <div className="p-3 text-gray-500">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CompanyProductDetails = () => {
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [companyDetails, setCompanyDetails] = useState(null);
  const [error, setError] = useState("");

  const criteriaOptions = ["Company Name", "License No"];

  const handleCriteriaChange = (option) => {
    setSelectedCriteria((prev) => {
      if (prev.includes(option)) {
        return prev.filter((criteria) => criteria !== option);
      }
      return [...prev, option];
    });
  };

  const handleSearch = async () => {
    const params = {};
    if (selectedCriteria.includes("Company Name"))
      params.companyName = companyName;
    if (selectedCriteria.includes("License No"))
      params.flrsLicenseNo = licenseNo;

    if (Object.keys(params).length === 0) {
      setError("Please enter company name or license number.");
      return;
    }

    setError("");
    const token = Cookies.get("authToken"); // Get token from cookies

    try {
      const response = await axios.post(
        "http://regtechapi.in/api/seachv4",
        params,
        {
          headers: {
            AccessToken: token,
          },
        }
      );
      console.log(response);
      setCompanyDetails(response.data);
    } catch (err) {
      setError("Error fetching company product details.");
    }
  };

  return (
    <div className="bg-[#f2fbfc] min-h-screen flex flex-col items-center p-4">
      <div className="w-full mb-4 mt-8 bg-blue-500 p-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">
          Company Product Details
        </h3>
        
      </div>
      <div className="w-full max-w-md mb-4">
        <Dropdown
          options={criteriaOptions}
          onChange={handleCriteriaChange}
          value={selectedCriteria.join(", ")}
        />
      </div>
      {selectedCriteria.includes("Company Name") && (
        <input
          type="text"
          className="w-full max-w-md p-3 border rounded-md mb-4"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      )}
      {selectedCriteria.includes("License No") && (
        <input
          type="text"
          className="w-full max-w-md p-3 border rounded-md mb-4"
          placeholder="Enter license number"
          value={licenseNo}
          onChange={(e) => setLicenseNo(e.target.value)}
        />
      )}
      <button
        onClick={handleSearch}
        className="w-full max-w-md p-3 bg-[#00acc1] text-white rounded-md shadow-md hover:bg-[#008c95] transition-colors duration-200"
      >
        Search
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {companyDetails && companyDetails.status_code === 200 && (
        <div className="border-2 mt-8 p-4 bg-white rounded-md shadow-md w-full max-w-4xl overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#00acc1] text-white">
                <th className="p-2">Apptypedesc</th>
                <th className="p-2">Company Name</th>
                <th className="p-2">Display Refid</th>
                <th className="p-2">District</th>
                <th className="p-2">Fboid</th>
                <th className="p-2">Licenseactive Flag</th>
                <th className="p-2">LicenseCategoryId</th>
                <th className="p-2">LicenseCategoryName</th>
                <th className="p-2">Licenseno</th>
                <th className="p-2">PremiseAddress</th>
                <th className="p-2">PremisePincode</th>
                <th className="p-2">Refid</th>
                <th className="p-2">StateName</th>
                <th className="p-2">StatusDesc</th>
                <th className="p-2">TalukName</th>
                <th className="p-2">VillageName</th>
                <th className="p-2">Company Product Details</th>
              </tr>
            </thead>
            <tbody>
              {companyDetails &&
                companyDetails.map((company, index) => (
                  <tr key={index}>
                    <td className="p-2">{company.apptypedesc || "null"}</td>
                    <td className="p-2">{company.companyName || "null"}</td>
                    <td className="p-2">{company.displayRefid || "null"}</td>
                    <td className="p-2">{company.district || "null"}</td>
                    <td className="p-2">{company.fboid || "null"}</td>
                    <td className="p-2">
                      {company.licenseactiveFlag || "false"}
                    </td>
                    <td className="p-2">
                      {company.licenseCategoryId || "null"}
                    </td>
                    <td className="p-2">
                      {company.licenseCategoryName || "null"}
                    </td>
                    <td className="p-2">{company.licenseNo || "null"}</td>
                    <td className="p-2">{company.premiseAddress || "null"}</td>
                    <td className="p-2">{company.premisePincode || "null"}</td>
                    <td className="p-2">{company.refid || "null"}</td>
                    <td className="p-2">{company.stateName || "null"}</td>
                    <td className="p-2">{company.statusDesc || "null"}</td>
                    <td className="p-2">{company.talukName || "null"}</td>
                    <td className="p-2">{company.villageName || "null"}</td>
                    <td className="p-2">
                      {company.companyProductDetails || "null"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {companyDetails && companyDetails.status_code === 102 && (
        <div className="bg-red-500 text-white p-3 rounded mt-4">
        {companyDetails.message || 'An error occurred. Please try again later.'}
      </div>
      )}
    </div>
  );
};

export default CompanyProductDetails;
