/* global itemDrop */

Template.entryDragArea.helpers({
  item: function() {
    // Set parent ID
    var parentID = this._id || Session.get("rootId");

    // Return cursor first level nodes
    return Workout.find({parent: parentID}, {sort: {order: 1}});
  },
  
  itemType: function() {
    return this.itemType;
  },
  
  hasChild: function() {
    // Set parent ID
    var parentID = this._id || Session.get("rootId");
    return !!Workout.find({parent: parentID}).count();
  }
});

Template.entryDragArea.events({
  'dragenter': function(e) {
    // Prevent default event handling and stop bubbling
    e.stopPropagation();
    e.preventDefault();
  },
  'dragover': function(e) {
    // stop bubbling
    e.stopPropagation();
    var dragObject = Session.get("dragObject");
    // Prevent default if this is a valid drop area and not itself
    if(dragObject._id !== this._id){
      e.preventDefault();
    }
  },
  'drop': itemDrop
});