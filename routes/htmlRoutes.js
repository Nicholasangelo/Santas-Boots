// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/the-snow", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/theSnow.html"));
  });
  app.get("/santas-boots", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/santasBoots.html"));
  });
  app.get("/alt-reindeer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/alt-reindeer.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};