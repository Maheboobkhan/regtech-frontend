import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FaPlus, FaMinus, FaDownload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css"; // Tailwind CSS

class ProfileForm extends Component {
  state = {
    activeTab: "basicProfile",
    userData: null,
    bankProfiles: [],
    selectedFiles: {},
    expandedIndex: null,
    name: "",
    email: "",
    NameEmailObject: {},
  };

  async componentDidMount() {
    const token = Cookies.get("authToken");
    if (!token) {
      toast.error("Token not found");
      return;
    }
    await this.fetchUserData(token);
    await this.fetchBankProfiles(token);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleInputNameChange = (id, value) => {
    const { NameEmailObject } = this.state;
    const updatedNameEmailObject = {
      ...NameEmailObject,
      [id]: {
        ...NameEmailObject[id],
        name: value,
      },
    };

    this.setState({ NameEmailObject: updatedNameEmailObject });
    console.log(NameEmailObject[id]);
  };

  handleInputEmailChange = (id, value) => {
    const { NameEmailObject } = this.state;
    const updatedNameEmailObject = {
      ...NameEmailObject,
      [id]: {
        ...NameEmailObject[id],
        email: value,
      },
    };

    this.setState({ NameEmailObject: updatedNameEmailObject });
    console.log(NameEmailObject[id]);
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  fetchUserData = async (token) => {
    const domain = localStorage.getItem("domain");
    try {
      const response = await axios.get(
        `${domain}/getcurrentuserwithuploadeddocument/${token}`
      );
      this.setState({
        userData: response.data,
        name: response.data.user.name,
        email: response.data.user.email,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to fetch user data");
    }
  };

  fetchBankProfiles = async (token) => {
    const domain = localStorage.getItem("domain");
    try {
      const response = await axios.get(
        `${domain}/getalluserwithuploadeddocument/${token}`
      );

      const NameEmailObject = response.data.reduce((acc, userProfile) => {
        const { id, name, email } = userProfile.user;
        acc[id] = { name, email };
        return acc;
      }, {});

      console.log(NameEmailObject);

      this.setState({
        bankProfiles: response.data,
        NameEmailObject: NameEmailObject,
      });
    } catch (error) {
      console.error("Error fetching bank profiles:", error);
      toast.error("Failed to fetch bank profiles");
    }
  };

  handleFileChange = (event, type, index = null) => {
    const file = event.target.files[0];
    console.log(file);

    this.setState(
      (prevState) => {
        // Create a copy of the selectedFiles from the previous state
        const updatedFiles = { ...prevState.selectedFiles };

        // Check if the type is valid and if index is provided
        if (type) {
          if (index !== null) {
            // Update the file at the specific index for the given type
            if (!updatedFiles[type]) {
              updatedFiles[type] = [];
            }
            updatedFiles[type][index] = file;
          } else {
            // If index is not provided, just add the file under the specified type
            updatedFiles[type] = file;
          }
        } else {
          // If type is not specified, handle as a default case
          updatedFiles.default = file;
        }

        return { selectedFiles: updatedFiles };
      },
      () => {
        // Callback to ensure state is updated and to log the updated state
      }
    );
  };

  handleBankProfileChange = (event, index, field) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      editedBankProfiles: {
        ...prevState.editedBankProfiles,
        [index]: {
          ...prevState.editedBankProfiles[index],
          [field]: value,
        },
      },
    }));
  };

