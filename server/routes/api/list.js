const express = require('express');
const {Post} = require('../../models/Post');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Post.find({}, {_id: 0, __v: 0}, async (err, res) => {
      if (err) return res.status(400).json({success: false, msg: 'DB Find error'});
    }).clone();
    return res.status(200).json({success: true, data});
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
