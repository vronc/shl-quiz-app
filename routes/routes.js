const express = require("express");
const router = express.Router();
const controllers = require("./../controllers/controllers");

router.get("/get-players", controllers.getPlayers);

module.exports = router;
