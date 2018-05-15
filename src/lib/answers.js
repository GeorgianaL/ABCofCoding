export default {
  level1: {
    actions: ['hi', 'hello', 'hey'],
  },
  level2: {
    actions: [
      ['var width, color;', 'width = 100;', "color = '#ff0000';"],
      ['var color, width;', "color = '#ff0000';", 'width = 100;'],
    ],
  },
  level3: {
    actions: ['walk 3 spaces', 'turn left', 'walk 3 spaces'],
  },
  level4: {
    statement: 'for',
    repeatTimes: 3,
    actions: ['walk 2 spaces', 'turn left', 'walk 1 space', 'turn right'],
  },
  level5: {
    statements: ['for', 'if'],
    repeatTimes: 2,
    actions: [
      'walk 1 space',
      'turn right',
      'walk 1 space',
      'turn left',
      'walk 1 space',
      'enter the barn',
    ],
  },
};
