# MediConnect

MediConnect is an all-in-one healthcare platform designed to seamlessly connect doctors and patients for hassle-free appointment scheduling, real-time consultations, secure payments, and easy access to medical resources. Built as a full-stack MERN application, it offers robust features to enhance healthcare accessibility and communication.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Recent Changes & Bug Fixes](#recent-changes--bug-fixes)
- [License](#license)

---

## Features

- Separate dashboards & signup/login flows for doctors and patients with OTP and email verification
- Doctor schedule management: create, edit, and track appointment slots and pricing
- Patient functionalities: search doctors by name/specialization, book slots, and request appointments
- Secure payments integrated via Razorpay with payment history
- Real-time chat supporting text, images, and file sharing using Socket.IO
- High-quality peer-to-peer video calls with microphone, camera controls powered by WebRTC
- AI chatbot assistance via Hugging Face API (BlenderBot)
- Nearby hospitals, pharmacies, and dispensaries search using Overpass API and Geolocation API, visualized with Leaflet.js
- Comprehensive medicine search by name, price, and composition (supports both legacy CSV and curated schema)
- User profile management with avatar uploads via Cloudinary
- Authentication using JWT access & refresh tokens, OTP via Twilio, email verification via Nodemailer
- File uploads handled with Multer and stored on Cloudinary
- Emoji picker support in real-time chat
- Read receipts (✓ / ✓✓) and typing indicators in chat
- Message pagination with "Load more" support
- Online/offline user presence tracking

---

## Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- Zustand (state management)
- Framer Motion & GSAP animations
- Leaflet.js (maps)
- Socket.IO Client
- emoji-picker-react

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT (access & refresh tokens)
- Multer & Cloudinary (file uploads)
- Twilio (OTP SMS verification)
- Nodemailer (email verification)
- Socket.IO
- Razorpay

**Real-time Communication:**
- Socket.IO (chat, typing, presence)
- WebRTC (peer-to-peer video calls)

**Payments:**
- Razorpay

**AI Integration:**
- Hugging Face API (BlenderBot 400M)

---

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm
- MongoDB (local instance or MongoDB Atlas)
- Cloudinary account
- Twilio account (with a valid phone number)
- Razorpay account
- Gmail account (with App Password for Nodemailer)

---

## Environment Variables

Create a `.env` file inside the `backend/` folder with the following variables:

```env
PORT=5000
NODE_ENV=development

# Comma-separated allowed origins
CORS_ORIGIN=http://localhost:5173

# MongoDB — include the database name directly in the URI
MONGO_URI=mongodb://localhost:27017/MediConnect
DB_NAME=MediConnect

# JWT / Auth
JWT_SECRET=your_jwt_secret
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=7d
REFRESH_TOKEN_EXPIRY=30d
EMAIL_SECRET=your_email_verification_secret

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret

# Twilio
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_SERVICE_SID=your_twilio_service_sid
TWILIO_PHONE_NUMBER=+1your_twilio_phone_number

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Email (Nodemailer via Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Hugging Face AI
HUGGINGFACE_API_KEY=your_huggingface_api_key
HUGGING_FACE_TOKEN=your_huggingface_api_key
```

> **Note:** OTP sending via Twilio and email via Nodemailer are non-blocking — registration will succeed even if these services are misconfigured. Check console warnings if OTPs are not received.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/SinghAnsh07/medi-connect.git
cd medi-connect
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Configure environment variables

Copy the variables listed above into `backend/.env` and fill in your credentials.

---

## Usage

### Start the backend

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:5000`

### Start the frontend

```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## Folder Structure

```
mediconnect/
├── backend/
│   ├── app.js                        # Express + Socket.IO entry point
│   ├── .env                          # Environment variables
│   └── src/
│       ├── config/
│       │   └── db.js                 # MongoDB connection
│       ├── controllers/
│       │   ├── client.controllers.js
│       │   ├── doctor.controllers.js
│       │   ├── chat.controller.js
│       │   ├── payment.controllers.js
│       │   └── video.controller.js
│       ├── middlewares/
│       │   ├── auth.middleware.js
│       │   └── multer.middleware.js
│       ├── models/
│       │   ├── client.model.js
│       │   ├── doctor.models.js
│       │   ├── chat.model.js
│       │   ├── message.model.js      # NEW — decoupled message storage
│       │   ├── video.model.js
│       │   ├── schedule.model.js
│       │   ├── slotRequest.model.js
│       │   ├── payment.model.js
│       │   └── medicine.model.js
│       ├── routes/
│       │   ├── client.routes.js
│       │   ├── doctor.routes.js
│       │   ├── chat.routes.js
│       │   ├── video.routes.js
│       │   ├── medicine.routes.js
│       │   ├── payment.routes.js
│       │   ├── schedule.routes.js
│       │   ├── slotRequest.routes.js
│       │   └── clinic.routes.js
│       └── utils/
│           ├── socketHandlers.js     # Socket.IO + WebRTC signaling
│           ├── cloudinary.js
│           ├── razorpay.js
│           ├── sendotp.js
│           ├── asyncHandler.js
│           ├── ApiError.js
│           └── ApiResponse.js
│
└── frontend/
    ├── src/
    │   └── App.jsx                   # Routes
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── DoctorLogin.jsx
    │   ├── DoctorSignup.jsx
    │   ├── ClientSignup.jsx
    │   ├── DoctorDashboard.jsx
    │   ├── ClientDashboard.jsx
    │   ├── ChatPage.jsx              # WhatsApp-style chat UI
    │   ├── VideoPage.jsx             # WebRTC video call page
    │   └── MedicineSearch.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── DoctorDahboardNavbar.jsx
    │   ├── ClientDashboardNavbar.jsx
    │   ├── Footer.jsx
    │   ├── ChatBot.jsx
    │   ├── DoctorSchedue.jsx
    │   ├── DoctorPayementPortal.jsx
    │   ├── PatientBookingPortal.jsx
    │   ├── GetDoctor.jsx
    │   ├── NearbyClinicMap.jsx
    │   └── Services.jsx
    ├── store/
    │   ├── doctorAuthStore.js
    │   ├── clientAuthStore.js
    │   └── chatStore.js              # Zustand chat + socket state
    ├── context/
    │   └── ThemeContext.jsx
    └── utils/
        └── axois.js                  # Axios instance with interceptors
```

---

## API Endpoints

### Doctor Routes — `/doctor`
| Method | Path | Description |
|--------|------|-------------|
| POST | `/register` | Register doctor (with avatar upload) |
| POST | `/login` | Login doctor |
| POST | `/verify-otp` | Verify phone OTP |
| POST | `/verify-email` | Verify email OTP |
| POST | `/logout` | Logout (auth required) |
| POST | `/refresh-token` | Refresh access token |
| GET | `/me` | Get current doctor (auth required) |
| PATCH | `/update` | Update doctor profile (auth required) |
| GET | `/` | Get all doctors (with filters) |
| GET | `/:id` | Get doctor by ID |

### Client Routes — `/client`
| Method | Path | Description |
|--------|------|-------------|
| POST | `/register` | Register client (with avatar upload) |
| POST | `/login` | Login client |
| POST | `/verify-otp` | Verify phone OTP |
| POST | `/verify-email` | Verify email OTP |
| POST | `/logout` | Logout (auth required) |
| POST | `/refresh-token` | Refresh access token |
| GET | `/me` | Get current client (auth required) |
| PATCH | `/update` | Update client profile (auth required) |
| GET | `/` | Get all clients |
| GET | `/:id` | Get client by ID |

### Chat Routes — `/chats`
| Method | Path | Description |
|--------|------|-------------|
| POST | `/create-or-get` | Create or get an existing chat |
| GET | `/user-chats` | Get all chats for current user |
| GET | `/:chatId/messages` | Get messages with pagination |
| POST | `/send-message` | Send a message (text/image/file) |
| PATCH | `/:chatId/mark-read` | Mark messages as read |
| DELETE | `/:chatId/messages/:messageId` | Delete a message |

### Payment Routes — `/payments`
| Method | Path | Description |
|--------|------|-------------|
| POST | `/order` | Create Razorpay order (auth required) |
| POST | `/verify` | Verify payment signature (auth required) |
| GET | `/history` | Get doctor payment history (auth required) |

### Medicine Routes — `/medicines`
| Method | Path | Description |
|--------|------|-------------|
| GET | `/search?name=xyz` | Search medicines by name |

### Other Routes
- `/schedule` — Appointment schedule management
- `/slots` — Slot request management
- `/video-call` — Video call session management
- `/clinics` — Nearby clinic data
- `/chat` (POST) — AI chatbot (Hugging Face)
- `/health` (GET) — Server health check

---

## Recent Changes & Bug Fixes

### v2.0 — Architecture & Bug Fix Update

#### Backend
- **Message model decoupled** — Messages are now stored in a separate `messages` collection instead of being embedded in the `Chat` document, enabling pagination and better scalability
- **Registration 500 error fixed** — OTP sending via Twilio (`sendOtp`) and email via Nodemailer are now non-blocking; failures are logged as warnings, not crashes
- **MongoDB database targeting fixed** — `MONGO_URI` now includes the database name directly to prevent Mongoose from defaulting to the `test` database
- **`cookieOptions` standardized** — All controllers now use `sameSite: 'lax'` and `secure` based on `NODE_ENV` for proper local development
- **CORS improved** — Supports multiple comma-separated origins via `CORS_ORIGIN` env variable
- **Doctor logout guard** — Added auth check in `logoutDoctor` to prevent undefined session errors
- **Payment history endpoint added** — Doctors can now retrieve their payment history
- **Medicine route normalized** — Supports both legacy CSV-based schema and the newer curated schema field names
- **Socket.IO v2 signaling** — Replaced legacy `call-offer/answer` events with `video:call-request`, `video:offer`, `video:answer`, `video:ice-candidate` for cleaner WebRTC signaling

#### Frontend
- **ChatPage redesigned** — WhatsApp-style UI with read receipts (✓/✓✓), typing indicators, emoji picker, file attachments, and message date headers
- **VideoPage rewritten** — Proper ICE candidate buffering (`pendingIceRef`), clean peer connection lifecycle, and reliable `video:*` socket event protocol
- **chatStore rebuilt** — Uses new `message:receive`, `message:read`, `typing:start/stop`, `user:online/offline` socket events
- **Dashboard navbars redesigned** — Responsive design with active route highlighting for both Doctor and Client portals
- **`emoji-picker-react` added** — Emoji support in chat input

---

## License

This project is open-source and available under the [MIT License](LICENSE).
