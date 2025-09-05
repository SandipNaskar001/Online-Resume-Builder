import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const UserExists = await User.findOne({ email });
    if (UserExists) {
      return res.status(400).json({ message: "User already Exists" });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "password mustbe atleast 6 characters",
      });
    }
    //for hashing password...
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashpassword,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({
      message: "server error",
      error: err.message,
    });
  }
};
//login logic.....

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({
        message: "Invalid email or password please check...",
      });
    }
    //password comparing....
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).json({
        message: "Invalid password or email please check...",
      });
    }
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({
      message: "server error",
      error: err.message,
    });
  }
};

export const getuserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: "server error",
      error: err.message,
    });
  }
};
