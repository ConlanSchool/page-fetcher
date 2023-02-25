const fs = require("fs");
const request = require("request");

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error downloading resource at ${url}: ${error}`);
  } else {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.error(`Error writing file to ${filePath}: ${err}`);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  }
});
