const storedMessages = {};

const draftMessages = {
  add: (message, userId) => {
    storedMessages[userId] = message;

    console.log(storedMessages)
  },

  get: (userId) => storedMessages[userId] || "",
  
};

export default draftMessages;