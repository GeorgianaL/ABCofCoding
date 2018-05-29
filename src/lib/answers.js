export default {
  level1: {
    actionsEn: ['hi', 'hello', 'hey'],
    actionsRo: ['salut'],
  },
  level2: {
    actionsEn: [
      ['var radius, color;', 'radius = 100;', "color = '#663366';"],
      ['var color, radius;', "color = '#663366';", 'radius = 100;'],
    ],
    actionsRo: [
      ['var culoare, raza;', "culoare = '#663366';", 'raza = 100;'],
      ['var raza, culoare;', "raza = 100;", "culoare = '#663366';"],
    ],
  },
  level3: {
    actionsEn: ['walk 3 spaces', 'turn left', 'walk 3 spaces'],
    actionsRo: ['mergi 3 spatii', 'intoarce-te la stanga', 'mergi 3 spatii'],
  },
  level4: {
    statement: 'for',
    repeatTimes: 3,
    actionsEn: ['walk 1 space', 'turn left', 'walk 1 space', 'turn right'],
    actionsRo: ['mergi 1 spatiu', 'intoarce-te la stanga', 'mergi 1 spatiu', 'intoarce-te la dreapta'],
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
      'intra in hambar',
    ],
  },
  level6: {
    statements: ['function', 'if', 'for'],
    repeatTimes: 3,
    actionsEn: [
      "function pick_flowers(x)",
      "if (x % 2 == 0)",
      "x - 1",
      " return ",
      "var i_list = [3, 4, 6]",
      "for (var i_index in i_list)",
      "walk 1 space",
      "pick_flowers(x)",
      "walk 1 space",
      "turn left",
    ],
    actionsRo: [
      "function pick_flowers(x)",
      "if (x % 2 == 0)",
      "x - 1",
      " return ",
      "var i_list = [3, 4, 6]",
      "for (var i_index in i_list)",
      "mergi 1 spatiu",
      "pick_flowers(x)",
      "mergi 1 spatiu",
      "intoarce-te la stanga",
    ],
  },
};
