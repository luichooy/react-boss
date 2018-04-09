/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 14:02
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */




const express = require('express');
const {md5} = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');


const _filter = {password: 0, __v: 0};

function encrypt (password) {
  let salt = 'ff43anpPlQo0;mjoJF+UA-ljfkdsaJijomn';
  password += salt;
  return md5(md5(password));
}

Router.get('/info', (req, res) => {
  const {token} = req.cookies;
  if (!token) {
    return res.json({
      code: 2,
      message: '没有权限  '
    });
  }
  
  User.findOne({_id: token}, _filter, (err, doc) => {
    if (!doc) {
      return res.json({
        code: 2,
        message: '没有权限  '
      });
    } else {
      return res.json({
        code: 0,
        message: 'It is okay!',
        data: doc
      });
    }
  });
});

Router.get('/list', (req, res) => {
  // User.remove({}, (err, doc) => {
  // });
  
  let {type} = req.query;
  console.log(type);
  
  User.find(type ? {type: type} : {}, _filter, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        message: '服务端出错'
      });
    }
    return res.json({
      code: 0,
      message: 'It is okay!',
      data: doc
    });
  });
});

Router.post('/login', (req, res) => {
  const {username, password} = req.body;
  
  User.findOne({username, password: encrypt(password)}, _filter, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        message: '服务端出错'
      });
    }
    
    if (!doc) {
      return res.json({
        code: 2,
        message: '账户名或密码有误'
      });
    } else {
      res.cookie('token', doc._id);
      return res.json({
        code: 0,
        message: 'It is okay!',
        data: doc
      });
    }
  });
});

Router.post('/register', (req, res) => {
  console.log(req);
  const {username, password, type} = req.body;
  User.findOne({username}, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        message: '服务端出错'
      });
    }
    
    if (doc) {
      return res.json({
        code: 2,
        message: '用户名已存在'
      });
    } else {
      const userModel = new User({username, type, password: encrypt(password)});
      userModel.save((err, doc) => {
        if (err) {
          return res.json({
            code: 1,
            message: '创建用户失败'
          });
        }
        
        const {username, type, _id} = doc;
        res.cookie('token', _id);
        if (doc) {
          return res.json({
            code: 0,
            message: '创建用户成功',
            data: {username, type, _id}
          })
        }
      });
    }
  });
});

Router.post('/update', (req, res) => {
  const id = req.cookies.token;
  if (!id) {
    return res.json({
      code: 3,
      message: '无权操作'
    });
  }
  
  User.findByIdAndUpdate(id, req.body, _filter, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        message: '服务器出错'
      });
    }
    
    if (doc) {
      const data = Object.assign({}, req.body, {
        username: doc.username,
        type: doc.type
      });
      return res.json({
        code: 0,
        data: data
      });
    }
  });
});

module.exports = Router;