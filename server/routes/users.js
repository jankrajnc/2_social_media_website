const express = require('express');
const router = express.Router();
const logger = require("../utils/log-util").getLogger();
const userDb = require("../db/user-db");

// GET - All users.
router.get('/', async (req, res) => {
  const dbResult = await userDb.getUsers();
  res.json(dbResult.rows);
});

// GET - One user.
router.get('/:id', async (req, res) => {
  logger.info(JSON.stringify(req.params));
  const dbResult = await userDb.getUser(req.params.id);
  res.json(dbResult.rows);
});

// POST.
router.post('/', async (req, res) => {
  logger.info(JSON.stringify(req.body));
  const dbResult = await userDb.createUser(req.body);
  res.json(dbResult.rows);
});

// DELETE.
router.delete('/:id', async (req, res) => {
  logger.info(JSON.stringify(req.params));
  const dbResult = await userDb.deleteUser(req.params.id);
  res.json(dbResult.rows);
});

module.exports = router;

