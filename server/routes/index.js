var express = require('express');
var router = express.Router();
const pool = require('../db/index')

const user_info = [];
const user_id = [];

// 校验登录状态接口
router.post('/api/isLogin', function(req, res, next){
  const token = req.body.access_token;
  if(user_info.length !== 0){
    res.json({
      code: 0
    })
  }
  else{
    res.json({
      code: 1
    })
  }
})

// 校验手机号接口
router.post('/api/checkAccount', function(req, res, next){
  const account = req.body.account;
  const sql = 'SELECT * FROM user WHERE user_account = ?';
  pool.query(sql, [account]).then(data => {
    if(data[0][0] === undefined){
      res.json({
        code: 0 // 手机号码不存在
      })
    }
    else{
      res.json({
        code: 1 // 手机号码存在
      })
    }
  })
})

// 登录接口
router.post('/api/login', function(req, res, next){
  const account = req.body.account;
  const pass = req.body.password;
  const sql = 'SELECT password FROM user WHERE user_account = ?';
  pool.query(sql, [account]).then(data => {
    if(pass === data[0][0].password){
      res.json({
        code: 1 // 验证成功
      });
      user_info.push(account);  // 存储登录状态的token
    }
    else{
      res.json({
        code: 0 // 密码错误
      })
    }
  })
})

// 注册接口
router.post('/api/register', function(req, res, next){
  const account = req.body.account;
  const pass = req.body.password;
  const code = req.body.code;
  const getId = 'SELECT COUNT(*) FROM user';
  const sql = 'INSERT INTO user (user_id ,user_account, password) VALUES (?, ?, ?)';
  if(code === '0000'){
    pool.query(getId).then(data => {
      const id = data[0][0]['COUNT(*)'];
      pool.query(sql, [id, account, pass]).then(data => {
        res.json({
          code: 1
        });
      })
    })
  }
  else{
    res.json({
      code: 0 // 验证码错误
    })
  }
})

// 商品列表接口
router.post('/api/productList', function(req, res, next){
  const sql = 'SELECT *FROM product_list';
  pool.query(sql).then(data => {
    res.json(data[0]);
  })
})

// 个人商品接口
router.post('/api/my', function(req, res, next){
  const getId = 'SELECT user_id FROM user WHERE user_account = ?'
  pool.query(getId, [user_info[0]]).then(data => {
    const id = data[0][0].user_id;
    user_id.push(id);
    const sql = 'SELECT * FROM product_list WHERE user_id = ?'
    pool.query(sql, [id]).then(data => {
      res.json(data[0]);
    })
  })
})

// 上架接口
router.post('/api/upload', function(req, res, next){
  const getId = 'SELECT COUNT(*) FROM product_list';
  const { product_title, product_price, stock_num, product_intro } = req.body;
  const insertSql = 'INSERT INTO product_list VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
  pool.query(getId).then(data => {
    const id = data[0][0]['COUNT(*)'];
    pool.query(insertSql, [id, product_title, product_price, stock_num, product_intro, 1, null, user_id[0]]).then(data => {
      res.json({
        code: 1 // 上架成功
      })
    })
  })
})

// 商品详情接口
router.post('/api/detail', function(req, res, next){
  const product_id = req.body.product_id;
  const sql = 'SELECT * FROM product_list WHERE product_id = ?'
  pool.query(sql, [product_id]).then(data => {
    res.json(data[0]);
  })
})

// 购买接口
router.post('/api/buy', function(req, res, next){
  const num = req.body.num; // 获取购买的数量
  const product_id = req.body.product_id;
  const getStockNum = 'SELECT stock_num FROM product_list WHERE product_id = ?';
  pool.query(getStockNum, [product_id]).then(data => {
    let newNum = data[0][0].stock_num - num;
    const updateNum = 'UPDATE product_list SET stock_num = ? WHERE product_id = ?';
    if(newNum > 0){ // 未全部购完
      pool.query(updateNum, [newNum, product_id]).then(data => {
        res.json({
          code: 1 // 购买成功
        })
      })
    }
    else{
      const updateNumState = 'UPDATE product_list SET stock_num = ?, product_state = ? WHERE product_id = ?'
      pool.query(updateNumState, [newNum, 0, product_id]).then(data => {
        res.json({
          code: 1 // 购买成功
        })
      })
    }
  })
})

