import axios from "axios";
import http from "https";
import fs from "fs";
import { FCAEvent } from "../types";

export const generateMeme = (input: string, api: any, event: FCAEvent) => {
  axios
    .get("https://meme-api.herokuapp.com/gimme/memes")
    .then((response) => {
      console.log(response.data);
      const file = fs.createWriteStream("./memes.png");
      const targetUrl = response.data.url;
      http.get(targetUrl, function (imageResponse) {
        imageResponse.pipe(file);
        file.on("finish", function () {
          const message = {
            body: response.data.title + "\n\nAuthor: " + response.data.author,
            attatchment: fs.createReadStream("./memes.png"),
          };
          api.sendMessage(message, event.threadID, event.messageID);
          api.setMessageReaction(
            "✅",
            event.messageID,
            (err: Error) => {},
            true
          );
        });
      });
    })
    .catch((error) => {
      console.log(error);
      api.sendMessage(
        "Failed to generate Memes, please try again!",
        event.threadID,
        event.messageID
      );
    });
};
