var db = require('../db');

module.exports = {
  getAll: function (name, callback) {
    const usersGetAllSql = 'select * from users;';

    db.query(usersGetAllSql, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(results);
      }
    });
  },
  create: function (user, callback) {
    const usersCreateSql = '';

    db.query(usersCreateAllSql, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  }
};
