const express = require('express');
const router = express.Router();
const {authChecker} = require('../../middleware/auth');

router.post('/', authChecker, async (req, res) => {
  try {
    res.clearCookie('x_auth');
    res.status(200).json({success: true});
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
