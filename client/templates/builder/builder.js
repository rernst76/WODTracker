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

    // Generate depth array, and insert root field for easier querying
    var depth = Workout.find({_id: {$ne: rootId}}).map(function(obj) {
      // Depth array
      var depthArr = [obj._id, 0];
      var tempObj = obj;
      while (tempObj.parent !== rootId) {
        tempObj = Workout.findOne({_id: tempObj.parent});
        depthArr[1]++;
      }

      // Add root attribute, and depth
      Workout.update(obj,{$set: {root: rootId,
                                 depth: depthArr[1]}});

      return depthArr;
    });

    // Make object out of depth array
    depth = _.object(depth);

    // Build Text description recursively
    function buildText(objArr) {
      return _.chain(objArr)
        .map(function(obj) {
          var indent = _.times(obj.depth, function() {return '\t';}).join('');
          if (Workout.find({parent: obj._id}).count() > 0) {
            return (indent + obj.name + '\n' + 
              buildText(Workout.find({parent: obj._id}, 
                                     {sort: {order: 1}}).fetch()));
          }
          return (indent + obj.name + '\n');
          
        })
        .value().join('');
    }

    var textDesc = buildText(Workout.find({parent: rootId}, 
                                          {sort: {order: 1}}).fetch());
    
    // Add gym, name, and depth array to root
    var workoutName = $('#workoutName').val();
    var gymName = $('#gymName').val();
    Workout.update({_id: rootId}, {$set: {name: workoutName,
                                           gym: gymName,
                                           date: new Date(),
                                           depth: depth,
                                           text: textDesc }});

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
      Workout.remove({}); // On success clear workout
    });
    
  }
});
