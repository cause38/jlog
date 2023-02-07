const mongoose = require('mongoose'); // mongoose를 선언해주고,

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

const User = mongoose.model('User', userSchema); // userSchema를 model로 감싸준다.
module.exports = {User}; // User라는 모델을 본 파일 밖에서도 사용할 수 있도록 export 구문을 작성해준다.
