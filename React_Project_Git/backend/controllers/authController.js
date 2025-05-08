const User = require("../models/userModel");

// Register.
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });   //user (small u) is a key in the response JSON, not a variable. 
    // It refers to newUser, which you created in the above line. The value is the full newUser object that was just saved to MongoDB.
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // res.status(200).json({ message: "Login successful", user });
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: { name: user.name, email: user.email }, // or any user data
    });
    
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
module.exports = { registerUser, loginUser };