const express = require('express');
const {User} = require('../../models/User'); // User model 불러오기
const router = express.Router(); // express의 Router 사용

router.post('/', async (req, res) => {
  const {email, password} = req.body;

  try {
    // email을 비교하여 user가 이미 존재하는지 확인
    let user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({success: false, msg: '가입되지 않은 이메일입니다'});
    }

    // 요청된 이메일이 db에 있다면 비밀번호 일치여부 확인
    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          success: false,
          msg: isMatch,
        });

      // 일치 시, 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 쿠키 옵션 설정
        const cookieConfig = {
          httpOnly: true,
          maxAge: 1000000,
        };
        // 토큰을 쿠키에 저장
        res
          .cookie('x_auth', user.token, cookieConfig)
          .status(200)
          .json({
            success: true,
            user: {token: user.token, name: user.name, role: user.role},
          });
      });
    });
  } catch (error) {
    return res.status(500).json({success: false, msg: error.message});
  }
});

module.exports = router;
