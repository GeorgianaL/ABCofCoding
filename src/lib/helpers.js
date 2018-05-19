export const helpers = [
  {
    name: 'Level 1',
    description: 'Drag and drop the blocks from the left side to print a hello message!',
    learn: ['variables'],
    code: "window.alert('Hello');",
  },
  {
    name: 'Level 2',
    description: 'Create a square with the width 100 and the color red.',
    learn: ['variables'],
    code: `
        const color = red;
        const width = 100;
      `,
  },
  {
    name: 'Level 3',
    description: 'Help the rabbit follow the path to reach the destination. Create a list and attach the right actions to it.',
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
    name: 'Level 4',
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
    name: 'Level 5',
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
  },
  // "var count, flowersToCollect, flowersNumber;\n\n
  // /**\n * Describe this function...\n */\n
  // function pick_flowers() {\n
  //   flowersToCollect = 0;\n
  //   if (flowersNumber % 2 == 0) {\n
  //     flowersToCollect = flowersNumber - 1;\n
  //   }\n
  //   return flowersToCollect;\n}\n\n\n
  //
  //   count = 0;\n
  //   for (var count2 = 0; count2 < 3; count2++) {\n
  //     window.alert('walk 1 space');\n
  //     count = 'pick flowers';\n
  //   }\n"
  {
    name: 'Level 6',
    description: `Lets pick some flowers! Define a function, pick_flowers, which checks if there is an even number of flowers and pick one flower if so.
      Help the hedgehog follow the path and use the function above to collect some flowers.`,
    learn: ['loops', 'conditionals', 'sequences', 'functions'],
    code: `
      for (let i = 0; i < 3; i += 1) {
          walk_1_space();
          pick_flowers();
          walk_1_space();
          turn_left();
        }
      `,
  },
];
