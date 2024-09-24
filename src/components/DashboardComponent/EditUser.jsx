import axios from 'axios';
import React, { Component } from 'react';
import Select from 'react-select';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import withRouter from './withRouter';


class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schemaType: '',
            scheme: '',
            fullName: '',
            email: '',
            permissions: [],
            password: '',
            confirmPassword: '',
            billingType: '',
            otc: '',
            plan: '',
            planAmount: '',
            planDuration: '',
            selectScheme: null,
            apiGroups: [],
            apiOptions: [],
            plans: {
                'basic': { amount: 15000, duration: 30 },
                'starter': { amount: 25000, duration: 60 },
                'standard': { amount: 35000, duration: 90 },
                'advance': { amount: 45000, duration: 120 },
                'growth': { amount: 55000, duration: 150 },
                'unicorn': { amount: 65000, duration: 180 },
            },

            // selectedPlanType: 'Nothing Selected',
            apiPlanInputs: [''],
            customPlanInputs: [''],
            checkedOptions: {},
            enabledInputs: {},
            allCheckedGroups: {},
            inputValues: {},
            selectedPlanTypes: {}, // Store plan type for each option
            customPlanInputs: {},
            inputData: {},
            getPlan: '',
            user: {},
            users: {},
            userId: '',
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
        try {
            const response = await fetch(`http://localhost:8000/api/getuserbyid/${this.props.params.id}`);
            const data = await response.json();
            this.setState({
                users: data,
                schemaType: data.user.scheme_type || '',
                scheme: data.user.scheme_type_id || '',
                fullName: data.user.name || '',
                email: data.user.email || '',
                // permissions: data.userMenuPermission || [],
                password: data.user.password || '',
                confirmPassword: data.user.confirmPassword || '',
                billingType: data.user.type === 'role_prepaid' ? 'Prepaid' : 'Postpaid'  || '',
                otc: data.user.one_time_comission || '',
                plan: data.plan || '',})
            console.log('databyid: ',data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    // fetchApiOptionsWithId = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:8000/api/apimaster/${this.props.params.id}`);
    //         const data = await response.json();
    //         console.log('withId: ', data);
    //         } catch (error) {
    //         console.error('Error fetching API options:', error);
    //     }
    // }



    // fetchApiOptionsWithId = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:8000/api/apimaster/${this.props.params.id}`);
    //         const data = await response.json();
    //         console.log('withId: ', data);
    
    //         // Initialize state with fetched data
    //         const newCheckedOptions = {};
    //         const newEnabledInputs = {};
    //         const newInputValues = {};
    
    //         data.forEach(option => {
    //             newCheckedOptions[option.id] = true; // Assuming all options should be checked
    //             newEnabledInputs[option.id] = true; // Enable all inputs
    //             newInputValues[option.id] = option.scheme_price || ''; // Set scheme price
    //         });
    
    //         this.setState({
    //             apiOptions: data,
    //             checkedOptions: newCheckedOptions,
    //             enabledInputs: newEnabledInputs,
    //             inputValues: newInputValues
    //         });
    
    //     } catch (error) {
    //         console.error('Error fetching API options:', error);
    //     }
    // };



    // fetchApiOptionsWithId = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:8000/api/apimaster/${this.props.params.id}`);
    //         const data = await response.json();
    
    //         console.log('Fetched API Options:', data);
    
    //         // Process fetched data to set initial state
    //         const newCheckedOptions = {};
    //         const newEnabledInputs = {};
    //         const newInputValues = {};
    
    //         data.forEach(option => {
    //             const { id, api_group_id, scheme_price } = option;
    
    //             // Mark the option as checked
    //             newCheckedOptions[id] = true;
    
    //             // Enable input and set the initial value
    //             newEnabledInputs[id] = true;
    //             newInputValues[id] = scheme_price || '';  // Assuming scheme_price is the value to be displayed
    
    //             // Optionally, store detailed data
    //             this.setState(prevState => {
    //                 const newInputData = { ...prevState.inputData };
                    
    //                 // Initialize nested structure if not exists
    //                 if (!newInputData[api_group_id]) {
    //                     newInputData[api_group_id] = {};
    //                 }
                    
    //                 // Update the value in the nested structure
    //                 newInputData[api_group_id][id] = { optionId: id, groupId: api_group_id, value: scheme_price };
                    
    //                 return {
    //                     inputData: newInputData,
    //                     checkedOptions: newCheckedOptions,
    //                     enabledInputs: newEnabledInputs,
    //                     inputValues: newInputValues
    //                 };
    //             });
    //         });
    
    //         console.log('State after fetching:', this.state);
    
    //     } catch (error) {
    //         console.error('Error fetching API options:', error);
    //     }
    // };







    fetchApiOptionsWithId = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/apimaster/${this.props.params.id}`);
            const data = await response.json();
            
            console.log('Fetched API Options:', data);
    
            // Initialize state variables
            const newCheckedOptions = {};
            const newEnabledInputs = {};
            const newInputValues = {};
            const newInputData = {};
    
            // Process the fetched data
            data.forEach(option => {
                const { id, api_group_id, scheme_price } = option;

                const key = `${id}_${api_group_id}`;
    
                // Mark the option as checked
                newCheckedOptions[id] = true;
    
                // Enable the input and set the initial value
                newEnabledInputs[id] = true;
                newInputValues[id] = scheme_price || '';  // Assuming scheme_price is the value to be displayed
    
                // Initialize the inputData with groupId and optionId
                // if (!newInputData[api_group_id]) {
                //     newInputData[api_group_id] = {};
                // }
                
                newInputData[key] = { optionId: id, groupId: api_group_id, value: scheme_price };
                console.log('newInputData: ',newInputData);
            });
    
            // Update the state with the processed data
            this.setState({
                checkedOptions: newCheckedOptions,
                enabledInputs: newEnabledInputs,
                inputValues: newInputValues,
                inputData: newInputData
            });
    
            console.log('State after fetching:', this.state);
    
        } catch (error) {
            console.error('Error fetching API options:', error);
        }
    };
    
    
    


    fetchSchemeTypes = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/scheme_types');
            const data = await response.json();
            this.setState({ selectScheme: data.scheme_types });
        } catch (error) {
            console.error('Error fetching schema types:', error);
        }
    }

    fetchApiGroups = async (token) => {
        console.log(token);
        
            try {
                const response = await fetch(`http://localhost:8000/api/apigroup/${token}`);
                const data = await response.json();
                console.log(data);
                this.setState({ apiGroups: data.api_group || [] }, () => {
                    // this.state.apiGroups.forEach(group => {
    
                    //     this.fetchApiOptions(group.id);
                    // });
                });
            } catch (error) {
                console.error('Error fetching API groups:', error);
            }

    }

    fetchApiOptions = async (token) => {
        
        try {
            const response = await fetch(`http://localhost:8000/api/apimaster/${token}`);
            const data = await response.json();
            console.log('options: ', data);
            this.setState({apiOptions: data});
            const { apimaster_submenu } = data;
            // this.setState(prevState => ({
            //     apiOptions: {
            //         ...prevState.apiOptions,
            //         [groupId]: apimaster_submenu
            //     }
            // }));
        } catch (error) {
            console.error('Error fetching API options:', error);
        }
    }

    handlePlanTypeChange = (optionId, event) => {
        const planType = event.target.value;
        this.setState(prevState => ({
            selectedPlanTypes: {
                ...prevState.selectedPlanTypes,
                [optionId]: planType
            }
        }));
    };

    handleCustomInputChange = (optionId, index, value) => {
        this.setState(prevState => ({
            customPlanInputs: {
                ...prevState.customPlanInputs,
                [optionId]: prevState.customPlanInputs[optionId].map((input, i) =>
                    i === index ? value : input
                )
            }
        }));
    };


    handleAddCustomInput = (optionId) => {
        this.setState(prevState => ({
            customInputs: {
                ...prevState.customInputs,
                [optionId]: [...(prevState.customInputs[optionId] || []), { from: '', to: '', price: '' }]
            }
        }));
    };

    handleRemoveCustomInput = (optionId, index) => {
        this.setState(prevState => ({
            customInputs: {
                ...prevState.customInputs,
                [optionId]: prevState.customInputs[optionId].filter((_, i) => i !== index)
            }
        }));
    };

    addCustomInput = (optionId) => {
        this.setState(prevState => ({
            customPlanInputs: {
                ...prevState.customPlanInputs,
                [optionId]: [...(prevState.customPlanInputs[optionId] || []), '']
            }
        }));
    };


    handleSchemaTypeChange = (e) => {
        this.setState({ schemaType: e.target.value, scheme: '' });
    };

    handleSchemeChange = (e) => {
        console.log(e.target.value)
        this.setState({ scheme: e.target.value });
    };

    handlePermissionChange = (selectedOptions) => {
        const permissions = selectedOptions ? selectedOptions.map(option => option.value) : [];
        this.setState({ permissions });
    };

    handleBillingTypeChange = (e) => {
        this.setState({ billingType: e.target.value });
    };

    handlePlanChange = (e) => {
        this.setState({ getPlan: e.target.value });
        const selectedPlan = e.target.value;
        this.setState(prevState => {
            const planDetails = prevState.plans[selectedPlan] || {};
            const today = new Date();
            const endDate = new Date();
            endDate.setDate(today.getDate() + (planDetails.duration || 0));
            const formattedEndDate = endDate.toISOString().split('T')[0];
            const formattedStartDate = today.toISOString().split('T')[0];
            return {
                plan: selectedPlan,
                planAmount: planDetails.amount || '',
                planDuration: `${formattedStartDate} to ${formattedEndDate}`
            };
        });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSelectAllMKYCDocs = (groupId, isChecked) => {
        const groupOptions = this.state.apiOptions.filter(option => option.api_group_id === groupId);
        const newCheckedOptions = { ...this.state.checkedOptions };
        const newEnabledInputs = { ...this.state.enabledInputs };
        const newInputValues = { ...this.state.inputValues };

        groupOptions.forEach(option => {
            newCheckedOptions[option.id] = isChecked;
            newEnabledInputs[option.id] = isChecked;
            if (isChecked) {
                newInputValues[option.id] = ''; // Initialize input value if checked
            }
        });

        this.setState({
            checkedOptions: newCheckedOptions,
            enabledInputs: newEnabledInputs,
            allCheckedGroups: {
                ...this.state.allCheckedGroups,
                [groupId]: isChecked
            },
            inputValues: newInputValues
        });
    };

    // Handle individual option change
    // handleApiOptionChange = (optionId, groupId, isChecked) => {
    //     console.log('api: ', optionId, groupId, isChecked)
    //     this.setState(prevState => ({
    //         checkedOptions: {
    //             ...prevState.checkedOptions,
    //             [optionId]: isChecked
    //         },
    //         enabledInputs: {
    //             ...prevState.enabledInputs,
    //             [optionId]: isChecked
    //         },
    //         inputValues: {
    //             ...prevState.inputValues,
    //             [optionId]: isChecked ? (prevState.inputValues[optionId] || '') : ''
    //         }
    //     }));
    // };


    handleApiOptionChange = (optionId, groupId, isChecked) => {
        console.log('api: ', optionId, groupId, isChecked);
    
        this.setState(prevState => ({
            checkedOptions: {
                ...prevState.checkedOptions,
                [optionId]: isChecked
            },
            enabledInputs: {
                ...prevState.enabledInputs,
                [optionId]: isChecked
            },
            inputValues: {
                ...prevState.inputValues,
                [optionId]: isChecked ? (prevState.inputValues[optionId] || '') : ''
            }
        }));
    };
    


    // Handle change in the second input field
    // handleInputChange = (optionId, groupId, event) => {
    //     const newValue = event.target.value;
    //     this.setState(prevState => ({
    //         inputValues: {
    //             ...prevState.inputValues,
    //             [optionId]: newValue
    //         }
    //     }));
    // };


    // handleInputChange = (optionId, groupId, event) => {
    //     const newValue = event.target.value;

    //     this.setState(prevState => {
    //         const newInputData = { ...prevState.inputData };

    //         // Construct a unique key using optionId and groupId
    //         const key = `${optionId}_${groupId}`;
    //         newInputData[key] = { optionId, groupId, value: newValue };
    //         console.log(newInputData);

    //         return {
    //             inputValues: {
    //                 ...prevState.inputValues,
    //                 [optionId]: newValue
    //             },
    //             inputData: newInputData

                
    //         };
            
    //     });
    // };




    // handleInputChange = (optionId, groupId, event) => {
    //     const newValue = event.target.value;
    
    //     this.setState(prevState => {
    //         const newInputData = { ...prevState.inputData };
    
    //         // Update the value in the nested structure
    //         if (!newInputData[groupId]) {
    //             newInputData[groupId] = {};
    //         }
            
    //         newInputData[groupId][optionId] = { optionId, groupId, value: newValue };
    //         console.log('input: ',newInputData)
    
    //         return {
    //             inputValues: {
    //                 ...prevState.inputValues,
    //                 [optionId]: newValue
    //             },
    //             inputData: newInputData
    //         };
    //     });
    // };



    handleInputChange = (optionId, groupId, event) => {
        const newValue = event.target.value;
    
        this.setState(prevState => {
            const newInputData = { ...prevState.inputData };
    
            // Create a unique key based on optionId and groupId
            const key = `${optionId}_${groupId}`;
    
            // Update the value in the new format
            newInputData[key] = { optionId, groupId, value: newValue };
            console.log('input: ', newInputData);
    
            return {
                inputValues: {
                    ...prevState.inputValues,
                    [optionId]: newValue
                },
                inputData: newInputData
            };
        });
    };
    
    




    handlePlanTypeChange = (optionId, event) => {
        console.log(event.target.value)
        const planType = event.target.value;
        this.setState(prevState => ({
            selectedPlanTypes: {
                ...prevState.selectedPlanTypes,
                [optionId]: planType
            }
        }));
    };

    addInput = () => {
        this.setState(prevState => ({
            apiPlanInputs: [...prevState.apiPlanInputs, '']
        }));
    };

    addCustomInput = () => {
        this.setState(prevState => ({
            customPlanInputs: [...prevState.customPlanInputs, '']
        }));
    };

    // form data
    handleSubmit = async(e) => {
        e.preventDefault();
        const { inputData } = this.state; // Access inputData from state
        console.log('inputData:', inputData);
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
            userId,
        } = this.state;

        console.log('forminput: ',inputData)

        const ids = Object.values(inputData).map(item => {
            console.log('item: ',item)
            const demoPrice = item.value;
            const apiId = item.optionId;
            const groupId = item.groupId;
            return `${apiId}|${demoPrice}|${groupId}|${schemaType === 'demo' ? 'no' : 'no'}|${plan}/null/`;
        }).join('');

        const formData = {
            ids,
            // delete_ids: '15,17,18,19,34,35,...',
            scheme_type: schemaType,
            renew: false,
            // ...(schemaType === 'Demo' ? {scheme_type:'demo'} : {scheme_type:'production'}),
            // scheme_type_id: scheme,
            ...(schemaType === 'demo' ? { scheme_type_id: scheme } : {}),
            name: fullName,
            email: email,
            user_id: this.props.params.id,
            // menu_ids: permissions,
            ...(permissions.length > 0 ? { menu_ids: permissions } : {}),
            // password,
            // cpassword: confirmPassword,
            rdo: billingType === 'Prepaid' ? 'role_prepaid' : 'role_postpaid',
            one_time_comission: otc,
        };

        console.log('formdata: ',formData);

        const authToken = Cookies.get('authToken');

        const headers = {
            'Authorization': `Bearer ${authToken}`,
        };
        
        // Send the POST to update request with Axios
        try{
        const response = await axios.post('http://localhost:8000/api/userupdate', formData, { headers });
        console.log(response);
        if(response.status === 200){
            toast.success('User Updated Successfully!');
                setTimeout(() => {
                    this.props.navigate('/dashboard/users');
                }, 2000);
        }
        }catch(error){
            console.log('Error: ', error);
        }
    };



    render() {
        const { schemaType, inputData: { }, inputValues: { }, selectedPlanTypes: { }, customPlanInputs: { }, allCheckedGroups, checkedOptions: { }, enabledInputs: { }, apiGroups, apiOptions, selectScheme, getPlan, scheme, fullName, email, permissions, password, confirmPassword, billingType, otc, plan, planAmount, planDuration, plans, mkycDocs, selectedPlanType, apiPlanInputs, customPlanInputs } = this.state;

        const permissionOptions = [
            { value: 'Users', label: 'Users' },
            { value: 'Api Master', label: 'Api Master' },
            { value: 'Report', label: 'Report' },
            { value: 'Transactions', label: 'Transactions' },
            { value: 'Scheme Type Master', label: 'Scheme Type Master' }
        ];

        return (
            <div className="md:p-10 p-6 md:mt-0 mt-16 max-w-full md:mx-auto bg-red-50 rounded-lg shadow-md">
                {/* Existing form fields */}
                <div className="md:flex md:flex-row flex-col md:space-x-4 mb-6">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="schemaType">Select Scheme Type</label>
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
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="scheme">Select Scheme</label>
                        <select
                            id="scheme"
                            name="schemeId"
                            value={scheme}
                            onChange={this.handleSchemeChange}
                            disabled={schemaType !== 'demo'}
                            className="w-full p-2 border cursor-pointer border-gray-300 rounded"
                        >
                            <option value="">Select Scheme</option>
                            {selectScheme && selectScheme.map((scheme, index) => (
                                <option name={scheme.id} key={index} value={scheme.id}>{scheme.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        placeholder='Enter Full Name'
                        onChange={this.handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder='Enter Email'
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2 cursor-pointer">User Menu Permission</label>
                    <Select
                        isMulti
                        name='userMenuPermissions'
                        options={permissionOptions}
                        value={permissionOptions.filter(option => permissions.includes(option.value))}
                        onChange={this.handlePermissionChange}
                        className="basic-multi-select cursor-pointer"
                        classNamePrefix="select"
                    />
                </div>
                
                <div className="flex space-x-4 mb-6">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-bold mb-2">Billing Type</label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="prepaid"
                                name="billingType"
                                value="Prepaid"
                                checked={billingType === 'Prepaid'}
                                onChange={this.handleBillingTypeChange}
                                className="mr-2"
                            />
                            <label htmlFor="prepaid" className="text-gray-700">Prepaid</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="postpaid"
                                name="billingType"
                                value="Postpaid"
                                checked={billingType === 'Postpaid'}
                                onChange={this.handleBillingTypeChange}
                                className="mr-2"
                            />
                            <label htmlFor="postpaid" className="text-gray-700">Postpaid</label>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mb-6">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="otc">One Time Commission (OTC)</label>
                        <input
                            type="text"
                            placeholder='One Time Commission (OTC)'
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
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="plan">Select Regtech Plan</label>
                        <select
                            id="plan"
                            name="plan"
                            value={plan}
                            onChange={this.handlePlanChange}
                            className="w-full p-2 border cursor-pointer border-gray-300 rounded"
                        >
                            <option value="">Select Plan</option>
                            {Object.keys(plans).map(planName => (
                                <option key={planName} value={planName}>{planName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 font-bold mb-2">Plan Duration</label>
                        <input
                            type="text"
                            placeholder='Plan Duration'
                            value={planDuration}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 font-bold mb-2">Plan Amount (Rs.)</label>
                        <input
                            type="text"
                            placeholder='Plan Amount (Rs.)'
                            value={planAmount}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        />
                    </div>
                </div>

                {/* Demo Section */}
                {/* {schemaType === 'demo' && (
                    <div className="mb-6">
                        {apiGroups.map((group) => (
                            <div key={group.id} className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2 flex items-center">
                                    <input
                                        type="checkbox"
                                        name={group.group_name}
                                        checked={allCheckedGroups[group.id] || false}
                                        onChange={(e) => this.handleSelectAllMKYCDocs(group.id, e.target.checked)}
                                        className="mr-2"
                                    />
                                    {group.group_name}
                                </label>
                                {apiOptions.filter(option => option.api_group_id === group.id).map(option => (
                                    <div key={option.id} className="md:flex md:flex-row flex-col justify-between items-center mb-4">
                                        <div>
                                            <input
                                                type="checkbox"
                                                id={`apiOptions-${option.id}`}
                                                checked={this.state.checkedOptions[option.id] || false}
                                                onChange={(e) => this.handleApiOptionChange(option.id, group.id, e.target.checked)}
                                                className="mr-2"
                                            />
                                            <label className="text-gray-700 mr-4">{option.api_name}</label>
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
                                                value={this.state.enabledInputs[option.id] ? this.state.inputValues[option.id] || '' : ''}
                                                onChange={(e) => this.handleInputChange(option.id, group.id, e)}
                                                disabled={!this.state.enabledInputs[option.id]}
                                                name='demoPrice'
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
                )
                } */}

                {/* Demo Section */}
{schemaType === 'demo' && (
    <div className="mb-6">
        {/* {apiGroups.map((group) => (
            <div key={group.id} className="mb-6">
                <label className="block text-gray-700 font-bold mb-2 flex items-center">
                    <input
                        type="checkbox"
                        name={group.group_name}
                        checked={allCheckedGroups[group.id] || false}
                        onChange={(e) => this.handleSelectAllMKYCDocs(group.id, e.target.checked)}
                        className="mr-2"
                    />
                    {group.group_name}
                </label>
                {apiOptions.filter(option => option.api_group_id === group.id).map(option => (
                    <div key={option.id} className="md:flex md:flex-row flex-col justify-between items-center mb-4">
                        <div>
                            <input
                                type="checkbox"
                                id={`apiOptions-${option.id}`}
                                checked={this.state.checkedOptions[option.id] || false}
                                onChange={(e) => this.handleApiOptionChange(option.id, group.id, e.target.checked)}
                                className="mr-2"
                            />
                            <label className="text-gray-700 mr-4">{option.api_name}</label>
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
                                value={this.state.inputValues[option.id] || ''}
                                onChange={(e) => this.handleInputChange(option.id, group.id, e)}
                                disabled={!this.state.enabledInputs[option.id]}
                                name='demoPrice'
                                className="p-2 border w-1/2 border-gray-300 rounded"
                            />
                        </div>
                    </div>
                ))}
            </div>
        ))} */}



{apiGroups.map((group) => (
    <div key={group.id} className="mb-6">
        <label className="block text-gray-700 font-bold mb-2 flex items-center">
            <input
                type="checkbox"
                name={group.group_name}
                checked={allCheckedGroups[group.id] || false}
                onChange={(e) => this.handleSelectAllMKYCDocs(group.id, e.target.checked)}
                className="mr-2"
            />
            {group.group_name}
        </label>
        {apiOptions.filter(option => option.api_group_id === group.id).map(option => (
            <div key={option.id} className="md:flex md:flex-row flex-col justify-between items-center mb-4">
                <div>
                    <input
                        type="checkbox"
                        id={`apiOptions-${option.id}`}
                        checked={this.state.checkedOptions[option.id] || false}
                        onChange={(e) => this.handleApiOptionChange(option.id, group.id, e.target.checked)}
                        className="mr-2"
                    />
                    <label className="text-gray-700 mr-4">{option.api_name}</label>
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
                        value={this.state.inputValues[option.id] || ''}
                        onChange={(e) => this.handleInputChange(option.id, group.id, e)}
                        disabled={!this.state.enabledInputs[option.id]}
                        name='demoPrice'
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
                {schemaType === 'production' && (
                    <div className="mb-6">
                        {apiGroups.map(group => (
                            <div key={group.id}>
                                <label className="block text-gray-700 font-bold mb-2 flex items-center">
                                    <input
                                        type="checkbox"
                                        name={group.group_name}
                                        checked={allCheckedGroups[group.id] || false}
                                        onChange={(e) => this.handleSelectAllMKYCDocs(group.id, e.target.checked)}
                                        className="mr-2"
                                    />
                                    {group.group_name}
                                </label>
                                {apiOptions.filter(option => option.api_group_id === group.id).map(option => (
                                    <div key={option.id} className="md:flex md:flex-row md:justify-between flex-col">
                                        <div>
                                            <input
                                                type="checkbox"
                                                id={`apiOptions-${option.id}`}
                                                checked={this.state.checkedOptions[option.id] || false}
                                                onChange={(e) => this.handleApiOptionChange(option.id, group.id, e.target.checked)}
                                                className="mr-2"
                                            />
                                            <label className="text-gray-700 mr-4">{option.api_name}</label>
                                        </div>
                                        <div className='flex space-x-4'>
                                            <div className="text-left border border-gray-300 rounded p-2">
                                                <select
                                                    id={option.id}
                                                    name={selectedPlanType}
                                                    // value={this.state.selectedPlanTypes[option.id] || 'Nothing Selected'}
                                                    value={selectedPlanType}
                                                    onChange={(e) => this.handlePlanTypeChange(option.id, e)}
                                                    className="flex-1 p-2 border cursor-pointer border-gray-300 rounded"
                                                >
                                                    <option value="Nothing Selected">Nothing Selected</option>
                                                    <option value="API plan">API Plan</option>
                                                    <option value="Custom plan">Custom Plan</option>
                                                </select>
                                            </div>


                                            {/* {this.state.selectedPlanTypes !== 'API plan' && (
                                            <div className="flex space-x-4">
                                                <input
                                                    type="text"
                                                    value="10"
                                                    readOnly
                                                    className="p-2 border w-1/2 border-gray-300 rounded bg-gray-100"
                                                />
                                                <input
                                                    type="text"
                                                    value={this.state.inputValues[option.id] || ''}
                                                    onChange={(e) => this.handleInputChange(option.id, e)}
                                                    disabled={!this.state.enabledInputs[option.id]}
                                                    className="p-2 border w-1/2 border-gray-300 rounded"
                                                />
                                            </div>
                                        )} */}

                                            {this.state.selectedPlanTypes[option.id] !== 'Custom plan' && (
                                                <div className="flex space-x-4">
                                                    <input
                                                        type="text"
                                                        value={option.admin_price}
                                                        readOnly
                                                        className="p-2 border w-1/2 border-gray-300 rounded bg-gray-100"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={this.state.enabledInputs[option.id] ? this.state.inputValues[option.id] || '' : ''}
                                                        onChange={(e) => this.handleInputChange(option.id, group.id, e)}
                                                        disabled={!this.state.enabledInputs[option.id]}
                                                        name='demoPrice'
                                                        className="p-2 border w-1/2 border-gray-300 rounded"
                                                    />
                                                </div>
                                            )}

                                            {this.state.selectedPlanTypes[option.id] === 'Custom plan' && (
                                                <div>
                                                    {/* {customPlanInputs[option.id]?.map((input, index) => ( */}
                                                    <div className="flex ml-4 gap-x-3 gap-y-2 items-center mb-2">
                                                        <input
                                                            placeholder='range from'
                                                            type="text"
                                                            value=''
                                                            onChange={(e) => this.handleCustomInputChange(option.id, index, e.target.value)}
                                                            className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                                        />
                                                        <input
                                                            placeholder='range upto'
                                                            type="text"
                                                            value=''
                                                            onChange={(e) => this.handleCustomInputChange(option.id, index, e.target.value)}
                                                            className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                                        />
                                                        <input
                                                            placeholder='Rs. '
                                                            type="text"
                                                            value=''
                                                            onChange={(e) => this.handleCustomInputChange(option.id, index, e.target.value)}
                                                            className="py-1 px-2 border border-gray-300 rounded w-1/4"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => this.addCustomInput(option.id)}
                                                            className="bg-blue-500 text-white px-4 rounded-lg"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    {/* ))} */}
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
                            Add User
                        </button>
                    </div>
                )}

                {/* end production */}
                <ToastContainer />
            </div>
        );
    }
}

// export default function EditUserWithNavigate(props) {
//     const navigate = useNavigate();
//     return <UserEdit {...props} navigate={navigate} />;
// }

export default withRouter(UserEdit);