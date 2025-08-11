import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const generateToken = (user, message, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });

  res
    .status(statusCode)
    .cookie("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "None",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
