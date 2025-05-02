
import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IoIosWarning } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

class ApiUsageAlert extends Component {
    state = {
        error: null,
        schemeHitCount: null,
        hitLimits: 0,
        hitsRemaining: null,
        schemeTypeId: null,
        isVisible: true, // Control visibility of the alert
    };

    componentDidMount() {
        this.getToken();
    }

    getToken = async () => {
        const token = Cookies.get("authToken");
        if (!token) {
            this.setState({ error: "Token not found" });
            return;
        }

        const domain = localStorage.getItem('domain');
        try {
            const response = await axios.get(`${domain}/getuser/${token}`);
            const user = response.data;
            this.setState({ 
                schemeHitCount: user.scheme_hit_count,
                schemeTypeId: user.scheme_type_id
            }, this.fetchSchemeTypes);
        } catch (error) {
            this.setState({ error: "Error fetching user data" });
        }
    };

    fetchSchemeTypes = async () => {
        const domain = localStorage.getItem('domain');

        try {
            const response = await axios.get(`${domain}/getschemetypemaster`);
            const schemeTypes = response.data;

            const schemeType = schemeTypes.find(type => type.id === this.state.schemeTypeId);
            
            if (schemeType) {
                const hitsRemaining = schemeType.hit_limits - this.state.schemeHitCount;
                this.setState({
                    hitLimits: schemeType.hit_limits,
                    schemeType,
                    hitsRemaining
                });
            } else {
                this.setState({ error: "Scheme type not found" });
            }
        } catch (error) {
            this.setState({ error: "Error fetching scheme types" });
        }
    };

    closeAlert = () => {
        this.setState({ isVisible: false });
    };

    render() {
        const { error, hitsRemaining, isVisible } = this.state;

        if (error) {
            return <div className="text-red-600">{error}</div>;
        }

        if (hitsRemaining === null || !isVisible) return null; // Don't render if hitsRemaining is not calculated or alert is closed

        return (
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {hitsRemaining <= 0 ? (
                    <div className="w-fit mx-auto flex items-center p-4 mb-4 text-white bg-red-600 rounded-lg shadow-lg">
                        <IoIosWarning className="mr-2 text-5xl text-white" />
                        <span className='text-xl'>Your free usage of API has ended. Please subscribe to a plan.</span>
                        <button className="ml-auto text-white" onClick={this.closeAlert}>
                        <RxCross1 className="mr-2 ml-6 text-3xl text-white hover:text-red-200" />
                        </button>
                    </div>
                ) : (
                    <div className="w-fit mx-auto flex items-center p-4 mt-4 mb-4 text-white bg-red-400 rounded-lg shadow-lg">
                        <IoIosWarning className="mr-2 text-5xl text-white" />
                        <span className='text-xl'>
                            You are using the free version of DocBoyzApi. You have 
                            <strong className="font-bold underline text-2xl">{` ${hitsRemaining} `}</strong>
                            free hits left.
                        </span>
                        <button className="ml-auto text-white" onClick={this.closeAlert}>
                            <RxCross1 className="mr-2 ml-6 text-3xl text-white hover:text-red-200" />
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default ApiUsageAlert;
