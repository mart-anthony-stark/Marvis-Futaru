const axios = require("axios");
const fs = require("fs");
const http = require("https");

axios.get("https://meme-api.herokuapp.com/gimme/memes").then((response) => {
  console.log(response.data);
  const file = fs.createWriteStream("./memes.png");
  const targetUrl = response.data.url;
  http.get(targetUrl, function (imageResponse) {
    imageResponse.pipe(file);
    file.on("finish", function () {
      fs.createReadStream("./memes.png");
    });
  });
});
