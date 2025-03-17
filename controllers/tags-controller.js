import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// Get all tags
export const getAllTags = async (req, res) => {
  try {
    const tags = await knex("tag").select("*");
    res.json(tags);
  } catch (error) {
    console.error("Failed to retrieve tags:", error);
    res.status(500).json({ error: "Failed to retrieve tags" });
  }
};