import React from 'react';

import User from './components/User';
import './style.css';

const UserList = ({ users, selectedUser, setSelectedUser }) => (
  <div className="UserList">
    {users && users.filter(user => !user.isMe).map(userData => (
      <User
        key={userData.id}
        userData={userData}
      />
    ))}
  </div>
);

export default UserList;