  handleSubmit = async () => {
    const { userData, selectedFiles } = this.state;
    const token = Cookies.get("authToken");

    // Initialize FormData
    const formData = new FormData();

    // Append token and user information
    formData.append("token", token);
    formData.append("user_id", userData.user.id);
    formData.append("name", this.state.name);
    formData.append(
      "email",
      this.state.email ? this.state.email : userData.user.email
    );

    // Append only the files that are present in selectedFiles
    Object.keys(selectedFiles).forEach((key) => {
      const file = selectedFiles[key];
      if (file) {
        formData.append(key, file);
      }
    });

    Object.keys(selectedFiles).forEach((key) => {
      const file = selectedFiles[key];
      if (file) {
        formData.append(key, file);
      }
    });
    const obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    try {
      const domain = localStorage.getItem("domain");
      await axios.post(`${domain}/updateprofileuser`, obj, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Profile updated successfully");
      this.fetchUserData(token);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  handleSubmitForChild = async (id) => {
    const { userData, selectedFiles } = this.state;
    const user = this.state.bankProfiles.find((user) => user.user.id === id);
    const token = Cookies.get("authToken");

    // Initialize FormData
    const formData = new FormData();

    // Append token and user information
    formData.append("token", user.user.access_token);
    formData.append("user_id", id);
    formData.append("name", this.state.NameEmailObject[id].name);
    formData.append("email", this.state.NameEmailObject[id].email);

    // Append only the files that are present in selectedFiles
    Object.keys(selectedFiles).forEach((key) => {
      const file = selectedFiles[key];
      if (file) {
        formData.append(key, file);
      }
    });

    Object.keys(selectedFiles).forEach((key) => {
      const file = selectedFiles[key];
      if (file) {
        formData.append(key, file);
      }
    });
    const obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    const domain = localStorage.getItem("domain");

    try {
      await axios.post(`${domain}/updateprofileuser`, obj, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Profile updated successfully");
      this.fetchBankProfiles(token);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  toggleExpand = (index) => {
    this.setState((prevState) => ({
      expandedIndex: prevState.expandedIndex === index ? null : index,
    }));
  };

  render() {
    const {
      activeTab,
      userData,
      bankProfiles,
      selectedFiles,
      expandedIndex,
      name,
      email,
    } = this.state;

    return (
      <div className="p-6 mr-4 ml-4 mx-auto bg-gray-100 rounded-lg shadow-md mt-12">
        <div className="mb-6">
          <div className="flex border-b border-gray-300">
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === "basicProfile"
                  ? "border-b-2 border-teal-500"
                  : "text-gray-600"
              } hover:text-teal-500`}
              onClick={() => this.setState({ activeTab: "basicProfile" })}
            >
              Basic Profile
            </button>
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === "bankProfile"
                  ? "border-b-2 border-teal-500"
                  : "text-gray-600"
              } hover:text-teal-500`}
              onClick={() => this.setState({ activeTab: "bankProfile" })}
            >
              Bank Profile
            </button>
          </div>
        </div>

        {activeTab === "basicProfile" &&
          (userData?.user.role_id === 1 ? (
            <div className="bg-gray-300 p-4">
              <p className="text-lg mb-8 border-b-[1px] border-black">
                Document submit date:{" "}
                <span className="text-base">
                  {userData?.documents?.submit_date
                    ? new Date(
                        userData.documents.submit_date
                      ).toLocaleDateString("en-GB")
                    : "N/A"}
                </span>
              </p>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  // value={this.state.name ? this.state.name : (userData?.user.name || "")}
                  // value={this.state.name || userData?.user.name || ""}
                  value={name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  // value={userData?.user.email || ""}
                  value={email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Pan Card
                </label>
                <div className="flex">
                  <input
                    type="file"
                    className="text-gray-500"
                    onChange={(e) => this.handleFileChange(e, "pancard")}
                  />
                  {userData?.documents?.pancard_document && (
                    <div className="flex flex-col items-center">
                      <h1 className="text-2xl">Pancard Document</h1>
                      <img
                        src={userData.documents.pancard_document}
                        alt="Pan Card Preview"
                        className="w-40 h-40 object-contain"
                      />
                      <a
                        href={userData.documents.pancard_document}
                        download
                        className="align-top text-teal-600 hover:underline flex items-center"
                      >
                        <FaDownload className="" /> Download
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Aadhar Card
                </label>
                <div className="flex">
                  <input
                    type="file"
                    className="text-gray-500"
                    onChange={(e) => this.handleFileChange(e, "aadharcard")}
                  />
                  {userData?.documents?.aadhar_document && (
                    <div className="flex flex-col items-center">
                      <h1 className="text-2xl">Aadharcard Image</h1>
                      <img
                        src={userData.documents.aadhar_document}
                        alt="Aadhar Card Preview"
                        className="w-40 h-40 object-contain"
                      />
                      <a
                        href={userData.documents.aadhar_document}
                        download
                        className="text-teal-600 hover:underline flex items-center"
                      >
                        <FaDownload className="mr-2" /> Download Image
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Bank Statement
                </label>
                <div className="flex">
                  <input
                    type="file"
                    className="text-gray-500"
                    onChange={(e) => this.handleFileChange(e, "bankstatement")}
                  />
                  {userData?.documents?.bank_document && (
                    <div className="mt-2 flex flex-col items-center">
                      <h1 className="text-2xl">Bank Statement</h1>
                      <a
                        href={userData.documents.bank_document}
                        download
                        className="text-teal-600 hover:underline flex items-center"
                      >
                        <FaDownload className="" /> Download Pdf
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Other
                </label>
                <div className="flex">
                  <input
                    type="file"
                    className="text-gray-500"
                    onChange={(e) => this.handleFileChange(e, "otherdocument")}
                  />
                  {userData?.documents?.other_document && (
                    <div className="mt-2 flex flex-col items-center">
                      <h1 className="text-2xl">Other Document</h1>
                      <a
                        href={userData.documents.other_document}
                        download
                        className="text-teal-600 hover:underline flex items-center"
                      >
                        <FaDownload className="mr-2" /> Download
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={this.handleSubmit}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600"
              >
                Save Changes
              </button>
            </div>
          ) : userData?.user.role_id === 0 ? (
            <h1 className="text-3xl">This is Admin Profile.</h1>
          ) : (
            <h1 className="text-3xl">Profile Fetching...</h1>
          ))}

        {activeTab === "bankProfile" && (
          <div>
            <h1 className="text-3xl pb-4 w-fit mx-auto">Document Details</h1>
            {bankProfiles && bankProfiles.length === 0 && (
              <h1 className="text-xl">No Users Yet in Bank Profile</h1>
            )}
            {bankProfiles.map((profile, index) => (
              <div
                key={index}
                className={`border border-gray-300 p-4 mb-4 rounded-lg ${
                  expandedIndex === index ? "bg-gray-300" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {profile.user.name}
                  </h2>
                  <button
                    onClick={() => this.toggleExpand(index)}
                    className="text-teal-600 hover:underline"
                  >
                    {expandedIndex === index ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>

                {expandedIndex === index && (
                  
                  <div className="mt-4">
                    <p className="text-lg mb-8 border-b-[1px] border-t-[2px] border-black pt-8">
                Document submit date:{" "}
                <span className="text-base">
                  {profile?.documents.submit_date
                    ? new Date(
                      profile?.documents.submit_date
                      ).toLocaleDateString("en-GB")
                    : "N/A"}
                </span>
              </p>
                    <div className="mb-4">
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        // value={profile?.user.name || ""}
                        value={this.state.NameEmailObject[profile.user.id].name}
                        onChange={(e) =>
                          this.handleInputNameChange(
                            profile.user.id,
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        // value={profile?.user.email || ""}
                        value={
                          this.state.NameEmailObject[profile.user.id].email
                        }
                        onChange={(e) =>
                          this.handleInputEmailChange(
                            profile.user.id,
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Pan Card
                      </label>
                      <div className="flex">
                        <input
                          type="file"
                          className="text-gray-500"
                          onChange={(e) => this.handleFileChange(e, "pancard")}
                        />
                        {profile?.documents?.pancard_document && (
                          <div className="flex flex-col items-center">
                            <h1 className="text-2xl">Pancard Document</h1>
                            <img
                              src={profile.documents.pancard_document}
                              alt="Pan Card Preview"
                              className="w-40 h-40 object-contain"
                            />
                            <a
                              href={profile.documents.pancard_document}
                              download
                              className="align-top text-teal-600 hover:underline flex items-center"
                            >
                              <FaDownload className="" /> Download
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Aadhar Card
                      </label>
                      <div className="flex">
                        <input
                          type="file"
                          className="text-gray-500"
                          onChange={(e) =>
                            this.handleFileChange(e, "aadharcard")
                          }
                        />
                        {profile?.documents?.aadhar_document && (
                          <div className="flex flex-col items-center">
                            <h1 className="text-2xl">Aadharcard Image</h1>
                            <img
                              src={profile.documents.aadhar_document}
                              alt="Aadhar Card Preview"
                              className="w-40 h-40 object-contain"
                            />
                            <a
                              href={profile.documents.aadhar_document}
                              download
                              className="text-teal-600 hover:underline flex items-center"
                            >
                              <FaDownload className="mr-2" /> Download Image
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Bank Statement
                      </label>
                      <div className="flex">
                        <input
                          type="file"
                          className="text-gray-500"
                          onChange={(e) =>
                            this.handleFileChange(e, "bankstatement")
                          }
                        />
                        {profile?.documents?.bank_document && (
                          <div className="mt-2 flex flex-col items-center">
                            <h1 className="text-2xl">Bank Statement</h1>
                            <a
                              href={profile.documents.bank_document}
                              download
                              className="text-teal-600 hover:underline flex items-center"
                            >
                              <FaDownload className="" /> Download Pdf
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Other
                      </label>
                      <div className="flex">
                        <input
                          type="file"
                          className="text-gray-500"
                          onChange={(e) =>
                            this.handleFileChange(e, "otherdocument")
                          }
                        />
                        {profile?.documents?.other_document && (
                          <div className="mt-2 flex flex-col items-center">
                            <h1 className="text-2xl">Other Document</h1>
                            <a
                              href={profile.documents.other_document}
                              download
                              className="text-teal-600 hover:underline flex items-center"
                            >
                              <FaDownload className="mr-2" /> Download
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => this.handleSubmitForChild(profile.user.id)}
                      className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <ToastContainer />
      </div>
    );
  }
}

export default ProfileForm;
