//mysql2/promiseモジュール読み込み
const mysql = require('mysql2/promise')
const db = require('../lib/db')
const bcrypt = require('bcrypt');

class User {
    //ユーザ追加（非同期処理）
    add = async (post) => {
        //DB接続
        post.password = await bcrypt.hash(post.password, 10);
        var result;
        try {
            const con = await mysql.createConnection(db.info);
            //SQL実行
            var sql = `INSERT INTO users SET ?;`
            result = con.query(sql, post);
            con.end();
        } catch (error) {

        } finally {
        }
        return result;
    }
    auth = async(email, password) => {
        var result;
        try {
            const con = await mysql.createConnection(db.info);
            //SQL実行
            var sql = `SELECT * FROM users WHERE;`
            const[rows,fields] = con.query(sql, {email:email});
            user = rows[0]; 

            if (user && await bcrypt.compare(password, user.password)) {
                return user;
            }
            con.end();
        } catch (error) {


        } finally {
        }
        return result;
    }

    }


//モジュール化
module.exports = User