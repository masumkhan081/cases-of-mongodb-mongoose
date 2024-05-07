const express = require("express");
const app = express();
const { MONGODB, PORT, initDB } = require("./config");

// initialize the database
initDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes: login, register, recover, reset, verify, logout ...
app.use("/", require("./routes"));

// // close the server
app.get("/quit", function (req, res) {
  res.send("closed");
});
// server closing endpoint; no need what so ever
app.get("/", (req, res) => {
  res.send(`<a href="/quit">quit</a>`);
});

app.listen(PORT, () => {
  console.log("running ...");
});
