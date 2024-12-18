import { Router } from "express";

const budgetRoute = Router();

budgetRoute.post("/budget");
budgetRoute.get("/budget");

export default budgetRoute;
