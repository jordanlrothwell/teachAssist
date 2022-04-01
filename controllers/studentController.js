const Student = require("../models/Student");

module.exports = {
  
  // Get all students
  getStudents(req, res) {
    Student.find().then(async (students) => {
      const studentObj = {
        students,
      };
      return res.json(studentObj);
    });
  },

  // Get a single student
  getSingleStudent(req, res) {
    Student.findOne({ _id: req.params.studentID })
      .select("-__v")
      .lean()
      .then(async (student) =>
        !student
          ? res.status(404).json({ message: "No student with that ID" })
          : res.json({ student })
      );
  },
};
