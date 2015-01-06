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
  'drop': function(e) {
    // Remove dragObject, reset Session variables
    Workout.remove(Session.get("dragObject"));
    Session.set("dragObject", null);
    Session.set("dragOvjectType", null);
  }
});