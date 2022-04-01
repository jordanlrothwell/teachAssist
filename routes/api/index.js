const router = require("express").Router();
const studentRoutes = require("./studentRoutes");
const classRoutes = require("./classRoutes");

router.use("/student", studentRoutes);
router.use("/class", classRoutes);

module.exports = router;
