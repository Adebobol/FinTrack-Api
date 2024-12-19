import { Request } from "express";
import { TransactionCreation } from "../../@types";
import transactionRepository from "./transaction.repository";

const transactionService = {
  async createTransaction(transactionData: TransactionCreation, req: Request) {
    return await transactionRepository.createTransaction(transactionData, req);
  },

  async getAllTransactions(req: Request) {
    return await transactionRepository.getAllTransactions(req);
  },
};

export default transactionService;
