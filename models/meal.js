const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Meal", MealSchema);
