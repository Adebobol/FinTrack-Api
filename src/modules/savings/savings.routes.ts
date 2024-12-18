import { Router } from "express";

const savingRoute = Router();

savingRoute.post("/savings");
savingRoute.put("/savings/:id");
savingRoute.get("/savings");

export default savingRoute;
