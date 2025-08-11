import User from "../model/user.model.js";
import { generateToken } from "../utils/jwtToken.js";
import bcrypt from "bcryptjs";

export const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let user = await User.findOne({ $or: [{ email }] });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      return generateToken(user, "Logged In Successfully!", 200, res);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      email,
      role: "User",
      password: hashedPassword,
    });
    await user.save();

    const { password: _, ...sanitizedUser } = user.toObject();

    return generateToken(
      sanitizedUser,
      "User Registered Successfully!",
      201,
      res
    );
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
