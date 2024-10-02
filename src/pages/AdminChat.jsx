import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import dayjs from "dayjs";
import { IoArrowBack } from "react-icons/io5"; // Importing icon
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "chat",
      selectedChatId: null,
      chats: [],
      messages: [],
      setInfo: "",
      ownerMessage: "",
      ownerId: "",
      dateFilter: "all",
    };
  }

  componentDidMount() {
    this.fetchAllUsers();
  }

  fetchAllUsers = async () => {
    const domain = localStorage.getItem("domain");
    const response = await axios.get(`${domain}/users`);
    this.setState({ chats: response.data });
  };

  handleChatClick = async (id) => {
    const domain = localStorage.getItem("domain");
    this.setState({ activeTab: "message" });
    const response = await axios.get(`${domain}/users/${id}/ownermessage`);
    this.setState({
      messages: response.data.messages,
      setInfo: response.data,
      ownerId: id,
    });
  };

  handleOwnerMessage = async (e) => {
    e.preventDefault();
    const domain = localStorage.getItem("domain");
    try {
      await axios.post(`${domain}/users/${this.state.ownerId}/ownermessage`, {
        message: this.state.ownerMessage,
      });
      this.setState({ ownerMessage: "" });

      const messageResponse = await axios.get(
        `${domain}/users/${this.state.ownerId}/ownermessage`
      );
      this.setState({ messages: messageResponse.data.messages });
    } catch (error) {
      console.error("There was an error posting the message!", error);
    }
  };

  handleDateFilterChange = (e) => {
    this.setState({ dateFilter: e.target.value });
  };

  // getFilteredChats = () => {
  //     const { chats, dateFilter } = this.state;
  //     const today = dayjs().startOf('day');
  //     const yesterday = today.subtract(1, 'day');
  //     const all = chats;

  //     return chats.length > 0 && chats?.filter(chat => {
  //         const chatDate = dayjs(chat.created_at).startOf('day'); // Assuming chats have a created_at field
  //         if (dateFilter === 'today') {
  //             return chatDate.isSame(today, 'day');
  //         }
  //         if (dateFilter === 'yesterday') {
  //             return chatDate.isSame(yesterday, 'day');
  //         }
  //         if (dateFilter === 'all') {
  //             return chats;
  //         }
  //         return false;
  //     });
  // };

  getFilteredChats = () => {
    const { chats, dateFilter } = this.state;
    const today = dayjs().startOf("day");
    const yesterday = today.subtract(1, "day");

    // Filter chats based on the dateFilter
    const filteredChats = chats.filter((chat) => {
      const chatDate = dayjs(chat.created_at).startOf("day"); // Assuming chats have a created_at field
      if (dateFilter === "today") {
        return chatDate.isSame(today, "day");
      }
      if (dateFilter === "yesterday") {
        return chatDate.isSame(yesterday, "day");
      }
      if (dateFilter === "all") {
        return true; // Include all chats
      }
      return false; // No matches
    });

    // Sort the filtered chats in descending order by created_at
    return filteredChats.sort((a, b) =>
      dayjs(b.created_at).diff(dayjs(a.created_at))
    );
  };

  render() {
    const { activeTab, ownerMessage, messages, setInfo, dateFilter } =
      this.state;
    const filteredChats = this.getFilteredChats();

    return (
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        {/* Sidebar */}
        <div
          className={`flex-shrink-0 md:w-1/4 bg-white shadow-lg border-r border-gray-200 ${
            activeTab === "chat" ? "block" : "hidden md:block"
          }`}
        >
          <div className="flex items-center border-b border-gray-200 p-4">
            <Link to="/">
              <button
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={() => this.setState({ activeTab: "chat" })}
              >
                <IoArrowBack className="mr-2" /> Back to Home
              </button>
            </Link>
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

          <div className="p-4 overflow-y-auto max-h-[87vh]">
            {filteredChats.length > 0 &&
              filteredChats?.map((chat) => {
                const lastMessage =
                  chat.messages?.[chat.messages.length - 1] || {}; // Assuming messages are part of chat
                const messageText = lastMessage.message
                  ? lastMessage.message
                  : "No messages";
                const messageDate = lastMessage.created_at
                  ? dayjs(lastMessage.created_at).format("YY/MM/DD HH:mm")
                  : "";
                const chatName = chat.name || "Unknown";

                return (
                  <div
                    key={chat.id}
                    onClick={() => this.handleChatClick(chat.id)}
                    className="flex items-center mb-2 p-2 cursor-pointer hover:bg-gray-100"
                  >
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
                    <div className="text-black flex-1">
                      <div className="font-bold">{chatName}</div>
                      <div className="text-gray-600 text-sm truncate">
                        {messageText}
                      </div>
                      <div className="text-xs text-gray-400">{messageDate}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Message View */}
        <div
          className={`flex-1 ${
            activeTab === "message" ? "block" : "hidden"
          } md:block`}
        >
          {activeTab === "message" && (
            <div className="flex flex-col h-screen">
              <div className="p-4 border-b border-gray-200 bg-white">
                <button
                  onClick={() => this.setState({ activeTab: "chat" })}
                  className="md:hidden flex items-center text-gray-600 hover:text-gray-900"
                >
                  <IoArrowBack className="mr-2" /> Back to Chat
                </button>

                <button
                  onClick={() => this.setState({ activeTab: "chat" })}
                  className="md:block hidden fixed top-4 right-4 p-2 bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-gray-900 rounded-full"
                >
                  <RxCross2 className="text-2xl" />
                </button>
                <h2 className="text-lg font-bold capitalize">{setInfo.name}</h2>
                <p>
                  <span className="text-lg font-semibold">Email: </span>
                  {setInfo.email}
                </p>
                <p>
                  <span className="text-lg font-semibold">Mob: </span>
                  {setInfo.mobile_number}
                </p>
                <p>
                  <span className="text-lg font-semibold">Enquiry For: </span>
                  {setInfo.service} On{" "}
                  <span className="text-lg font-semibold">
                    {dayjs(setInfo?.created_at).format("YY/MM/DD HH:mm")}
                  </span>
                </p>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                {messages?.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-lg ${
                      message?.sender === "owner"
                        ? "bg-[#e27daa] text-white w-3/4 ml-auto"
                        : "bg-gray-100 text-black w-3/4 mr-auto"
                    }`}
                  >
                    <div className="flex flex-col">
                      <div>{message?.message}</div>
                      <div className="text-xs text-gray-600 text-right">
                        {dayjs(message?.created_at).format("YY/MM/DD HH:mm")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-white">
                <input
                  type="text"
                  value={ownerMessage}
                  onChange={(e) =>
                    this.setState({ ownerMessage: e.target.value })
                  }
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
