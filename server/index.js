const io = require('socket.io')();

const user = require('./endpoints/user');
const message = require('./endpoints/message');

io.on('connection', (client) => {

  // Fires when a client sends their chosen username
  client.on('user/post', (username) => user.login(io, client, username));

  // Fires when a client disconnects
  client.on('disconnect', () => user.logout(io, client));

  // Fires when a client sends a message
  client.on('message/post', (messageText, receiver) => {
    console.log(messageText)
    message.send(io, client, messageText, receiver);
  });

});

// Start the socket.io server on port 8080
io.listen(8080);