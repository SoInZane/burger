// require express
var express = require("express");

// setup variable for router
var router = express.Router();

// variable of bureger to use burger.js file in models folder
var burger = require("../models/burger");


// function of router to get information
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbObject = {
            burgers: data
        };
        console.log(hbObject);
        res.render("index", hbObject);
    });
});

// fucntion of router to insert one record using post
router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

// function of router to update one record using put
router.put("/:id", function (req, res) {
    var id = req.params.id;
    console.log("id: ", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;