if (Containers.find().count() === 0) {
  Containers.insert({
    type: 'time',
    name: 'AMRAP (Rounds)',
    field1: {
      label: 'Time',
      type: 'text',
      placeholder: 'Time in minutes',
      value: ''
    },
  });
  
  Containers.insert({
    type: 'time',
    name: 'AMRAP (Reps)',
    field1: {
      label: 'Time',
      type: 'text',
      placeholder: 'Time in minutes',
      value: ''
    },
  });
  
  Containers.insert({
    type: 'time',
    name: 'EMOM',
    field1: {
      label: 'Time',
      type: 'text',
      placeholder: 'Time in minutes',
      value: ''
    },
  });
  
  Containers.insert({
    type: 'repRound',
    name: 'Rounds for Time',
    field1: {
      label: 'Number of Rounds',
      type: 'number',
      placeholder: 'Number of Rounds',
      value: ''
    },
  });
  
  Containers.insert({
    type: 'repRound',
    name: 'Rep Scheme',
    field1: {
      label: 'Rep Scheme',
      type: 'text',
      placeholder: 'ex: 21/15/9',
      value: ''
    },
  });
  
  Containers.insert({
    type: 'misc',
    name: 'Sub-Workout',
    field1: {
      label: 'Part Name',
      type: 'text',
      placeholder: 'ex: Part A',
      value: ''
    },
  });
  
  Containers.insert({
    type: 'misc',
    name: 'Chipper',
    field1: {
      label: 'Name (optional)',
      type: 'text',
      placeholder: 'Name',
      value: ''
    },
  });
  
  Containers.insert({
    type: 'misc',
    name: 'Ladder',
    field1: {
      label: 'Start/End/Increment',
      type: 'text',
      placeholder: 'ex: 10/1/-1',
      value: ''
    },
  });
  
}