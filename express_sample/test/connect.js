//mysqlモジュール読み込み
const mysql = require('mysql2');

//dbモジュール読み込み
const db = require('../lib/db');

//dbモジュールのinfoを代入してmysql接続の作成
const con = mysql.createConnection(db.info);

//mysql接続
con.connect((error) => {
    if (error) {
        console.log('接続エラー');
        return;
    } else {
        console.log('接続成功');
    }
});

//mysql切断
con.end();