import express from "express";
import fs from "fs";

const router = express.Router();

function readTags() {
    try {
        const tagsData = fs.readFileSync("./data/tags.json");
        const parsedData = JSON.parse(tagsData);
        return parsedData;
    } catch (error) {
        console.error("Error reading or parsing tags file:", error);
        return null;
    }
}

router.get("/tags", (req, res) => {
    try {
        const tags = readTags();
        res.json(tags);
    } catch (error) {
        console.error("Unexpected error in /tags route:");
        res.status(500).json({ message: error.message });
    }
});

export default router;