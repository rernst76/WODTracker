/*global itemDrop*/

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
    var dragObject = Session.get("dragObject");
    // Prevent default if this is a valid drop area and not itself
    if(dragObject._id !== this._id){
      e.preventDefault();
    }
  },
  // Handle click to move movement up in list, decrement order val
  'click .moveUp': function() {
    // Make sure this.order is not already at 0
    if(this.order <= 0){
      return false;
    }
      
    // Swap order with item above
    Workout.update({parent: this.parent, order: this.order - 1},
      {$set: {order: this.order}}
    );
    // decrement this order
    Workout.update(this, {$set: {order: this.order - 1}});
  },
  // Handle click to move movement down in list, increment order val
  'click .moveDown': function() {
    // Make sure this.order is not already at count()-1
    if(this.order >= Workout.find({parent: this.parent}).count() - 1){
      return false;
    }
      
    // Swap order with item below
    Workout.update({parent: this.parent, order: this.order + 1},
      {$set: {order: this.order}}
    );
    // increment this order
    Workout.update(this, {$set: {order: this.order + 1}});
  },
  'drop': itemDrop
});