var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/attacks", function(req, res) {
    db.SharkAttacks.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  //get specific shark attack by year
  app.get("/api/attacks/:year", function(req, res) {
    db.SharkAttacks.findAll({
      where: {year = req.params.year}
    }).then(function(results) {
      res.json(results);
    });
  });

  //get specific shark attack by country
  app.get("/api/attack/:country/:area?", function(req, res) {
    var queries = {
      country: req.params.country,
      area: undefined
    }
    if(req.params.area){
      queries.area = req.params.area;
    } else {
      delete queries.area;
    }
    db.SharkAttacks.findAll({
      where: queries
    }).then(function(results) {
      res.json(results);
    });
  });

  //get specific shark attack by country and area
  app.get("/api/attack/:country/:area/:location?", function(req, res) {
    var queries = {
      country: req.params.country,
      area: req.params.area,
      location: undefined
    }
    if(req.params.location){
      queries.location = req.params.location;
    } else {
      delete queries.location;
    }
    db.SharkAttacks.findAll({
      where: queries
    }).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/attacks", function(req, res) {
    db.SharkAttacks.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.SharkAttacks.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
