Template.movementItem.events({
  'dragstart': function(e) {
    // Set effectAllowed so we can drop it
    e.originalEvent.dataTransfer.effectAllowed = 'all';
    
    // Store object being dragged and type in Session
    Session.set("dragObject", this);
    Session.set("dragObjectType", "movement");
  }
});