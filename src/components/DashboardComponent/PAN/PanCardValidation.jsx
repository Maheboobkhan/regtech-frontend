import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for handling cookies

class PanCardVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panNumber: '',
            panCardInfo: null, // To store PAN card information
            error: null,     // To store error message
        };
    }

    handleInputChange = (event) => {
        this.setState({ panNumber: event.target.value });
    };

    handleVerifyClick = async () => {
        const { panNumber } = this.state;
        const accessToken = Cookies.get('authToken'); // Fetch access token from cookies
        let response;

        if (!panNumber) {
            this.setState({ error: 'Please enter a PAN number' });
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append('pan_number', panNumber);

        try {
            response = await axios.post(
                'http://regtechapi.in/api/pancard',
                formData,
                {
                    headers: {
                        'AccessToken': accessToken,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log('API Response:', response.data);

            // Assuming the API returns data with keys 'fullName', 'panNumber', and 'category'
            if (response.data.pancard.data) {
                this.setState({
                    panCardInfo: response.data.pancard.data,
                    error: null,
                });
            }
        } catch (error) {
            this.setState({
                panCardInfo: null,
                error: response.data.message,
            });
        }
    };

    render() {
        const { panNumber, panCardInfo, error } = this.state;

        return (
            <div className="flex flex-col items-center min-h-screen bg-white font-montserrat">
                <div className="rounded-lg shadow-lg mt-6 text-black md:w-1/2 border-[1.5px] border-[#00acc1]">
                    <div className="flex justify-between mb-6 bg-teal-400 px-6 py-4 text-white rounded-tl-lg rounded-tr-lg">
                        <h1 className="text-xl font-semibold">PAN CARD Verification</h1>
                        <button
                            onClick={this.handleVerifyClick}
                            className="w-fit bg-white transition-all text-teal-400 hover:text-white p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-white"
                        >
                            PAN API
                        </button>
                    </div>
                    <div className="mb-4 w-3/4 mx-auto">
                        {error && <div className="bg-red-500 w-full px-2 py-2 text-white text-sm mb-2">{error}</div>}
                        <label className="block text-lg">Pan Number</label>
                        <input
                            type="text"
                            value={panNumber}
                            onChange={this.handleInputChange}
                            placeholder="Ex: ABCDE1234N"
                            className="w-full p-2 border border-teal-400 rounded"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            onClick={this.handleVerifyClick}
                            className="w-fit px-6 mt-4 mb-4 bg-teal-400 transition-all text-white hover:text-teal-500 p-2 active:bg-teal-100 rounded hover:border-[1.5px] hover:bg-transparent hover:border-[#00acc1]"
                        >
                            Verify
                        </button>
                    </div>
                </div>

                {/* Display PAN card information below */}
                {panCardInfo &&
                    <div className="mt-4 md:w-1/2 rounded-lg border-[1.5px] border-[#00acc1]">
                        {panCardInfo && (
                            <div className="bg-gray-100 rounded-lg text-black">
                                <h2 className="text-lg px-3 py-3 bg-green-500 rounded-tl-lg rounded-tr-lg text-white font-semibold">PAN Card Details</h2>
                                <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Full Name:</strong>
                                    {panCardInfo.full_name}

                                </p>
                                <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>PAN Number:</strong>
                                    {panCardInfo.pan_number}

                                </p>
                                <p className='px-3 py-2 flex gap-x-3 text-sm'><strong>Category:</strong>
                                    {panCardInfo.category}

                                </p>
                            </div>
                        )}
                    </div>
                }
            </div>
        );
    }
}

export default PanCardVerification;
