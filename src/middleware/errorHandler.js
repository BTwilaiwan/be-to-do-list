module.exports = (err, req, res, next) => {
  res.status(400).json({
    error: err.message || 'Something went wrong'
  });
  res.status(500).json({
    message: err.message || 'Internal Server Error'
  });
};