const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.status(200).send("All is good");
});

app.listen(5050, function() { console.log("PORT LISTEN TO 5050") });