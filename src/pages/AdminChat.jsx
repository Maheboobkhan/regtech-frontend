// import React, { Component } from 'react';
// import '../App.css';
// import axios from 'axios';
// import dayjs from 'dayjs';
// // const data = [
// //   {
// //     id: 1,
// //     name: 'John Doe',
// //     mobile_number: '88838383',
// //     email: 'example@gmail.com',
// //     messages: [
// //       { sender: 'client', chats: 'Hello, I need help with my account.' },
// //       { sender: 'owner', chats: 'Sure, how can I assist you?' }
// //     ]
// //   },

// //   {
// //     id: 2,
// //     name: 'Doe',
// //     mobile_number: '88838383',
// //     email: 'example@gmail.com',
// //     messages: [
// //       { sender: 'client', chats: 'hmm.' },
// //       { sender: 'owner', chats: 'nahi' }
// //     ]
// //   },
// //   // Add more chat data as needed
// // ];

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeTab: 'chat',
//             selectedChatId: null,
//             chats: [],
//             messages: [],
//             setInfo: '',
//             ownerMessage: '',
//             ownerId: ''
//         };
//     }

//     componentDidMount() {
//         this.fetchAllUsers();
//     }

//     fetchAllUsers = async () => {
//         const response = await axios.get('http://localhost:8000/api/users');
//         console.log('now: ', response.data);
//         this.setState({ chats: response.data })

//     }

//     handleTabClick = (tab) => {
//         this.setState({ activeTab: tab });
//     };

//     handleChatClick = async (id) => {
//         // this.setState({ activeTab: 'message', selectedChatId: id });
//         this.setState({ activeTab: 'message' })
//         const response = await axios.get(`http://localhost:8000/api/users/${id}/ownermessage`);
//         console.log('get: ', response.data.messages);
//         this.setState({ messages: response.data.messages });
//         this.setState({ setInfo: response.data })
//         this.setState({ ownerId: id })
//     };

//     handleOwnerMessage = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`, { message: this.state.ownerMessage });
//             this.setState({ ownerMessage: '' })

//             const messageResponse = await axios.get(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`)
//             console.log('messageRes: ', messageResponse.data.messages);
//             this.setState({ messages: messageResponse.data.messages });
//         } catch (error) {
//             console.error("There was an error posting the message!", error);
//         }
//     }

//     render() {
//         const { activeTab, selectedChatId, chats, ownerMessage, messages } = this.state;
//         const selectedChat = chats.find(chat => chat.id === selectedChatId);

//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="md:w-80 bg-white shadow-lg rounded-lg z-50">
//                     <div className="flex border-b border-gray-200">
//                         <button
//                             className={`flex-1 p-4 text-center ${activeTab === 'chat' ? 'bg-pink-500 text-white' : 'text-black'}`}
//                             onClick={() => this.handleTabClick('chat')}
//                         >
//                             Chat
//                         </button>
//                         <button
//                             className={`flex-1 p-4 text-center ${activeTab === 'message' ? 'bg-pink-500 text-white' : 'text-black'}`}
//                             onClick={() => this.handleTabClick('message')}
//                         >
//                             Message
//                         </button>
//                     </div>

//                     {/* Chat Tab Content */}
//                     {activeTab === 'chat' && (
//                         <div className="p-4 min-h-80 max-h-[60vh] overflow-y-auto">
//                             {chats.map(chat => (
//                                 <div
//                                     key={chat.id}
//                                     onClick={() => this.handleChatClick(chat.id)}
//                                     className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
//                                 >
//                                     <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
//                                     <div className="text-black">
//                                         {chat.name}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {/* Message Tab Content */}
//                     {/* {activeTab === 'message' && selectedChat && (
//             <div className="p-4 min-h-80 max-h-[60vh] overflow-y-auto">
//               <h2 className="text-lg font-bold mb-4">{selectedChat.name}</h2>
//               {selectedChat.messages?.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`message mb-2 p-2 rounded-lg ${message.sender === 'owner' ? 'bg-pink-500 text-white ml-auto' : 'bg-gray-100 text-black'}`}
//                 >
//                   {message.message}
//                 </div>
//               ))}
//             </div>
//           )} */}

