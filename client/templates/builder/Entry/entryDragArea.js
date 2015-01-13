Template.entryDragArea.helpers({
  item: function() {
    // Return cursor first level nodes
    return Workout.find({parent: this._id}, {sort: {order: 1}});
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
    // stop bubbling
    e.stopPropagation();
    var dragObject = Session.get("dragObject");
    // Prevent default if this is a valid drop area and not itself
    if(dragObject._id !== this._id)
      e.preventDefault();
  },
  'drop': itemDrop
});