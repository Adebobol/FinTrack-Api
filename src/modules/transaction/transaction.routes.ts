import { Router } from "express";
import { authmiddleware } from "../../middlewares/authmiddleware";
import {
  createTransaction,
  getAllTransactions,
} from "./transaction.controller";

const transactionRoute = Router();

transactionRoute.use(authmiddleware);

transactionRoute.post("/", createTransaction);
transactionRoute.get("/all", getAllTransactions);
// transactionRoute.put("/transaction/:id");
// transactionRoute.delete("/transaction/:id");

export default transactionRoute;