//                     {activeTab === 'message' && (
//                         <div className="flex flex-col">
//                             <h2 className="text-lg font-bold mb-4 text-center">{this.state.setInfo.name}</h2>
//                                 <p className='text-center'>{this.state.setInfo.email}</p>
//                                 <p className='text-center'>{this.state.setInfo.mobile_number}</p>
//                                 <p className='text-center'>{this.state.setInfo.service}</p>
//                             <div className="p-4 min-h-36 max-h-[36vh] overflow-y-auto flex-1">
//                                 {/* <h2 className="text-lg font-bold mb-4">{this.state.setInfo.name}</h2>
//                                 <p>{this.state.setInfo.email}</p>
//                                 <p>{this.state.setInfo.mobile_number}</p>
//                                 <p>{this.state.setInfo.service}</p> */}
//                                 {messages?.map((message, index) => (
//                                     // <div
//                                     //     key={index}
//                                     //     className={`message mb-2 p-2 rounded-lg ${message.sender === 'owner' ? 'bg-[#e27daa] text-white ml-auto' : 'bg-gray-100 text-black'}`}
//                                     // >
//                                     //     {message.message}
//                                     // </div>
//                                     <div
//                                         key={index}
//                                         className={`mb-2 p-2 rounded-lg ${message?.sender === 'owner' ? 'bg-[#e27daa] w-3/4 ml-auto' : 'bg-gray-100 w-3/4 mr-auto'} text-black`}
//                                     >
//                                     <div className="flex flex-col">
//                                         <div className=''>
//                                             {message?.message}
//                                         </div>
//                                         <div className="text-xs text-gray-600 text-right">
//                                             {dayjs(message?.created_at).format('YY/MM/DD HH:mm')}
//                                         </div>
//                                     </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="p-4 flex items-center border-t border-gray-200">
//                                 <input
//                                     type="text"
//                                     value={ownerMessage}
//                                     onChange={(e) => this.setState({ ownerMessage: e.target.value })}
//                                     placeholder="Type a message..."
//                                     className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
//                                 />
//                                 <button
//                                     onClick={this.handleOwnerMessage}
//                                     className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//                                 >
//                                     Send
//                                 </button>
//                             </div>
//                         </div>
//                     )}


//                 </div>
//             </div>
//         );
//     }
// }

// export default App;











// import React, { Component } from 'react';
// import '../App.css';
// import axios from 'axios';
// import dayjs from 'dayjs';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeTab: 'chat',
//             selectedChatId: null,
//             chats: [],
//             messages: [],
//             setInfo: '',
//             ownerMessage: '',
//             ownerId: ''
//         };
//     }

//     componentDidMount() {
//         this.fetchAllUsers();
//     }

//     fetchAllUsers = async () => {
//         const response = await axios.get('http://localhost:8000/api/users');
//         console.log('now: ', response.data);
//         this.setState({ chats: response.data });
//     }

//     handleTabClick = (tab) => {
//         this.setState({ activeTab: tab });
//     };

//     handleChatClick = async (id) => {
//         this.setState({ activeTab: 'message' });
//         const response = await axios.get(`http://localhost:8000/api/users/${id}/ownermessage`);
//         console.log('get: ', response.data.messages);
//         this.setState({ messages: response.data.messages });
//         this.setState({ setInfo: response.data });
//         this.setState({ ownerId: id });
//     };

//     handleOwnerMessage = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`, { message: this.state.ownerMessage });
//             this.setState({ ownerMessage: '' });

//             const messageResponse = await axios.get(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`);
//             console.log('messageRes: ', messageResponse.data.messages);
//             this.setState({ messages: messageResponse.data.messages });
//         } catch (error) {
//             console.error("There was an error posting the message!", error);
//         }
//     }

//     render() {
//         const { activeTab, selectedChatId, chats, ownerMessage, messages } = this.state;
//         const selectedChat = chats.find(chat => chat.id === selectedChatId);

