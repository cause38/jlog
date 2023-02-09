const express = require('express');
const {Post} = require('../../models/Post');
const {Counter} = require('../../models/Counter');
const router = express.Router();
const {authChecker} = require('../../middleware/auth');

router.post('/', authChecker, async (req, res) => {
  const {title, content, tags} = req.body;
  try {
    if (!title) {
      return res.status(400).json({success: false, msg: '제목을 입력해주세요'});
    } else if (!content) {
      return res.status(400).json({success: false, msg: '내용을 입력해주세요'});
    } else {
      const id = Counter.findOne({name: 'totalPost'});
      const post = new Post({
        id,
        title,
        desc,
        createdAt,
      });

      await post.save();
      return res.status(200).json({success: true, postId: 1});
    }
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
