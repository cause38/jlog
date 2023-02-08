const mongoose = require('mongoose'); // mongoose를 선언해주고,
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // 암호화 모듈
const saltRounds = 10;

const userSchema = mongoose.Schema({
  // userSchema라는 이름의 schema를 작성해준다.
  name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  email: {
    type: String,
    maxLength: 50,
    trim: true, // space를 없애준다.
    unique: 1, // 같은값은 하나만 존재할 수 있다.
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    // 관리자 여부
    type: Number,
    default: 0, // 값이 정해지지 않았다면 디폴트로 0!
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    // 비밀번호 암호화
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else next();
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), 'secretToken');
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;
  jwt.verify(token, 'secretToken', function (err, decoded) {
    user.findOne({_id: decoded, token: token}, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema); // userSchema를 model로 감싸준다.
module.exports = {User}; // User라는 모델을 본 파일 밖에서도 사용할 수 있도록 export 구문을 작성해준다.
