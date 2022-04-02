const router = require("express").Router();
const { homePage } = require("../controllers/homeController");

router.route("/").get(homePage);

module.exports = router;
