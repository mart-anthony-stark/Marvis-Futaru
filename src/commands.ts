import {
  bibleVerse,
  chatbot,
  generateMeme,
  motivation,
  wikiSearch,
} from "./utils";
import { help } from "./utils/help";
import { PREFIX } from "./variables";

export const commands = {
  [PREFIX + "help"]: help,
  [PREFIX + "verse"]: bibleVerse,
  [PREFIX + "wiki"]: wikiSearch,
  [PREFIX + "meme"]: generateMeme,
  [PREFIX + "motivation"]: motivation,
  [PREFIX + "marvis"]: chatbot,
};
