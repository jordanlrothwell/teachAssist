const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  assessmentName: String,
  draft: {
    due: Date,
    submitted: Date,
    grade: String,
    email: Date,
  },
  final: {
    due: Date,
    submitted: Date,
    grade: String,
    email: Date,
  },
});

module.exports = assessmentSchema;
