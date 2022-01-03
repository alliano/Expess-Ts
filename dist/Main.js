"use strict";
const express = require('express');
const App = express();
const port = 3000;
App.get("/", (req, res) => {
    res.sendFile("./components/index.html", { root: __dirname });
});
App.get("/home", (req, res) => {
    res.send("this is home page");
});
App.use('/', (req, res) => {
    res.status(404);
    res.sendFile("./components/notfound.html", { root: __dirname });
});
App.listen(port, () => {
    console.log(`Expressts listening port http://localhost:${port}`);
});
