const { render } = require("express/lib/response");
const Student = require("../models/Student");

module.exports = {
  // Home page (placeholder)
  async homePage(req, res) {
    const students = await Student.find().lean();
    const studentsOBJ = { students };
    res.render("home", studentsOBJ);
  },
};
