import { FCAEvent } from "../types";
import { removeFirstWord } from "./helpers";
const bot = require("chatbotapi");
bot.chatbotsetup(process.env.BRAIN_ID, process.env.BRAIN_KEY);

export const chatbot = (input: string, api: any, event: FCAEvent) => {
  bot
    .sendmsg(removeFirstWord(input))
    .then((res: any) => {
      api.sendMessage(res, event.threadID, event.messageID);
    })
    .catch((err: Error) => {
      console.log(err); // Error handler
    });
};
