// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import photos from "./routes/photos.js";
// import tags from "./routes/tags.js";

// const app = express();
// const PORT = process.env.PORT || 8080;

// const { CORS_ORIGIN } = process.env;
// app.use(cors({ origin: CORS_ORIGIN }));

// // Enable JSON parsing
// app.use(express.json());

// // Serve static images
// app.use("/images", express.static("./public/images"));

// // Use routers
// app.use("/photos", photos);
// app.use("/tags", tags);

// // Start server
// // Change server startup to:
// app.listen(PORT, '0.0.0.0', () => 
//     console.log(`Server running on port ${PORT}`)
// );

// import express from 'express';
// import 'dotenv/config';
// import cors from 'cors';
// import photos from './routes/photos.js';
// import tags from './routes/tags.js';

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
// app.use(express.json());
// app.use('/images', express.static('./public/images'));
// app.use('/photos', photos);
// app.use('/tags', tags);

// app.get('/', (req, res) => res.send('Backend is running!'));

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on http://0.0.0.0:${PORT}`);
// });

const express = require('express'); // Ensure this is included
const cors = require('cors'); // Ensure this is included
const photos = require('./photos'); // Assuming this is your photos route file
const tags = require('./tags'); // Assuming this is your tags route file

const app = express();
const PORT = process.env.PORT || 8080;

// Use environment variable for CORS origin
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.use('/images', express.static('./public/images'));
app.use('/photos', photos);
app.use('/tags', tags);

app.get('/', (req, res) => res.send('Backend is running!'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});