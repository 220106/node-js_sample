const User = require('../models/User')
//bcryptモジュール読み込み
const bcrypt = require('bcrypt');
//パスワードのハッシュ化
var hash = bcrypt.hashSync("password", 10);

var user = new User();
var data = { 
        name: "Node", 
        email: "node@test.com",
        password: hash,
    }

var result = user.add(data);
console.log(result)