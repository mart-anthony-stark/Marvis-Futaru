import { FCAEvent } from "../types";

export const sendcode = (input: string, api: any, event: FCAEvent) => {
  try {
    const replies = [
      `You can find sourcecode here at my master's github profile🖤
  
      https://github.com/mart-anthony-stark/Marvis-Futaru`,
      `Here is my sourcecode https://bit.ly/3RKchYE
      Sharing is caring🖤`,
      `You can find my source code here: https://bit.ly/3aOvpE1 🖤`,
    ];

    api.sendMessage(
      replies[Math.floor(Math.random() * replies.length)],
      event.threadID,
      event.messageID
    );
  } catch (error) {}
};
