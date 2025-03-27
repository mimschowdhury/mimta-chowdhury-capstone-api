import initKnex from "knex";
import configuration from "../knexfile.cjs";
import { v4 as uuidv4 } from "uuid";

// Select environment-specific config
const env = process.env.NODE_ENV || "development";
const knex = initKnex(configuration[env]);

// 📸 Get all cafes
export const getAllCafes = async (req, res) => {
  try {
    const cafes = await knex("cafe").select("*").orderBy("photographer", "asc");
    console.log("🔥 Raw cafes from DB:", cafes);

    const formattedCafes = cafes.map((cafe) => {
      const tags = Array.isArray(cafe.tags)
        ? cafe.tags.flatMap((tag) => tag.split(",").map((t) => t.trim()))
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
};

// 📸 Get a single cafe by ID
export const getCafeById = async (req, res) => {
  try {
    const cafe = await knex("cafe").where({ id: req.params.id }).first();
    if (cafe) {
      let tags = Array.isArray(cafe.tags) ? cafe.tags : [];
      if (tags.length === 1 && typeof tags[0] === "string" && tags[0].includes(",")) {
        tags = tags[0].split(",").map((t) => t.trim());
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
};

// 💬 Get comments for a specific cafe
export const getCommentsByCafeId = async (req, res) => {
  try {
    const comments = await knex("comments").where({ photo_id: req.params.id }).select("*");
    res.json(comments);
  } catch (error) {
    console.error("Failed to retrieve comments:", error);
    res.status(500).json({ error: "Failed to retrieve comments" });
  }
};

// 💬 Add a comment to a cafe
export const addCommentToCafe = async (req, res) => {
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
};