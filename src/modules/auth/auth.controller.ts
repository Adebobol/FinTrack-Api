import { Request, Response, NextFunction } from "express";
import AppError from "../../utils/AppError";
import userRepository from "../user/user.repository";
import userService from "../user/user.service";
import authRepository from "./auth.repository";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../secrets";
import { compareSync } from "bcrypt";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  const userEmail = await userService.getUser(email);

  if (userEmail) {
    return next(
      new AppError("Email already exist. Register with another one.", 400)
    );
  }
  const newUser = await authRepository.registerUser({ name, email, password });

  res.status(201).json({
    data: newUser,
  });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Enter your email or password", 400));
  }

  const loginUser = await userService.getUser(email);

  if (!loginUser) {
    return next(new AppError("Enter your email to login.", 400));
  }

  const isValid = compareSync(password, loginUser.password);

  if (!isValid) {
    return next(new AppError("Password incorrect! enter a correct one", 400));
  }

  const token = jwt.sign(
    {
      userId: loginUser?.id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    token: token,
  });
};
