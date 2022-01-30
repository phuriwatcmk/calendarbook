'use strict';

var Team = require('../model/teamModel');

exports.list_all_teams = function(req, res) {
  Team.getAllTeam(function(err, teams) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', teams);
    res.send(teams);
  });
};


exports.create_a_team = function(req, res) {
  var new_team = new Team(req.body);

  //handles null error 
   if(!new_team.user_id || !new_team.teamid){

            res.status(400).send({ error:true, message: 'Please check' });

        }
else{
  
  Team.createTeam(new_team, function(err, team) {
    
    if (err)
      res.send(err);
    res.json(team);
  });
}
};


exports.read_a_team = function(req, res) {
  Team.getTeamById(req.params.teamId, function(err, team) {
    if (err)
      res.send(err);
    res.json(team);
  });
};


exports.update_a_team = function(req, res) {
  Team.updateById(req.params.user_id, new User(req.body), function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {


  User.remove( req.params.teamId, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};