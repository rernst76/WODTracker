Template.mainDragArea.helpers({
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

Template.mainDragArea.events({
  'dragenter': function(e, temp) {
    // Prevent default event handling and stop bubbling
    e.stopPropagation();
    e.preventDefault();
  },
  'dragover': function(e) {
    // Prevent default event handling and stop bubbling
    e.stopPropagation();
    e.preventDefault();
  },
  'drop': function(e) {
    
  }
});