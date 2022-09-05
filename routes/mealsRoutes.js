const express = require("express");
const router = express.Router();

const {
  getAllMeals,
  getAllMealsStatic,
} = require("../controllers/mealsController.js");

router.route("/").get(getAllMeals);
router.route("/static").get(getAllMealsStatic);

module.exports = router;
