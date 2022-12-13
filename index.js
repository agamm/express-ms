const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", async function (req, res) {
  res.json({ test: 123 });
});

app.listen(process.env.PORT || 3000);
