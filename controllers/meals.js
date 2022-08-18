import Meal from "../models/meal.js";
const getAllMealsStatic = async (req, res) => {
  const search = "a";
  const meals = await Meal.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ meals, nbHits: meals.length });
};

const getAllMeals = async (req, res) => {
  const { featured, group, name } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (group) {
    queryObject.group = group;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  const meals = await Meal.find(queryObject);
  res.status(200).json({ meals, nbHits: meals.length });
};

export default { getAllMeals, getAllMealsStatic };
