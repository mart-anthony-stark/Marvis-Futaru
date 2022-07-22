import { helpStr } from "../variables";

/**
 * Help - Shows all commands
 */
export const help = (input: string, api: any, event: any) => {
  api.getUserID("Mart.Salazar", (err: Error, data: any) => {
    api.sendMessage(
      {
        body: helpStr,
        mentions: [
          {
            tag: "@Mart Salazar",
            id: data[0].userID,
          },
        ],
      },
      event.threadID,
      event.messageID
    );
  });
};
