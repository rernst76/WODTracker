Template.trashBin.events({
  'dragenter': function(e) {
    // Prevent default event handling and stop bubbling
    e.stopPropagation();
    e.preventDefault();
  },
  'dragover': function(e) {
    // Prevent default event handling and stop bubbling
    e.stopPropagation();
    e.preventDefault();
  },
  'drop': function() {
    // Remove dragObject, reset Session variables
    var dragObject = Session.get("dragObject");
    Workout.remove(dragObject);
    
    // Update order values of former sibling elements
      Workout.update(
        // Get siblings with order greater than the trashed objects order
      {
        parent: dragObject.parent,
        order: {$gt: dragObject.order}
      },
        // Decrement any siblings we get from preceeding query
      {$inc: {order: -1}},
        // Allow multiple documents to be updated
      {multi: true}
      );
    Session.set("dragObject", null);
    Session.set("dragOvjectType", null);
  },
  'click #trashBin': function () {
    $('#trashModal').modal('show');
  },
  'click #deleteWorkout': function() {
    Workout.remove({_id: {$ne: Session.get('rootId')}});
  }
});