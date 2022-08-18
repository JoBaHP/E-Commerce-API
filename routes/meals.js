import express from "express";
const router = express.Router();

import GetMeals from "../controllers/meals.js";

router.route("/").get(GetMeals.getAllMeals);
router.route("/static").get(GetMeals.getAllMealsStatic);

export default router;
