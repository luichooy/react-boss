/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:11
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', userRouter);

app.listen('9093', () => {
  console.log('Server runs at port 9093');
});