import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  promoteToAdmin,
} from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected
router.get("/profile", auth, getUserProfile);

// Admin
router.put("/:id/promote", auth, isAdmin, promoteToAdmin);

export default router;