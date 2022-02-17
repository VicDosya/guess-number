const express = require("express");
const app = express();

app.use(express.static('./'));

app.get("/", function(req,res){
    res.sendFile(__dirname +"/index.html");
});


app.listen(25565, () => {
    console.log("Server is Running.");
});