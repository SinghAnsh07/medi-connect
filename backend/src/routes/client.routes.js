// // clientRoutes.js
// import { Router } from 'express';
// import { 
//   registerClient, 
//   loginClient, 
//   verifyEmail, 
//   logoutClient, 
//   updateClient, 
//   refreshAccessToken,
//   verifyOtp,
//   getCurrentClient,
//   getAllClients,
//   getClientById
// } from '../controllers/client.controllers.js';
// import { upload } from '../middlewares/multer.middleware.js';
// import { isAuthenticated } from '../middlewares/auth.middleware.js';

// const router = Router();

// // Authentication routes
// router.post('/register', upload.single('avatar'), registerClient);
// router.post('/login', loginClient);
// router.post('/verify-email', verifyEmail);
// router.post('/verify-otp', verifyOtp);
// router.post('/logout', isAuthenticated, logoutClient);
// router.post('/refresh-token', refreshAccessToken);
// router.get('/me', isAuthenticated, getCurrentClient);
// router.patch('/update', isAuthenticated, upload.single('avatar'), updateClient);
// router.route("/").get(getAllClients);          
// router.route("/:id").get(getClientById);  
// export default router;


// clientRoutes.js

import { Router } from "express";
import {
  registerClient,
  loginClient,
  verifyEmail,
  verifyOtp,
  logoutClient,
  updateClient,
  refreshAccessToken,
  getCurrentClient,
  getAllClients,
  getClientById
} from "../controllers/client.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @route   POST /client/register
 * @desc    Register a new client
 * @access  Public
 */
router.post("/register", upload.single("avatar"), registerClient);

/**
 * @route   POST /client/login
 * @desc    Login a client
 * @access  Public
 */
router.post("/login", loginClient);

/**
 * @route   POST /client/verify-email
 * @desc    Verify client email with token
 * @access  Public
 */
router.post("/verify-email", verifyEmail);

/**
 * @route   POST /client/verify-otp
 * @desc    Verify client OTP
 * @access  Public
 */
router.post("/verify-otp", verifyOtp);

/**
 * @route   POST /client/logout
 * @desc    Logout client and clear tokens
 * @access  Private
 */
router.post("/logout", isAuthenticated, logoutClient);

/**
 * @route   POST /client/refresh-token
 * @desc    Refresh access token
 * @access  Public
 */
router.post("/refresh-token", refreshAccessToken);

/**
 * @route   GET /client/me
 * @desc    Get current logged-in client profile
 * @access  Private
 */
router.get("/me", isAuthenticated, getCurrentClient);

/**
 * @route   PATCH /client/update
 * @desc    Update client profile
 * @access  Private
 */
router.patch("/update", isAuthenticated, upload.single("avatar"), updateClient);

/**
 * @route   GET /client/
 * @desc    Get all clients
 * @access  Public or Admin
 */
router.get("/", getAllClients);

/**
 * @route   GET /client/:id
 * @desc    Get client by ID
 * @access  Public or Admin
 */
router.get("/:id", getClientById);

export default router;
