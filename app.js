import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import "express-async-errors";
const app = express();

import connectDB from "./db/connect.js";
import mealsRouter from "./routes/meals.js";

const port = process.env.PORT || 3000;

import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/error-handler.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Meals Api</h1><a href="/api/v1/meals" >Meals Route</a>');
});

app.use("/api/v1/meals", mealsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
