import express from "express";
import * as tagsController from "../controllers/tags-controller.js";

const router = express.Router();

// Get all tags
router.get("/", tagsController.getAllTags);

// Express error handler middleware
router.use((err, req, res, next) => {
  console.error(err);
  if (!res.headersSent) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;