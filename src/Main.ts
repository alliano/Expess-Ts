
const express = require('express');

const App = express();

const port = 3000;

App.get("/",(req:any,res:any) => {
    res.sendFile("./components/index.html",{root:__dirname});
});
App.get("/home",(req:any,res:any) => {
    res.send("this is home page");
});


App.use('/',(req:any,res:any) => {
    res.status(404)
    res.sendFile("./components/notfound.html",{root:__dirname});
})
App.listen(port,() => {
    console.log(`Expressts listening port http://localhost:${port}`);
})