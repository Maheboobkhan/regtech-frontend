import React, { Component } from 'react';
import axios from 'axios';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: []
        };
    }

    componentDidMount() {
        this.fetchChats();
    }

    fetchChats = () => {
        axios.get('http://localhost:8000/api/chats')
            .then(response => {
                this.setState({ chats: response.data });
            })
            .catch(error => console.error('Error fetching chats:', error));
    }

    render() {
        const { chats } = this.state;
        const { onSelectChat } = this.props;

        return (
            <div>
                <h2>Chats</h2>
                <ul>
                    {chats.map(chat => (
                        <li key={chat.id} onClick={() => onSelectChat(chat.id)}>
                            {chat.user.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ChatList;
