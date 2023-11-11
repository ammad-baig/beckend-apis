const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
    },
    price: {
      type: {
        currency: String,
        amount: Number,
      },
    },
  },
  {
    timeStamp: true,
  }
);

const CourseModel = mongoose.model("courses", CourseSchema);

module.exports = CourseModel;
