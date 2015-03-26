/* global Workout:true, Gyms */

Template.builder.onCreated( function() {
  // Create local collection to store workout being built
  Workout = new Mongo.Collection(null);
  
  // Insert empty workout into local collection
  var id = Workout.insert({
    parent: "none"
  });
  
  console.log(id);
  
  // Store workout id in Session as workout root
  Session.set("rootId", id);
});

Template.builder.helpers({
  // Settings for gymName autocomplete
  settings: function() {
    return {
      limit: 5,
      rules: [{
        collection: Gyms,
        field: "name",
        template: Template.gymItem
      }]
    };
  }
});

Template.builder.events({
  'click #saveWorkout': function() {
    var rootId = Session.get('rootId');
    var workoutName = $('#workoutName').val();
    var gymName = $('#gymName').val();
    Workout.update({_id: rootId}, {$set: {name: workoutName,
                                           gym: gymName,
                                           date: new Date() }});
    Meteor.call('insertWorkout', Workout.find().fetch());
    
  }
});
