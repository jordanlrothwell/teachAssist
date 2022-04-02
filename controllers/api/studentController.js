const Student = require("../../models/Student");

module.exports = {
  // Create a new student
  async createStudent(req, res) {
    const newStudent = await Student.create(req.body);
    res.status(200).json(newStudent);
  },

  // Get all students
  async getStudents(req, res) {
    const allStudents = await Student.find();
    const studentsOBJ = { allStudents };
    res.json(studentsOBJ);
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

  // Add an assessment
  async addAssessment(req, res) {
    try {
      const newAssessment = await Student.findOneAndUpdate(
        { _id: req.params.studentID },
        { $addToSet: { assessments: req.body } },
        { runValidators: true, new: true }
      );

      if (!newAssessment) {
        res.status(400).json({ message: "No student with that ID" });
      }

      res.status(200).json(newAssessment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
