/* global Workout:true, Gyms, throwError */

Template.builder.onCreated( function() {
  // Create local collection to store workout being built
  Workout = new Mongo.Collection(null);
  
  // Insert empty workout into local collection
  var id = Workout.insert({
    parent: "root"
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
  'click #saveWorkout': function(e,template) {
    var rootId = Session.get('rootId');

    // Set gym and date
    var workoutName = $('#workoutName').val();
    var gymName = $('#gymName').val();
    Workout.update({_id: rootId}, {$set: {name: workoutName,
                                           gym: gymName,
                                           date: new Date() }});

    // Get values
    Workout.find({_id: {$ne: rootId}}).forEach(function(obj){
      var f1Val = template.$('#' + obj._id + '\\.f1').val();
      Workout.update(obj,{$set: {'field1.value': f1Val}});
      if (obj.field2) {
        var f2Val = template.$('#' + obj._id + '\\.f2').val();
        Workout.update(obj,{$set: {'field2.value': f2Val}});
      }
    });

    Meteor.call('insertWorkout', Workout.find().fetch(), rootId, 
      function(error) {
      if(error) {
        return throwError(error.reason);
      }
    });
    
  }
});
