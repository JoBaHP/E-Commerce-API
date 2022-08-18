import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "meal name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "meal price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.2,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  group: {
    type: String,
    enum: {
      values: [
        "pizza",
        "barbique",
        "a la cart",
        "wraps",
        "sandwich",
        "salad",
        "pastas",
      ],
      message: "{value} ne postoji!",
    },
    /* enum: ['pizza', 'barbique', 'a la cart'] */
  },
});
/* let Meal = mongoose.model('Meal', mealSchema) */
export default mongoose.model("Meal", mealSchema);
