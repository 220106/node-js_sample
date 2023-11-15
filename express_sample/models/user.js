//mysql2/promiseモジュール読み込み
const mysql = require('mysql2/promise')
const db = require('../lib/db')

class User {
    //ユーザ追加（非同期処理）
    add = async (post) => {
        //DB接続
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
    auth = (email, password) => {

    }
}

//モジュール化
module.exports = User