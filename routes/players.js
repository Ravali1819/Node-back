const { application } = require("express");
const express = require("express");

const router = express.Router();

const dataController = require("../controller/player");

router.get("/", dataController.getPlayerData);

router.post("/add-player", dataController.addPlayerData);

router.get("/team/:teamdata/:teamId", dataController.getTeam);

router.get("/playerName/:playerdata", dataController.getPLayer);

module.exports = router;
