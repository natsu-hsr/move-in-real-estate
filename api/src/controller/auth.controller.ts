import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const {email, username, password} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({message: "User successfully created"});
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "Failed to create a new user"});
  }
};

export const login = async (req, res) => {
  const {username, password} = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {username},
    });

    if (!user) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    // generate token
    const weekMillis = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {id: user.id},
      process.env.JWT_SECRET_KEY,
      {expiresIn: weekMillis}
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: weekMillis,
        // secure: true,
      })
      .status(200)
      .json({message: "login successful"});
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({message: "Failed to login"});
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({message: "logout successful"});
};
