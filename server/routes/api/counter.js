const express = require('express');
const {Counter} = require('../../models/Counter');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const counter = new Counter({
      totalPost: 0,
      name: 'totalPost',
    });

    await counter.save();
    return res.status(200).json({success: true});
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
