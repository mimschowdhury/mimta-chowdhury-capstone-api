import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

function readPhotos() {
    try {
        const photosData = fs.readFileSync("./data/photos.json");
        return JSON.parse(photosData);
    } catch (error) {
        console.error("Error reading photos file:", error);
        return [];
    }
}

function getPhotoById(id) {
    try {
        const photos = readPhotos();
        return photos.find((photo) => photo.id === id);
    } catch (error) {
        console.error("Error fetching photo by ID:", error);
        return null;
    }
}

router.get("/photos", (req, res) => {
    try {
        const photos = readPhotos();
        res.json(photos);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve photos" });
    }
});

router.get("/photos/:id", (req, res) => {
    try {
        const id = req.params.id;
        const photo = getPhotoById(id);
        if (photo) {
            res.json(photo);
        } else {
            res.status(404).json({ error: "Photo not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve photo" });
    }
});

router.get("/photos/:id/comments", (req, res) => {
    try {
        const id = req.params.id;
        const photo = getPhotoById(id);
        if (photo) {
            res.json(photo.comments);
        } else {
            res.status(404).json({ error: "Photo not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve comments" });
    }
});

router.post("/photos/:id/comments", (req, res) => {
    try {
        const id = req.params.id;
        const { name, comment } = req.body;
        const photos = readPhotos();

        if (!name || !comment) {
            return res.status(400).json({ error: "Invalid name or comment" });
        }

        const newComment = {
            id: uuidv4(),
            name,
            comment,
            timestamp: Date.now(),
        };

        const photo = photos.find((photo) => photo.id === id);

        if (photo) {
            photo.comments.push(newComment);
            fs.writeFileSync("./data/photos.json", JSON.stringify(photos, null, 2));
            res.json(newComment);
        } else {
            res.status(404).json({ error: "Photo not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to add comment" });
    }
});

export default router;