//         return (
//             <div className="flex min-h-[60vh] bg-white">
//                 {/* Chat List Sidebar */}
//                 <div className="hidden md:flex flex-col w-1/4 bg-white shadow-lg border-r border-gray-200">
//                     <div className="flex border-b border-gray-200">
//                         <button
//                             className={`flex-1 p-4 text-center ${activeTab === 'chat' ? 'bg-pink-500 text-white' : 'text-black'}`}
//                             onClick={() => this.handleTabClick('chat')}
//                         >
//                             Chat
//                         </button>
//                         <button
//                             className={`flex-1 p-4 text-center ${activeTab === 'message' ? 'bg-pink-500 text-white' : 'text-black'}`}
//                             onClick={() => this.handleTabClick('message')}
//                         >
//                             Message
//                         </button>
//                     </div>
//                     <div className="p-4 min-h-screen max-h-screen overflow-y-auto">
//                         {chats.map(chat => (
//                             <div
//                                 key={chat.id}
//                                 onClick={() => this.handleChatClick(chat.id)}
//                                 className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
//                             >
//                                 <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
//                                 <div className="text-black">
//                                     {chat.name}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Message View */}
//                 <div className="flex-1">
//                     {activeTab === 'message' && (
//                         <div className="flex flex-col h-screen">
//                             <div className="p-4 border-b border-gray-200">
//                                 <h2 className="text-lg font-bold">{this.state.setInfo.name}</h2>
//                                 <p>{this.state.setInfo.email}</p>
//                                 <p>{this.state.setInfo.mobile_number}</p>
//                                 <p>{this.state.setInfo.service}</p>
//                             </div>
//                             <div className="flex-1 p-4 overflow-y-auto">
//                                 {messages?.map((message, index) => (
//                                     <div
//                                         key={index}
//                                         className={`mb-2 p-2 rounded-lg ${message?.sender === 'owner' ? 'bg-[#e27daa] text-white w-3/4 ml-auto' : 'bg-gray-100 text-black w-3/4 mr-auto'}`}
//                                     >
//                                         <div className="flex flex-col">
//                                             <div>
//                                                 {message?.message}
//                                             </div>
//                                             <div className="text-xs text-gray-600 text-right">
//                                                 {dayjs(message?.created_at).format('YY/MM/DD HH:mm')}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="p-4 flex items-center border-t border-gray-200">
//                                 <input
//                                     type="text"
//                                     value={ownerMessage}
//                                     onChange={(e) => this.setState({ ownerMessage: e.target.value })}
//                                     placeholder="Type a message..."
//                                     className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
//                                 />
//                                 <button
//                                     onClick={this.handleOwnerMessage}
//                                     className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//                                 >
//                                     Send
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;























// import React, { Component } from 'react';
// import '../App.css';
// import axios from 'axios';
// import dayjs from 'dayjs';
// import { IoArrowBack } from 'react-icons/io5'; // Importing icon

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeTab: 'chat', // This will be managed through a state if you want to use "home" instead
//             selectedChatId: null,
//             chats: [],
//             messages: [],
//             setInfo: '',
//             ownerMessage: '',
//             ownerId: '',
//             dateFilter: 'today'
//         };
//     }

//     componentDidMount() {
//         this.fetchAllUsers();
//     }

//     fetchAllUsers = async () => {
//         const response = await axios.get('http://localhost:8000/api/users');
//         this.setState({ chats: response.data });
//     }

//     handleChatClick = async (id) => {
//         this.setState({ activeTab: 'message' });
//         const response = await axios.get(`http://localhost:8000/api/users/${id}/ownermessage`);
//         this.setState({ messages: response.data.messages, setInfo: response.data, ownerId: id });
//     };

//     handleOwnerMessage = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`, { message: this.state.ownerMessage });
//             this.setState({ ownerMessage: '' });

//             const messageResponse = await axios.get(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`);
//             this.setState({ messages: messageResponse.data.messages });
//         } catch (error) {
//             console.error("There was an error posting the message!", error);
//         }
//     }

//     handleDateFilterChange = (e) => {
//         this.setState({ dateFilter: e.target.value });
//     };

//     getFilteredChats = () => {
//         const { chats, dateFilter } = this.state;
//         const today = dayjs().startOf('day');
//         const yesterday = today.subtract(1, 'day');

//         return chats.filter(chat => {
//             const chatDate = dayjs(chat.created_at).startOf('day'); // Assuming chats have a created_at field
//             if (dateFilter === 'today') {
//                 return chatDate.isSame(today, 'day');
//             }
//             if (dateFilter === 'yesterday') {
//                 return chatDate.isSame(yesterday, 'day');
//             }
//             return false;
//         });
//     };

//     render() {
//         const { activeTab, selectedChatId, ownerMessage, messages, setInfo, dateFilter } = this.state;
//         const filteredChats = this.getFilteredChats();

