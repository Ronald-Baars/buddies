import io from 'socket.io-client';

const socket = io();

export default {

  login: (username) => socket.emit('user/post', username),

  sendMessage: (message, receiver) => socket.emit('message/post', message, receiver),

  subscribe: (receiveMessage, updateUserList) => {

    socket.on('message/get', receiveMessage);

    socket.on('user/get', (userList) => {
      const formattedUserList = userList.map(user => ({
        ...user,
        isMe: user.id === socket.id,
      }));

      updateUserList(formattedUserList);
    });
  },

};