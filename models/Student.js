const mongoose = require("mongoose");
const assessmentSchema = require("./Assessment");

const studentSchema = new mongoose.Schema(
  {
    name: String,
    assessments: [assessmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
