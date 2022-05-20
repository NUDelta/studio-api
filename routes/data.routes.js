import { Router } from "express";
import { populateData } from "../controllers/databaseManagement/refreshData.js";

export const dataRouter = new Router();

/**
 * Refreshes all data in MongoDB when called.
 */
dataRouter.get("/refreshData", async (req, res) => {
  await populateData(true);
  res.send("Data refreshed.");
});