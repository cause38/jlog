const express = require('express');
const {Post} = require('../../models/Post');
const {Counter} = require('../../models/Counter');
const router = express.Router();
const {authChecker} = require('../../middleware/auth');

router.post('/', async (req, res) => {
  const {title, content, tags} = req.body;
  try {
    if (!title || title === '') {
      return res.status(400).json({success: false, msg: '제목을 입력해주세요'});
    } else if (!content || content === '') {
      return res.status(400).json({success: false, msg: '내용을 입력해주세요'});
    } else {
      let postId = 0;
      await Counter.findOne({name: 'totalPost'}, {_id: 0, name: 0, __v: 0}, async (err, res) => {
        if (err) return res.status(400).json({success: false, msg: 'totalPost find error'});
        postId = res.totalPost + 1;
      }).clone();

      await Counter.updateOne(
        {name: 'totalPost'},
        {$set: {totalPost: postId}},
        {returnNewDocument: true},
        (err, res) => {
          if (err) return res.status(400).json({success: false, msg: 'totalPost update error'});
        }
      ).clone();

      let post = await Post.findOne({id: postId});
      if (post) {
        return res.status(400).json({success: false, msg: '잠시 후 다시 시도해주세요'});
      }

      post = new Post({
        id: postId,
        title,
        content,
        tags,
      });

      await post.save();
      return res.status(200).json({success: true, postId});
    }
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
