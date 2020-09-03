import React from 'react';

import EmptyState from 'components/common/EmptyState';

import User from './components/User';
import './style.css';

const UserList = ({ users, selectedUser, setSelectedUser }) => (
  <div className="UserList">
    {(users && users.length > 1) ? users.filter(user => !user.isMe).map(userData => (
      <User
        key={userData.id}
        userData={userData}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    )) : (
      <EmptyState text="There are no buddies online" />
    )}
  </div>
);

export default UserList;
