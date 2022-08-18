const getAllMeals = async (req, res) => {
  const { featured, group, name, sort, fields, numericFilters } = req.query;
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
  let result = Meal.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result - result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  const page = Nubmer(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const meals = await result;
  res.status(200).json({ meals, nbHits: meals.length });
};

export default { getAllMeals, getAllMealsStatic };
