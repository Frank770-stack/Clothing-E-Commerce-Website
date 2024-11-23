const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(
  "mongodb+srv://njaombefrank:xuEQIzifdsFzfOz3@cluster0.bsub6.mongodb.net/TheWardrobeCo",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Image Storage Engine
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "Upload/Images"),
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

// Upload Endpoint
app.use("/Images", express.static(path.resolve(__dirname, "Upload/Images")));
app.post("/Upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/Images/${req.file.filename}`,
  });
});

// API Root
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Start Server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running On Port " + port);
  } else {
    console.log("Error : " + error);
  }
});
