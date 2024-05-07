const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    min: 4,
    max: 100,
    required: true,
  },
  user_id: {
    type: String,
    min: 25,
    max: 50,
    required: true,
  },
  skills: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
  skills_queue: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
  skills_deleted: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model(
  "profiles",
  profileSchema
);