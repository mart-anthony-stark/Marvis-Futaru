import { FCAEvent } from "../types";
import { removeFirstWord } from "./helpers";
import wiki from "wikijs";

/**
 * Wiki - searches wikipedia and shows summary
 */
export const wikiSearch = async (input: string, api: any, event: FCAEvent) => {
  try {
    const page = await wiki().page(removeFirstWord(input));
    const result = await page.summary();
    api.sendMessage(result, event.threadID);
  } catch (error) {
    console.log(error);
    api.sendMessage("No article found", event.threadID, event.messageID);
  }
};
