"use strict";
const http = require("http");
const quotes = require("./quotes");

const port = 3000;
http.createServer((req, res) => {
  let randomnumber = Math.floor(Math.random()*quotes.length) //this is getting me a random number between 0 and lenth of quote
  res.writeHead(200, {"Content-type": "text/plain"});
  res.write(quotes[randomnumber]);
  res.end();
}).listen(port);
console.log("http://localhost:" + port);