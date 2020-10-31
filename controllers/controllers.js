const getPlayers = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server!",
  });
};

module.exports.getPlayers = getPlayers;