// 增加订单接口
router.post('/api/order', function(req, res, next){
  const { product_id, product_price, num } = req.body;
  const getOrderId = 'SELECT COUNT(*) FROM `order`'
  pool.query(getOrderId).then(data => {
    const order_id = data[0][0]['COUNT(*)'];
    const getSellerId = 'SELECT user_id FROM product_list WHERE product_id = ?'
    pool.query(getSellerId, [product_id]).then(data => {
      const seller_id = data[0][0].user_id;
      const insertOrder = 'INSERT INTO `order` VALUES(?, ?, ?, ?, ?, ?)';
      pool.query(insertOrder, [order_id, seller_id, user_id[0], product_price, num, 1]);
    })
  })
})

// 添加至购物车接口
router.post('/api/addShopMart', function(req, res, next){
  const { product_id, product_price, num, product_title } = req.body;
  const getSellerId = 'SELECT user_id FROM product_list WHERE product_id = ?';
  pool.query(getSellerId, [product_id]).then(data => {
    const seller_id = data[0][0].user_id;
    const getShopCartId = 'SELECT COUNT(*) FROM shopping_cart';
    pool.query(getShopCartId).then(data => {
      const SC_id = data[0][0]['COUNT(*)'];
      const insertShopCart = 'INSERT INTO shopping_cart VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
      pool.query(insertShopCart, [SC_id, product_price, seller_id, user_id[0], num, 1, product_title, product_id]).then(data => {
        res.json({
          code: 1 //添加成功
        })
      })
    })
  })
})

// 查询购物车列表接口
router.post('/api/shopCartList', function(req, res, next){
  const sql = 'SELECT * FROM shopping_cart WHERE buyer_id = ?';
  pool.query(sql, [user_id[0]]).then(data => {
    res.json(data[0]);
  })
})

// 更新购物车表接口
router.post('/api/updateShopCart', function(req, res, next){
  const sc_id = req.body.SC_id;
  const sql = 'DELETE FROM shopping_cart WHERE sc_id = ?';
  pool.query(sql, [sc_id]);
})

// 修改上下架状态接口
router.post('/api/changeState', function(req, res, next){
  const product_id = req.body.product_id;
  const getState = 'SELECT product_state FROM product_list WHERE product_id = ?';
  pool.query(getState, [product_id]).then(data => {
    const product_state = data[0][0].product_state;
    const updateState = 'UPDATE product_list SET product_state = ? WHERE product_id = ?';
    if(product_state === 1){
      pool.query(updateState, [2, product_id]).then(data => {
        res.json({
          code: 2 // 下架成功
        })
      })
    }
    else{
      pool.query(updateState, [1, product_id]).then(data => {
        res.json({
          code: 1 // 上架成功
        })
      })
    }
  })
})

// 管理员登录接口
router.post('/api/adminLogin', function(req, res, next){
  const { account, password } = req.body;
  const sql = 'SELECT `password` FROM admin WHERE admin_id = ?';
  pool.query(sql, [account]).then(data => {
    if(password === data[0][0].password){
      res.json({
        code: 1 // 密码检验正确
      })
    }
    else{
      res.json({
        code: 0 // 密码检验错误
      })
    }
  })
})

// 用户信息展示接口
router.post('/api/userInfo', function(req, res, next){
  const sql = 'SELECT * FROM user';
  pool.query(sql).then(data => {
    res.json(data[0]);
  })
})

// 商品信息展示接口
router.post('/api/productInfo', function(req, res, next){
  const sql = 'SELECT * FROM product_list';
  pool.query(sql).then(data => {
    res.json(data[0]);
  })
})

// 订单信息展示接口
router.post('/api/orderInfo', function(req, res, next){
  const sql = 'SELECT * FROM `order`';
  pool.query(sql).then(data => {
    res.json(data[0]);
  })
})

module.exports = router;