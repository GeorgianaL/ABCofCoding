export default {
  level1: {
    actionsEn: ['hi', 'hello', 'hey'],
    actionsRo: ['salut'],
  },
  level2: {
    actionsEn: [
      ['var width, color;', 'width = 100;', "color = '#ff0000';"],
      ['var color, width;', "color = '#ff0000';", 'width = 100;'],
    ],
    actionsRo: [
      ['var culoare, latura;', "culoare = '#ff0000';", 'latura = 100;'],
      ['var latura, culoare;', "latura = 100;", "culoare = '#ff0000';"],
    ],
  },
  level3: {
    actionsEn: ['walk 3 spaces', 'turn left', 'walk 3 spaces'],
    actionsRo: ['mergi 3 spatii', 'intoarce-te la stanga', 'mergi 3 spatii'],
  },
  level4: {
    statement: 'for',
    repeatTimes: 3,
    actionsEn: ['walk 2 spaces', 'turn left', 'walk 2 space', 'turn right'],
    actionsRo: ['mergi 2 spatii', 'intoarce-te la stanga', 'mergi 1 spatiu', 'intoarce-te la dreapta'],
  },
  level5: {
    statements: ['for', 'if'],
    repeatTimes: 2,
    actionsEn: [
      'walk 1 space',
      'turn right',
      'walk 1 space',
      'turn left',
      'walk 1 space',
      'enter the barn',
    ],
    actionsRo: [
      'mergi 1 spatiu',
      'intoarce-te la dreapta',
      'mergi 1 spatiu',
      'intoarce-te la stanga',
      'mergi 1 spatiu',
      'mergi la hambar',
    ],
  },
  level6: {
    statements: ['function', 'if', 'for'],
    repeatTimes: 3,
    functionActios: [
      'flowersToCollect = 0;',
      'if (flowersNumber % 2 == 0) {',
      'flowersToCollect = flowersNumber - 1;',
      'return flowersToCollect',
    ],
    actions: [
      'walk 1 space',
      'pick flowers'
    ],
  },
};
