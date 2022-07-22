import store from "../store";
import { vips, botname } from "../variables";

export const wake_up = (input: string, api: any, event: any) => {
  if (store.state.is_awake) {
    api.sendMessage(`I am already awake`, event.threadID, event.messageID);
    return;
  }
  if (vips.includes(event.senderID)) {
    store.wake_up();
    api.sendMessage(
      `Hello World!
      
      ${botname} bot activated`,
      event.threadID,
      event.messageID
    );
  } else {
    api.sendMessage(
      `You don't have authorization to use this command`,
      event.threadID,
      event.messageID
    );
  }
};

export const sleep = (input: string, api: any, event: any) => {
  if (vips.includes(event.senderID)) {
    store.sleep();
    api.sendMessage(
      `I'm going to bed now. Bye!
      
      ${botname} bot deactivated`,
      event.threadID,
      event.messageID
    );
  } else {
    api.sendMessage(
      `You don't have authorization to use this command`,
      event.threadID,
      event.messageID
    );
  }
};
