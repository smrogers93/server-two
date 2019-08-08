var express = require("express");

var router = express.Router();

var sharkAttacks = require("../models/example.js");

router.get("/", function(req, res) {
    sharkAttacks.all(function(data) {
        var handlebarsObj = {
            examples: data
        };
        //console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });
});

router.get("/example/:id", function(req, res) {
    sharkAttacks.take(["id"], [req.params.id], function(results) {
        result = results[0];
        var handlebarsObj = {
            example: result
        };
        res.render("example", handlebarsObj);
    })
})

router.get("/api/attacks/:year", function(req, res) {
    sharkAttacks.take(["year"],[req.params.year], function(results){
        var handlebarsObj = {
            example: results
        };
        res.render("example", handlebarsObj);
      });
});

router.get("/api/attacks/:country/:area", function(req, res) {
    var traitArray = ["country", "area"];
    var conditionArray = [req.params.country, req.params.area];
    db.SharkAttacks.take(traitArray, conditionArray, function(results) {
        var handlebarsObj = {
            example: results
        };
        res.render("example", handlebarsObj);
    });
});

router.get("/api/attacks/:country/:area", function(req, res) {
    var traitArray = ["country", "area", "location"];
    var conditionArray = [req.params.country, req.params.area, req.params.location];
    db.SharkAttacks.take(traitArray, conditionArray, function(results) {
        var handlebarsObj = {
            example: results
        };
        res.render("example", handlebarsObj);
    });
});

router.post("/api/attacks", function(req, res) {
    var traitArray = ["date", "year", "type", "country", "area", "location", "injury", "species", "`href formula`"];
    var conditionArray = [];
    conditionArray.push(req.body.date);
    conditionArray.push(req.body.year);
    conditionArray.push(req.body.type);
    conditionArray.push(req.body.country);
    conditionArray.push(req.body.area);
    conditionArray.push(req.body.location);
    conditionArray.push(req.body.injury);
    conditionArray.push(req.body.species);
    conditionArray.push(req.body.href);
    db.SharkAttacks.create(traitArray, conditionArray, function(results) {
      res.json( {id: result.insertId });
    });
});

module.exports = router;