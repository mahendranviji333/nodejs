fs = require("fs");
// The fs.open() method takes a "flag" as the second argument,
// if the flag is "w" for "writing"

fs.open("testingTextFile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
