/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:11
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


const express = require('express');

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