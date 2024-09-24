import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const StateForm = () => {
  const [selectedState, setSelectedState] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    br_district: "",
    br_subdiv: "",
    br_circle: "",
    br_mauza: "",
    br_surveytype: "",
    br_mapinstance: "",
    br_sheet_number: "",
    br_plot_number: "",
    jhar_district: "",
    jhar_circle: "",
    jhar_halka: "",
    jhar_mauza: "",
    jhar_sheet_number: "",
    jhar_plot_number: "",
    up_district: "",
    up_tehsil: "",
    up_village: "",
    up_plot_number: "",
    chha_distract: "",
    chha_tehsil: "",
    chha_ri_circle: "",
    chha_village: "",
    chha_plot_number: "",
    ra_district: "",
    ra_tehsil: "",
    ra_ri_circle: "",
    ra_ri_halkas: "",
    ra_sheet_number: "",
    ra_village: "",
    ra_plot_number: "",
    laksh_district: "",
    laksh_taluk: "",
    laksh_survey: "",
    laksh_village: "",
    laksh_plot_number: "",
    ker_district: "",
    ker_taluk: "",
    ker_village: "",
    ker_blockno: "",
    ker_survey_number: "",
    ker_subdivno: "",
    goa_district: "",
    goa_taluka: "",
    goa_sheet_number: "",
    goa_village: "",
    goa_plot_number: "",
    odi_district: "",
    odi_tehsil: "",
    odi_ri_circle: "",
    odi_sheetnumber: "",
    odi_village: "",
    odi_plot_number: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prefix =
      selectedState === "bihar"
        ? "br"
        : selectedState === "jharkhand"
        ? "jhar"
        : selectedState === "uttar_pradesh"
        ? "up"
        : selectedState === "chhattisgarh"
        ? "chha"
        : selectedState === "rajasthan"
        ? "ra"
        : selectedState === "lakshadweep"
        ? "laksh"
        : selectedState === "kerala"
        ? "ker"
        : selectedState === "goa"
        ? "goa"
        : selectedState === "odisha"
        ? "odi"
        : "";

    // Transform formData to match the desired format
    const formattedData = {
      state: selectedState,
      District: formData[`${prefix}_district`] || "",
      Subdiv: formData[`${prefix}_subdiv`] || "",
      Circle: formData[`${prefix}_circle`] || "",
      Mauza: formData[`${prefix}_mauza`] || "",
      Surveytype: formData[`${prefix}_surveytype`] || "",
      Mapinstance: formData[`${prefix}_mapinstance`] || "",
      sheetno: formData[`${prefix}_sheet_number`] || "",
      Sheetno: formData[`${prefix}_sheet_number`] || "",
      Plotno: formData[`${prefix}_plot_number`] || "",
      Halka: formData[`${prefix}_plot_number`] || "",
      Tehsil: formData[`${prefix}_tehsil`] || "",
      Village: formData[`${prefix}_village`] || "",
      Ri: formData[`${prefix}_ri_circle`] || "",
      Halkas: formData[`${prefix}_ri_halkas`] || "",
      Taluk: formData[`${prefix}_taluk`] || "",
      Survey: formData[`${prefix}_survey`] || "",
      Blockno: formData[`${prefix}_blockno`],
      Surveyno: formData[`${prefix}_survey_number`],
      Subdivno: formData[`${prefix}_subdivno`],
    };

    for (const key in formattedData) {
      if (formattedData.hasOwnProperty(key)) {
        console.log(`${key}: ${formattedData[key]}`);
      }
    }

    e.preventDefault();
    const token = Cookies.get("authToken");

    if (!token) {
      return;
    }

    setLoading(true);

    axios
      .post("http://regtechapi.in/api/bhunaksha", formattedData, {
        headers: {
          AccessToken: token, // Send the token in the header
        },
      })
      .then((response) => {
        console.log(response);
        setResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-[#00acc1] p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-white">Bhunaksha</h3>
        <Link
          to="/dashboard/kyc/api/bhunakasha"
          className="text-white underline hover:text-blue-100"
        >
          Bhunaksha APIs
        </Link>
      </div>
      {loading && (
        <div className="flex justify-center items-center mb-4">
          <div className="text-xl text-blue-300">
            Fetching Bhunaksha details
            <span className="text-blue-300">please wait...</span>
          </div>
        </div>
      )}

      {/* <div className="mb-4 mt-8 flex flex-col items-center">
        <label
          htmlFor="state"
          className="block text-2xl font-medium text-gray-700"
        >
          Select State
        </label>
        <select
          id="state"
          name="state"
          className="form-select mt-1 block w-1/2 bg-blue-200 cursor-pointer border border-blue-300 rounded-lg shadow-sm py-4 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">--Select State--</option>
          <option value="bihar">Bihar</option>
          <option value="jharkhand">Jharkhand</option>
          <option value="uttar_pradesh">Uttar Pradesh</option>
          <option value="chhattisgarh">Chhattisgarh</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="lakshadweep">Lakshadweep</option>
          <option value="kerala">Kerala</option>
          <option value="goa">Goa</option>
          <option value="odisha">Odisha</option>
        </select>
      </div> */}

      <div className="mb-4 mt-8 flex flex-col items-center">
        <label
          htmlFor="state"
          className="block text-2xl font-medium text-gray-700"
        >
          Select State
        </label>
        <select
          id="state"
          name="state"
          className="form-select cursor-pointer mt-1 block w-1/2 border border-[#00acc1] rounded-lg shadow-md py-4 px-3 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#0097a7] transition duration-200"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="" className="text-gray-500">
            --Select State--
          </option>
          <option value="bihar">Bihar</option>
          <option value="jharkhand">Jharkhand</option>
          <option value="uttar_pradesh">Uttar Pradesh</option>
          <option value="chhattisgarh">Chhattisgarh</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="lakshadweep">Lakshadweep</option>
          <option value="kerala">Kerala</option>
          <option value="goa">Goa</option>
          <option value="odisha">Odisha</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
        {selectedState === "bihar" && (
          <div
            id="bihar_info"
            className="mb-6 space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Bihar Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "br_district",
                  placeholder: "Enter District",
                },
                {
                  label: "Subdiv",
                  name: "br_subdiv",
                  placeholder: "Enter Subdiv",
                },
                {
                  label: "Circle",
                  name: "br_circle",
                  placeholder: "Enter Circle",
                },
                {
                  label: "Mauza",
                  name: "br_mauza",
                  placeholder: "Enter Mauza",
                },
                {
                  label: "Survey Type",
                  name: "br_surveytype",
                  placeholder: "Enter Survey Type",
                },
                {
                  label: "Mapinstance",
                  name: "br_mapinstance",
                  placeholder: "Enter Mapinstance",
                },
                {
                  label: "Sheet Number",
                  name: "br_sheet_number",
                  placeholder: "Enter Sheet Number",
                },
                {
                  label: "Plot Number",
                  name: "br_plot_number",
                  placeholder: "Enter Plot Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "jharkhand" && (
          <div id="jharkhand_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="jhar_district"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.jhar_district}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Circle</label>
            <input
              type="text"
              name="jhar_circle"
              className="form-input mt-1 block w-full"
              placeholder="Enter Circle"
              value={formData.jhar_circle}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Halka</label>
            <input
              type="text"
              name="jhar_halka"
              className="form-input mt-1 block w-full"
              placeholder="Enter Halka"
              value={formData.jhar_halka}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Mauza</label>
            <input
              type="text"
              name="jhar_mauza"
              className="form-input mt-1 block w-full"
              placeholder="Enter Mauza"
              value={formData.jhar_mauza}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Sheet Number</label>
            <input
              type="text"
              name="jhar_sheet_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Sheet Number"
              value={formData.jhar_sheet_number}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Plot Number</label>
            <input
              type="text"
              name="jhar_plot_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Plot Number"
              value={formData.jhar_plot_number}
              onChange={handleInputChange}
            />
          </div>
        )} */}
        {selectedState === "jharkhand" && (
          <div
            id="jharkhand_info"
            className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Jharkhand Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "jhar_district",
                  placeholder: "Enter District",
                },
                {
                  label: "Circle",
                  name: "jhar_circle",
                  placeholder: "Enter Circle",
                },
                {
                  label: "Halka",
                  name: "jhar_halka",
                  placeholder: "Enter Halka",
                },
                {
                  label: "Mauza",
                  name: "jhar_mauza",
                  placeholder: "Enter Mauza",
                },
                {
                  label: "Sheet Number",
                  name: "jhar_sheet_number",
                  placeholder: "Enter Sheet Number",
                },
                {
                  label: "Plot Number",
                  name: "jhar_plot_number",
                  placeholder: "Enter Plot Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "uttar_pradesh" && (
          <div id="uttar_pradesh_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="up_district"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.up_district}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Tehsil</label>
            <input
              type="text"
              name="up_tehsil"
              className="form-input mt-1 block w-full"
              placeholder="Enter Tehsil"
              value={formData.up_tehsil}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="up_village"
              className="form-input mt-1 block w-full"
              placeholder="Enter Village"
              value={formData.up_village}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Plot Number</label>
            <input
              type="text"
              name="up_plot_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Plot Number"
              value={formData.up_plot_number}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )} */}
        {selectedState === "uttar_pradesh" && (
          <div
            id="uttar_pradesh_info"
            className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Uttar Pradesh Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "up_district",
                  placeholder: "Enter District",
                },
                {
                  label: "Tehsil",
                  name: "up_tehsil",
                  placeholder: "Enter Tehsil",
                },
                {
                  label: "Village",
                  name: "up_village",
                  placeholder: "Enter Village",
                },
                {
                  label: "Plot Number",
                  name: "up_plot_number",
                  placeholder: "Enter Plot Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "chhattisgarh" && (
          <div id="chhattisgarh_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="chha_distract"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.chha_distract}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Tehsil</label>
            <input
              type="text"
              name="chha_tehsil"
              className="form-input mt-1 block w-full"
              placeholder="Enter Tehsil"
              value={formData.chha_tehsil}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">RI Circle</label>
            <input
              type="text"
              name="chha_ri_circle"
              className="form-input mt-1 block w-full"
              placeholder="Enter RI Circle"
              value={formData.chha_ri_circle}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="chha_village"
              className="form-input mt-1 block w-full"
              placeholder="Enter Village"
              value={formData.chha_village}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Plot Number</label>
            <input
              type="text"
              name="chha_plot_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Plot Number"
              value={formData.chha_plot_number}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )} */}
        {selectedState === "chhattisgarh" && (
          <div
            id="chhattisgarh_info"
            className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Chhattisgarh Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "chha_distract",
                  placeholder: "Enter District",
                },
                {
                  label: "Tehsil",
                  name: "chha_tehsil",
                  placeholder: "Enter Tehsil",
                },
                {
                  label: "RI Circle",
                  name: "chha_ri_circle",
                  placeholder: "Enter RI Circle",
                },
                {
                  label: "Village",
                  name: "chha_village",
                  placeholder: "Enter Village",
                },
                {
                  label: "Plot Number",
                  name: "chha_plot_number",
                  placeholder: "Enter Plot Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "rajasthan" && (
          <div id="rajasthan_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="ra_district"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.ra_district}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Tehsil</label>
            <input
              type="text"
              name="ra_tehsil"
              className="form-input mt-1 block w-full"
              placeholder="Enter Tehsil"
              value={formData.ra_tehsil}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">RI Circle</label>
            <input
              type="text"
              name="ra_ri_circle"
              className="form-input mt-1 block w-full"
              placeholder="Enter RI Circle"
              value={formData.ra_ri_circle}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Halkas</label>
            <input
              type="text"
              name="ra_ri_halkas"
              className="form-input mt-1 block w-full"
              placeholder="Enter Halkas"
              value={formData.ra_ri_halkas}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Sheet Number</label>
            <input
              type="text"
              name="ra_sheet_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Sheet Number"
              value={formData.ra_sheet_number}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="ra_village"
              className="form-input mt-1 block w-full"
              placeholder="Enter Village"
              value={formData.ra_village}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Plot Number</label>
            <input
              type="text"
              name="ra_plot_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Plot Number"
              value={formData.ra_plot_number}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )} */}
        {selectedState === "rajasthan" && (
          <div
            id="rajasthan_info"
            className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Rajasthan Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "ra_district",
                  placeholder: "Enter District",
                },
                {
                  label: "Tehsil",
                  name: "ra_tehsil",
                  placeholder: "Enter Tehsil",
                },
                {
                  label: "RI Circle",
                  name: "ra_ri_circle",
                  placeholder: "Enter RI Circle",
                },
                {
                  label: "Halkas",
                  name: "ra_ri_halkas",
                  placeholder: "Enter Halkas",
                },
                {
                  label: "Sheet Number",
                  name: "ra_sheet_number",
                  placeholder: "Enter Sheet Number",
                },
                {
                  label: "Village",
                  name: "ra_village",
                  placeholder: "Enter Village",
                },
                {
                  label: "Plot Number",
                  name: "ra_plot_number",
                  placeholder: "Enter Plot Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "lakshadweep" && (
          <div id="lakshadweep_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="laksh_district"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.laksh_district}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Taluk</label>
            <input
              type="text"
              name="laksh_taluk"
              className="form-input mt-1 block w-full"
              placeholder="Enter Taluk"
              value={formData.laksh_taluk}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Survey</label>
            <input
              type="text"
              name="laksh_survey"
              className="form-input mt-1 block w-full"
              placeholder="Enter Survey"
              value={formData.laksh_survey}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="laksh_village"
              className="form-input mt-1 block w-full"
              placeholder="Enter Village"
              value={formData.laksh_village}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Plot Number</label>
            <input
              type="text"
              name="laksh_plot_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Plot Number"
              value={formData.laksh_plot_number}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )} */}
        {selectedState === "lakshadweep" && (
          <div
            id="lakshadweep_info"
            className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Lakshadweep Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "laksh_district",
                  placeholder: "Enter District",
                },
                {
                  label: "Taluk",
                  name: "laksh_taluk",
                  placeholder: "Enter Taluk",
                },
                {
                  label: "Survey",
                  name: "laksh_survey",
                  placeholder: "Enter Survey",
                },
                {
                  label: "Village",
                  name: "laksh_village",
                  placeholder: "Enter Village",
                },
                {
                  label: "Plot Number",
                  name: "laksh_plot_number",
                  placeholder: "Enter Plot Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "kerala" && (
          <div id="kerala_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="ker_district"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.ker_district}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Taluk</label>
            <input
              type="text"
              name="ker_taluk"
              className="form-input mt-1 block w-full"
              placeholder="Enter Taluk"
              value={formData.ker_taluk}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="ker_village"
              className="form-input mt-1 block w-full"
              placeholder="Enter Village"
              value={formData.ker_village}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Block Number</label>
            <input
              type="text"
              name="ker_blockno"
              className="form-input mt-1 block w-full"
              placeholder="Enter Block Number"
              value={formData.ker_blockno}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Survey Number</label>
            <input
              type="text"
              name="ker_survey_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Survey Number"
              value={formData.ker_survey_number}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">
              Sub Division Number
            </label>
            <input
              type="text"
              name="ker_subdivno"
              className="form-input mt-1 block w-full"
              placeholder="Enter Sub Division Number"
              value={formData.ker_subdivno}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )} */}
        {selectedState === "kerala" && (
          <div
            id="kerala_info"
            className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Kerala Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "ker_district",
                  placeholder: "Enter District",
                },
                {
                  label: "Taluk",
                  name: "ker_taluk",
                  placeholder: "Enter Taluk",
                },
                {
                  label: "Village",
                  name: "ker_village",
                  placeholder: "Enter Village",
                },
                {
                  label: "Block Number",
                  name: "ker_blockno",
                  placeholder: "Enter Block Number",
                },
                {
                  label: "Survey Number",
                  name: "ker_survey_number",
                  placeholder: "Enter Survey Number",
                },
                {
                  label: "Sub Division Number",
                  name: "ker_subdivno",
                  placeholder: "Enter Sub Division Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "goa" && (
          <div id="goa_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="goa_district"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.goa_district}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Taluka</label>
            <input
              type="text"
              name="goa_taluka"
              className="form-input mt-1 block w-full"
              placeholder="Enter Taluka"
              value={formData.goa_taluka}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Sheet Number</label>
            <input
              type="text"
              name="goa_sheet_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Sheet Number"
              value={formData.goa_sheet_number}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="goa_village"
              className="form-input mt-1 block w-full"
              placeholder="Enter Village"
              value={formData.goa_village}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Plot Number</label>
            <input
              type="text"
              name="goa_plot_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Plot Number"
              value={formData.goa_plot_number}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )} */}
        {selectedState === "goa" && (
          <div
            id="goa_info"
            className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-xl font-semibold text-center text-[#00acc1]">
              Goa Information
            </h2>

            <div className="space-y-4">
              {[
                {
                  label: "District",
                  name: "goa_district",
                  placeholder: "Enter District",
                },
                {
                  label: "Taluka",
                  name: "goa_taluka",
                  placeholder: "Enter Taluka",
                },
                {
                  label: "Sheet Number",
                  name: "goa_sheet_number",
                  placeholder: "Enter Sheet Number",
                },
                {
                  label: "Village",
                  name: "goa_village",
                  placeholder: "Enter Village",
                },
                {
                  label: "Plot Number",
                  name: "goa_plot_number",
                  placeholder: "Enter Plot Number",
                },
              ].map(({ label, name, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    className="form-input mt-1 block w-full bg-[#f5f5f5] border border-[#00acc1] text-gray-900 rounded-lg py-2 px-3 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:border-[#00acc1]"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}

        {/* {selectedState === "odisha" && (
          <div id="odisha_info" className="mb-4">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="odi_district"
              className="form-input mt-1 block w-full"
              placeholder="Enter District"
              value={formData.odi_district}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Tehsil</label>
            <input
              type="text"
              name="odi_tehsil"
              className="form-input mt-1 block w-full"
              placeholder="Enter Tehsil"
              value={formData.odi_tehsil}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">RI Circle</label>
            <input
              type="text"
              name="odi_ri_circle"
              className="form-input mt-1 block w-full"
              placeholder="Enter RI Circle"
              value={formData.odi_ri_circle}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Sheet Number</label>
            <input
              type="text"
              name="odi_sheetnumber"
              className="form-input mt-1 block w-full"
              placeholder="Enter Sheet Number"
              value={formData.odi_sheetnumber}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Village</label>
            <input
              type="text"
              name="odi_village"
              className="form-input mt-1 block w-full"
              placeholder="Enter Village"
              value={formData.odi_village}
              onChange={handleInputChange}
            />
            <label className="block text-sm font-medium">Plot Number</label>
            <input
              type="text"
              name="odi_plot_number"
              className="form-input mt-1 block w-full"
              placeholder="Enter Plot Number"
              value={formData.odi_plot_number}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )} */}
        {selectedState === "odisha" && (
          <div
            id="odisha_info"
            className="mb-4 p-4 bg-white shadow-md rounded-lg"
          >
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="odi_district"
              className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter District"
              value={formData.odi_district}
              onChange={handleInputChange}
            />

            <label className="block text-sm font-medium mt-4">Tehsil</label>
            <input
              type="text"
              name="odi_tehsil"
              className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Tehsil"
              value={formData.odi_tehsil}
              onChange={handleInputChange}
            />

            <label className="block text-sm font-medium mt-4">RI Circle</label>
            <input
              type="text"
              name="odi_ri_circle"
              className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter RI Circle"
              value={formData.odi_ri_circle}
              onChange={handleInputChange}
            />

            <label className="block text-sm font-medium mt-4">
              Sheet Number
            </label>
            <input
              type="text"
              name="odi_sheetnumber"
              className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Sheet Number"
              value={formData.odi_sheetnumber}
              onChange={handleInputChange}
            />

            <label className="block text-sm font-medium mt-4">Village</label>
            <input
              type="text"
              name="odi_village"
              className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Village"
              value={formData.odi_village}
              onChange={handleInputChange}
            />

            <label className="block text-sm font-medium mt-4">
              Plot Number
            </label>
            <input
              type="text"
              name="odi_plot_number"
              className="form-input mt-1 block w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Plot Number"
              value={formData.odi_plot_number}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-[#00acc1] text-white font-semibold rounded-lg shadow-md hover:bg-[#0097a7] focus:outline-none focus:ring-2 focus:ring-[#00acc1] focus:ring-opacity-50 transition duration-200"
            >
              Submit
            </button>
          </div>
        )}
      </form>
      {response && response.status_code === 500 && (
        <div className="bg-red-200 text-red-500 px-2 py-3">
          {response.message}
        </div>
      )}
      {response && response.status_code === 103 && (
        <div className="bg-red-200 text-red-500 px-2 py-3">
          {response.message}
        </div>
      )}
    </div>
  );
};

export default StateForm;
