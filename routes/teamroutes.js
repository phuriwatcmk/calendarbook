'use strict';
module.exports = function(app) {
  var teamList = require('../controller/teamController');

  // user Routes
  app.route('/teams')
    .get(teamList.list_all_teams)
    .post(teamList.create_a_team);
   
   app.route('/team/:user_id')
    .get(teamList.read_a_team)
    .put(teamList.update_a_team)
    .delete(teamList.delete_a_team);
    };