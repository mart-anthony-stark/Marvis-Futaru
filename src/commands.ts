import { bibleVerse, generateMeme, wikiSearch } from "./utils";
import { help } from "./utils/help";
import { PREFIX } from "./variables";

export const commands = {
  [PREFIX + "help"]: help,
  [PREFIX + "verse"]: bibleVerse,
  [PREFIX + "wiki"]: wikiSearch,
  [PREFIX + "meme"]: generateMeme,
};
