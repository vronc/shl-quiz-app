ShlConnectionService = require("../services/shlConnection");

const getPlayers = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server!",
  });
};

module.exports.getPlayers = getPlayers;

const connectToShl = (req, res, next) => {
  shlConnectionService = new ShlConnectionService();
  shlConnectionService.connect();
  res.status(200).json({
    body: "Hello from the server!",
  });
};

module.exports.connectToShl = connectToShl;
