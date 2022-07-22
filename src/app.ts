import fs from "fs";
import { commands } from "./commands";
import store from "./store";
import { FCAEvent } from "./types";
import { sendcode } from "./utils";
import { wake_up } from "./utils/activation";
import { badwords, PREFIX, VIPS } from "./variables";
const login = require("fca-unofficial");

login(
  { appState: JSON.parse(fs.readFileSync("appstate.json", "utf8")) },
  (err: Error, api: any) => {
    if (err) return console.error(err);

    api.setOptions({ listenEvents: true });
    api.listen(async (err: Error, event: FCAEvent) => {
      // Check if bot is deactivated
      if (!store.state.is_awake) {
        // Command to activate the bot
        if (
          event.body != null &&
          (event.type == "message_reply" || event.type == "message")
        ) {
          let input = event.body.toLowerCase();
          const cmd = input.split(" ")[0];
          if (cmd == PREFIX + "wake_up") wake_up(input, api, event);
        }
        return;
      }

      // Will be reached when bot is activated
      switch (event.type) {
        case "message_reply":
          if (VIPS.includes(event.senderID)) {
            api.setMessageReaction(
              "🖤",
              event.messageID,
              (err: Error) => {},
              true
            );
          }
          let msgid = event.messageID;
          let input = event.body;
          break;
        case "message":
          if (event.body != null) {
            let input = event.body.toLowerCase();
            const cmd = input.split(" ")[0];
            if (VIPS.includes(event.senderID)) {
              api.setMessageReaction(
                "🖤",
                event.messageID,
                (err: Error) => {},
                true
              );
            }
            // Execute mapped function to specific command
            if (!!commands[cmd]) {
              commands[cmd](input, api, event);
            } else {
              if (cmd.startsWith(PREFIX))
                api.sendMessage(
                  `'${cmd.substring(
                    PREFIX.length
                  )}' is not recognized as an internal or external command. \ntype ${PREFIX}help for more info.`,
                  event.threadID,
                  event.messageID
                );
            }
            // ------------Greetings--------------------------
          }
          break;
      }
      // -------------END SWITCH--------------------
      // -----For both reply and regular message
      if (
        event.body != null &&
        (event.type == "message_reply" || event.type == "message")
      ) {
        let input = event.body.toLowerCase();
        //-------------CHECK IF THE CHAT IS BADWORD-----------------
        const isBadword = badwords.some((substring) =>
          input.includes(substring)
        );
        if (isBadword) {
          const replies = [
            "Pay attention to what you are saying!",
            "Do not say anything rude!",
            "Hey, don't talk that way!",
            "Watch your mouth!",
            "Listen, potty-mouth! Watch your tongue!",
            "Don't be rude!",
          ];
          api.sendMessage(
            replies[Math.floor(Math.random() * replies.length)],
            event.threadID,
            event.messageID
          );
        }
        // -----------`SEND SOURCE CODE`---------------------
        if (
          input.includes("marvis") &&
          (input.includes("send") || input.includes("give")) &&
          (input.includes("source") || input.includes("code"))
        ) {
          sendcode(input, api, event);
        }
      }
    });
  }
);
