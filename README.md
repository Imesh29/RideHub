# 🚗 RideHub - Vehicle Booking Management System

RideHub is a full-stack Vehicle Booking Management System developed using **FastAPI**, **React (Vite + TypeScript)**, **PostgreSQL**, and **Tailwind CSS**.

The system allows service centers or vehicle maintenance companies to efficiently manage vehicle service bookings with secure authentication, dashboard statistics, search functionality, and archive/restore capabilities.

---

# 📌 Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing (bcrypt)
- Logout

---

## Dashboard

Displays real-time booking statistics:

- Total Bookings
- Pending Bookings
- Completed Bookings
- Archived Bookings

---

## Booking Management

Users can:

- Create a new booking
- View all active bookings
- Edit booking details
- Search bookings
- Archive bookings

---

## Archive Management

Users can:

- View archived bookings
- Restore archived bookings

---

# 🛠 Technology Stack

## Frontend

- React
- Vite
- TypeScript
- React Router DOM
- React Hook Form
- Zustand
- Axios
- Tailwind CSS

---

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- JWT Authentication
- Passlib (bcrypt)
- Uvicorn

---

# 📂 Project Structure

```
RideHub/

│
├── backend/
│
│   ├── app/
│   │
│   ├── api/
│   ├── core/
│   ├── models/
│   ├── repository/
│   ├── schemas/
│   ├── services/
│   ├── main.py
│
│
├── frontend/
│
│   ├── src/
│   │
│   ├── api/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── store/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
└── README.md
```

---

# ⚙ Backend Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/ridehub.git
```

```
cd RideHub/backend
```

---

## Create Virtual Environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a `.env` file.

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/ridehub

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

## Run Backend

```bash
uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Installation

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🔐 Authentication

RideHub uses JWT authentication.

After successful login:

- JWT token is generated
- Token is stored in Local Storage
- Axios automatically attaches Authorization headers
- Protected routes require a valid token

Example:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 📋 API Endpoints

## Authentication

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /auth/register |
| POST   | /auth/login    |

---

## Bookings

| Method | Endpoint                      |
| ------ | ----------------------------- |
| GET    | /api/v1/bookings              |
| POST   | /api/v1/bookings              |
| GET    | /api/v1/bookings/{id}         |
| PUT    | /api/v1/bookings/{id}         |
| PATCH  | /api/v1/bookings/{id}/archive |
| PATCH  | /api/v1/bookings/{id}/restore |
| GET    | /api/v1/bookings/search       |
| GET    | /api/v1/bookings/archived     |
| GET    | /api/v1/bookings/stats        |

---

# 📊 Database

Main Tables

## Users

- id
- name
- email
- password
- created_at

---

## Bookings

- id
- booking_reference
- customer_name
- customer_email
- customer_phone
- vehicle_registration_number
- chassis_number
- vehicle_make
- vehicle_model
- manufacturing_year
- mileage
- booking_status
- booking_date
- remarks
- is_deleted

---

# ✨ Key Features

✔ JWT Authentication

✔ REST API Architecture

✔ Repository Pattern

✔ Service Layer Pattern

✔ Responsive Dashboard

✔ Real-time Statistics

✔ Vehicle Search

✔ Archive & Restore

✔ PostgreSQL Integration

✔ FastAPI Documentation

✔ TypeScript Frontend

✔ State Management with Zustand

---

# 📸 System Modules

- User Registration
- User Login
- Dashboard
- Booking List
- Create Booking
- Edit Booking
- Search Booking
- Archive Booking
- Restore Booking

---
