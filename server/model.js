/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 14:08
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */



const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/react-boss';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongo connect success');
});


// const User = mongoose.model('user', new mongoose.Schema({
//   user: {type: String, require: true},
//   age: {type: Number, require: true}
// }));

const models = {
  user: {
    username: {type: String, require: true},
    password: {type: String, require: true},
    type: {type: String, require: true},
    avatar: {type: String},
    // 简介
    profile: {type: String},
    // 求职职位或者招聘职位
    job: {type: String},
    // boss字段
    company: {type: String},
    money: {type: String}
  },
  chat: {}
};


for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name);
  }
}