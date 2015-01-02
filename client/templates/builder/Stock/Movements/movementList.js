Template.movementList.helpers({
  movement: function() {
    // Find all movements
    return Movements.find({});
  }
});

Template.movementList.events({
  "keyup #movementFilter": function(e, template) {
    var $listItems = $('#movementList li');
    var re = new RegExp($(e.target).val(), "i"); // "i" means it's case-insensitive
    $listItems.show().filter(function() {
      return !re.test($(this).find('p').text());
    }).hide();
  }
});