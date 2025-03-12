// initialize Express in project
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import photos from "./routes/photos.js"
import tags from "./routes/tags.js"

const app = express();
const PORT = process.env.PORT || 8080;

const { CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN}));

// enable JSON parsing
app.use(express.json());

// static images
app.use("/images", express.static("./public/images"));

app.get("/tags", tags);
app.get("/photos", photos);
app.get("/photos/:id", photos);
app.get("/photos/:id/comments", photos);
app.post("/photos/:id/comments", photos);

// start server
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);