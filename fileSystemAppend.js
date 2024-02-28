var fs = require("fs");

fs.appendFile(
  "testingTextFile1.txt",
  "Hi Node js \n Hello World",
  function (err, data) {
    if (err) {
      throw err;
    } else {
      console.log("Saved!");
    }
  }
);
