const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'newuser',
  password : '123456789_aA',
  database : 'SocialMedia'
});

module.exports = db;