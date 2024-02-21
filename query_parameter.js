var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var query_set = url.parse(req.url, true).query;
    var text =
      "Course :" +
      query_set.course +
      "....." +
      "   Elective :" +
      query_set.elective;
    res.end(text);
  })
  .listen(8080);
