const router = require("express").Router();
const userModel = require("../models/user");
const { func1, func2, func3 } = require("../controller");

router.get("/landing", async (req, res) => {
  const result = await func1();
  console.log(JSON.stringify(result));
  res.json(result);
});

router.post("/add", async (req, res) => {
  const { fullName, user_id, skills, skills_queue, skills_deleted } = req.body;
  const addResult = await userModel.create({
    fullName,
    user_id,
    skills,
    skills_queue,
    skills_deleted,
  });

  res.send(addResult);
});

router.delete("/delete/:skill_id", async (req, res) => {
  const { skill_id } = req.params;
  const profileId = "66399fd5ac2b0af7d57f3f2b";
  userModel.find;
  const deleteResult = await userModel.findByIdAndUpdate(
    profileId,
    {
      $pull: {
        skills: { id: skill_id },
      },
      $push: {
        skills_deleted: { id: skill_id, name: "i am new one" },
      },
    },
    { new: true }
  );

  res.send("delete: " + JSON.stringify(deleteResult));
});
router.get("/undelete/:skill_id", async (req, res) => {
  const { skill_id } = req.params;
  // const addResult = await new userModel({
  //   fullName,
  //   user_id,
  //   skills,
  //   skills_queue,
  //   skills_deleted,
  // }).save();

  res.send("undelete:   " + skill_id);
});

router.get("/recovery/:token", (req, res) => {
  // destructuring the expected
});

module.exports = router;
