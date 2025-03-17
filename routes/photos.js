import express from "express";
import * as photosController from "../controllers/photos-controller.js";

const router = express.Router();

// 📸 Route: Get all cafes
router.get("/", photosController.getAllCafes);

// 📸 Route: Get a single cafe by ID
router.get("/:id", photosController.getCafeById);

// 💬 Route: Get comments for a specific cafe
router.get("/:id/comments", photosController.getCommentsByCafeId);

// 💬 Route: Add a new comment to a cafe
router.post("/:id/comments", photosController.addCommentToCafe);

export default router;