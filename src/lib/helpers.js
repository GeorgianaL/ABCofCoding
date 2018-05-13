export const helpers = [
  {
    name: 'Level 1',
    description: 'Drag and drop the blocks from the left side to print a hello message!',
    learn: ['variables'],
    code: "window.alert('Hello');",
  },
  {
    name: 'Level 2',
    description: 'Help the rabbit to follow the path to reach the destination. Create a list and attach the right actions to it.',
    learn: ['sequences', 'lists'],
    code: `
      [
        walk_3_spaces(),
        turn_left(),
        walk_3_spaces()
      ];
      `,
  },
  {
    name: 'Level 3',
    description: 'Help the rabbit cross the garden to reach the destination. Repetition is bad in coding, so you can try using repeat loop.',
    learn: ['loops', 'sequences'],
    code: `
      for (let i = 0; i < 3; i += 1) {
        walk_2_spaces();
        turn_left();
        walk_1_space();
        turn_right();
      }
      `,
  },
  {
    name: 'Level 4',
    description: 'Help the hadgehog to rich the barn. Pay attention to the cacti. You can avoid them by using an "if" statement.',
    learn: ['loops', 'conditionals', 'sequences'],
    code: `
      for (let i = 0; i < 2; i += 1) {
        walk_1_spaces();
        if (item) {
          turn_right();
          walk_1_space();
          turn_left();
        }
        walk_1_space();
        enter_the_barn();
      `,
  }
];
