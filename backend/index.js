const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const jwt = require("jsonwebtoken");

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(
  "mongodb+srv://njaombefrank:xuEQIzifdsFzfOz3@cluster0.bsub6.mongodb.net/TheWardrobeCo?retryWrites=true&w=majority"
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
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/Images/${req.file.filename}`,
  });
});

// Schema for Product Creation
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// POST Route for Adding Products
app.post("/addproducts", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    newPrice: req.body.newPrice,
    oldPrice: req.body.oldPrice,
  });

  await product.save();
  console.log("Product Saved:", product);

  res.json({
    success: true,
    name: req.body.name,
  });
});

// POST Route for Removing Products
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// GET Route for Fetching All Products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
});

//Schema creating for User model

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

//Creating Endpoint for Registering User

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "existing user found with same email address",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// Creating Endpoint for user login
app.post("/login", async (req, res) => {
  try {
    // Check if the user exists
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ success: false, errors: "User not found" });
    }

    // Compare the provided password with the user's password
    const passCompare = req.body.password === user.password; // NOTE: Use bcrypt for secure password handling.
    if (!passCompare) {
      return res.status(400).json({ success: false, errors: "Wrong Password" });
    }

    // Generate token
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");

    // Send response
    res.json({ success: true, token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, errors: "Internal Server Error" });
  }
});

// creating endpoint for new collection data
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("NewCollection Fetched");
  res.send(newcollection);
});

//creating endpoint for popular in women
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "Women" });
  let popular_in_women = products.slice(0, 4);
  console.log("Popular in women fetched");
  res.send(popular_in_women);
});

//creating middleware to fetch user
const fetchUser = async (req, re, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using a valid token" });
    }
  }
};
//creating endpoint for adding products in cartdata
app.post("/addtocart", fetchUser, async (req, res) => {
  try {
    console.log("Adding item to cart:", req.body.itemId);

    // Fetch the user data
    const userData = await Users.findOne({ id: req.user.id });

    if (!userData) {
      return res.status(404).send("User not found");
    }

    // Ensure cartData exists
    if (!userData.cartData) {
      userData.cartData = {};
    }

    // Increment item quantity or initialize it if not present
    const itemId = req.body.itemId;
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 1; // Add the item to the cart
    } else {
      userData.cartData[itemId] += 1; // Increment the quantity
    }

    // Update the user data in the database
    await Users.findOneAndUpdate(
      { id: req.user.id },
      { cartData: userData.cartData },
      { new: true } // Return the updated document
    );

    res.status(200).send("Item added to cart");
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).send("An error occurred while adding the item to the cart");
  }
});

//creating endpoint to remove productfrom cartdata

app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({ id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
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
