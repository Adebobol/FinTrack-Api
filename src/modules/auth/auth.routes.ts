import { Router } from "express";
import { authmiddleware } from "../../middlewares/authmiddleware";
import { login, register } from "./auth.controller";

const authRoute = Router();

authRoute.post("/register", register);
authRoute.get("/login", login);

export default authRoute;
