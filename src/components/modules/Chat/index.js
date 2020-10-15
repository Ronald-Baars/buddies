import React from 'react';

import EmptyState from 'components/common/EmptyState';
import Input from 'components/common/Input';
import Messages from 'components/modules/Messages';
import socket from 'services/socket';
import draftMessages from 'services/draftMessages';


import './style.css';

const Chat = ({ selectedUser, messageData }) => {

  // Send the new message to the back-end
  const handleSubmit = (newMessage) => {
    socket.sendMessage(newMessage, selectedUser.id);
  };

  const handleChange = (currentMessage) => {
    console.log('handleChange');
    draftMessages.add(currentMessage, selectedUser.id)
  }

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
            onChange={handleChange}
            userId={selectedUser.id}  
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
