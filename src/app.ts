import fs from "fs";
import store from "./store";
import { wake_up } from "./utils/activation";
import { prefix } from "./variables";
const login = require("fca-unofficial");

login(
  { appState: JSON.parse(fs.readFileSync("appstate.json", "utf8")) },
  (err: Error, api: any) => {
    if (err) return console.error(err);

    api.setOptions({ listenEvents: true });
    api.listen(async (err: Error, event: any) => {
      // Check if bot is deactivated
      if (!store.state.is_awake) {
        // Command to activate the bot
        if (
          event.body != null &&
          (event.type == "message_reply" || event.type == "message")
        ) {
          let input = event.body.toLowerCase();
          const cmd = input.split(" ")[0];
          if (cmd == prefix + "wake_up") wake_up(input, api, event);
        }
        return;
      }
    });
  }
);
