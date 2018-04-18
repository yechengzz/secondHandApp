const mysql2 = require('mysql2/promise');

var pool  = mysql2.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'secondhand'
  });

  pool.on('connection', function (connection) {
    console.log('pool connection...')
  });

module.exports = pool;