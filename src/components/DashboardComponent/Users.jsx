import React, { Component } from 'react';
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineLockReset } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModel'; // Import the modal component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {          
            perPage: 10,
            users: [],
            currentPage: 1,
            searchQuery: '',
            showModal: false,          // State for modal visibility
            userToDelete: null,        // Store user ID to delete
        };
    }

    componentDidMount(){
        this.getAllUsers();
    }

    getAllUsers = async () => {
        const token = Cookies.get("authToken");
        if (!token) {
            this.setState({ error: "Token not found" });
            return;
        }

        const domain = localStorage.getItem('domain');
        try {
            const response = await axios.get(
                `${domain}/getallusers/${token}`
            );
            this.setState({ users: response.data });
        } catch (error) {
            this.setState({ error: "Error fetching user data" });
        }
    }

    handlePerPageChange = (event) => {
        this.setState({ perPage: Number(event.target.value), currentPage: 1 });
    };

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value.toLowerCase(), currentPage: 1 });
    };

    handlePageChange = (newPage) => {
        this.setState({ currentPage: newPage });
    };

    getFilteredUsers() {
        const { users, searchQuery } = this.state;
        return users.filter(user => {
            const name = user.name ? String(user.name).toLowerCase() : '';
            const email = user.email ? String(user.email).toLowerCase() : '';
            const schemeType = user.scheme_type ? String(user.scheme_type).toLowerCase() : '';
            return name.includes(searchQuery) || email.includes(searchQuery) || schemeType.includes(searchQuery);
        });
    }

    getPaginatedUsers() {
        const { perPage, currentPage } = this.state;
        const filteredUsers = this.getFilteredUsers();
        const startIndex = (currentPage - 1) * perPage;
        return filteredUsers.slice(startIndex, startIndex + perPage);
    }

    editUser(id) {
        this.props.navigate(`/dashboard/edituser/${id}`);
    }

    resetpassword(id) {
        this.props.navigate(`/dashboard/setNewPassword/${id}`);
    }

    openDeleteModal = (userId) => {
        this.setState({ showModal: true, userToDelete: userId });
    };

    closeDeleteModal = () => {
        this.setState({ showModal: false, userToDelete: null });
    };

    confirmDelete = async () => {
        const domain = localStorage.getItem('domain');
        const { userToDelete } = this.state;

        try {
            const response = await axios.post(`${domain}/userdelete/${userToDelete}`, {
            });
            
            this.setState(prevState => ({
                users: prevState.users.filter(user => user.id !== userToDelete),
                showModal: false,
                userToDelete: null
            }));
            if(response.status === 200){
                toast.success('User Deleted Successfully!');
            }
        } catch (error) {
            this.setState({ error: "Error deleting user" });
        }
    };

    render() {
        const { perPage, currentPage, showModal } = this.state;
        const filteredUsers = this.getFilteredUsers();
        const totalPages = Math.ceil(filteredUsers.length / perPage);
        const paginatedUsers = this.getPaginatedUsers();

        return (
            <div className="container mx-auto md:mt-0 mt-20 p-4">
                <div className="bg-teal-500 text-white p-4 rounded-lg flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">User List</h1>
                    <Link to='/dashboard/adduser'>
                        <button className="bg-black hover:bg-opacity-20 hover:border-[1.5px] transition-all hover:border-black text-white pl-2 pr-3 py-2 rounded-lg flex items-center">
                            <BsPlusLg className='text-xl mr-1' />Add User
                        </button>
                    </Link>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="mb-4 md:flex md:flex-row flex-col items-center">
                        <label htmlFor='search' className='mr-1'>Search</label>
                        <input
                            type="text"
                            id='search'
                            placeholder="Search by name, email, or scheme"
                            className="p-2 border rounded-lg w-full md:w-1/3"
                            onChange={this.handleSearchChange}
                        />
                        <label htmlFor='search' className='ml-10 mr-1'>Show </label>
                        <select
                            className="p-2 border rounded-lg"
                            value={perPage}
                            onChange={this.handlePerPageChange}
                        >
                            <option value={10}>10 per Page</option>
                            <option value={25}>25 per Page</option>
                            <option value={50}>50 per Page</option>
                            <option value={100}>100 per Page</option>
                        </select>
                    </div>
                    <div className='md:overflow-x-hidden overflow-x-auto'>
                        <table className="min-w-full text-left border-collapse md:overflow-x-hidden">
                            <thead>
                                <tr className="bg-teal-500 text-white">
                                    <th className="p-2">Sr No</th>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Verified</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Scheme</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedUsers.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className="px-2 py-5 border-b">{index+1}</td>
                                        <td className="px-2 py-5 border-b">{user.name}</td>
                                        <td className="px-2 py-5 border-b">{user.email}</td>
                                        <td className='border-b'>
                                            <button className={`px-2 py-1 cursor-text ${user.verified === 0 ? 'text-white bg-red-600 rounded-md md:text-base text-sm' : 'pr-9 rounded-md bg-green-500'} `}>
                                                {user.verified === 0 ? 'Not Verified' : 'Verified'}
                                            </button>
                                        </td>
                                        <td className='border-b'>
                                            <button className={`px-2 py-1 ${user.status === 0 ? 'text-white bg-red-600 rounded-md hover:bg-red-500' : 'pr-5 rounded-md hover:bg-green-400 bg-green-500'}`}>
                                                {user.status === 0 ? 'inactive' : 'active'}
                                            </button>
                                        </td>
                                        <td className="px-2 py-5 border-b">{user.scheme_type ? user.scheme_type : null}</td>
                                        <td className="px-2 py-5 border-b text-center flex">
                                            <span className="cursor-pointer text-lg hover:text-teal-300 text-teal-500 mx-1" onClick={() => this.editUser(user.id)}><FiEdit /></span>
                                            <span
                                                className="cursor-pointer text-xl hover:text-red-400 text-red-500 mx-1"
                                                onClick={() => this.openDeleteModal(user.id)}
                                            >
                                                <MdDelete />
                                            </span>
                                            <span className="cursor-pointer text-xl hover:text-gray-500 text-gray-700 mx-1" onClick={() => this.resetpassword(user.id)}><MdOutlineLockReset /></span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                            disabled={currentPage === 1}
                            onClick={() => this.handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                        <span>{`Page ${currentPage} of ${totalPages}`}</span>
                        <button
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                            disabled={currentPage === totalPages}
                            onClick={() => this.handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
                
                {/* Render the confirmation modal */}
                <ConfirmationModal
                    isVisible={showModal}
                    onConfirm={this.confirmDelete}
                    onCancel={this.closeDeleteModal}
                />
                <ToastContainer />
            </div>
        );
    }
}

export default function UserListeWithNavigate(props) {
    const navigate = useNavigate();
    return <UserList {...props} navigate={navigate} />;
}
