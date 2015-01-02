Meteor.startup(function() {
  // Create local collection to store workout being built
  Workout = new Mongo.Collection(null);
});