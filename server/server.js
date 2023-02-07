const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {PORT, MONGO_URI} = process.env;
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/register', require('./routes/api/register'));

// app.use('/', express.static(path.resolve(__dirname, 'Jlog/public')));
// app.get('*', (req, res, next) => {
//   if (req.path.split('/')[1] === 'static') return next();
//   res.sendFile(path.resolve(__dirname, 'Jlog/public/index.html'));
// });

// app.post('/register', (req, res) => {
//   const user = new User(req.body); // 상단에서 require로 가져온 User 스키마에 req.body를 담아 user라는 인스턴스로 만든다.

//   user.save((err, userInfo) => {
//     if (err) return res.json({success: false, err}); // err일 경우 return 값
//     return res.status(200).json({
//       //status가 200일 경우 return 값
//       success: true,
//       userInfo,
//     });
//   });
// });

// const {User} = require('./models/User');

// app.post('/api/users', function (req, res) {
//   return res.send(User);
// });

app.listen(PORT, () => console.log(PORT, 'PORT OPEN SUCCESS!!'));

const mongoose = require('mongoose');
mongoose
  .set('strictQuery', false)
  .connect(MONGO_URI, {
    // useNewUrlPaser: true,
    // useUnifiedTofology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('MongoDB conected'))
  .catch(err => {
    console.log(err);
  });
