import express from "express";
import "dotenv/config";
import cors from "cors";
import photos from "./routes/photos.js";
import tags from "./routes/tags.js";

const app = express();
const PORT = process.env.PORT || 8080;

const { CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN }));

// Enable JSON parsing
app.use(express.json());

// Serve static images
app.use("/images", express.static("./public/images"));

// Use routers
app.use("/photos", photos);
app.use("/tags", tags);

// Start server
// Change server startup to:
app.listen(PORT, '0.0.0.0', () => 
    console.log(`Server running on port ${PORT}`)
);