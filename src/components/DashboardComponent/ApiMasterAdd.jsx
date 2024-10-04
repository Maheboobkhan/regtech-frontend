

import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import withRouter from "./withRouter";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddApiMaster extends Component {
  state = {
    apiGroups: [], // Array to store API groups fetched from the backend
    selectedGroup: "",
    apiName: "",
    basicPrice: "",
    starterPrice: "",
    standardPrice: "",
    advancePrice: "",
    growthPrice: "",
    unicornPrice: "",
    routeName: "",
    apiSlug: "",
  };

  componentDidMount() {
    const token = Cookies.get("authToken");
    if (!token) {
      toast.error("Token not found");
      return;
    }
    this.fetchApiGroups(token);
  }

  fetchApiGroups = async (token) => {
    const domain = localStorage.getItem('domain');
    try {
      const response = await fetch(
        `${domain}/apigroup/${token}`
      );
      const data = await response.json();
      this.setState({ apiGroups: data.api_group || [] });
    } catch (error) {
      console.error("Error fetching API groups:", error);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelectChange = (event) => {
    this.setState({ selectedGroup: event.target.value });
  };

  validateForm = () => {
    const {
      selectedGroup,
      apiName,
      basicPrice,
      starterPrice,
      standardPrice,
      advancePrice,
      growthPrice,
      unicornPrice,
      routeName,
      apiSlug,
    } = this.state;

    // Check if any field is empty
    if (
      !selectedGroup ||
      !apiName ||
      !basicPrice ||
      !starterPrice ||
      !standardPrice ||
      !advancePrice ||
      !growthPrice ||
      !unicornPrice ||
      !routeName ||
      !apiSlug
    ) {
      toast.error("Please fill in all fields.");
      return false;
    }

    // Check if apiSlug has only lowercase letters and no spaces
    if (!/^[a-z]+$/.test(apiSlug)) {
      toast.error("Slug Name must be lowercase letters only, without spaces.");
      return false;
    }

    return true;
  };

  handleSubmit = async () => {
    if (!this.validateForm()) {
      return;
    }

    const {
      selectedGroup,
      apiName,
      basicPrice,
      starterPrice,
      standardPrice,
      advancePrice,
      growthPrice,
      unicornPrice,
      routeName,
      apiSlug,
    } = this.state;

    const token = Cookies.get("authToken");

    const data = {
      _token: token,
      api_group_id: selectedGroup,
      api_name: apiName,
      basic_price: basicPrice,
      starter_price: starterPrice,
      standard_price: standardPrice,
      advance_price: advancePrice,
      growth_price: growthPrice,
      unicorn_price: unicornPrice,
      route_name: routeName,
      api_slug: apiSlug,
    };
    
    const domain = localStorage.getItem('domain');
    try {
      const response = await axios.post(
        `${domain}/createapimaster`,
        data
      );

      if (response.data[0] === "success") {
        toast.success(response.data[1]);
        this.setState({
          selectedGroup: "",
          apiName: "",
          basicPrice: "",
          starterPrice: "",
          standardPrice: "",
          advancePrice: "",
          growthPrice: "",
          unicornPrice: "",
          routeName: "",
          apiSlug: "",
        });
        setTimeout(() => {
          this.props.navigate("/dashboard/apiMaster");
        }, 2000);
      } else if (response.data[0] === "warning") {
        toast.warning(response.data[1]);
      } else if (response.data[0] === "error") {
        toast.error(response.data[1]);
      }
    } catch (error) {
      console.error("Error adding API:", error);
      toast.error("Error adding API");
    }
  };

  render() {
    const {
      apiGroups,
      selectedGroup,
      apiName,
      basicPrice,
      starterPrice,
      standardPrice,
      advancePrice,
      growthPrice,
      unicornPrice,
      routeName,
      apiSlug,
    } = this.state;

    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-extrabold text-black mb-6">Add API</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="apiGroup"
          >
            Api Group
          </label>
          <select
            id="apiGroup"
            name="selectedGroup"
            value={selectedGroup}
            onChange={this.handleSelectChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          >
            <option value="">Select API Group</option>
            {apiGroups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.group_name}
              </option>
            ))}
          </select>

          <label className="block text-sm font-semibold mb-2" htmlFor="apiName">
            Api Name
          </label>
          <input
            id="apiName"
            name="apiName"
            type="text"
            value={apiName}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="basicPrice"
          >
            Basic Price
          </label>
          <input
            id="basicPrice"
            name="basicPrice"
            type="number"
            value={basicPrice}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="starterPrice"
          >
            Starter Price
          </label>
          <input
            id="starterPrice"
            name="starterPrice"
            type="number"
            value={starterPrice}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="standardPrice"
          >
            Standard Price
          </label>
          <input
            id="standardPrice"
            name="standardPrice"
            type="number"
            value={standardPrice}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="advancePrice"
          >
            Advance Price
          </label>
          <input
            id="advancePrice"
            name="advancePrice"
            type="number"
            value={advancePrice}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="growthPrice"
          >
            Growth Price
          </label>
          <input
            id="growthPrice"
            name="growthPrice"
            type="number"
            value={growthPrice}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="unicornPrice"
          >
            Unicorn Price
          </label>
          <input
            id="unicornPrice"
            name="unicornPrice"
            type="number"
            value={unicornPrice}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="routeName"
          >
            Route Name (As per Laravel web.php)
          </label>
          <input
            id="routeName"
            name="routeName"
            type="text"
            value={routeName}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <label className="block text-sm font-semibold mb-2" htmlFor="apiSlug">
            Slug Name (Lowercase, only characters without space)
          </label>
          <input
            id="apiSlug"
            name="apiSlug"
            type="text"
            value={apiSlug}
            onChange={this.handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />

          <button
            className="mt-4 px-6 py-3 bg-[#00acc1] text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out flex items-center"
            onClick={this.handleSubmit}
          >
            <FaPlus className="mr-2" /> Add
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(AddApiMaster);
