const { bot } = require("./bot_init");

const chatId = process.env.BOT_POST_CHAT_ID;

const handleMessage = (msg) => {
  if (!chatId) {
    console.error("There is no chat id set");
  }
  console.log("handles msg from", msg.chat.title, msg.text);
  bot.sendMessage(
    chatId,
    `Received MSG on ${msg.chat.title}
  
  -----
  
  ${msg.text}
  `
  );
};

module.exports = {
  handleMessage,
};
