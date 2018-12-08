//API Routes
// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // POST route for saving a new todo
  app.post("/api/shames", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Shamber.create({
      name: req.body.name,
      shame: req.body.shame,
      score: req.body.score
    }).then(function(dbShamber) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbShamber);
    });
  });
};

/* *********************************************************************************
  // apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
  // *********************************************************************************
  
  // Dependencies
  // =============================================================
  
  // Requiring our models
  var Shame = require("../models");
  
  // Routes
  // =============================================================
  module.exports = function(app) {
    // Get all shames
    app.get("/api/shames", function(req, res) {
      // Finding all shames, and then returning them to the user as JSON.
      Shame.Shamber.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
    });
  
    // Add a shame
    app.post("/api/shames", function(req, res) {
      console.log("Shame Data:");
      console.log(req.body);
  
      Shame.Shamber.create({
        name: req.body.name,
        shame: req.body.shame,
        createdAt: req.body.createdAt,
        score: req.body.score
      })
        .then(function(results) {
          // `results` here would be the newly created shame
          res.json(results);
        })
        .catch(function(err) {
          console.error(err.messge, err);
        });
    });
  };
  
  /* ORIGINAL ROUTES FROM HOMEWORK TEMPLATE
  module.exports = function(app) {
    // Get all examples
    app.get("/api/examples", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.json(dbExamples);
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
      db.Example.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbExample) {
        res.json(dbExample);
      });
    });
  }; */