//         return (
//             <div className="flex min-h-[60vh] bg-white overflow-y-hidden">
//                 {/* Sidebar */}
//                 <div className="hidden md:flex flex-col w-full md:w-1/4 bg-white shadow-lg border-r border-gray-200">
//                     <div className="flex items-center border-b border-gray-200 p-4">
//                         <button
//                             className="flex items-center text-gray-600 hover:text-gray-900"
//                             onClick={() => this.setState({ activeTab: 'chat' })}
//                         >
//                             <IoArrowBack className="mr-2" /> Back to Home
//                         </button>
//                         <select
//                             value={dateFilter}
//                             onChange={this.handleDateFilterChange}
//                             className="ml-auto p-2 border border-gray-300 rounded-lg"
//                         >
//                             <option value="today">Today</option>
//                             <option value="yesterday">Yesterday</option>
//                         </select>
//                     </div>
//                     <div className="p-4 min-h-[85vh] max-h-[85vh] overflow-y-auto">
//                         {filteredChats.map(chat => (
//                             <div
//                                 key={chat.id}
//                                 onClick={() => this.handleChatClick(chat.id)}
//                                 className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
//                             >
//                                 <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
//                                 <div className="text-black">
//                                     {chat.name}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Message View */}
//                 <div className="flex-1">
//                     {activeTab === 'message' && (
//                         <div className="flex flex-col h-screen">
//                             <div className="p-4 border-b border-gray-200">
//                                 <h2 className="text-lg font-bold">{setInfo.name}</h2>
//                                 <p>{setInfo.email}</p>
//                                 <p>{setInfo.mobile_number}</p>
//                                 <p>{setInfo.service}</p>
//                             </div>
//                             <div className="flex-1 p-4 overflow-y-auto">
//                                 {messages?.map((message, index) => (
//                                     <div
//                                         key={index}
//                                         className={`mb-2 p-2 rounded-lg ${message?.sender === 'owner' ? 'bg-[#e27daa] text-white w-3/4 ml-auto' : 'bg-gray-100 text-black w-3/4 mr-auto'}`}
//                                     >
//                                         <div className="flex flex-col">
//                                             <div>{message?.message}</div>
//                                             <div className="text-xs text-gray-600 text-right">
//                                                 {dayjs(message?.created_at).format('YY/MM/DD HH:mm')}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="p-4 flex items-center border-t border-gray-200">
//                                 <input
//                                     type="text"
//                                     value={ownerMessage}
//                                     onChange={(e) => this.setState({ ownerMessage: e.target.value })}
//                                     placeholder="Type a message..."
//                                     className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
//                                 />
//                                 <button
//                                     onClick={this.handleOwnerMessage}
//                                     className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//                                 >
//                                     Send
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;



















// import React, { Component } from 'react';
// import '../App.css';
// import axios from 'axios';
// import dayjs from 'dayjs';
// import { IoArrowBack } from 'react-icons/io5'; // Importing icon

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeTab: 'chat',
//             selectedChatId: null,
//             chats: [],
//             messages: [],
//             setInfo: '',
//             ownerMessage: '',
//             ownerId: '',
//             dateFilter: 'today'
//         };
//     }

//     componentDidMount() {
//         this.fetchAllUsers();
//     }

//     fetchAllUsers = async () => {
//         const response = await axios.get('http://localhost:8000/api/users');
//         this.setState({ chats: response.data });
//     }

//     handleChatClick = async (id) => {
//         this.setState({ activeTab: 'message' });
//         const response = await axios.get(`http://localhost:8000/api/users/${id}/ownermessage`);
//         this.setState({ messages: response.data.messages, setInfo: response.data, ownerId: id });
//     };

//     handleOwnerMessage = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`, { message: this.state.ownerMessage });
//             this.setState({ ownerMessage: '' });

//             const messageResponse = await axios.get(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`);
//             this.setState({ messages: messageResponse.data.messages });
//         } catch (error) {
//             console.error("There was an error posting the message!", error);
//         }
//     }

//     handleDateFilterChange = (e) => {
//         this.setState({ dateFilter: e.target.value });
//     };

//     getFilteredChats = () => {
//         const { chats, dateFilter } = this.state;
//         const today = dayjs().startOf('day');
//         const yesterday = today.subtract(1, 'day');

//         return chats.filter(chat => {
//             const chatDate = dayjs(chat.created_at).startOf('day'); // Assuming chats have a created_at field
//             if (dateFilter === 'today') {
//                 return chatDate.isSame(today, 'day');
//             }
//             if (dateFilter === 'yesterday') {
//                 return chatDate.isSame(yesterday, 'day');
//             }
//             return false;
//         });
//     };

