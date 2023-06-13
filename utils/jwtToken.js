const jwt = require('jsonwebtoken');

// Middleware for JWT token verification
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  // console.log(req.cookies);
  console.log(`token: ${token}`);
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, 'glucoWear', (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(403).json({ message: 'Failed to authenticate token.' });
    }

    // Add the decoded user information to the request object
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;

