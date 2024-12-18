import { Request, Response, NextFunction } from "express";
import AppError from "../../utils/AppError";
import userService from "./user.service";
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body;
  const user = await userService.getUser(email);

  if (!user) {
    return next(new AppError("No user found ", 400));
  }

  res.status(200).json({
    data: user,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await userService.getUserById(+id);

  if (!user) {
    return next(new AppError(`No user with ${id} found`, 400));
  }

  res.status(200).json({
    data: user,
  });
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await userService.getAllUsers();

  res.status(200).json({
    users: user.length,
    data: user,
  });
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await userService.getUserById(+id);

  if (!user) {
    return next(new AppError(`user with ${id} id doesn't exist.`, 400));
  }

  res.status(200).json({
    message: "User successfully deleted",
  });
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const { name, ...rest } = req.body;

  if (!name) {
    return next(new AppError(`You can't update user with ${id} id.`, 400));
  }

  const updatedUser = await userService.updateUser(+id, name);

  res.status(200).json({
    data: updatedUser,
  });
};
