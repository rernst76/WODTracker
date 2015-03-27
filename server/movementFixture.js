if (Movements.find().count() === 0) {
  Movements.insert({
    name: 'Back Squat',
    field1: {
      label: 'Reps',
      type: 'text',
      value: ''
    },
    field2: {
      label: 'Weight',
      type: 'text',
      value: ''
    }
  });
  
  Movements.insert({
    name: 'Front Squat',
    field1: {
      label: 'Reps',
      type: 'text',
      value: ''
    },
    field2: {
      label: 'Weight',
      type: 'text',
      value: ''
    }
  });
  
  Movements.insert({
    name: 'Pull-Ups',
    field1: {
      label: 'Reps',
      type: 'text',
      value: ''
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
        ],
      value: ''
    }
  });
  
  Movements.insert({
    name: 'Push-Ups',
    field1: {
      label: 'Reps',
      type: 'text',
      value: ''
    },
    field2: {
      label: 'Scale',
      type: 'select',
      options: [
        'Box',
        'Racked Bar'
        ],
      value: ''
    }
  });
  
  Movements.insert({
    name: 'Kettle Bell Swings',
    field1: {
      label: 'Reps',
      type: 'text',
      value: ''
    },
    field2: {
      label: 'Weight',
      type: 'text',
      value: ''
    }
  });
  
    Movements.insert({
    name: 'Thrusters',
    field1: {
      label: 'Reps',
      type: 'text',
      value: ''
    },
    field2: {
      label: 'Weight',
      type: 'text',
      value: ''
    }
  });
}