const Player = require("../model/players");
const Team = require("../model/team");

exports.getPlayerData = (req, res, next) => {
  Team.find()
    .then((result) => {
      res.status(201).json({ data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addPlayerData = (req, res, next) => {
  const { code, name, from, price, isplaying, description } = req.body;
  const addData = new Player({
    userData: { code },
    playerData: {
      playerName: name,
      from,
      price,
      isPlaying: isplaying,
      description,
    },
  });

  addData
    .save()
    .then((result) => {
      res.json({
        data: addData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTeam = (req, res, next) => {
  const Team1 = req.params.teamdata;
  const teamId = req.params.teamId;

  Player.find({ "playerData.from": Team1 }).then((result) => {
    let data = result;
    Team.find({ _id: teamId }).then((output) => {
      // console.log(output);
      res.status(201).json({ data: data, header: output, team: Team1 });
    });
  });
};

exports.getPLayer = (req, res, next) => {
  const player = req.params.playerdata;
  Player.find({ _id: player }).then((result) => {
    res.status(201).json({ data: result });
  });
};

exports.getHeader = (req, res, next) => {
  const Team1 = req.params.teamdata;
  Team.find({ Team: Team1 }).then((result) => {
    res.status(201).json({ data: result });
  });
};
