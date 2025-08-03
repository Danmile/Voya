# ✈️ Voya - Travel Planner App

Voya is a full-stack travel planning app that allows users to explore destinations, view top attractions, and plan their trips efficiently. Built with the MERN stack (MongoDB, Express, React, Node.js), Voya aims to provide users with real-time suggestions, curated experiences, and trip organization tools.

---

## Live demo: 
https://voya-zeta.vercel.app/

## 🌍 Features

- 🔎 **Discover Attractions** – Browse popular attractions by city and country
- 🗓️ **Trip Planning** – Plan day-by-day trips with suggested places
- 📍 **Location Details** – View info, images, distances, and prices
- 🔐 **Authentication** – User sign-up, login, and session management
- 🍚 **Cookie-based Auth** – Secure login with HTTP-only cookies
- 🌐 **Responsive Design** – Works across mobile, tablet, and desktop

---

## 🧱 Tech Stack

| Tech     | Description         |
| -------- | ------------------- |
| React    | Frontend framework  |
| Vite     | Frontend build tool |
| Node.js  | Backend runtime     |
| Express  | Backend framework   |
| MongoDB  | Database            |
| Mongoose | MongoDB ODM         |
| Axios    | API requests        |
| Vercel   | Frontend deployment |
| Render   | Backend deployment  |

---

## ⚙️ Installation

### Backend (Render):

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/voya-backend.git
   cd voya-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
4. Start server:
   ```bash
   npm run dev
   ```

### Frontend (Vercel):

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/voya-frontend.git
   cd voya-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add `.env` file:
   ```env
   VITE_API_URL=https://your-backend.onrender.com
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment

- **Frontend:** [https://voya-zeta.vercel.app](https://voya-zeta.vercel.app)
- **Backend:** [https://your-backend.onrender.com](https://your-backend.onrender.com)

---

## 🔐 API Endpoints

### Auth

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login existing user
- `GET /api/auth/logout` – Logout and clear cookie

### Attractions

- `GET /api/attraction/city/:cityName` – Get attractions by city
- `GET /api/attraction/all` – Get all cities or countries

---

## 🧠 Future Features

- ✍️ User-generated itineraries
- 📋 Trip notes and favorites
- 📊 Budget and time tracking
- ☄️ Weather integration
- 🗕️ Calendar sync

---

## 🧑‍💻 Author

**Dan Milevski**

---

