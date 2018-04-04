/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 14:02
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */




const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/info', (req, res) => {
  return res.json({
    code: 0,
    message: 'It is okay!',
    data: {
      isLogin: 1
    }
  });
});

Router.get('/list', (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc);
  });
});

Router.post('/register', (req, res) => {
  console.log(req.body);
  const {username, password, type} = req.body;
  User.findOne({username}, (err, doc) => {
    if (doc) {
      return res.json({
        code: 1,
        message: '用户名已存在'
      })
    } else {
      User.create({username, password, type},(err,doc) => {
        if(err){
          return res.json({
            code: 2,
            message: '后端创建用户失败'
          });
        }
        
        return res.json({
          code: 0,
          message: '创建用户成功'
        })
      });
    }
  });
});

module.exports = Router;