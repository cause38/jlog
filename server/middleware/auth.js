const jwt = require('jsonwebtoken');

const authChecker = (req, res, next) => {
  if (req.headers.authorization) {
    const {JWT_SECRET} = process.env;
    const token = req.headers.authorization.split('Bearer ')[1];

    jwt.verify(token, JWT_SECRET, err => {
      if (err) {
        res.status(401).json({error: 'Auth Error from authChecker'});
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({error: 'Auth Error from authChecker'});
  }
};
module.exports = {authChecker};
