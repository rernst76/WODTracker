Template.entryContainer.events({
  'dragstart': function(e) {
    e.stopPropagation();
    // Set effectAllowed so we can drop it
    e.originalEvent.dataTransfer.effectAllowed = 'all';
    
    // Store object being dragged and type in Session
    Session.set("dragObject", this);
    Session.set("dragObjectType", "entryMv");
  },
  // Stop propogation, don't handle default.
  'dragover': function(e) {
    e.stopPropagation();
  },
  // Handle click to move movement up in list, decrement order val
  'click .moveUp': function(e) {
    // Make sure this.order is not already at 0
    if(this.order <= 0)
      return false
      
    // Swap order with item above
    Workout.update({parent: this.parent, order: this.order - 1},
      {$set: {order: this.order}}
    );
    // decrement this order
    Workout.update(this, {$set: {order: this.order - 1}});
  },
  // Handle click to move movement down in list, increment order val
  'click .moveDown': function(e) {
    // Make sure this.order is not already at count()-1
    if(this.order >= Workout.find({parent: this.parent}).count() - 1)
      return false
      
    // Swap order with item below
    Workout.update({parent: this.parent, order: this.order + 1},
      {$set: {order: this.order}}
    );
    // increment this order
    Workout.update(this, {$set: {order: this.order + 1}});
  },
  'drop': function(e) {
    e.preventDefault();
    e.stopPropagation();
    
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
      // Update order values of sibling elements
      Workout.update(
        // Get siblings with order greater than the dragged objects order
      {
        parent: dragObject.parent,
        order: {$gt: dragObject.order}
      },
        // Decrement any siblings we get from preceeding query
      {$inc: {order: -1}},
        // Allow multiple documents to be updated
      {multi: true}
      );
      
      // Update parent to move object
      Workout.update(dragObject, {$set: {parent: this._id, order: count}});
    }
    
    // Clear DnD Session variables
    Session.set("dragObject", null);
    Session.set("dragObjectType", null);
  }
});