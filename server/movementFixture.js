if (Movements.find().count() === 0) {
  Movements.insert({
    name: 'Back Squat',
    field1: {
      label: 'Reps',
      type: 'text'
    },
    field2: {
      label: 'Weight',
      type: 'text'
    }
  });
  
  Movements.insert({
    name: 'Front Squat',
    field1: {
      label: 'Reps',
      type: 'text'
    },
    field2: {
      label: 'Weight',
      type: 'text'
    }
  });
  
  Movements.insert({
    name: 'Pull-Ups',
    field1: {
      label: 'Reps',
      type: 'text'
    },
    field2: {
      label: 'Scale',
      type: 'select',
      options: [
        'Butterfly',
        'Kipping',
        'Strict',
        'Black Band',
        'Green Band',
        'Blue Band',
        'Red Band',
        'Purple Band',
        'Negatives',
        'Jumping'
        ]
    }
  });
  
  Movements.insert({
    name: 'Push-Ups',
    field1: {
      label: 'Reps',
      type: 'text'
    },
    field2: {
      label: 'Scale',
      type: 'select',
      options: [
        'Box',
        'Racked Bar'
        ]
    }
  });
  
  Movements.insert({
    name: 'Kettle Bell Swings',
    field1: {
      label: 'Reps',
      type: 'text'
    },
    field2: {
      label: 'Weight',
      type: 'text'
    }
  });
  
    Movements.insert({
    name: 'Thrusters',
    field1: {
      label: 'Reps',
      type: 'text'
    },
    field2: {
      label: 'Weight',
      type: 'text'
    }
  });
}