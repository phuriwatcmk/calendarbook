'use strict';
module.exports = function(app) {
  var teamList = require('../controller/teamController');

  // user Routes
  app.route('/teams')
    .get(userList.list_all_teams)
    .post(userList.create_a_team);
   
   app.route('/team/:user_id')
    .get(userList.read_a_team)
    .put(userList.update_a_team)
    .delete(userList.delete_a_team);
    };