// HTML Routes
// =============================================================
module.exports = function(app) {
  // Route to the shareashame handlebar view
  app.get("/", function(req, res) {
    res.render("shareashame", {
      msg: "Welcome Mary!"
    });
  });

  // Route to the wall of shame handlebar view
  app.get("/wall", function(req, res) {
    res.render("wallofshame");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

/* ORIGINAL ROUTES FROM HOMEWORK TEMPLATE
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
}; */
