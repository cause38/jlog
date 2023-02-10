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
      let id = 0;
      id = await Counter.findOne({name: 'totalPost'}, (err, res) => {
        if (err) return res.status(400).json({success: false, msg: 'totalPost error'});
        id = res.totalPost + 1;
      });
      Counter.findOneAndUpdate({name: 'totalPost'}, {$set: {totalPost: id}}, {returnNewDocument: true});

      // const post = new Post({
      //   id,
      //   title,
      //   content,
      // });

      // await post.save();
      return res.status(200).json({success: true, postId: id});
    }
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
