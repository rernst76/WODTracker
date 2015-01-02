Template.entryContainer.helpers({
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