import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { promisify } from "util";
import userService from "../modules/user/user.service";
import { JWT_SECRET } from "../secrets";
import AppError from "../utils/AppError";

export const authmiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string | undefined;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("Unauthorized", 400));
  }
  const decodedResponse = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
  const user = await userService.getUserById(decodedResponse.userId);
  if (!user) {
    return next(new AppError("User doesn't exist.", 401));
  }

  req.user = user;
  next();
};
