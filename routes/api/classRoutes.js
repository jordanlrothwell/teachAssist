const router = require("express").Router();
const {
  getClasses,
  getSingleClass,
  createMultipleClasses,
} = require("../../controllers/api/classController");

router.route("/").get(getClasses);

router.route("/:classID").get(getSingleClass);

router.route("/seed").post(createMultipleClasses);

module.exports = router;
