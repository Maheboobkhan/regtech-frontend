// import React, { Component } from 'react';
// import { FiEdit } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { MdOutlineLockReset } from "react-icons/md";
// import { BsPlusLg } from "react-icons/bs";

// class UserList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: [
//                 { srNo: 1, name: 'John Doe', email: 'john@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
//                 { srNo: 2, name: 'Mary Smith', email: 'mary@example.com', verified: 'Not Verified', status: 'Inactive', scheme: 'production' },
//                 { srNo: 3, name: 'James Brown', email: 'james@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
//                 { srNo: 4, name: 'Patricia Johnson', email: 'patricia@example.com', verified: 'Verified', status: 'Active', scheme: 'production' },
//                 { srNo: 5, name: 'John Doe', email: 'john@example.com', verified: 'Verified', status: 'Active', scheme: 'production' },
//                 { srNo: 6, name: 'Mary Smith', email: 'mary@example.com', verified: 'Not Verified', status: 'Inactive', scheme: 'Production' },
//                 { srNo: 7, name: 'James Brown', email: 'james@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
//                 { srNo: 8, name: 'Patricia Johnson', email: 'patricia@example.com', verified: 'Verified', status: 'Active', scheme: 'production' },
//                 { srNo: 9, name: 'John Doe', email: 'john@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
//                 { srNo: 10, name: 'Mary Smith', email: 'mary@example.com', verified: 'Not Verified', status: 'Inactive', scheme: 'production' },
//                 { srNo: 11, name: 'James Brown', email: 'james@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
//                 { srNo: 12, name: 'Patricia Johnson', email: 'patricia@example.com', verified: 'Not Verified', status: 'Active', scheme: 'production' }
//             ]
//         };
//     }

//     render() {
//         return (
//             <div className="container mx-auto p-4">
//                 <div className="bg-teal-500 text-white p-4 rounded-lg flex justify-between items-center mb-4">
//                     <h1 className="text-xl font-semibold">User List</h1>
//                     <button className="bg-black hover:bg-opacity-20 hover:text-black hover:border-[1.5px] transition-all hover:border-black text-white px-4 py-2 rounded-lg flex items-center"><BsPlusLg className='text-xl mr-2' />Add User</button>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <table className="w-full text-left border-collapse">
//                         <thead>
//                             <tr className="bg-teal-500 text-white">
//                                 <th className="p-2">Sr No</th>
//                                 <th className="p-2">Name</th>
//                                 <th className="p-2">Email</th>
//                                 <th className="p-2">Verified</th>
//                                 <th className="p-2">Status</th>
//                                 <th className="p-2">Scheme</th>
//                                 <th className="p-2">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.users.map(user => (
//                                 <tr key={user.srNo}>
//                                     <td className="p-2 border-b">{user.srNo}</td>
//                                     <td className="p-2 border-b">{user.name}</td>
//                                     <td className="p-2 border-b">{user.email}</td>
//                                     <td className="p-2 border-b">{user.verified}</td>
//                                     <td className="p-2 border-b">{user.status}</td>
//                                     <td className="p-2 border-b">{user.scheme}</td>
//                                     <td className="p-2 border-b text-center flex">
//                                         <span className="cursor-pointer text-lg hover:text-teal-300 text-teal-500 mx-1"><FiEdit /></span>
//                                         <span className="cursor-pointer text-xl hover:text-red-400 text-red-500 mx-1"><MdDelete /></span>
//                                         <span className="cursor-pointer text-xl hover:text-gray-500 text-gray-700 mx-1"><MdOutlineLockReset /></span>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }

// export default UserList;






















