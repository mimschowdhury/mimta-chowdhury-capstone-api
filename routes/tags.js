import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);
const router = express.Router();

// Get all tags
router.get("/", async (req, res, next) => {
  try {
    const tags = await knex("tag").select("*");
    res.json(tags);
  } catch (error) {
    console.error("Failed to retrieve tags:", error);
    next(error);
  }
});

// Express error handler middleware
router.use((err, req, res, next) => {
  console.error(err);
  if (!res.headersSent) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;