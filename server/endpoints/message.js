// Export the message-methods
module.exports = {
  
  // When a client posts a message...
  send: (io, client, message, receiver) => {

    console.log(message)
    console.log('to', receiver)

    // We send the message to the targetted client
    io.to(receiver).to(client.id).emit('message/get', {
      message: message,
      time: new Date(),
      sender: client.id,
      receiver: receiver,
    });
  },

};