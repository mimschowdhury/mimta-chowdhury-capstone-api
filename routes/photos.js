import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// 📸 Get all cafes (previously photos)
async function getAllCafes() {
  return await knex("cafe").select("*");
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

// In photos.js route
// router.get("/", async (req, res) => {
//   try {
//     const cafes = await getAllCafes();
    
//     // Convert string tags to array
//     const formattedCafes = cafes.map(cafe => ({
//       ...cafe,
//       tags: Array.isArray(cafe.tags) ? cafe.tags : cafe.tags.split(',')
//     }));

//     res.json(formattedCafes);
//   } catch (error) {
//     console.error("Failed to retrieve cafes:", error);
//     res.status(500).json({ error: "Failed to retrieve cafes" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const cafes = await getAllCafes();
    
    // Log raw DB data
    console.log("🔥 Raw cafes from DB:", cafes);

    // Convert string tags to array
    const formattedCafes = cafes.map(cafe => {
      console.log(`🏪 Processing Cafe ID ${cafe.id}, Tags:`, cafe.tags);

      return {
        ...cafe,
        tags: cafe.tags ? cafe.tags.split(",").map(tag => tag.trim()) : []
      };
    });

    // Log formatted output
    console.log("📸 Formatted cafes:", formattedCafes);

    res.json(formattedCafes);
  } catch (error) {
    console.error("Failed to retrieve cafes:", error);
    res.status(500).json({ error: "Failed to retrieve cafes" });
  }
});


// 📸 Route: Get a single cafe by ID
router.get("/:id", async (req, res) => {
  try {
    const cafe = await getCafeById(req.params.id);
    if (cafe) {
      res.json(cafe);
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
    const comments = await getCommentsByCafeId(req.params.id);
    res.json(comments);
  } catch (error) {
    console.error("Failed to retrieve comments:", error);
    res.status(500).json({ error: "Failed to retrieve comments" });
  }
});

// 💬 Route: Add a new comment to a cafe
router.post("/:id/comments", async (req, res) => {
  try {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ error: "Invalid name or comment" });
    }

    await addCommentToCafe(req.params.id, name, comment);
    res.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Failed to add comment:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

export default router;