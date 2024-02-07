// Parses a SQL error and responds appropriately.
const errorResponse = (error, response) => {
  console.error(error);

  let httpCode = 500;

  // Determine the correct HTTP code to use.
  switch (error.errno) {
    // Table doesn't exist.
    case 1146:
      httpCode = 404;

    default:
  }

  return response
    .status(httpCode)
    .json({ status: httpCode, message: error.message });
};

module.exports = errorResponse;
