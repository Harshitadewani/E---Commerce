// server/routes/orderRoutes.js
import express from "express";
import {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { auth } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// User & Admin
router.get("/", auth, getAllOrders); // user or admin
router.post("/", auth, createOrder); // user only

// Admin Only
router.put("/:id", auth, isAdmin, updateOrder);
router.delete("/:id", auth, isAdmin, deleteOrder);

export default router;
