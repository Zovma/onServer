const express = require("express");
const fs = require("fs");
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.post("/result1", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("result1.json", JSON.stringify(request.body));
});

app.post("/result2", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("result2.json", JSON.stringify(request.body));
    fs.writeFileSync("result2.xls", JSON.stringify(request.body));
});

app.post("/result3", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("result3.json", JSON.stringify(request.body));
});

app.post("/avgTable", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("avgTable.json", JSON.stringify(request.body));
});

app.get("/table1", function (request, response) {

    response.sendFile(__dirname + "/table1.html");
});

app.get("/table2", function (request, response) {

    response.sendFile(__dirname + "/table2.html");
});

app.get("/table3", function (request, response) {

    response.sendFile(__dirname + "/table3.html");
});
app.get("/avgTable", function (request, response) {

    response.sendFile(__dirname + "/avgTable.html");
});



app.get("/result1", function (request, response) {

    response.sendFile(__dirname + "/result1.json");
});

app.get("/result2", function (request, response) {

    response.sendFile(__dirname + "/result2.json");
});

app.get("/result3", function (request, response) {

    response.sendFile(__dirname + "/result3.json");
});

app.get("/avgTableJson", function (request, response) {

    response.sendFile(__dirname + "/avgTable.json");
});






app.listen(3000);