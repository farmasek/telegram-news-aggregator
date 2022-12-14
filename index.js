require("dotenv").config();

const { bot } = require("./bot_init");
const { handleMessage } = require("./messages_handler");

// Listen for any kind of message.

bot.on("message", (msg) => {
  handleMessage(msg);
});
