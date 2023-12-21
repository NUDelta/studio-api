import { Router } from 'express';
import { populateData } from '../controllers/databaseManagement/refreshData.js';
import sinon from 'sinon';

export const dataRouter = new Router();
let clock;

/**
 * Refreshes all data in MongoDB when called.
 */
dataRouter.get('/refreshData', async (req, res) => {
  try {
    await populateData(true);
    res.send('Data refreshed.');
  } catch (error) {
    let msg = `Error in /data/refreshData: ${error.stack}`;
    console.error(msg);
    res.send(msg);
  }
});

dataRouter.post('/setClock', async (req, res) => {
  try {
    clock = sinon.useFakeTimers({ now: new Date(req.body.newDate) });
    res.send(`Clock set to ${JSON.stringify(clock)}`);
  } catch (error) {
    let msg = `Error in /data/setClock: ${error.stack}`;
    console.error(msg);
    res.send(msg);
  }
});

dataRouter.post('/resetClock', async (req, res) => {
  try {
    clock.restore();
    res.send(`Clock set to ${JSON.stringify(clock)}`);
  } catch (error) {
    let msg = `Error in /data/resetClock: ${error.stack}`;
    console.error(msg);
    res.send(msg);
  }
});
