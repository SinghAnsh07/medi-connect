// src/utils/razorpay.js

import 'dotenv/config'; // Only needed once, usually at the entry point
import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default instance;
