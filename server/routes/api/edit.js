const express = require('express');
const {Post} = require('../../models/Post');
const router = express.Router();
const {authChecker} = require('../../middleware/auth');

router.post('/', async (req, res) => {
  const {title, content, tags, id} = req.body;
  try {
    if (!title || title === '') {
      return res.status(400).json({success: false, msg: '제목을 입력해주세요'});
    } else if (!content || content === '') {
      return res.status(400).json({success: false, msg: '내용을 입력해주세요'});
    } else {
      const data = {
        id,
        title,
        content,
        tags,
        updatedAt: Date.now,
      };

      await Post.updateOne({id}, {$set: data}, {returnNewDocument: true}, (err, res) => {
        if (err) return res.status(400).json({success: false, msg: 'post update error'});
      });

      return res.status(200).json({success: true, postId: id});
    }
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
