import axios from "axios";
import React, { Component } from "react";
import Select from "react-select";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import withRouter from "./withRouter";
import SchemeTypeAdd from "./SchemeTypeAdd";

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schemaType: "",
      scheme: "",
      fullName: "",
      email: "",
      permissions: [],
      password: "",
      confirmPassword: "",
      billingType: "",
      otc: "",
      plan: "",
      planAmount: "",
      planDuration: "",
      selectScheme: null,
      apiGroups: [],
      apiOptions: [],
      plans: {
        basic: { amount: 15000, duration: 30 },
        starter: { amount: 25000, duration: 60 },
        standard: { amount: 35000, duration: 90 },
        advance: { amount: 45000, duration: 120 },
        growth: { amount: 55000, duration: 150 },
        unicorn: { amount: 65000, duration: 180 },
      },

      // selectedPlanType: 'Nothing Selected',
      apiPlanInputs: [""],
      // customPlanInputs: [""],
      checkedOptions: {},
      enabledInputs: {},
      allCheckedGroups: {},
      inputValues: {},
      selectedPlanTypes: {}, // Store plan type for each option
      customPlanInputs: {},
      inputData: {},
      getPlan: "",
      user: {},
      users: {},
      userId: "",
      renew: ''
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //     this.props.navigate('/dashboard/users')
    // }, 10000);
    const token = Cookies.get("authToken");
    if (!token) {
      this.setState({ error: "Token not found" });
      return;
    }
    this.fetchUserById();
    this.fetchApiOptionsWithId();
    this.fetchSchemeTypes();
    this.fetchApiGroups(token);
    this.fetchApiOptions(token);
  }

  fetchUserById = async () => {
    const domain = localStorage.getItem("domain");
    try {
      const response = await fetch(
        `${domain}/getuserbyid/${this.props.params.id}`
      );
      const data = await response.json();
      
      this.setState({
        users: data,
        schemaType: data.user.scheme_type || "",
        scheme: data.user.scheme_type_id || "",
        fullName: data.user.name || "",
        email: data.user.email || "",
        // permissions: data.userMenuPermission || [],
        password: data.user.password || "",
        confirmPassword: data.user.confirmPassword || "",
        billingType:
          data.user.type === "role_prepaid" ? "Prepaid" : "Postpaid" || "",
        otc: data.user.one_time_comission || "",
        plan: data.plan || "",
        getPlan: data.plan || "",
        planDuration: this.state.plans[data.plan] ? this.state.plans[data.plan].planDuration : '',
      });

      
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  fetchApiOptionsWithId = async () => {
    const domain = localStorage.getItem("domain");
    try {
      const response = await fetch(
        `${domain}/apimaster/${this.props.params.id}`
      );

      const data = await response.json();

      

      // Initialize state variables
      const newCheckedOptions = {};
      const newEnabledInputs = {};
      const newInputValues = {};
      const newInputData = {};

      // Process the fetched data
      this.state.renew = data[data.length - 1]?.renew;
      data.forEach((option) => {
        const {
          id,
          api_group_id,
          scheme_price,
          custom_plan,
          plan_amount,
          payment_slab,
        } = option;

        

        this.setState({ planAmount: plan_amount });
        
        if (custom_plan === "yes") {
          this.state.selectedPlanTypes[option.id] = "Custom plan";

          const schemePrices = option.scheme_price.split(",").map(Number); // Convert to numbers
          const paymentSlabs = option.payment_slab.split(",").map(Number); // Convert to numbers

          // // Iterate over scheme prices and payment slabs
          // schemePrices.forEach((schemePrice, index) => {
          //     // const paymentSlab = paymentSlabs[index] || paymentSlabs[0]; // Use the first payment slab if index exceeds

          //     // Use the id plus index as the key in the object
          //     this.state.customPlanInputs[option.id] = {
          //       [index]:{
          //         from: '', // Set this based on your requirements
          //         groupId: option.api_group_id,
          //         price: schemePrice, // Set the current scheme price
          //         to: paymentSlabs[index] // Set the current payment slab
          //       }
          //     };

          // });

          // Create an array for the new inputs
          //  /***** working *****/
          // const newInputs = schemePrices.map((schemePrice, index) => ({
          //   from: index, // Set this based on your requirements
          //   groupId: option.api_group_id,
          //   id: index + 1, // Assign an id starting from 1
          //   price: schemePrice, // Set the current scheme price
          //   to: paymentSlabs[index] || paymentSlabs[0],
          //   // Use the current payment slab, defaulting to the first if out of bounds
          // }));

          // // Update state with new inputs
          // this.setState((prevState) => ({
          //   customPlanInputs: {
          //     ...prevState.customPlanInputs,
          //     [option.id]: [
          //       ...(prevState.customPlanInputs[option.id] || []), // Preserve existing inputs
          //       ...newInputs, // Spread the new inputs into the existing array
          //     ],
          //   },
          // }));

          newCheckedOptions[id] = true;

          const newInputs = schemePrices.map((schemePrice, index) => ({
            from: index, // Set this based on your requirements
            groupId: option.api_group_id,
            id: index + 1, // Assign an id starting from 1
            price: schemePrice, // Set the current scheme price
            to: paymentSlabs[index] || paymentSlabs[0],
          }));

          // Update state with new inputs, avoiding duplicates
          this.setState((prevState) => {
            const existingInputs = prevState.customPlanInputs[option.id] || [];

            // Create a Set for existing IDs for quick lookup
            const existingIds = new Set(
              existingInputs.map((input) => input.id)
            );

            // Filter new inputs to remove any that already exist
            const uniqueNewInputs = newInputs.filter(
              (newInput) => !existingIds.has(newInput.id)
            );

            return {
              customPlanInputs: {
                ...prevState.customPlanInputs,
                [option.id]: [
                  ...existingInputs, // Preserve existing inputs
                  ...uniqueNewInputs, // Add only unique new inputs
                ],
              },
            };
          });



        }

        if (custom_plan === "no") {
          this.state.selectedPlanTypes[option.id] = "API plan";

          const key = `${id}_${api_group_id}`;

          // Mark the option as checked
          newCheckedOptions[id] = true;

          // Enable the input and set the initial value
          newEnabledInputs[id] = true;
          newInputValues[id] = scheme_price || ""; // Assuming scheme_price is the value to be displayed

          // Initialize the inputData with groupId and optionId
          // if (!newInputData[api_group_id]) {
          //     newInputData[api_group_id] = {};
          // }

          newInputData[key] = {
            optionId: id,
            groupId: api_group_id,
            value: scheme_price,
          };

        }
      });

      // Update the state with the processed data
      this.setState({
        checkedOptions: newCheckedOptions,
        enabledInputs: newEnabledInputs,
        inputValues: newInputValues,
        inputData: newInputData,
      });


    } catch (error) {
      console.error("Error fetching API options:", error);
    }
  };

  fetchSchemeTypes = async () => {
    const domain = localStorage.getItem("domain");
    try {
      const response = await fetch(`${domain}/scheme_types`);

      const data = await response.json();

      this.setState({ selectScheme: data.scheme_types });
    } catch (error) {
      console.error("Error fetching schema types:", error);
    }
  };

  fetchApiGroups = async (token) => {
    const domain = localStorage.getItem("domain");

    try {
      const response = await fetch(`${domain}/apigroup/${token}`);
      const data = await response.json();

      this.setState({ apiGroups: data.api_group || [] }, () => {
        // this.state.apiGroups.forEach(group => {
        //     this.fetchApiOptions(group.id);
        // });
      });
    } catch (error) {
      console.error("Error fetching API groups:", error);
    }
  };

  fetchApiOptions = async (token) => {
    const domain = localStorage.getItem("domain");

    try {
      const response = await fetch(`${domain}/apimaster/${token}`);
     
      const data = await response.json();
     
      this.setState({ apiOptions: data });
      const { apimaster_submenu } = data;
      // this.setState(prevState => ({
      //     apiOptions: {
      //         ...prevState.apiOptions,
      //         [groupId]: apimaster_submenu
      //     }
      // }));
    } catch (error) {
      console.error("Error fetching API options:", error);
    }
  };

  // handlePlanTypeChange = (optionId, event) => {
  //     const planType = event.target.value;
  //     this.setState(prevState => ({
  //         selectedPlanTypes: {
  //             ...prevState.selectedPlanTypes,
  //             [optionId]: planType
  //         }
  //     }));
  // };

  // handleCustomInputChange = (optionId, index, value) => {
  //     this.setState(prevState => ({
  //         customPlanInputs: {
  //             ...prevState.customPlanInputs,
  //             [optionId]: prevState.customPlanInputs[optionId].map((input, i) =>
  //                 i === index ? value : input
  //             )
  //         }
  //     }));
  // };

  // handleAddCustomInput = (optionId) => {
  //     this.setState(prevState => ({
  //         customInputs: {
  //             ...prevState.customInputs,
  //             [optionId]: [...(prevState.customInputs[optionId] || []), { from: '', to: '', price: '' }]
  //         }
  //     }));
  // };

  // handleRemoveCustomInput = (optionId, index) => {
  //     this.setState(prevState => ({
  //         customInputs: {
  //             ...prevState.customInputs,
  //             [optionId]: prevState.customInputs[optionId].filter((_, i) => i !== index)
  //         }
  //     }));
  // };

  handlePlanTypeChange = (optionId, event) => {
    const planType = event.target.value;
    this.setState((prevState) => ({
      selectedPlanTypes: {
        ...prevState.selectedPlanTypes,
        [optionId]: planType,
      },
    }));
  };

  // handleCustomInputChange = (optionId, index, value) => {
  //   this.setState((prevState) => ({
  //     customPlanInputs: {
  //       ...prevState.customPlanInputs,
  //       [optionId]: prevState.customPlanInputs[optionId].map((input, i) =>
  //         i === index ? value : input
  //       ),
  //     },
  //   }));
  // };

  handleCustomInputChange = (groupId, optionId, index, field, value) => {
    
    this.setState((prevState) => ({
      customPlanInputs: {
        ...prevState.customPlanInputs,
        [optionId]: prevState.customPlanInputs[optionId]?.map((input, i) =>
          i === index ? { ...input, [field]: value } : input
        ),
      },
    }));
  };

  handleAddCustomInput = (groupId, optionId) => {
    const newInputId = (this.state.customPlanInputs[optionId]?.length || 0) + 1;
    this.setState((prevState) => ({
      customPlanInputs: {
        ...prevState.customPlanInputs,
        [optionId]: [
          ...(prevState.customPlanInputs[optionId] || []),
          { id: newInputId, groupId, from: "", to: "", price: "" },
        ],
      },
    }));

    
  };

  handleRemoveCustomInput = (optionId, index) => {
    this.setState((prevState) => ({
      customPlanInputs: {
        ...prevState.customPlanInputs,
        [optionId]: prevState.customPlanInputs[optionId].filter(
          (_, i) => i !== index
        ),
      },
    }));
    
  };

  addCustomInput = (optionId) => {
    this.setState((prevState) => ({
      customPlanInputs: {
        ...prevState.customPlanInputs,
        [optionId]: [...(prevState.customPlanInputs[optionId] || []), ""],
      },
    }));
    
  };

  handleSchemaTypeChange = (e) => {
    this.setState({ schemaType: e.target.value, scheme: "" });
  };

  handleSchemeChange = (e) => {
    
    this.setState({ scheme: e.target.value });
  };

  handlePermissionChange = (selectedOptions) => {
    const permissions = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    this.setState({ permissions });
  };

  handleBillingTypeChange = (e) => {
    this.setState({ billingType: e.target.value });
  };

  handlePlanChange = (e) => {
    this.setState({ getPlan: e.target.value });
    const selectedPlan = e.target.value;
    this.setState((prevState) => {
      const planDetails = prevState.plans[selectedPlan] || {};
      const today = new Date();
      const endDate = new Date();
      endDate.setDate(today.getDate() + (planDetails.duration || 0));
      const formattedEndDate = endDate.toISOString().split("T")[0];
      const formattedStartDate = today.toISOString().split("T")[0];
      return {
        plan: selectedPlan,
        planAmount: planDetails.amount || "",
        planDuration: `${formattedStartDate} to ${formattedEndDate}`,
      };
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectAllMKYCDocs = (groupId, isChecked) => {
    const groupOptions = this.state.apiOptions.filter(
      (option) => option.api_group_id === groupId
    );
    const newCheckedOptions = { ...this.state.checkedOptions };
    const newEnabledInputs = { ...this.state.enabledInputs };
    const newInputValues = { ...this.state.inputValues };

    groupOptions.forEach((option) => {
      newCheckedOptions[option.id] = isChecked;
      newEnabledInputs[option.id] = isChecked;
      if (isChecked) {
        newInputValues[option.id] = ""; // Initialize input value if checked
      }
    });

    this.setState({
      checkedOptions: newCheckedOptions,
      enabledInputs: newEnabledInputs,
      allCheckedGroups: {
        ...this.state.allCheckedGroups,
        [groupId]: isChecked,
      },
      inputValues: newInputValues,
    });
  };

  handleApiOptionChange = (optionId, groupId, isChecked) => {
    

    if(!isChecked){
      delete this.state.inputData[`${optionId}_${groupId}`];
      this.state.selectedPlanTypes[optionId] = "Nothing Selected";
    }

    this.setState((prevState) => ({
      checkedOptions: {
        ...prevState.checkedOptions,
        [optionId]: isChecked,
      },
      enabledInputs: {
        ...prevState.enabledInputs,
        [optionId]: isChecked,
      },
      inputValues: {
        ...prevState.inputValues,
        [optionId]: isChecked ? prevState.inputValues[optionId] || "" : "",
      },
    }));
  };

  handleInputChange = (optionId, groupId, event) => {
    const newValue = event.target.value;

    this.setState((prevState) => {
      const newInputData = { ...prevState.inputData };

      // Create a unique key based on optionId and groupId
      const key = `${optionId}_${groupId}`;

      // Update the value in the new format
      newInputData[key] = { optionId, groupId, value: newValue };
    

      return {
        inputValues: {
          ...prevState.inputValues,
          [optionId]: newValue,
        },
        inputData: newInputData,
      };
    });
  };

  // handlePlanTypeChange = (optionId, event) => {
    
  //   const planType = event.target.value;
  //   this.setState((prevState) => ({
  //     selectedPlanTypes: {
  //       ...prevState.selectedPlanTypes,
  //       [optionId]: planType,
  //     },
  //   }));
    
  // };

  addInput = () => {
    this.setState((prevState) => ({
      apiPlanInputs: [...prevState.apiPlanInputs, ""],
    }));
  };

  // addCustomInput = () => {
  //   this.setState((prevState) => ({
  //     customPlanInputs: [...prevState.customPlanInputs, ""],
  //   }));
  // };


  handleSubmit = async (e) => {
    e.preventDefault();

    const { inputData } = this.state; // Access inputData from state
    const {
      schemaType,
      scheme,
      fullName,
      email,
      permissions,
      password,
      confirmPassword,
      billingType,
      otc,
      plan,
      planAmount,
      planDuration,
      apiGroups,
      apiOptions,
      checkedOptions,
      enabledInputs,
      inputValues,
      user,
      planDurationInMonths,
    } = this.state;

    // for custom
    const { customPlanInputs } = this.state;

    let idDataArray = [];

    for (const [optionId, inputs] of Object.entries(customPlanInputs)) {
      const validInputs = inputs.filter((input) => input.price);
      if (validInputs.length > 0) {
        const prices = validInputs.map((input) => input.price).join(",");
        const fromValues = validInputs.map((input) => input.from).join(",");
        const groupId = validInputs[0].groupId;
        const toValues = validInputs.map((input) => input.to).join(",");

        const idData = `${optionId}|${prices}|${groupId}|${
          schemaType === "yes"
            ? "no"
            : schemaType === "production" &&
              this.state.selectedPlanTypes[optionId] === "Custom plan"
            ? "yes"
            : "no"
        }|${this.state.getPlan}|${toValues}/`;
        idDataArray.push(idData);
      }
    }

    // Prepare normal ids from inputData
    const normalIds = Object.values(inputData)
      .map((item) => {
        const demoPrice = item.value;
        const apiId = item.optionId;
        const groupId = item.groupId;
        return `${apiId}|${demoPrice}|${groupId}|${
          schemaType === "demo" ? "no" : "no"
        }|${this.state.getPlan}/null/`;
      })
      .join("");

    // Combine both results
    const ids = `${idDataArray.join("")}${normalIds}`;
    

    const formData = {
      ids,
      scheme_type: schemaType,
      renew: this.state.renew,
      ...(schemaType === "demo" ? { scheme_type_id: scheme } : {}),
      name: fullName,
      email: email,
      menu_ids: permissions,
      password,
      cpassword: confirmPassword,
      rdo: billingType === "Prepaid" ? "role_prepaid" : "role_postpaid",
      one_time_comission: otc,
      user_id: this.props.params.id,
    };

    const authToken = Cookies.get("authToken");

    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    

    // Send the POST request with Axios
    try {
      const domain = localStorage.getItem("domain");
      const response = await axios.post(`${domain}/userupdate`, formData, {
        headers,
      });
    
      if (response.status === 200) {
        toast.success("User Updated Successfully!");
        setTimeout(() => {
          this.props.navigate("/dashboard/users");
        }, 2000);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  render() {
    const {
      schemaType,
      inputData: {},
      inputValues: {},
      selectedPlanTypes: {},
      customPlanInputs: {},
      allCheckedGroups,
      checkedOptions: {},
      enabledInputs: {},
      apiGroups,
      apiOptions,
      selectScheme,
      getPlan,
      scheme,
      fullName,
      email,
      permissions,
      password,
      confirmPassword,
      billingType,
      otc,
      plan,
      planAmount,
      planDuration,
      plans,
      mkycDocs,
      selectedPlanType,
      apiPlanInputs,
      customPlanInputs,
      renew
    } = this.state;

    const permissionOptions = [
      { value: "Users", label: "Users" },
      { value: "Api Master", label: "Api Master" },
      { value: "Report", label: "Report" },
      { value: "Transactions", label: "Transactions" },
      { value: "Scheme Type Master", label: "Scheme Type Master" },
    ];

    return (
      <div className="md:p-10 p-6 md:mt-0 mt-16 max-w-full md:mx-auto bg-red-50 rounded-lg shadow-md">
        {/* Existing form fields */}
        <div className="md:flex md:flex-row flex-col md:space-x-4 mb-6">
          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="schemaType"
            >
              Select Scheme Type
            </label>
            <select
              id="schemaType"
              name="schemaType"
              value={schemaType}
              onChange={this.handleSchemaTypeChange}
              className="w-full p-2 cursor-pointer border border-gray-300 rounded"
            >
              <option value="">Select Scheme Type</option>
              <option value="demo">Demo</option>
              <option value="production">Production</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="scheme"
            >
              Select Scheme
            </label>
            <select
              id="scheme"
              name="schemeId"
              value={scheme}
              onChange={this.handleSchemeChange}
              disabled={schemaType !== "demo"}
              className="w-full p-2 border cursor-pointer border-gray-300 rounded"
            >
              <option value="">Select Scheme</option>
              {selectScheme &&
                selectScheme.map((scheme, index) => (
                  <option name={scheme.id} key={index} value={scheme.id}>
                    {scheme.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            placeholder="Enter Full Name"
            onChange={this.handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2 cursor-pointer">
            User Menu Permission
          </label>
          <Select
            isMulti
            name="userMenuPermissions"
            options={permissionOptions}
            value={permissionOptions.filter((option) =>
              permissions.includes(option.value)
            )}
            onChange={this.handlePermissionChange}
            className="basic-multi-select cursor-pointer"
            classNamePrefix="select"
          />
        </div>

        <div className="flex space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2">
              Billing Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="prepaid"
                name="billingType"
                value="Prepaid"
                checked={billingType === "Prepaid"}
                onChange={this.handleBillingTypeChange}
                className="mr-2"
              />
              <label htmlFor="prepaid" className="text-gray-700">
                Prepaid
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="postpaid"
                name="billingType"
                value="Postpaid"
                checked={billingType === "Postpaid"}
                onChange={this.handleBillingTypeChange}
                className="mr-2"
              />
              <label htmlFor="postpaid" className="text-gray-700">
                Postpaid
              </label>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="otc">
              One Time Commission (OTC)
            </label>
            <input
              type="text"
              placeholder="One Time Commission (OTC)"
              id="otc"
              name="otc"
              value={otc}
              onChange={this.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="border-b-2 pb-4 md:flex md:flex-row flex-col md:space-x-4 mb-6">
          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="plan"
            >
              Select Regtech Plan
            </label>
            <select
              id="plan"
              name="plan"
              value={plan}
              onChange={this.handlePlanChange}
              className="w-full p-2 border cursor-pointer border-gray-300 rounded"
            >
              <option value="">Select Plan</option>
              {Object.keys(plans).map((planName) => (
                <option key={planName} value={planName}>
                  {planName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2">
              Plan Duration
            </label>
            <input
              type="text"
              placeholder="Plan Duration"
              value={planDuration}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2">
              Plan Amount (Rs.)
            </label>
            <input
              type="text"
              placeholder="Plan Amount (Rs.)"
              value={planAmount}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
        </div>

        {/* Demo Section */}
        {schemaType === "demo" && (
          <div className="mb-6 border-[1px] border-black p-8 my-10">
            {apiGroups.map((group) => (
              <div key={group.id} className="mb-6">
                <label className="block text-xl font-bold mb-2 flex items-center text-red-500">
                  <input
                    type="checkbox"
                    name={group.group_name}
                    checked={allCheckedGroups[group.id] || false}
                    onChange={(e) =>
                      this.handleSelectAllMKYCDocs(group.id, e.target.checked)
                    }
                    className="mr-2 text-red-500"
                  />
                  {group.group_name}
                </label>
                {apiOptions
                  .filter((option) => option.api_group_id === group.id)
                  .map((option) => (
                    <div
                      key={option.id}
                      className="md:flex md:flex-row flex-col justify-between items-center mb-4 border-[1px] border-pink-500 p-2"
                    >
                      <div>
                        <input
                          type="checkbox"
                          id={`apiOptions-${option.id}`}
                          checked={
                            this.state.checkedOptions[option.id] || false
                          }
                          onChange={(e) =>
                            this.handleApiOptionChange(
                              option.id,
                              group.id,
                              e.target.checked
                            )
                          }
                          className="mr-2"
                        />
                        <label className="text-gray-700 mr-4">
                          {option.api_name}
                        </label>
                      </div>
                      <div className="flex space-x-4">
                        <input
                          type="text"
                          value={option.admin_price}
                          readOnly
                          className="p-2 border w-1/2 border-gray-300 rounded bg-gray-100"
                        />
                        <input
                          type="text"
                          value={this.state.inputValues[option.id] || ""}
                          onChange={(e) =>
                            this.handleInputChange(option.id, group.id, e)
                          }
                          disabled={!this.state.enabledInputs[option.id]}
                          name="demoPrice"
                          className="p-2 border w-1/2 border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            ))}

            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={this.handleSubmit}
            >
              Add User
            </button>
          </div>
        )}

        {/* scheme===production */}
        {schemaType === "production" && (
          <div className="mb-6">
            {apiGroups.map((group) => (
              <div key={group.id} className="border-[1px] border-black p-8 my-10">
                <label className="block font-bold text-xl mb-2 flex items-center text-red-500">
                  <input
                    type="checkbox"
                    name={group.group_name}
                    checked={allCheckedGroups[group.id] || false}
                    onChange={(e) =>
                      this.handleSelectAllMKYCDocs(group.id, e.target.checked)
                    }
                    className="mr-2"
                  />
                  {group.group_name}
                </label>
                {apiOptions
                  .filter((option) => option.api_group_id === group.id)
                  .map((option) => (
                    <div
                      key={option.id}
                      className="border-[1px] my-4 p-2 border-pink-500 md:flex md:flex-row md:justify-between flex-col"
                    >
                      <div className="">
                        <input
                          type="checkbox"
                          id={`apiOptions-${option.id}`}
                          checked={
                            this.state.checkedOptions[option.id] || false
                          }
                          onChange={(e) =>
                            this.handleApiOptionChange(
                              option.id,
                              group.id,
                              e.target.checked
                            )
                          }
                          className="mr-2"
                        />
                        <label className="text-gray-700 mr-4">
                          {option.api_name}
                        </label>
                      </div>
                      <div className="flex space-x-4">
                        <div className="text-left rounded p-2">
                          <select
                            id={option.id}
                            // name={selectedPlanType}
                            // value={this.state.selectedPlanTypes[option.id] || 'Nothing Selected'}
                            // value={selectedPlanType}
                            name={this.state.selectedPlanTypes[option.id]}
                            value={this.state.selectedPlanTypes[option.id]}
                            onChange={(e) =>
                              this.handlePlanTypeChange(option.id, e)
                            }
                            className="flex-1 p-2 border cursor-pointer border-gray-300 rounded"
                          >
                            <option value="Nothing Selected">
                              Nothing Selected
                            </option>
                            <option value="API plan">API Plan</option>
                            <option value="Custom plan">Custom Plan</option>
                          </select>
                        </div>

                        {this.state.selectedPlanTypes[option.id] !==
                          "Custom plan" && (
                          <div className="flex space-x-4">
                            <input
                              type="text"
                              value={option.admin_price}
                              readOnly
                              className="p-2 border w-1/2 border-gray-300 rounded bg-gray-100"
                            />
                            <input
                              type="text"
                              value={
                                this.state.enabledInputs[option.id]
                                  ? this.state.inputValues[option.id] || ""
                                  : ""
                              }
                              onChange={(e) =>
                                this.handleInputChange(option.id, group.id, e)
                              }
                              disabled={!this.state.enabledInputs[option.id]}
                              name="demoPrice"
                              className="p-2 border w-1/2 border-gray-300 rounded"
                            />
                          </div>
                        )}

                        

                        {this.state.selectedPlanTypes[option.id] ===
                          "Custom plan" && (
                          <div>
                            {this.state.customPlanInputs[option.id]?.length >
                            0 ? (
                              this.state.customPlanInputs[option.id]?.map(
                                (inputValue, index) => (
                                  <div
                                    key={inputValue.id}
                                    className="flex ml-4 gap-x-3 gap-y-2 items-center mb-2"
                                  >
                                    <input
                                      placeholder="range from"
                                      type="text"
                                      value={inputValue.from}
                                      onChange={(e) =>
                                        this.handleCustomInputChange(
                                          group.id, // Pass groupId
                                          option.id,
                                          index,
                                          "from",
                                          e.target.value
                                        )
                                      }
                                      className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                    />
                                    <input
                                      placeholder="range upto"
                                      type="text"
                                      value={inputValue.to}
                                      onChange={(e) =>
                                        this.handleCustomInputChange(
                                          group.id, // Pass groupId
                                          option.id,
                                          index,
                                          "to",
                                          e.target.value
                                        )
                                      }
                                      className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                    />
                                    <input
                                      placeholder="Rs."
                                      type="text"
                                      value={inputValue.price}
                                      onChange={(e) =>
                                        this.handleCustomInputChange(
                                          group.id, // Pass groupId
                                          option.id,
                                          index,
                                          "price",
                                          e.target.value
                                        )
                                      }
                                      className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                    />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.handleRemoveCustomInput(
                                          option.id,
                                          index
                                        )
                                      }
                                      className="bg-red-500 text-white px-4 rounded-lg"
                                    >
                                      -
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.handleAddCustomInput(
                                          group.id,
                                          option.id
                                        )
                                      }
                                      className="bg-blue-500 text-white px-4 rounded-lg"
                                    >
                                      +
                                    </button>
                                  </div>
                                )
                              )
                            ) : (
                              <div className="flex ml-4 gap-x-3 gap-y-2 items-center mb-2">
                                <input
                                  placeholder="range from"
                                  type="text"
                                  value=""
                                  disabled={true}
                                  onChange={(e) =>
                                    this.handleCustomInputChange(
                                      group.id,
                                      option.id,
                                      0,
                                      "from",
                                      e.target.value
                                    )
                                  }
                                  className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                />
                                <input
                                  placeholder="range upto"
                                  type="text"
                                  value=""
                                  disabled={true}
                                  onChange={(e) =>
                                    this.handleCustomInputChange(
                                      group.id,
                                      option.id,
                                      0,
                                      "to",
                                      e.target.value
                                    )
                                  }
                                  className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                />
                                <input
                                  placeholder="Rs."
                                  type="text"
                                  value=""
                                  disabled={true}
                                  onChange={(e) =>
                                    this.handleCustomInputChange(
                                      group.id,
                                      option.id,
                                      0,
                                      "price",
                                      e.target.value
                                    )
                                  }
                                  className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                />
                                <button
                                  type="button"
                                  onClick={() =>
                                    this.handleAddCustomInput(
                                      group.id,
                                      option.id
                                    )
                                  }
                                  className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
                                >
                                  Enable
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={this.handleSubmit}
            >
              Update User
            </button>
          </div>
        )}

        {/* end production */}
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(UserEdit);