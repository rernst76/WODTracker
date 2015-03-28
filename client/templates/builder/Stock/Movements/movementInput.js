Template.movementInput.helpers({
   isSelect: function(fieldType) {
       return (fieldType === "select");
   } 
});

Template.movementInput.events({
	'blur .dropped input,select': function(){
		console.log("caught input change!")
	}
});