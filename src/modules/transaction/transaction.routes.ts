import { Router } from "express";

const transactionRoute = Router();

transactionRoute.post("/transaction");
transactionRoute.get("/transactions");
transactionRoute.put("/transaction/:id");
transactionRoute.delete("/transaction/:id");

export default transactionRoute;
