import React from 'react';

import Badge from 'components/common/Badge';

import './style.css';

const User = ({ userData, selectedUser, setSelectedUser }) => (
  <button
    key={userData.id}
    className={`User ${selectedUser && (userData.id === selectedUser.id) ? 'User-selected' : ''}`}
    onClick={() => setSelectedUser(userData)}
  >
    <Badge userData={userData} />
    <div className="User__name">
      {userData.username}
    </div>
  </button>
);

export default User;
