Template.entryContainerDragArea.helpers({
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

Template.entryContainerDragArea.events({
  'dragenter': function(e) {
    // Prevent default event handling and stop bubbling
    e.stopPropagation();
    e.preventDefault();
  },
  'dragover': function(e) {
    
  },
  'dragleave': function(e) {
    
  },
  'drop': function(e) {
    
  }
});