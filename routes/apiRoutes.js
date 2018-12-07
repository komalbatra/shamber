// *********************************************************************************
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
    Shamber.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a shame
  app.post("/api/new", function(req, res) {
    console.log("Shame Data:");
    console.log(req.body);

    Shamber.create({
      name: req.body.name,
      shame: req.body.shame,
      createdAt: req.body.createdAt,
      score: req.body.score
    })
      .then(function(results) {
        // `results` here would be the newly created shame
        res.end();
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
