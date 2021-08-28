const mongoose = require("mongoose");
const instaSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Insta = new mongoose.model("Insta", instaSchema);
module.exports = Insta;
