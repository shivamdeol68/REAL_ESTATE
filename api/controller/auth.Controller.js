import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

  const { name, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res.status(400).json({ message: "User Already Exist" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }

};

export const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { name },
    });
    if (!user) {
      return res.status(404).json({ message: "Invalid Credential" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credential" });
    }
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
        isadmin: false,
      },
      process.env.JWT_SECRET_TOKEN || "fallback_secret_key",
      { expiresIn: age }
    );

    const { password: userpassword, ...userinfo } = user;
    res
      .cookie("token", token, { httpOnly: true, maxAge: age })
      .status(200)
      .json(userinfo);
    console.log(user);
    console.log("token", token);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successfull" });
};
