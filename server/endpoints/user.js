const getUserColor = require('../services/getUserColor');
const sendUserList = require('../services/sendUserList');

// All user details will be stored in here
const userList = {};

// Export the user-methods
module.exports = {
  
  // Fires when a user sends their chosen username
  login: (io, client, username) => {

    // Store the user data in the clients object
    userList[client.id] = {
      ...userList[client.id],
      username: username,
      status: 'ONLINE',
      color: getUserColor(Object.keys(userList).length),
    };

    // Send the updated userList to all clients
    sendUserList(io, userList);
  },

  // Fires when a client disconnects
  logout: (io, client) => {

    // Delete the client from the userList
    delete userList[client.id];

    // Send the updated userList to all clients
    sendUserList(io, userList);
  },

}
