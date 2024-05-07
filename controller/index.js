const userModel = require("../models/user");

async function func1() {
  const addResult = await new userModel({
    fullName: "Masumk",
    age: "25 years",
  }).save();
  const readResult = await userModel.find();
  return { add: addResult, view: readResult };
}
function func2(obj) {}
function func3(obj) {}

module.exports = { func1, func2, func3 };
