var http = require("http");
var dateFn = require("./firstModules");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Current date and time :" + dateFn.dateFunctionCall());
    res.end();
  })
  .listen(8080);
