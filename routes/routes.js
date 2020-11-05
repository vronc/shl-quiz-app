const express = require("express");
const router = express.Router();
const controllers = require("./../controllers/controllers");

router.get("/get-players-by-team", controllers.getPlayersByTeam);

router.get("/connect-to-shl", controllers.connectToShl);

router.get("/get-teams", controllers.getTeams);

module.exports = router;
