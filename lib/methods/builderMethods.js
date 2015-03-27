/*
global Workouts
 */
Meteor.methods({
	insertWorkout: function(workoutArr, rootId) {
		check(workoutArr,[Match.Any]);
		// Make sure user is logged in
		if (!this.userId) {
			throw new Meteor.Error("not-authorized", 
				"Must be logged in to save workout.");
		}
		// Make sure workout is realistic
		if (workoutArr.length < 3) {
			throw new Meteor.Error("incomplete-workout", 
				"Workout is invalid.");
		}

		// Extract the root workout object
		var rootObj = _(workoutArr).find(function(obj) {
			return obj._id === rootId;
		});

		// Remove root workout object from array
		workoutArr = _(workoutArr).reject(function(obj) {
			return obj === rootObj;
		});

		// Add user and date fields to root workout object
		rootObj = _(rootObj).extend({
			author: Meteor.user().username,
			authorId: this.userId,
			date: new Date()
		});

		workoutArr.push(rootObj);
		_.each(workoutArr, function(obj){
			Workouts.insert(obj);
		});
	}
});