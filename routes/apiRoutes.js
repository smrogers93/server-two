var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/examples", function(req, res) {
    db.Example.findOne({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/search", function(req, res) {
    var searchString = req.query.searchString;
    // find the records that match the searchString
    db.Example.findAll({
      where: {
        text: {
          [Op.like]: "%" + searchString + "%"
        }
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
