const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const app = express();

// PORT
const port = process.env.PORT || 5000;
// Body Parser
app.use(express.json());
// For production purpose
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Server Connection purpose
app.listen(port, () => {
  console.log(`Server Connected on ${port}`);
});
