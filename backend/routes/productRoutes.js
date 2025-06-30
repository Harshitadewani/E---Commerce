// server/routes/productRoutes.js
import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { auth } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { upload } from "../utils/upload.js";

const router = express.Router();

// Public Routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin Routes
router.post("/create", auth, isAdmin, upload.single("image"), createProduct);
router.put("/:id", auth, isAdmin, upload.single("image"), updateProduct);
router.delete("/:id", auth, isAdmin, deleteProduct);

export default router;
