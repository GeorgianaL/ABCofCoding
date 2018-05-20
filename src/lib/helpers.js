export const helpers = {
  'en': [
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
      learn: ['lists'],
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
      learn: ['loops'],
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
      learn: ['loops', 'conditionals'],
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
      learn: ['loops', 'conditionals', 'functions'],
      code: `
        for (let i = 0; i < 3; i += 1) {
            walk_1_space();
            pick_flowers();
            walk_1_space();
            turn_left();
          }
        `,
    },
  ],
  'ro': [
    {
      name: 'Nivelul 1',
      description: 'Selecteaza blocurile de cod aflate in partea stanga pentru a afisa un mesaj de salut.',
      learn: ['variables'],
      code: "window.alert('Hello');",
    },
    {
      name: 'Nivelul 2',
      description: 'Creeaza un patrat cu latura de 100 si culoarea rosie. Redenumeste variabilele adaugate apasand click-dreapta pe blocul corespunzator.',
      learn: ['variables'],
      code: `
          const color = red;
          const width = 100;
        `,
    },
    {
      name: 'Nivelul 3',
      description: 'Ajuta iepurasul sa urmareasca traseul conturat. Creaza o lista de care sa atasezi actiunile corecte pentru a ajunge la destinatie.',
      learn: ['lists'],
      code: `
        [
          walk_3_spaces(),
          turn_left(),
          walk_3_spaces()
        ];
        `,
    },
    {
      name: 'Nivelul 4',
      description: 'Ajuta iepurasul sa urmareasca traseul conturat. Pentru ca repetitia este de evitat in programare, foloseste o structura de tip "bucla"/"loop".',
      learn: ['loops'],
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
      name: 'Nivelul 5',
      description: 'Ajuta ariciul sa urmareasca traseul conturat. Fii atent la cactusi. Evita-i folosind structuri de tip "daca"/"if".',
      learn: ['loops', 'conditionals'],
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
      name: 'Nivelul 6',
      description: `Defineste o functie, pick_flowers, care verifica daca numarul florilor este par si culege-le pe toate mai putin una. Daca numarul este impar nu culege nici o floare.
        Ajuta ariciul sa urmareasca traseul contural si sa culeaga florile, utilizand functia definita mai sus.`,
      learn: ['loops', 'conditionals', 'functions'],
      code: `
        for (let i = 0; i < 3; i += 1) {
            walk_1_space();
            pick_flowers();
            walk_1_space();
            turn_left();
          }
        `,
    },
  ]
};
