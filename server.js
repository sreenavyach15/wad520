const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// ✅ CONNECT ONLY ONCE
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error ❌", err));

// Routes
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));