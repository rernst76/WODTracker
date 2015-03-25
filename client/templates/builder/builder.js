/* global Workout:true */

Template.builder.created = function() {
  // Create local collection to store workout being built
  Workout = new Mongo.Collection(null);
  
  // Insert empty workout into local collection
  var id = Workout.insert({
    name: "workout", // Eventually allow user to set name
    date: Date(),
    gym: "Crossfit Saol", // Eventually allow user to set gym
    parent: "none"
  });
  
  console.log(id);
  
  // Store workout id in Session as workout root
  Session.set("rootId", id);
};