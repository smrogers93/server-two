var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome",
        examples: dbExamples
      });
    });
  });
  //loading posting page
  app.get("/post", function(req, res) {
    res.render("post",{
      msg: "Enter Your evidencee"
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    console.log(req.params.id);
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });



  // write a post route to take a search term 
  // write a sequlize query that does a search and returns a list of results
  // niceToHave: allow webpage to specificy how many results to returns (query param?)


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