//     render() {
//         const { activeTab, selectedChatId, ownerMessage, messages, setInfo, dateFilter } = this.state;
//         const filteredChats = this.getFilteredChats();

//         return (
//             <div className="flex flex-col md:flex-row min-h-[60vh] bg-white overflow-hidden">
//                 {/* Sidebar */}
//                 <div className={`flex-shrink-0 md:w-1/4 bg-white shadow-lg border-r border-gray-200 transition-transform duration-300 ${activeTab === 'chat' ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
//                     <div className="flex items-center border-b border-gray-200 p-4">
//                         <button
//                             className="flex items-center text-gray-600 hover:text-gray-900"
//                             onClick={() => this.setState({ activeTab: 'chat' })}
//                         >
//                             <IoArrowBack className="mr-2" /> Back to Home
//                         </button>
//                         <select
//                             value={dateFilter}
//                             onChange={this.handleDateFilterChange}
//                             className="ml-auto p-2 border border-gray-300 rounded-lg"
//                         >
//                             <option value="today">Today</option>
//                             <option value="yesterday">Yesterday</option>
//                         </select>
//                     </div>
//                     <div className="p-4 min-h-[85vh] max-h-[85vh] overflow-y-auto">
//                         {filteredChats.map(chat => (
//                             <div
//                                 key={chat.id}
//                                 onClick={() => this.handleChatClick(chat.id)}
//                                 className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
//                             >
//                                 <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
//                                 <div className="text-black">
//                                     {chat.name}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Message View */}
//                 <div className={`flex-1 ${activeTab === 'message' ? 'block' : 'hidden'} md:block`}>
//                     {activeTab === 'message' && (
//                         <div className="flex flex-col h-screen">
//                             <div className="p-4 border-b border-gray-200">
//                                 <h2 className="text-lg font-bold">{setInfo.name}</h2>
//                                 <p>{setInfo.email}</p>
//                                 <p>{setInfo.mobile_number}</p>
//                                 <p>{setInfo.service}</p>
//                             </div>
//                             <div className="flex-1 p-4 overflow-y-auto">
//                                 {messages?.map((message, index) => (
//                                     <div
//                                         key={index}
//                                         className={`mb-2 p-2 rounded-lg ${message?.sender === 'owner' ? 'bg-[#e27daa] text-white w-3/4 ml-auto' : 'bg-gray-100 text-black w-3/4 mr-auto'}`}
//                                     >
//                                         <div className="flex flex-col">
//                                             <div>{message?.message}</div>
//                                             <div className="text-xs text-gray-600 text-right">
//                                                 {dayjs(message?.created_at).format('YY/MM/DD HH:mm')}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="p-4 flex items-center border-t border-gray-200">
//                                 <input
//                                     type="text"
//                                     value={ownerMessage}
//                                     onChange={(e) => this.setState({ ownerMessage: e.target.value })}
//                                     placeholder="Type a message..."
//                                     className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
//                                 />
//                                 <button
//                                     onClick={this.handleOwnerMessage}
//                                     className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//                                 >
//                                     Send
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;

















