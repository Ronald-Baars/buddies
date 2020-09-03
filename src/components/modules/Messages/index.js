import React from 'react';

import EmptyState from 'components/common/EmptyState';

import Message from './components/Message';
import './style.css';

const Messages = ({ messageData, selectedUser }) => {
    
  // Filters the messages that are supposed to show in the selected chat
  const filteredMessageData = messageData.filter(message => message.sender === selectedUser.id || message.receiver === selectedUser.id);

  return (
    <div className="Messages">
      {filteredMessageData.length
        ? filteredMessageData.map(message => (
          <Message
            key={message.time}
            message={message}
            selectedUser={selectedUser}
          />
        )) : (
          <EmptyState
            text={`Write your first message to ${selectedUser.name}`}
          />
       )
      }
  </div>
)};

export default Messages;
