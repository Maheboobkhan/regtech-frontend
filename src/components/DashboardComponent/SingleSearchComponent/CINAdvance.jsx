import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import axios from "axios";

const CINAdvance = () => {
  const [cinNumber, setCinNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const token = Cookies.get("authToken");

    try {
      const res = await axios.post(
        "http://regtechapi.in/api/seachv4",
        {
          cinNumber: cinNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
            AccessToken: token,
          },
        }
      );

      console.log(res.data); // Access the data directly from the response
      setResponse(res.data); // Set the response data
    } catch (err) {
      setResponse(null);
      setError("An error occurred. Please try again.");
      console.error(err); // Log the error for debugging
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-bold">CORPORATE CIN Advance</h3>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="cinNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                CORPORATE CIN Number
              </label>
              <input
                type="text"
                id="cinNumber"
                name="cinNumber"
                value={cinNumber}
                onChange={(e) => setCinNumber(e.target.value)}
                placeholder="Enter a CIN number"
                className="form-input py-2 px-2 outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>
          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-200 rounded-md">
              <h4 className="text-lg font-semibold">Error</h4>
              <p>{error}</p>
            </div>
          )}
          {response && response.statusCode !== 200 && (
            <div className="mt-4 p-4 bg-red-100 border border-red-200 rounded-md">
              <h4 className="text-lg font-semibold">Error</h4>
              <p>{response.message}</p>
            </div>
          )}
          {response && response.statusCode === 200 && (
            <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-md">
              <h4 className="text-lg font-semibold">CORPORATE CIN Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <strong>CIN Number:</strong>{" "}
                    {response.corporate_cin?.data?.cin || "null"}
                  </p>
                  <p>
                    <strong>Number of Members:</strong>{" "}
                    {response.corporate_cin?.data?.numberOfMembers || "null"}
                  </p>
                  <p>
                    <strong>Sub Category:</strong>{" "}
                    {response.corporate_cin?.data?.subCategory || "null"}
                  </p>
                  <p>
                    <strong>Class Type:</strong>{" "}
                    {response.corporate_cin?.data?.class || "null"}
                  </p>
                  <p>
                    <strong>Company Type:</strong>{" "}
                    {response.corporate_cin?.data?.companyType || "null"}
                  </p>
                  <p>
                    <strong>Company Name:</strong>{" "}
                    {response.corporate_cin?.data?.companyName || "null"}
                  </p>
                  <p>
                    <strong>Paid Up Capital:</strong>{" "}
                    {response.corporate_cin?.data?.paidUpCapital || "null"}
                  </p>
                  <p>
                    <strong>Authorized Capital:</strong>{" "}
                    {response.corporate_cin?.data?.authorisedCapital || "null"}
                  </p>
                  <p>
                    <strong>Whether Listed:</strong>{" "}
                    {response.corporate_cin?.data?.whetherListed || "null"}
                  </p>
                  <p>
                    <strong>Date of Incorporation:</strong>{" "}
                    {response.corporate_cin?.data?.dateOfIncorporation ||
                      "null"}
                  </p>
                  <p>
                    <strong>Last AGM Date:</strong>{" "}
                    {response.corporate_cin?.data?.lastAgmDate || "null"}
                  </p>
                  <p>
                    <strong>Registration Number:</strong>{" "}
                    {response.corporate_cin?.data?.registrationNumber || "null"}
                  </p>
                  <p>
                    <strong>Registered Address:</strong>{" "}
                    {response.corporate_cin?.data?.registeredAddress || "null"}
                  </p>
                  <p>
                    <strong>Active Compliance:</strong>{" "}
                    {response.corporate_cin?.data?.activeCompliance || "null"}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Suspended at Stock Exchange:</strong>{" "}
                    {response.corporate_cin?.data?.suspendedAtStockExchange ||
                      "null"}
                  </p>
                  <p>
                    <strong>Balance Sheet Date:</strong>{" "}
                    {response.corporate_cin?.data?.balanceSheetDate || "null"}
                  </p>
                  <p>
                    <strong>Category:</strong>{" "}
                    {response.corporate_cin?.data?.category || "null"}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {response.corporate_cin?.data?.status || "null"}
                  </p>
                  <p>
                    <strong>ROC Office:</strong>{" "}
                    {response.corporate_cin?.data?.rocOffice || "null"}
                  </p>
                  <p>
                    <strong>Country of Incorporation:</strong>{" "}
                    {response.corporate_cin?.data?.countryOfIncorporation ||
                      "null"}
                  </p>
                  <p>
                    <strong>Description of Main Division:</strong>{" "}
                    {response.corporate_cin?.data?.descriptionOfMainDivision ||
                      "null"}
                  </p>
                  <p>
                    <strong>Address Other Than Registered Office:</strong>{" "}
                    {response.corporate_cin?.data
                      ?.addressOtherThanRegisteredOffice || "null"}
                  </p>
                  <p>
                    <strong>Email ID:</strong>{" "}
                    {response.corporate_cin?.data?.emailId || "null"}
                  </p>
                  <p>
                    <strong>Nature of Business:</strong>{" "}
                    {response.corporate_cin?.data?.natureOfBusiness || "null"}
                  </p>
                  <p>
                    <strong>No of Directors:</strong>{" "}
                    {response.corporate_cin?.data?.noOfDirectors || "null"}
                  </p>
                  <p>
                    <strong>Status for eFiling:</strong>{" "}
                    {response.corporate_cin?.data?.statusForEfiling || "null"}
                  </p>
                  <p>
                    <strong>Status Under CIRP:</strong>{" "}
                    {response.corporate_cin?.data?.statusUnderCirp || "null"}
                  </p>
                  <p>
                    <strong>PAN:</strong>{" "}
                    {response.corporate_cin?.data?.pan || "null"}
                  </p>
                </div>
              </div>
              {response.corporate_cin?.data?.splitAddress && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">
                    Company Split Address
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p>
                        <strong>District:</strong>{" "}
                        {response.corporate_cin?.data?.splitAddress
                          ?.district?.[0] || "null"}
                      </p>
                      <p>
                        <strong>State:</strong>{" "}
                        {response.corporate_cin?.data?.splitAddress
                          ?.state?.[0]?.[0] || "null"}
                      </p>
                      <p>
                        <strong>Address Line:</strong>{" "}
                        {response.corporate_cin?.data?.splitAddress
                          ?.addressLine || "null"}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Pincode:</strong>{" "}
                        {response.corporate_cin?.data?.splitAddress?.pincode ||
                          "null"}
                      </p>
                      <p>
                        <strong>Country:</strong>{" "}
                        {response.corporate_cin?.data?.splitAddress
                          ?.country?.[2] || "null"}
                      </p>
                      <p>
                        <strong>City:</strong>{" "}
                        {response.corporate_cin?.data?.splitAddress
                          ?.city?.[0] || "null"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {response.corporate_cin?.data?.directors && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Directors Details</h4>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {[
                          "DIN",
                          "Designation",
                          "Date of Appointment",
                          "Address",
                          "Name",
                          "DSC Registered",
                          "DSC Expiry Date",
                          "PAN Number",
                          "Father's Name",
                          "DOB",
                          "Split Address",
                          "List of Companies",
                          "DIN Number",
                        ].map((header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {response.corporate_cin.data.directors.map(
                        (director, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.din || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.designation || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.dateOfAppointment || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.address || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.name || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.whetherDscRegistered || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.dscExpiryDate || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.pan || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.fatherName || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.dob || "null"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.splitAddress && (
                                <>
                                  <p>
                                    <strong>District:</strong>{" "}
                                    {director.splitAddress.district?.[0] ||
                                      "null"}
                                  </p>
                                  <p>
                                    <strong>State:</strong>{" "}
                                    {director.splitAddress.state?.[0]?.[0] ||
                                      "null"}
                                  </p>
                                  <p>
                                    <strong>City:</strong>{" "}
                                    {director.splitAddress.city?.[0] || "null"}
                                  </p>
                                  <p>
                                    <strong>Pincode:</strong>{" "}
                                    {director.splitAddress.pincode || "null"}
                                  </p>
                                  <p>
                                    <strong>Country:</strong>{" "}
                                    {director.splitAddress.country?.[2] ||
                                      "null"}
                                  </p>
                                  <p>
                                    <strong>Address Line:</strong>{" "}
                                    {director.splitAddress.addressLine ||
                                      "null"}
                                  </p>
                                </>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.otherDirectorships?.listOfCompanies?.map(
                                (company, idx) => (
                                  <div key={idx}>
                                    <p>
                                      <strong>CIN:</strong>{" "}
                                      {company.cin || "null"}
                                    </p>
                                    <p>
                                      <strong>Company Name:</strong>{" "}
                                      {company.companyName || "null"}
                                    </p>
                                    <p>
                                      <strong>Begin Date:</strong>{" "}
                                      {company.beginDate || "null"}
                                    </p>
                                    <p>
                                      <strong>End Date:</strong>{" "}
                                      {company.endDate || "null"}
                                    </p>
                                  </div>
                                )
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {director.otherDirectorships?.din || "null"}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CINAdvance;
