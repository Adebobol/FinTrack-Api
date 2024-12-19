import { NextFunction, Request, Response } from "express";
import userService from "../user/user.service";
import transactionService from "./transaction.service";

export const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transactionData = req.body;
  //   const { type, description, category, amount, userId } = transactionData;

  const newTransaction = await transactionService.createTransaction(
    transactionData,
    req
  );

  res.status(201).json({
    data: newTransaction,
  });
};

export const getAllTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Transactions = await transactionService.getAllTransactions(req);
  res.status(201).json({
    data: Transactions,
  });
};
