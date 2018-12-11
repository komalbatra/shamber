// Requiring our Shamber model
//var db = require("../models");

// HTML Routes
// =============================================================
module.exports = function(app) {
  // Route to the shareashame handlebar view
  app.get("/", function(req, res) {
    res.render("shareashame");
  });

  app.get("/wall", function(req, res) {
    res.render("wallofshame");
  });

  /* Route to the wall of shame handlebar view
  app.get("/wall", function(req, res) {
    db.Shamber.findAll({}).then(function(dbPost) {
      res.render("wallofshame", {
        msg: "",
        shamePosts: dbPost
      });
    });
  });*/

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
