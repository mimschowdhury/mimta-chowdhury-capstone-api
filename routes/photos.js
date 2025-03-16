import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// 📸 Get all cafes
async function getAllCafes() {
  return await knex("cafe")
    .select("*")
    .orderBy("photographer", "asc"); // Change "photographer" to the column you want to order by
}

// 📸 Get a single cafe by ID
async function getCafeById(id) {
  return await knex("cafe").where({ id }).first();
}

// 💬 Get comments for a specific cafe
async function getCommentsByCafeId(cafeId) {
  return await knex("comments").where({ photo_id: cafeId }).select("*");
}

// 💬 Add a comment to a cafe
async function addCommentToCafe(cafeId, name, comment) {
  return await knex("comments").insert({
    id: uuidv4(),
    photo_id: cafeId,
    name,
    comment,
    timestamp: new Date(),
  });
}

// 📸 Route: Get all cafes
router.get("/", async (req, res) => {
  try {
    const cafes = await getAllCafes();
    console.log("🔥 Raw cafes from DB:", cafes);

    const formattedCafes = cafes.map(cafe => {
      // Split each tag string into individual tags
      const tags = Array.isArray(cafe.tags)
        ? cafe.tags.flatMap(tag => tag.split(",").map(t => t.trim()))
        : [];
      console.log(`🏪 Processing Cafe ID ${cafe.id}, Tags:`, tags);
      return { ...cafe, tags };
    });

    console.log("📸 Formatted cafes:", formattedCafes);
    res.json(formattedCafes);
  } catch (error) {
    console.error("Failed to retrieve cafes - Full error:", error.stack);
    res.status(500).json({ error: "Failed to retrieve cafes", details: error.message });
  }
});

// 📸 Route: Get a single cafe by ID
router.get("/:id", async (req, res) => {
  try {
    const cafe = await getCafeById(req.params.id);
    if (cafe) {
      let tags = Array.isArray(cafe.tags) ? cafe.tags : [];
      if (tags.length === 1 && typeof tags[0] === 'string' && tags[0].includes(',')) {
        tags = tags[0].split(',').map(t => t.trim());
      }
      const formattedCafe = { ...cafe, tags };
      console.log(`🏪 Formatted Cafe ID ${cafe.id}:`, formattedCafe);
      res.json(formattedCafe);
    } else {
      res.status(404).json({ error: "Cafe not found" });
    }
  } catch (error) {
    console.error("Failed to retrieve cafe:", error);
    res.status(500).json({ error: "Failed to retrieve cafe" });
  }
});

// 💬 Route: Get comments for a specific cafe
router.get("/:id/comments", async (req, res) => {
  try {
    const comments = await knex("comments").where({ photo_id: req.params.id }).select("*");
    res.json(comments);
  } catch (error) {
    console.error("Failed to retrieve comments:", error);
    res.status(500).json({ error: "Failed to retrieve comments" });
  }
});

// 💬 Route: Add a new comment to a cafe
// Add a comment to a cafe
router.post("/:id/comments", async (req, res) => {
  try {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ error: "Invalid name or comment" });
    }

    await knex("comments").insert({
      id: uuidv4(),
      photo_id: req.params.id,
      name,
      comment,
      timestamp: new Date(),
    });

    res.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Failed to add comment:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

export default router;