var db = require('../db');

module.exports = {
  getAll: function (callback) {
    const messGetAllSql = 'select messages.id, messages.text_message, messages.room_name, users.user_name from messages left outer join users on (messages.user_id = users.user_id);';

    db.query(messGetAllSql, function(err, result) {
      if (err) {
        throw err;
      } else {
        callback(result);
      }
    });

  }, // a function which produces all the messages
  create: function (message, callback) {
    const messCreateSql = 'insert into messages(user_id, text_message, room_name) values ((select id from users where username = ? limit 1), ?, ?);';

    db.query(messCreateSql, messages, function(err, result) {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  }
};
