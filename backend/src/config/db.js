import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Use correct environment variable name
    const connectionString = process.env.MONGO_URI;

    // Debug log to verify connection string
    console.log("Connecting to MongoDB:", connectionString);

    // Connect to MongoDB without deprecated options
    const db = await mongoose.connect(connectionString);

    console.log(`\n MongoDB Connected to DB: ${db.connection.name}`);
    console.log(`Host: ${db.connection.host}\n`);

    return db;
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
