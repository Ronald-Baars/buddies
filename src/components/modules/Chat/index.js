import React from 'react';

import EmptyState from 'components/common/EmptyState';
import Input from 'components/common/Input';
import Messages from 'components/modules/Messages';
import socket from 'services/socket';

import './style.css';

const Chat = ({ selectedUser, messageData }) => {

  // Send the new message to the back-end
  const handleSubmit = (newMessage) => {
    socket.sendMessage(newMessage, selectedUser.id);
  };

  return (
  <div className="Chat">
    {selectedUser
      ? (
        <>
          <Messages
            messageData={messageData}
            selectedUser={selectedUser}
          />
          <Input
            onSubmit={handleSubmit}
            fullWidth
            className="Chat__Input"
            placeholder="Write your message..."
          />
        </>
      ) : (
        <EmptyState text="Select a buddy to start a chat" />
      )}
  </div>
)};

export default Chat;
