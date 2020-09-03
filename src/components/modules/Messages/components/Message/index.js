import React from 'react';

import Badge from 'components/common/Badge';

import './style.css';

const Message = ({ message, selectedUser }) => {
  // Checks if the message is 'sent' or 'received'
  const direction = message.receiver === selectedUser.id ? 'sent' : 'received';

  return (
    <div className={`Message Message-${direction}`}>
      {direction === 'received' && <Badge className="Message__Badge" userData={selectedUser} />}
      <div className="Message__content">{message.message}</div>
    </div>
  );
}

export default Message;
