const express = require('express');
const {User} = require('../../models/User'); // User model 불러오기
const router = express.Router(); // express의 Router 사용

router.post('/', async (req, res) => {
  const {name, email, password} = req.body;

  try {
    // email을 비교하여 user가 이미 존재하는지 확인
    let user = await User.findOne({email});
    if (user) {
      return res.status(400).json({success: false, msg: '이미 가입된 이메일입니다'});
    }

    // user에 name, email, password 값 할당
    user = new User({
      name,
      email,
      password,
    });

    await user.save(); // db에 user 저장
    return res.status(200).json({success: true, user: {name: user.name, email: user.email}});
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
