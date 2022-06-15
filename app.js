


const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

let today = new Date();
let currentDay = today.getDay();
let day = "";



app.get("/", function (req, res) {

    res.render("list", { kindOfDay: currentDay });

});

app.listen(3000, function () {
    console.log("Server statup on port 3000")

})

