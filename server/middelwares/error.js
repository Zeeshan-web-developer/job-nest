const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;


  if (err.name === "CastError") {
    const message = `Resource not found with id: ${err.value}`;
    error.message = message;
    error.statusCode = 404;
  }
  if (err.code === 11000) {
    const message = `Duplicate field value entered: ${err.keyValue.email}`;
    error.message = message;
    error.statusCode = 400;
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error.message = message;
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
