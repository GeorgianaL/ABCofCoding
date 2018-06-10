export const helpers = {
  'en': [
    {
      name: 'Level 1',
      description: 'Drag and drop the blocks from the left side to print a hello message!',
      learn: [],
      code: "window.alert('Hello');",
    },
    {
      name: 'Level 2',
      description: 'Create a circle with radius 100 and color purple.',
      learn: ['variables'],
      code: `
          const color = purple;
          const radius = 100;
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
      description: 'Selectează blocurile de cod aflate în partea stânga pentru a afișa un mesaj de salut.',
      learn: [],
      code: "window.alert('Hello');",
    },
    {
      name: 'Nivelul 2',
      description: 'Creează un cerc cu raza 100 și culoarea mov. Redenumește variabilele adăugate apăsând click-dreapta pe blocul corespunzător.',
      learn: ['variables'],
      code: `
          const color = purple;
          const radius = 100;
        `,
    },
    {
      name: 'Nivelul 3',
      description: 'Ajută iepurașul să urmărească traseul conturat. Crează o listă de care să atașezi acțiunile corecte pentru a ajunge la destinație.',
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
      description: 'Ajută iepurașul să urmărească traseul conturat. Pentru că repetiția este de evitat în programare, folosește o structură de tip "buclă"/"loop".',
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
      description: 'Ajută ariciul să urmărească traseul conturat și să ajungă la destinație. Fii atent la cactuși. Evită-i folosind structuri de tip "dacă"/"if".',
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
// const code = "var x, count, flowersToPick, i;\n\n/**\n * Describe this function...\n */\nfunction pick_flowers(x) {\n  flowersToPick = 0;\n  if (x % 2 == 0) {\n    flowersToPick = x - 1;\n  }\n  return flowersToPick;\n}\n\n\ncount = 0;\nvar i_list = [3, 4, 6];\nfor (var i_index in i_list) {\n  i = i_list[i_index];\n  window.alert('walk 1 space');\n  count = 'pick_flowers(x)';\n  window.alert('walk 1 space');\n  window.alert('turn left');\n}\n";
    {
      name: 'Nivelul 6',
      description: `Definește o funcție, pick_flowers, care verifică dacă numărul florilor este par și culege-le pe toate mai puțin una. Dacă numărul este impar nu culege nici o floare.
        Ajută ariciul să urmărească traseul conturat și să culeagă florile, utilizând funcția definită mai sus.`,
      learn: ['loops', 'conditionals', 'functions'],
      code: `
        const code = "var x, count, flowersToPick, i;
        function pick_flowers(x) {
          flowersToPick = 0;
          if (x % 2 == 0) {
            flowersToPick = x - 1;
          }
        return flowersToPick;
        }
        count = 0;
        var i_list = [3, 4, 6];
        for (var i_index in i_list) {
          i = i_list[i_index];
          walk_1_space();
          count = 'pick_flowers(x)';
          walk_1_space();
          turn_left();
        `,
    },
  ]
};
