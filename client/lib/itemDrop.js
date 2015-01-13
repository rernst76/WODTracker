itemDrop = function(e) {
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
      // Check if the dropped item already exists in this parent, return if so
      if (this._id === dragObject.parent)
        return false;
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