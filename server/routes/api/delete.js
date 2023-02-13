const express = require('express');
const {Post} = require('../../models/Post');
const router = express.Router();

router.get('/', async (req, res) => {
  const {id} = req.query;
  try {
    await Post.deleteOne({id}, async (err, res) => {
      if (err) return res.status(400).json({success: false, msg: 'DB Find error'});
    }).clone();
    return res.status(200).json({success: true});
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
