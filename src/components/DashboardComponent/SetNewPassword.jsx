import React, { Component } from 'react';
import axios from 'axios';
import withRouter from './withRouter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SetNewPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            confirmPassword: '',
            error: '',
            success: '',
            user: {},
        };
    }

    componentDidMount(){
        this.getUserById();
    }

    getUserById = async() => {
        const domain = localStorage.getItem('domain');
        const respnse = await axios.get(`${domain}/getuser/${this.props.params.id}`);
        this.setState({user: respnse.data});
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { newPassword, confirmPassword, userId, token } = this.state;

        if (newPassword !== confirmPassword) {
            this.setState({ error: 'Passwords do not match' });
            return;
        }
        const domain = localStorage.getItem('domain');

        try {
            const response = await axios.post(`${domain}/setnewpassword`, {
                user_id: this.props.params.id,
                password: newPassword,
                confirm_password: confirmPassword
            });
            
            this.setState({ success: 'New Password Set successfully', error: '' });
            if(response.status === 200){
                toast.success(response.data.message);
                setTimeout(() => {
                    this.props.navigate('/dashboard/users');
                }, 2000);
            }
        } catch (error) {
            this.setState({ error: 'Error Setting password', success: '' });
        }
    };

    render() {
        const { newPassword, confirmPassword, error, success } = this.state;

        return (
            <div className="flex font-montserrat items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-center text-black mb-6">
                        Set New Password
                    </h1>
                    <div className='flex flex-col items-left'><p className='text-base text-gray-600 font-bold'>Name: <span className='text-[#00acc1] font-light'>{this.state.user.name}</span></p>
                    <p className='mb-4 text-base text-gray-600 font-bold'>Email: <span className='text-[#00acc1] font-light'>{this.state.user.email}</span></p></div>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    {success && <div className="text-green-500 mb-4">{success}</div>}
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-sm font-medium text-black mb-1">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                value={newPassword}
                                onChange={this.handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-1">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#00acc1] text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
                        >
                            Set New Password
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default withRouter(SetNewPasswordForm);