const router = require("express").Router();
const {
  getStudents,
  getSingleStudent,
} = require("../../controllers/studentController");

router.route("/").get(getStudents);

router.route("/:studentID").get(getSingleStudent);

module.exports = router;