import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import dayjs from 'dayjs';
import { IoArrowBack } from 'react-icons/io5'; // Importing icon
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'chat',
            selectedChatId: null,
            chats: [],
            messages: [],
            setInfo: '',
            ownerMessage: '',
            ownerId: '',
            dateFilter: 'today'
        };
    }

    componentDidMount() {
        this.fetchAllUsers();
    }

    fetchAllUsers = async () => {
        const response = await axios.get('http://localhost:8000/api/users');
        this.setState({ chats: response.data });
    }

    handleChatClick = async (id) => {
        this.setState({ activeTab: 'message' });
        const response = await axios.get(`http://localhost:8000/api/users/${id}/ownermessage`);
        this.setState({ messages: response.data.messages, setInfo: response.data, ownerId: id });
    };

    handleOwnerMessage = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`, { message: this.state.ownerMessage });
            this.setState({ ownerMessage: '' });

            const messageResponse = await axios.get(`http://localhost:8000/api/users/${this.state.ownerId}/ownermessage`);
            this.setState({ messages: messageResponse.data.messages });
        } catch (error) {
            console.error("There was an error posting the message!", error);
        }
    }

    handleDateFilterChange = (e) => {
        this.setState({ dateFilter: e.target.value });
    };

    getFilteredChats = () => {
        const { chats, dateFilter } = this.state;
        const today = dayjs().startOf('day');
        const yesterday = today.subtract(1, 'day');
        const all = chats;

        return chats.filter(chat => {
            const chatDate = dayjs(chat.created_at).startOf('day'); // Assuming chats have a created_at field
            if (dateFilter === 'today') {
                return chatDate.isSame(today, 'day');
            }
            if (dateFilter === 'yesterday') {
                return chatDate.isSame(yesterday, 'day');
            }
            if (dateFilter === 'all') {
                return chats;
            }
            return false;
        });
    };

    render() {
        const { activeTab, ownerMessage, messages, setInfo, dateFilter } = this.state;
        const filteredChats = this.getFilteredChats();

        return (
            <div className="flex flex-col md:flex-row min-h-screen bg-white">
                {/* Sidebar */}
                <div className={`flex-shrink-0 md:w-1/4 bg-white shadow-lg border-r border-gray-200 ${activeTab === 'chat' ? 'block' : 'hidden md:block'}`}>
                    <div className="flex items-center border-b border-gray-200 p-4">
                        <Link to='/'><button
                            className="flex items-center text-gray-600 hover:text-gray-900"
                            onClick={() => this.setState({ activeTab: 'chat' })}
                        >
                            <IoArrowBack className="mr-2" /> Back to Home
                        </button></Link>
                        <select
                            value={dateFilter}
                            onChange={this.handleDateFilterChange}
                            className="ml-auto p-2 border border-gray-300 rounded-lg"
                        >
                        <option value="all">All</option>
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                        </select>
                    </div>
                    {/* <div className="p-4 overflow-y-auto max-h-[87vh]">
                        {filteredChats.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => this.handleChatClick(chat.id)}
                                className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
                            >
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
                                <div className="text-black">
                                    {chat.name}
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <div className="p-4 overflow-y-auto max-h-[87vh]">
                        {filteredChats.map(chat => {
                            const lastMessage = chat.messages?.[chat.messages.length - 1] || {}; // Assuming messages are part of chat
                            const messageText = lastMessage.message ? lastMessage.message : 'No messages';
                            const messageDate = lastMessage.created_at ? dayjs(lastMessage.created_at).format('YY/MM/DD HH:mm') : '';
                            const chatName = chat.name || 'Unknown';

                            return (
                                <div
                                    key={chat.id}
                                    onClick={() => this.handleChatClick(chat.id)}
                                    className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
                                >
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
                                    <div className="text-black flex-1">
                                        <div className="font-bold">{chatName}</div>
                                        <div className="text-gray-600 text-sm truncate">{messageText}</div>
                                        <div className="text-xs text-gray-400">{messageDate}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Message View */}
                <div className={`flex-1 ${activeTab === 'message' ? 'block' : 'hidden'} md:block`}>
                    {activeTab === 'message' && (

                        <div className="flex flex-col h-screen">
                            <div className="p-4 border-b border-gray-200 bg-white">
                                <button
                                    onClick={() => this.setState({ activeTab: 'chat' })}
                                    className="md:hidden flex items-center text-gray-600 hover:text-gray-900"
                                >
                                    <IoArrowBack className="mr-2" /> Back to Chat
                                </button>

                                <button
                                    onClick={() => this.setState({ activeTab: 'chat' })}
                                    className="md:block hidden fixed top-4 right-4 p-2 bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-gray-900 rounded-full"
                                >
                                    <RxCross2 className='text-2xl' />
                                </button>
                                <h2 className="text-lg font-bold">{setInfo.name}</h2>
                                <p>{setInfo.email}</p>
                                <p>{setInfo.mobile_number}</p>
                                <p>{setInfo.service}</p>
                            </div>
                            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                                {messages?.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`mb-2 p-2 rounded-lg ${message?.sender === 'owner' ? 'bg-[#e27daa] text-white w-3/4 ml-auto' : 'bg-gray-100 text-black w-3/4 mr-auto'}`}
                                    >
                                        <div className="flex flex-col">
                                            <div>{message?.message}</div>
                                            <div className="text-xs text-gray-600 text-right">
                                                {dayjs(message?.created_at).format('YY/MM/DD HH:mm')}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 flex items-center border-t border-gray-200 bg-white">
                                <input
                                    type="text"
                                    value={ownerMessage}
                                    onChange={(e) => this.setState({ ownerMessage: e.target.value })}
                                    placeholder="Type a message..."
                                    className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
                                />
                                <button
                                    onClick={this.handleOwnerMessage}
                                    className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
