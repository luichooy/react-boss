/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:11
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/imooc';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongo connect success');
});

const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}));

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, React!</h1>');
});

app.get('/data', (req, res) => {
  res.json({
    user: 'luichooy',
    age: 18
  });
});


app.listen('9093', () => {
  console.log('Server runs at port 9093');
});