// Requiring our Shamber model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // POST route for saving a new shame
  app.post("/api/shames/", function(req, res) {
    console.log(req.body);
    db.Shamber.create({
      name: req.body.name,
      shame: req.body.shame,
      score: req.body.score
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        console.error(err.messge, err);
      });
  });

  // GET route for getting all of the shames
  app.get("/api/shames/", function(req, res) {
    db.Shamber.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        console.error(err.messge, err);
      });
  });

  // GET route for retrieving a single shame
  app.get("/api/shames/:id", function(req, res) {
    db.Shamber.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        console.error(err.messge, err);
      });
  });

  // DELETE route for deleting shames
  app.delete("/api/shames/:id", function(req, res) {
    db.Shamber.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        console.error(err.messge, err);
      });
  });

  // PUT route for updating shames
  app.put("/api/shames/", function(req, res) {
    db.Shamber.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        console.error(err.messge, err);
      });
  });

  // GET route for returning shames of a specific category (e.g., top shames, newest shames)
  app.get("/api/shames/category/:category", function(req, res) {
    db.Shamber.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        console.error(err.messge, err);
      });
  });
};
