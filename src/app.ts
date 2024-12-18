import express, { Express, Request, Response, NextFunction } from "express";
import { connectToDatabase } from "./config/database";
import { globalErrorHandler } from "./error/errorHandler";
import authRoute from "./modules/auth/auth.routes";
import budgetRoute from "./modules/budget/budget.routes";
import savingRoute from "./modules/savings/savings.routes";
import transactionRoute from "./modules/transaction/transaction.routes";
import userRoute from "./modules/user/user.routes";

const app: Express = express();
app.use(express.json());

// app.use("/", (req, res, next) => {
//   res.send("FinTrack running");
// });

app.use("/api/v1/transaction", transactionRoute);
app.use("/api/v1/budget", budgetRoute);
app.use("/api/v1/savings", savingRoute);
app.use("/api/v1/transaction", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);

app.listen(3000, () => {
  console.log("api running");
  connectToDatabase();
});

app.use(globalErrorHandler);
