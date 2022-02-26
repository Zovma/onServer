const express = require("express");
const fs = require("fs");  
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
  
app.post("/result", jsonParser, function (request, response) {
    // fs.writeFileSync("result.json", request);
    if(!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно
    // let arr = JSON.parse(request.body);
    // fs.writeFileSync("result.json", request);
    // let obj = request.body
    fs.writeFileSync("result.json", JSON.stringify(request.body));
});
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/formula.html");
});

app.get("/json", function(request, response){
      
    response.sendFile(__dirname + "/result.json");
});
  
app.listen(3000);