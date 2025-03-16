// import express from "express";
// import fs from "fs";

// const router = express.Router();

// function readTags() {
//     try {
//         const tagsData = fs.readFileSync("./data/tags.json");
//         const parsedData = JSON.parse(tagsData);
//         return parsedData;
//     } catch (error) {
//         console.error("Error reading or parsing tags file:", error);
//         return null;
//     }
// }

// router.get("/tags", (req, res) => {
//     try {
//         const tags = readTags();
//         res.json(tags);
//     } catch (error) {
//         console.error("Unexpected error in /tags route:");
//         res.status(500).json({ message: error.message });
//     }
// });

// export default router;

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