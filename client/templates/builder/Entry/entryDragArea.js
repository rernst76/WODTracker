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
    
    var count = Workout.find({parent: this._id}).count();
    // Add relevant data to document then add to Workout collection
    if (dragObjectType === 'movement') {
      Workout.insert({
        name: dragObject.name,
        itemType: "entryMovement",
        field1: dragObject.field1,
        field2: dragObject.field2,
        order: count,
        parent: this._id
      });
    }else if (dragObjectType === 'container') {
      Workout.insert({
        name: dragObject.name,
        itemType: "entryContainer",
        field: dragObject.field,
        order: count,
        parent: this._id
      });   
    } else if (dragObjectType === 'entryMv') {
      Workout.update(dragObject, {$set: {parent: this._id}});
    }
    
    // Clear DnD Session variables
    Session.set("dragObject", null);
    Session.set("dragObjectType", null);
  }
});