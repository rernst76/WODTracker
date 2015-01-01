Template.builder.helpers({
  timeContainer: function() {
    return Containers.find({type: 'time'});
  },
  repRoundContainer: function() {
    return Containers.find({type: 'repRound'});
  },
  miscContainer: function() {
    return Containers.find({type: 'misc'});
  }
});