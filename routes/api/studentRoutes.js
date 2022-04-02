const router = require("express").Router();
const {
  createStudent,
  addAssessment,
  getStudents,
  getSingleStudent,
} = require("../../controllers/api/studentController");

//-------------------------------------------------- CREATE //

// POST: Create Student
router.route("/").post(createStudent);

// POST: Create Assessment
router.route("/:studentID").post(addAssessment);

//-------------------------------------------------- READ //
// GET: All students
router.route("/").get(getStudents);

// GET: Single student
router.route("/:studentID").get(getSingleStudent);

//-------------------------------------------------- UPDATE //

//-------------------------------------------------- DELETE //

module.exports = router;
