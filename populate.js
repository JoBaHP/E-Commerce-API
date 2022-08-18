// populate db with data from json file

import * as dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import Meal from "./models/meal.js";
import jsonMeals from "./meals.json" assert { type: "json" };

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Meal.deleteMany(); // clear all
    await Meal.create(jsonMeals);
    console.log("succsess!!! db is populate");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

//run script: $ node populate
