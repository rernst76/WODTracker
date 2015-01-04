Template.entryDragArea.helpers({
  item: function() {
    // Return cursor first level nodes
    return Workout.find({parent: this._id});
  },
  
  itemType: function() {
    return this.itemType;
  },
  
  hasChild: function() {
    return !!Workout.find({parent: this._id}).count();
  }
});

Template.entryDragArea.events({
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