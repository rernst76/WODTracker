Template.entry.helpers({
  item: function() {
    // Return cursor first level nodes
    var rootId = Session.get("rootId");
    return Workout.find({parent: rootId});
  },
  
  itemType: function() {
    return this.itemType;
  },
  
  hasChild: function() {
    var rootId = Session.get("rootId");
    return !!Workout.find({parent: rootId}).count();
  }
});