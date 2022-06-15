

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let item = ["Buy", "E-mail"];
let workItens = ["Meeting", "Licence"];
let title = "";

currentDay = date.getDay();

app.get("/", function (req, res) {

    res.render("list", { day: currentDay, listItem: item, title: "Personal" });

});

app.get("/work", function (req, res) {

    res.render("list", { day: currentDay, listItem: workItens, title: "Work" });

});

app.get("/about", function (req, res) {

    res.render("about", { day: currentDay, listItem: workItens, title: "Work" });

});


app.post("/", function (req, res) {

    console.log(req.body)

    if (req.body.list === "Personal") {
        item.push(req.body.newItem);
        res.redirect("/")
    }

    if (req.body.list === "Work") {
        workItens.push(req.body.newItem);
        res.redirect("/work")
    }



});

app.listen(3000, function () {
    console.log("Server statup on port 3000")

})

