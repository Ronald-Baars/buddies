import React, { useState, useEffect } from 'react';

import UserList from 'components/modules/UserList';
import Chat from 'components/modules/Chat';
import socket from 'services/socket';

import './style.css';

const Main = ({ username }) => {

  const [ selectedChat, setSelectedChat ] = useState();
  const [ messages, setMessages ] = useState();
  const [ users, setUsers ] = useState();

  // Add new messages to the state
  const receiveMessage = (message) => {
    setMessages(existingMessages => [...existingMessages, message]);
  };

  // Once we logged in, send the username to the back-end
  useEffect(() => {
    socket.login(username);
    socket.subscribe(receiveMessage, setUsers);
  }, [username]);

  return (
    <div className="Main">
      <UserList
        users={users}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />
      <Chat
        selectedChat={selectedChat}
        messages={messages}
      />
    </div>
  );
};

export default Main;