import React, { Component } from 'react';
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineLockReset } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from 'react-router-dom';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { srNo: 1, name: 'John Doe', email: 'john@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
                { srNo: 2, name: 'Mary Smith', email: 'mary@example.com', verified: 'Not Verified', status: 'Inactive', scheme: 'production' },
                { srNo: 3, name: 'James Brown', email: 'james@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
                { srNo: 4, name: 'Patricia Johnson', email: 'patricia@example.com', verified: 'Verified', status: 'Active', scheme: 'production' },
                { srNo: 5, name: 'John Doe', email: 'john@example.com', verified: 'Verified', status: 'Active', scheme: 'production' },
                { srNo: 6, name: 'Mary Smith', email: 'mary@example.com', verified: 'Not Verified', status: 'Inactive', scheme: 'Production' },
                { srNo: 7, name: 'James Brown', email: 'james@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
                { srNo: 8, name: 'Patricia Johnson', email: 'patricia@example.com', verified: 'Verified', status: 'Active', scheme: 'production' },
                { srNo: 9, name: 'John Doe', email: 'john@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
                { srNo: 10, name: 'Mary Smith', email: 'mary@example.com', verified: 'Not Verified', status: 'Inactive', scheme: 'production' },
                { srNo: 11, name: 'James Brown', email: 'james@example.com', verified: 'Verified', status: 'Active', scheme: 'demo' },
                { srNo: 12, name: 'Patricia Johnson', email: 'patricia@example.com', verified: 'Verified', status: 'Active', scheme: 'production' }
            ],
            perPage: 10,
            currentPage: 1,
            searchQuery: ''
        };
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
        return users.filter(user =>
            user.name.toLowerCase().includes(searchQuery) ||
            user.email.toLowerCase().includes(searchQuery) ||
            user.scheme.toLowerCase().includes(searchQuery)
        );
    }

    getPaginatedUsers() {
        const { perPage, currentPage } = this.state;
        const filteredUsers = this.getFilteredUsers();
        const startIndex = (currentPage - 1) * perPage;
        return filteredUsers.slice(startIndex, startIndex + perPage);
    }

    render() {
        const { perPage, currentPage } = this.state;
        const filteredUsers = this.getFilteredUsers();
        const totalPages = Math.ceil(filteredUsers.length / perPage);
        const paginatedUsers = this.getPaginatedUsers();

        return (
            <div className="container mx-auto md:mt-0 mt-20 p-4">
                <div className="bg-teal-500 text-white p-4 rounded-lg flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">User List</h1>
                    <Link to='/dashboard/adduser'><button className="bg-black hover:bg-opacity-20 hover:border-[1.5px] transition-all hover:border-black text-white pl-2 pr-3 py-2 rounded-lg flex items-center">
                        <BsPlusLg className='text-xl mr-1' />Add User
                    </button></Link>
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
                                {paginatedUsers.map(user => (
                                    <tr key={user.srNo}>
                                        <td className="px-2 py-5 border-b">{user.srNo}</td>
                                        <td className="px-2 py-5 border-b">{user.name}</td>
                                        <td className="px-2 py-5 border-b">{user.email}</td>
                                        <td className='border-b'><button className={`px-2 py-1 cursor-text ${user.verified === 'Not Verified' ? 'text-white bg-red-600 rounded-md md:text-base text-sm' : 'pr-9 rounded-md bg-green-500'} `}>{user.verified}</button></td>
                                        <td className='border-b'><button className={`px-2 py-1 ${user.status === 'Inactive' ? 'text-white bg-red-600 rounded-md hover:bg-red-500' : 'pr-5 rounded-md hover:bg-green-400 bg-green-500'}`}>{user.status}</button></td>
                                        <td className="px-2 py-5 border-b">{user.scheme}</td>
                                        <td className="px-2 py-5 border-b text-center flex">
                                            <span className="cursor-pointer text-lg hover:text-teal-300 text-teal-500 mx-1"><FiEdit /></span>
                                            <span className="cursor-pointer text-xl hover:text-red-400 text-red-500 mx-1"><MdDelete /></span>
                                            <span className="cursor-pointer text-xl hover:text-gray-500 text-gray-700 mx-1"><MdOutlineLockReset /></span>
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
            </div>
        );
    }
}

export default UserList;
