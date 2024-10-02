import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FaSave } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

class ApiMaster extends Component {
  state = {
    apiOptions: [],
    apiGroups: [],
  };

  componentDidMount() {
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }
    this.fetchApiGroups(token);
    this.fetchApiOptions(token);
  }

  fetchApiGroups = async (token) => {
    const domain = localStorage.getItem('domain');
    try {
      const response = await fetch(`${domain}/apigroup/${token}`);
      const data = await response.json();
      this.setState({ apiGroups: data.api_group || [] });
    } catch (error) {
      console.error('Error fetching API groups:', error);
    }
  }

  fetchApiOptions = async (token) => {
    const domain = localStorage.getItem('domain');
    try {
      const response = await fetch(`${domain}/apimaster/${token}`);
      const data = await response.json();
      this.setState({ apiOptions: data });
    } catch (error) {
      console.error('Error fetching API options:', error);
    }
  }

  handleInputChange = (event, id, field) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      apiOptions: prevState.apiOptions.map((api) =>
        api.id === id ? { ...api, [field]: value } : api
      ),
    }));
  };

  handleSave = async () => {
    const { apiOptions } = this.state;
    const data = {
      txtApiId: apiOptions.map((api) => api.id),
    };

    apiOptions.forEach((api) => {
      data[`txtApiName${api.id}`] = api.api_name;
      data[`txtBasicPrice${api.id}`] = api.basic_price;
      data[`txtStarterPrice${api.id}`] = api.starter_price;
      data[`txtStandardPrice${api.id}`] = api.standard_price;
      data[`txtAdvancePrice${api.id}`] = api.advance_price;
      data[`txtGrowthPrice${api.id}`] = api.growth_price;
      data[`txtUnicornPrice${api.id}`] = api.unicorn_price;
    });

    console.log(data);
    const domain = localStorage.getItem('domain');
    try {
      const response = await axios.post(
        `${domain}/updateapimaster`,
        data
      );
      console.log(response);
      toast.success('Data saved successfully!');
    } catch (error) {
      console.error("There was an error saving the data!", error);
      toast.error('Error saving data!');
    }
  };

  render() {
    const { apiOptions, apiGroups } = this.state;
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between"><h1 className="text-4xl font-extrabold text-black mb-6">Api Master</h1>
        <Link to='/dashboard/apimasterAdd'><button
          className="mb-6 px-6 py-3 bg-[#00acc1] text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          Add New
        </button></Link></div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-[#00acc1] text-white">
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Api Category
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Api Name
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Basic
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Starter
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Standard
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Advance
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Growth
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold">
                  Unicorn
                </th>
              </tr>
            </thead>
            <tbody>
              {apiGroups.map((group) => {
                const optionsForGroup = apiOptions.filter(
                  (option) => option.api_group_id === group.id
                );

                return (
                  <React.Fragment key={group.id}>
                    {optionsForGroup.map((option, index) => (
                      <tr key={option.id} className={`bg-white even:bg-gray-50`}>
                        {index === 0 && (
                          <td
                            rowSpan={optionsForGroup.length}
                            className="py-3 align-top px-4 border-b border-gray-200 text-sm text-gray-700"
                          >
                            {group.group_name}
                          </td>
                        )}
                        <td className="py-3 w-1/4 pl-4 border-b border-gray-200 text-sm text-gray-700">
                          <input
                            type="text"
                            value={option.api_name}
                            onChange={(e) =>
                              this.handleInputChange(e, option.id, "api_name")
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <input
                            type="number"
                            value={option.basic_price}
                            onChange={(e) =>
                              this.handleInputChange(e, option.id, "basic_price")
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <input
                            type="number"
                            value={option.starter_price}
                            onChange={(e) =>
                              this.handleInputChange(e, option.id, "starter_price")
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <input
                            type="number"
                            value={option.standard_price}
                            onChange={(e) =>
                              this.handleInputChange(e, option.id, "standard_price")
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <input
                            type="number"
                            value={option.advance_price}
                            onChange={(e) =>
                              this.handleInputChange(e, option.id, "advance_price")
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <input
                            type="number"
                            value={option.growth_price}
                            onChange={(e) =>
                              this.handleInputChange(e, option.id, "growth_price")
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <input
                            type="number"
                            value={option.unicorn_price}
                            onChange={(e) =>
                              this.handleInputChange(e, option.id, "unicorn_price")
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <button
          className="mt-6 px-6 py-3 bg-[#00acc1] text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out flex items-center"
          onClick={this.handleSave}
        >
          <FaSave className="mr-2" /> Save
        </button>
        <ToastContainer />
      </div>
    );
  }
}

export default ApiMaster;
