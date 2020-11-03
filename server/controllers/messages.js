var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      if (err) {
        console.log('Error: ', err);
      }
      res.json(results);
    });
  },
  post: function (req, res) {
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, function(err, results) {
      if (err) {
        console.log('Error: ', err);
      }
      res.sendStatus(201);
    });
  }
};
