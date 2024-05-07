const PORT = 3000;
const MONGODB =
  "mongodb+srv://masum-khan:pddrgj3q@cluster-of-books.l7bo2sl.mongodb.net/";
  const MODE = "development"

const { connect, set } = require("mongoose");

function initDB() {
  set("strictQuery", true);
  set("debug", MODE === "development");
  connect(MONGODB, { useNewUrlParser: true })
    .then((data) => console.log("db connected"))
    .catch((err) => console.log(err.message));
} 

module.exports  = { PORT, MONGODB, initDB };
