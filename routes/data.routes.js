import { Router } from "express";
import { populateData } from "../controllers/databaseManagement/refreshData.js";

export const dataRouter = new Router();

/**
 * Refreshes all data in MongoDB when called.
 */
dataRouter.get("/refreshData", async (req, res) => {
  try {
    await populateData(true);
    res.send("Data refreshed.");
  } catch (error) {
    let msg = `Error in /data/refreshData: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});