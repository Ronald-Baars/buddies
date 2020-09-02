// Sends a list of all connections
module.exports = (io, userList) => {

  // Change the userList object to an array of users
  const userArray = Object.entries(userList).map(([key, value]) => ({ ...value, id: key }));

  // Send the newly generated list to all connected clients
  io.sockets.emit('user/get', userArray);
};