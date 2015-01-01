Template.movementList.helpers({
  movement: function() {
    // Find all movements
    return Movements.find({});
  }
});