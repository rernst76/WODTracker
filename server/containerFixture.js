if (Containers.find().count() === 0) {
  Containers.insert({
    type: 'time',
    name: 'AMRAP (Rounds)',
    field: {
      label: 'Time',
      type: 'text',
      placeholder: 'Time in minutes'
    },
  });
  
  Containers.insert({
    type: 'time',
    name: 'AMRAP (Reps)',
    field: {
      label: 'Time',
      type: 'text',
      placeholder: 'Time in minutes'
    },
  });
  
  Containers.insert({
    type: 'time',
    name: 'EMOM',
    field: {
      label: 'Time',
      type: 'text',
      placeholder: 'Time in minutes'
    },
  });
  
  Containers.insert({
    type: 'repRound',
    name: 'Rounds for Time',
    field: {
      label: 'Number of Rounds',
      type: 'number',
      placeholder: 'Number of Rounds'
    },
  });
  
  Containers.insert({
    type: 'repRound',
    name: 'Rep Scheme',
    field: {
      label: 'Rep Scheme',
      type: 'text',
      placeholder: 'ex: 21/15/9'
    },
  });
  
  Containers.insert({
    type: 'misc',
    name: 'Sub-Workout',
    field: {
      label: 'Part Name',
      type: 'text',
      placeholder: 'ex: Part A'
    },
  });
  
  Containers.insert({
    type: 'misc',
    name: 'Chipper',
    field: {
      label: '',
      type: '',
      placeholder: ''
    },
  });
  
  Containers.insert({
    type: 'misc',
    name: 'Ladder',
    field: {
      label: 'Start/End/Increment',
      type: 'text',
      placeholder: 'ex: 10/1/-1'
    },
  });
  
}