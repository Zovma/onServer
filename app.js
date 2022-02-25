const express = require("express");
const app = express();
 
app.use(function (request, response) {
  response.sendFile(__dirname + "/formula.html");
});
 
app.listen(3000);