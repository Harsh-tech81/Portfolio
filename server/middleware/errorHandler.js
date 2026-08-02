/**
 * Global error handler middleware
 */
const errorHandler = (err, req, res, next) => {
  // If the status code is 200 but an error is thrown, switch to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    success: false,
    message: err.message,
    // Only show stack trace if not in production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;
