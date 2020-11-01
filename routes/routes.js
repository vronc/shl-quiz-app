const express = require("express");
const router = express.Router();
const controllers = require("./../controllers/controllers");

router.get("/get-players", controllers.getPlayers);
router.get("/connect-to-shl", controllers.connectToShl);

module.exports = router;
