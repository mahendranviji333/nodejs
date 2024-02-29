var url = require("url");
var adr = "https://api.learn.online/universities/list/?id=5";
var q = url.parse(adr, true);
console.log(q.host); //api.learn.online
console.log(q.pathname); // /universities/list/
console.log(q.search); // ?id=5
console.log(q.query); // [Object: null prototype] { id: '5' }
console.log(q.query.id); // 5
