// Authentication middleware
function authenticate(req, res, next) {
  // Simulated authentication logic
  const { authorization } = req.headers;
  if (authorization && authorization === 'Bearer myToken') {
    // If token is valid, proceed to next middleware
    next();
  } else {
    // If token is not provided or invalid, send unauthorized response
    res.status(401).send('Unauthorized');
  }
}

module.exports = authenticate;
