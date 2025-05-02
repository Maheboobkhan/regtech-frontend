import React, { Component } from 'react';
import { RxCross2 } from "react-icons/rx";

class WalletComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            balance: 2708.38,
        };
    }

    handleInputChange = (e) => {
        this.setState({ amount: e.target.value });
    };

    handleOptionClick = (value) => {
        this.setState({ amount: value });
    };

    render() {
        const { amount, balance } = this.state;
        const tax = (amount * 0.18).toFixed(2);
        const totalAmount = (parseFloat(amount) + parseFloat(tax)).toFixed(2);

        return (
            <div className="container mx-auto p-6 bg-black text-white shadow-lg max-w-screen-sm w-full fixed right-0">
                <div className='flex'>
                    <RxCross2 className='text-2xl font-bold text-white' />
                    <h2 className="text-2xl font-semibold mb-4 text-[#e27daa]">Current Wallet Balance: {balance.toFixed(2)} ₹</h2>
                </div>

                <label htmlFor="amount" className="block text-lg mb-2">Add Amount in Wallet</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={this.handleInputChange}
                    placeholder="Enter Wallet Amount"
                    className="text-black w-full p-2 mb-4 border border-gray-300 rounded-md"
                />

                <div className="flex space-x-2 mb-4">
                    <button
                        onClick={() => this.handleOptionClick('20000')}
                        className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
                    >+20,000</button>
                    <button
                        onClick={() => this.handleOptionClick('50000')}
                        className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
                    >+50,000</button>
                    <button
                        onClick={() => this.handleOptionClick('100000')}
                        className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
                    >+1,00,000</button>
                </div>

                <div className="flex justify-between text-lg mb-4">
                    <div className="flex-1">
                        <p>Tax (18%):</p>
                        <p>Total Amount:</p>
                    </div>
                    <div className="flex-1 text-right">
                        <p>{tax} ₹</p>
                        <p>{amount} ₹</p>
                    </div>
                </div>

                <button className="w-full bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none">
                    Proceed to Pay
                </button>
            </div>
        );
    }
}

export default WalletComponent;
