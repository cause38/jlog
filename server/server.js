const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const {PORT, MONGO_URI} = process.env;
const app = express();
const path = require('path');
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));

// TODO: 배포 시 체크
// app.use('/', express.static(path.resolve(__dirname, './front/build')));
// app.get('*', (req, res, next) => {
//   if (req.path.split('/')[1] === 'static') return next();
//   res.sendFile(path.resolve(__dirname, './front/build/index.html'));
// });

app.use('/api/login', require('./routes/api/login'));
app.use('/api/logout', require('./routes/api/logout'));
app.use('/api/register', require('./routes/api/register'));
app.use('/api/write', require('./routes/api/write'));
app.use('/api/list', require('./routes/api/list'));
app.use('/api/view', require('./routes/api/view'));
app.use('/api/delete', require('./routes/api/delete'));
app.use('/api/edit', require('./routes/api/edit'));
app.listen(PORT, () => console.log(PORT, 'PORT OPEN SUCCESS!!'));

const mongoose = require('mongoose');
mongoose
  .set('strictQuery', false)
  .connect(MONGO_URI, {})
  .then(() => console.log('MongoDB conected'))
  .catch(err => {
    console.log(err);
  });
