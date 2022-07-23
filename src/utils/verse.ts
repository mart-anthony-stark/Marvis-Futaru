import { FCAEvent } from "../types";
import axios from "axios";

/**
 * Bible verse
 */
const getVerse = async () => {
  const data = await axios
    .get("http://labs.bible.org/api/?passage=random&type=json")
    .then((response: any) => {
      return response.data[0];
    })
    .catch((err: Error) => {
      return "Error";
    });
  return data;
};
const bibleVerse = (input: string, api: any, event: FCAEvent) => {
  const verse = getVerse();
  verse
    .then((response) => {
      api.sendMessage(
        "From the book of " +
          response.bookname +
          " chapter " +
          response.chapter +
          " verse " +
          response.verse +
          ":\n\n" +
          response.text,
        event.threadID
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
