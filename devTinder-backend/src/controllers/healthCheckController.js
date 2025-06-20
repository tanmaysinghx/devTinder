
const healthCheckController = (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
};

module.exports = { healthCheckController };