const express = require("express");
const fs = require("fs");
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.post("/result1", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./indexBuySell/json/result1.json", JSON.stringify(request.body));
});

app.post("/result2", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./indexBuySell/json/result2.json", JSON.stringify(request.body));
});

app.post("/result3", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./indexBuySell/json/result3.json", JSON.stringify(request.body));
});

app.post("/avgTable", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./avgTable/avgTableJson/avgTable.json", JSON.stringify(request.body));
});
app.post("/avgTable2", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./avgTable/avgTableJson/avgTable2.json", JSON.stringify(request.body));
});

app.post("/avgTable3", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./avgTable/avgTableJson/avgTable3.json", JSON.stringify(request.body));
});

app.post("/avgTable4", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./avgTable/avgTableJson/avgTable4.json", JSON.stringify(request.body));
});

app.post("/avgTable5", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./avgTable/avgTableJson/avgTable5.json", JSON.stringify(request.body));
});

app.post("/avgTable6", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./avgTable/avgTableJson/avgTable6.json", JSON.stringify(request.body));
});

app.post("/avgTable7", jsonParser, function (request, response) {
    // console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно

    fs.writeFileSync("./avgTable/avgTableJson/avgTable7.json", JSON.stringify(request.body));
});


app.get("/", function (request, response) {

    response.sendFile(__dirname + "/welcome.html");
});


app.get("/table1", function (request, response) {

    response.sendFile(__dirname + "/indexBuySell/table1.html");
});

app.get("/table2", function (request, response) {

    response.sendFile(__dirname + "/indexBuySell/table2.html");
});

app.get("/table3", function (request, response) {

    response.sendFile(__dirname + "/indexBuySell/table3.html");
});




app.get("/avgTable", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTable.html");
});
app.get("/avgTable2", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTable2.html");
});
app.get("/avgTable3", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTable3.html");
});
app.get("/avgTable4", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTable4.html");
});
app.get("/avgTable5", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTable5.html");
});
app.get("/avgTable6", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTable6.html");
});
app.get("/avgTable7", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTable7.html");
});



app.get("/result1", function (request, response) {

    response.sendFile(__dirname + "/indexBuySell/json/result1.json");
});

app.get("/result2", function (request, response) {

    response.sendFile(__dirname + "/indexBuySell/json/result2.json");
});

app.get("/result3", function (request, response) {

    response.sendFile(__dirname + "/indexBuySell/json/result3.json");
});





app.get("/avgTableJson", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTableJson/avgTable.json");
});
app.get("/avgTableJson2", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTableJson/avgTable2.json");
});
app.get("/avgTableJson3", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTableJson/avgTable3.json");
});
app.get("/avgTableJson4", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTableJson/avgTable4.json");
});
app.get("/avgTableJson5", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTableJson/avgTable5.json");
});
app.get("/avgTableJson6", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTableJson/avgTable6.json");
});
app.get("/avgTableJson7", function (request, response) {

    response.sendFile(__dirname + "/avgTable/avgTableJson/avgTable7.json");
});


app.listen(3000);