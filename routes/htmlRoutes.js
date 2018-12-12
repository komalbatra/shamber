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
