### Project Title
6ixcafes (backend) Your guide to the best cafés in Toronto!

### Overview ☕️

6ixCafes is a platform designed for Toronto’s coffee enthusiasts, bringing together the best cafés in one place. Whether you’re looking for a study spot, the best espresso, or a cozy ambiance, our backend powers a seamless experience by consolidating café data into a single hub. Say goodbye to hopping between Google Maps, blogTO, and Instagram — 6ixCafes does it all!

### Purpose 📍

The backend of 6ixCafes solves the problem of scattered café information by:
<br>✅ Providing a unified dataset of Toronto cafés via API endpoints.
<br>✅ Enabling filtering by study spots, ambiance, and coffee quality.
<br>✅ Allowing community engagement through café-specific comments.

⸻

### Tech Stack 💻

Backend
<p>
  <img src="https://skillicons.dev/icons?i=express&theme=dark" width="50" height="50"/>
  <img src="https://skillicons.dev/icons?i=nodejs&theme=dark" width="50" height="50"/>
  <img src="https://skillicons.dev/icons?i=mysql&theme=dark" width="50" height="50"/>
</p>


	•	Express – Lightweight Node.js framework for API routing.
	•	Node.js – Scalable server-side runtime.
	•	MySQL – Relational database for storing café and comment data.

Server Libraries

📌 knex – SQL query builder for database interactions.
📌 dotenv – Manages environment variables.
📌 express – Core framework for routing and middleware.

⸻

### API Endpoints 🚀

The backend provides a RESTful API defined in routes/photos.js, powered by controllers/photos-controller.js.

**GET /photos**

Retrieve all cafés.
Controller: photosController.getAllCafes
Response:
```
[
  {
    "id": "c4d5e6f7-2222-6666-8888-999999999993",
    "photographer": "NEO Coffee Bar",
    "photo": "http://example.com/neo.jpg",
    "googleRating": 4.5,
    "likes": 42,
    "lat": 43.655,
    "lng": -79.383,
    "placeId": "ChIJ1234",
    "tags": ["Best Coffee", "Study Spot"]
  }
```

**GET /photos/:id**

Retrieve a single café by ID.
Controller: photosController.getCafeById
Parameters:
	•	id (string) – Café UUID.

Response
```
{
  "id": "c4d5e6f7-2222-6666-8888-999999999993",
  "photographer": "NEO Coffee Bar",
  "photo": "http://example.com/neo.jpg",
  "photoDescription": "A cozy spot with great espresso.",
  "googleRating": 4.5,
  "likes": 42,
  "lat": 43.655,
  "lng": -79.383,
  "placeId": "ChIJ1234",
  "tags": ["Best Coffee", "Study Spot"]
}
```

**GET /photos/:id/comments**

Retrieve all comments for a specific café.

Controller: photosController.getCommentsByCafeId
Parameters:
	•	id (string) – Café UUID.

Response
```
[
  {
    "commentId": 1,
    "cafeId": "c4d5e6f7-2222-6666-8888-999999999993",
    "user": "CoffeeLover123",
    "text": "Best latte in the city!",
    "timestamp": "2025-03-21T10:00:00Z"
  }
]
```

**POST /photos/:id/comments**

Add a comment to a café.

Controller: photosController.addCommentToCafe
Parameters:
	•	id (string) – Café UUID.

Request Body
```
{
  "user": "CoffeeLover123",
  "text": "Loved the vibes here!"
}
```
Response
```
{
  "commentId": 2,
  "cafeId": "c4d5e6f7-2222-6666-8888-999999999993",
  "user": "CoffeeLover123",
  "text": "Loved the vibes here!",
  "timestamp": "2025-03-21T12:00:00Z"
}
```

⸻

### Database & Relationships 🗄️

Tables

Photos table

| Column           | Type            | Description                                   |
|-----------------|----------------|-----------------------------------------------|
| id              | VARCHAR(36)     | Unique café UUID (Primary Key).              |
| photographer    | VARCHAR(255)    | Café name or alias.                          |
| photo          | VARCHAR(255)    | URL to café photo.                           |
| photoDescription | TEXT          | Short café description.                      |
| googleRating    | DECIMAL(2,1)    | Google rating (e.g., 4.5).                   |
| likes          | INT             | User likes count.                            |
| lat            | DECIMAL(9,6)     | Latitude.                                    |
| lng            | DECIMAL(9,6)     | Longitude.                                   |
| placeId        | VARCHAR(50)     | Google Maps Place ID.                        |
| tags          | JSON             | Array of tags (e.g., `["Best Coffee"]`).     |

Comments Table

| Column    | Type                     | Description                           |
|----------|-------------------------|--------------------------------------|
| commentId | INT (PK, AUTO_INCREMENT) | Unique comment ID.                   |
| cafeId    | VARCHAR(36)            | References `photos(id)`.              |
| user      | VARCHAR(50)            | Commenter’s username.                 |
| text      | TEXT                   | Comment content.                      |
| timestamp | DATETIME               | When the comment was posted.          |

Relationships
	•	One-to-many: A café (photos) can have multiple comments (comments).
	•	Foreign key: cafeId in comments references id in photos.

⸻

### Setup & Installation ⚙️

Prerequisites

✔️ Node.js (v16+ recommended).
✔️ MySQL (v8+ recommended).
✔️ npm (comes with Node.js).

Steps

1️⃣ Clone the Repository

git clone <https://github.com/mimschowdhury/mimta-chowdhury-capstone-api.git>
<br>cd 6ixcafes-backend

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment
Create a .env file in the root:

<br>DB_HOST=localhost
<br>DB_USER=your_user
<br>DB_PASSWORD=your_password
<br>DB_NAME=6ixcafes_db
<br>PORT=8080

4️⃣ Set Up Database

<br>CREATE DATABASE 6ixcafes_db;
<br>Run migrations:
<br>npx knex migrate:latest

(Optional) Seed initial data:

npx knex seed:run

5️⃣ Start the Server

npm run start

API runs on http://localhost:8080 (or your specified PORT).

⸻

Roadmap 🚀
	•	Sprint 1: Core API setup.
	•	Sprint 2: Add community comments.
	•	Sprint 3: Refine & integrate with Google Maps API.

Future Enhancements 🌱

<br>✅ User authentication (JWT).
<br>✅ Advanced filtering (e.g., ?tags=Vegan).
<br>✅ Performance optimizations with caching.

⸻
