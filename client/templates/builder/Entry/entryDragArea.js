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
    e.preventDefault();
    e.stopPropagation();
    
    // Get object and type being dragged from Session
    var dragObject = Session.get("dragObject");
    var dragObjectType = Session.get("dragObjectType");
    
    // Add relevant data to document then add to Workout collection
    if (dragObjectType === 'movement') {
      Workout.insert({
        name: dragObject.name,
        itemType: "entryMovement",
        field1: dragObject.field1,
        field2: dragObject.field2,
        parent: this._id
      });
    }else if (dragObjectType === 'container') {
      Workout.insert({
        name: dragObject.name,
        itemType: "entryContainer",
        field: dragObject.field,
        parent: this._id
      });   
    }
  }
});