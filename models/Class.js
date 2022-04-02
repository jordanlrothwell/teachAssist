const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    year: Number,
    level: String,
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Virtual property 'isSenior' that returns true if year is 11 or 12
classSchema.virtual("isSenior").get(function () {
  if (this.year >= 11) {
    return true;
  }
  return false;
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
