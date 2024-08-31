import React, { Component } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

class ChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'chat', // New state for active tab
            isModalOpen: false,
            isFormOpen: false,
            isUser: false,
            userId: null,
            isChat: false,
            clientMessage: '',
            ownerMessage: '',
            chatId: null,
            chats: [],
            messages: [],
            form: {
                name: '',
                mobile_number: '',
                email: ''
            },
            pollingInterval: 2000 // Polling interval in milliseconds (2 seconds)
        };
    }

    componentDidMount() {
        const isOwner = localStorage.getItem('owner');
        this.checkUserStatus();
        this.fetchUsers();
        if (isOwner) {
            this.ownerFetchUserById();
        } else {
            this.clientFetchUserById();
        }
        this.startPolling();
    }

    componentWillUnmount() {
        if (this.pollingIntervalId) {
            clearInterval(this.pollingIntervalId);
        }
    }

    startPolling = () => {
        this.pollingIntervalId = setInterval(() => {
            const postid = localStorage.getItem('postId');
            this.fetchMessages(postid);
        }, this.state.pollingInterval);
    };

    ownerFetchUserById = async () => {
        const Postid = localStorage.getItem('postId');
        const response = await axios.get(`http://localhost:8000/api/users/${Postid}`);
        this.setState({ messages: response.data });
        console.log('mmm: ', this.state.messages);
    };

    clientFetchUserById = async () => {
        const Postid = localStorage.getItem('regtech-user');
        const response = await axios.get(`http://localhost:8000/api/users/${Postid}`);
        this.setState({ messages: response.data });
        console.log('mmm: ', this.state.messages);
    };

    checkUserStatus = () => {
        const isOwner = localStorage.getItem('owner');
        const isUser = localStorage.getItem('regtech-user');
        this.setState({ userId: isUser });
        localStorage.setItem('uId', isUser);
        if (isOwner) {
            this.setState({ isFormOpen: false, isChat: true });
        } else {
            this.setState({ isFormOpen: true, isChat: false });
        }

        if (isUser) {
            this.setState({ isUser: true });
        } else {
            this.setState({ isUser: false });
        }
    };

    fetchUsers = async () => {
        const response = await axios.get('http://localhost:8000/api/users');
        this.setState({ chats: response.data });
        console.log(this.state.chats);
        const lastChat = this.state.chats[this.state.chats.length - 1];
        console.log(lastChat.id);

        // Extract the id from the last chat object
        localStorage.setItem('postId', lastChat.id);
    };

    fetchMessages = async (chatId) => {
        if (!chatId) return;
        try {
            const response = await axios.get(`http://localhost:8000/api/users/${chatId}`);
            this.setState({ messages: response.data });
        } catch (error) {
            console.error("There was an error fetching messages!", error);
        }
    };

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    };

    handleFormSubmit = async (e) => {
        e.preventDefault();
        const { form } = this.state;
        console.log(form);

        try {
            const response = await axios.post('http://localhost:8000/api/users', form);
            localStorage.setItem('regtech-user', response.data.id);
            localStorage.removeItem('owner'); // Ensure owner flag is removed if it's a normal user
            this.setState({ isFormOpen: false });
        } catch (error) {
            console.error("There was an error creating the user!", error);
        }
    };

    handleClientMessage = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/api/users/${this.state.userId}/clientmessage`, { message: this.state.clientMessage });
            console.log('postmessage: ', response.data);
            localStorage.setItem('uIId', this.state.userId);

            const messageResponse = await axios.get(`http://localhost:8000/api/users/${this.state.userId}`);
            this.setState({ messages: messageResponse.data });
            console.log('messageRes: ', messageResponse.data.messages);
            this.setState({ clientMessage: '' });
        } catch (error) {
            console.error("There was an error posting the message!", error);
        }
    };

    handleOwnerMessage = async (e) => {
        const lastChat = this.state.chats[this.state.chats.length - 1];
        const lastChatId = lastChat.id;
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/api/users/${lastChatId}/ownermessage`, { message: this.state.ownerMessage });
            console.log('postmessage: ', response.data);

            const messageResponse = await axios.get(`http://localhost:8000/api/users/${lastChatId}`);
            console.log('chatid: ', lastChatId);
            this.setState({ messages: messageResponse.data });
            console.log('messageRes: ', messageResponse.data.messages);
            this.setState({ ownerMessage: '' });
        } catch (error) {
            console.error("There was an error posting the message!", error);
        }
    };

    handleChatClick = (chatId) => {
        this.fetchMessages(chatId);
    };

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const { isModalOpen, isUser, activeTab, messages, isFormOpen, chats, isChat, clientMessage, ownerMessage, form } = this.state;

        return (
            <div className="relative z-[1500]">
                {/* Chat Icon */}
                <div
                    className="fixed bottom-4 right-4 p-3 bg-pink-500 text-black rounded-full cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110"
                    onClick={() => this.setState({ isModalOpen: !isModalOpen })}
                >
                    {isModalOpen ? (
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-message-circle"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 12.25v4.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 16.75v-4.5m17-4.25a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"></path>
                        </svg>
                    )}
                </div>

                {/* Tabs Navigation */}
                {isModalOpen && (
                    isChat ? (
                        <div className="fixed bottom-20 right-4 md:w-80 bg-white shadow-lg rounded-lg z-50">
                            <div className="flex border-b border-gray-200">
                                <button
                                    className={`flex-1 p-4 text-center ${activeTab === 'chat' ? 'bg-pink-500 text-white' : 'text-black'}`}
                                    onClick={() => this.handleTabClick('chat')}
                                >
                                    Chat
                                </button>
                                <button
                                    className={`flex-1 p-4 text-center ${activeTab === 'message' ? 'bg-pink-500 text-white' : 'text-black'}`}
                                    onClick={() => this.handleTabClick('message')}
                                >
                                    Message
                                </button>
                            </div>
                            {/* Chat Tab Content */}
                            {activeTab === 'chat' && (
                                <div className="p-4 max-h-[60vh] overflow-y-auto">
                                    {chats?.map((chat) => (
                                        <div
                                            key={chat.id}
                                            onClick={() => this.handleChatClick(chat.id)}
                                            className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
                                        >
                                            <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
                                            <div className="text-black">
                                                {chat?.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* Message Tab Content */}
                            {activeTab === 'message' && (
                                <div className="md:w-80 w-[90vw] max-w-sm bg-white shadow-lg rounded-lg z-50">
                                    <h2 className="text-xl font-semibold text-black mb-4 p-4 border-b">Chat with Us</h2>
                                    <div className="p-4 h-64 overflow-y-auto border-b border-gray-200">
                                        {this.state.messages?.messages?.map((msg, index) => (
                                            <div
                                                key={index}
                                                className='mb-2 p-2 rounded-lg bg-gray-200 w-3/4 mr-auto text-black'
                                            >
                                                <div className="flex flex-col">
                                                    <div className={msg?.sender === 'owner' ? 'text-right' : 'text-left'}>
                                                        {msg?.message}
                                                    </div>
                                                    <div className="text-xs text-gray-600 text-right">
                                                        {dayjs(msg?.created_at).format('YYYY-MM-DD HH:mm:ss')}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-4 flex items-center border-t border-gray-200">
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
                    ) : (
                        <div className="fixed bottom-20 right-4 md:w-80 w-[90vw] max-w-sm bg-white shadow-lg rounded-lg z-50">
                            <div className="flex flex-col h-full">
                                <h1>Chat</h1>
                                {/* Messages Section */}
                                <div className="p-4 h-64 overflow-y-auto border-b border-gray-200 flex-1">
                                    {this.state.messages?.messages?.map((msg, index) => (
                                        <div
                                            key={index}
                                            className='mb-2 p-2 rounded-lg bg-gray-200 w-3/4 mr-auto text-black'
                                        >
                                            <div className="flex flex-col">
                                                <div className={msg?.sender === 'owner' ? 'text-right' : 'text-left'}>
                                                    {msg?.message}
                                                </div>
                                                <div className="text-xs text-gray-600 text-right">
                                                    {dayjs(msg?.created_at).format('YYYY-MM-DD HH:mm:ss')}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Input Field and Send Button */}
                                <div className="p-4 flex items-center border-t border-gray-200">
                                    <input
                                        type="text"
                                        value={clientMessage}
                                        onChange={(e) => this.setState({ clientMessage: e.target.value })}
                                        placeholder="Type a message..."
                                        className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
                                    />
                                    <button
                                        onClick={this.handleClientMessage}
                                        disabled={isUser === false}
                                        className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}

                {/* Conditional Form Section */}
                {isFormOpen && isUser === false && (
                    <div className="p-4 border-t border-gray-200">
                        <h2 className="text-xl font-semibold text-black mb-4">Please Fill Out the Form</h2>
                        <form onSubmit={this.handleFormSubmit} className="space-y-4">
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={this.handleFormChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                <input
                                    type="text"
                                    name="mobile_number"
                                    value={form.mobile_number}
                                    onChange={this.handleFormChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={this.handleFormChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default ChatComponent;