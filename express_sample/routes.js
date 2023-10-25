// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()

// モジュール読み込み
const HomeController = require('./controllers/HomeController')
const ItemController = require('./controllers/ItemController')
const LoginController = require('./controllers/LoginController')

// GETリクエストの処理
// Home
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// Item
router.get('/item', ItemController.index)
router.get('/item/:id', ItemController.detail)

// Login
router.get('/login',LoginController.index)

// POSTリクエスト
router.post('/auth',LoginController.auth)

// モジュール化
module.exports = router