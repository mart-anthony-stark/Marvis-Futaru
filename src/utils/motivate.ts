import { FCAEvent } from "../types";
import axios from "axios";

/**
 * Motivations
 * @param {*} input
 * @param {*} api
 * @param {*} event
 */
export const motivation = async (input: string, api: any, event: FCAEvent) => {
  await axios
    .get("https://zenquotes.io/api/random")
    .then((response: any) => {
      api.sendMessage(
        response.data[0].q + "\n- " + response.data[0].a,
        event.threadID,
        event.messageID
      );
    })
    .catch((err: Error) => {
      return "err ";
    });
};
