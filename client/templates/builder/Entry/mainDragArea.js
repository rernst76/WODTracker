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
    // Stop bubbling
    e.stopPropagation();
    // Prevent default if this is a valid drop area and not itself
    var dragObject = Session.get("dragObject");
    if(dragObject._id !== this._id)
      e.preventDefault();
  },
  'drop': function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("drop into:");
    console.log(this);
    
    // Get object and type being dragged from Session
    var dragObject = Session.get("dragObject");
    var dragObjectType = Session.get("dragObjectType");
    
    // Return if this isn't a valid drag
    if (dragObject === null || dragObjectType === null)
      return false;
    
    // Get rootId
    var rootId = Session.get("rootId");
    
    // Add relevant data to document then add to Workout collection
    if (dragObjectType === 'movement') {
      Workout.insert({
        name: dragObject.name,
        itemType: "entryMovement",
        field1: dragObject.field1,
        field2: dragObject.field2,
        parent: rootId
      });
    }else if (dragObjectType === 'container') {
      Workout.insert({
        name: dragObject.name,
        itemType: "entryContainer",
        field: dragObject.field,
        parent: rootId
      });   
    } else if (dragObjectType === 'entryMv') {
      Workout.update(dragObject, {$set: {parent: rootId}});
    }
    // Clear DnD Session variables
    Session.set("dragObject", null);
    Session.set("dragObjectType", null);
  }
});