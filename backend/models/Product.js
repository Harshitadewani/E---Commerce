import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  price: { type: Number, required: true },
  images: [String], // Cloudinary URLs
  stock: Number,
  tags: [String],
  isFeatured: Boolean,
  specifications: {
    weight: String,
    karat: Number,
    metal: String,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
