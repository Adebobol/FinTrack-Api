import { TransactionType } from "@prisma/client";
import { Request } from "express";
import { TransactionCreation } from "../../@types";
import { prisma } from "../../config/database";

const transactionRepository = {
  async createTransaction(transactionData: TransactionCreation, req: Request) {
    return await prisma.transaction.create({
      data: {
        type: TransactionType.income || TransactionType.expense,
        amount: transactionData.amount,
        userId: req.user.id,
        category: transactionData.type,
        description: transactionData.description,
      },
    });
  },

  async getAllTransactions(req: Request) {
    return await prisma.transaction.findMany({
      where: { userId: req.user.id },
    });
  },
};

export default transactionRepository;
