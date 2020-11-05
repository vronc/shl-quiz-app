ShlConnectionService = require("../services/shlConnection");

const getPlayersByTeam = (req, res, next) => {
  ShlConnectionService.getPlayersByTeam(req.query.team_code).then((players) =>
    res.status(200).json({
      body: players,
    })
  );
};

module.exports.getPlayersByTeam = getPlayersByTeam;

const getTeams = (req, res, next) => {
  ShlConnectionService.getTeams().then((teams) =>
    res.status(200).json({
      body: teams,
    })
  );
};

module.exports.getTeams = getTeams;

const connectToShl = (req, res, next) => {
  ShlConnectionService.getInstance();

  res.status(200).json({
    body: "Hello from the server!",
  });
};

module.exports.connectToShl = connectToShl;
