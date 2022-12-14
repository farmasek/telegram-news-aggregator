# Telegram Bot

Bot receives messages from chats where the bot is invited,
handles them and send them to one funnel

## How to start

1) create bot in Botfather and get bot token

2) Create .env file

```
BOT_TOKEN='token you get from botfather'

BOT_POST_CHAT_ID=number of chatID where bot should send messages

```

3) run `npm dev` for development


-----

you need to invite the bot to the chats so he can listen,
one way to get chat id you want to post messages to is invite him and read it in console.

---

Todo

handle message in messages_handler.js to communicate with chat gpt

make the bot deployable