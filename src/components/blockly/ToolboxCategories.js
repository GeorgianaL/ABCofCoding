export default {
  'en': [
    [
      {
        name: 'Hello',
        type: 'text',
        blocks: [
          { type: 'text',
            fields: {
              TEXT: 'Hello',
            },
          },
          { type: 'text_print' },
        ],
      },
    ],
    [
      {
        name: 'Variables',
        type: 'variables',
        blocks: [
          { type: 'variables_set' },
        ],
      },
      {
        name: 'Color',
        type: 'colour_picker',
        blocks: [
          {
            type: 'colour_picker',
            colour: 'ff0000',
          },
        ],
      },
      {
        name: 'Math',
        type: 'math_number',
        blocks: [
          {
            type: 'math_number',
            fields: {
              NUM: 100,
            },
          },
        ],
      },
    ],
    [
      {
        name: 'List',
        type: 'lists_create_with',
        blocks: [
          {
            type: 'lists_create_with',
          },
        ],
      },
      {
        name: 'Actions',
        type: 'procedures',
        blocks: [
          {
            type: "text",
            fields: {
              TEXT: 'walk 3 spaces',
            },
          },
          {
            type: "text",
            fields: {
              TEXT: 'turn left',
            },
          },
        ],
      }
    ],
    [
      {
        name: 'Actions',
        type: 'procedures',
        blocks: [
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'walk 1 space',
                },
              },
            },
          },
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'turn left',
                },
              },
            },
          },
          {
            type: 'text_print',
            message: 'text input: %1',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'turn right',
                },
              },
            },
          },
        ],
      },
      {
        name: 'Loop',
        type: 'loops',
        blocks: [
          {
            type: 'controls_repeat_ext',
            values: {
              TIMES: {
                type: 'math_number',
                shadow: true,
                fields: {
                  NUM: 0,
                },
              },
            },
          }
        ],
      }
    ],
    [
      {
        name: 'Actions',
        type: 'text',
        blocks: [
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'walk 1 space',
                },
              },
            },
          },
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'turn left',
                },
              },
            },
          },
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'turn right',
                },
              },
            },
          },
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'enter the barn',
                },
              },
            },
          },
        ],
      },
      {
        name: 'Loop',
        type: 'loops',
        blocks: [
          {
            type: 'controls_repeat_ext',
            values: {
              TIMES: {
                type: 'math_number',
                shadow: true,
                fields: {
                  NUM: 0,
                },
              },
            },
          }
        ],
      },
      {
        name: 'Logic',
        type: 'logic',
        blocks: [
          {
            type: 'controls_if',
            statements: {
              IF0: {
                type: 'variables_get',
                variable: 'obstacle',
              }
            }
          },
        ]
      }
    ],
    [
      {
        name: 'Actions',
        type: 'text',
        blocks: [
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'walk 1 space',
                },
              },
            },
          },
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'turn left',
                },
              },
            },
          },
          {
            type: 'text_print',
            values: {
              TEXT: {
                type: 'text',
                fields: {
                  TEXT: 'pick_flowers(i)',
                },
              },
            },
          },
        ],
      },
      {
        name: 'Variables',
        type: 'variables',
        blocks: [
          {
            type: 'variables_set',
          },
          {
            type: 'variables_get',
          }
        ],
      },
      {
        name: 'Math',
        type: 'math_number',
        blocks: [
          {
            type: 'math_number',
          },
          {
            type: 'math_arithmetic',
          },
          {
            type: 'math_number_property',
          }
        ],
      },
      {
        name: 'List',
        type: 'lists_create_with',
        blocks: [
          {
            type: 'lists_create_with',
          },
        ],
      },
      {
        name: 'Loop',
        type: 'loops',
        blocks: [
          {
            type: 'controls_forEach',
          }
        ],
      },
      {
        name: 'Logic',
        type: 'logic',
        blocks: [
          {
            type: 'controls_if',
            statements: {
              IF0: {
                type: 'variables_get',
              }
            }
          },
        ]
      },
      {
        name: 'Functions',
        type: 'procedure',
        blocks: [
          {
            type: 'procedures_defreturn',
          },
        ]
      }
    ],
  ],
  'ro': [
      [
        {
          name: 'Salut',
          type: 'text',
          blocks: [
            { type: 'text',
              fields: {
                TEXT: 'Salut',
              },
            },
            { type: 'text_print' },
          ],
        },
      ],
      [
        {
          name: 'Variabile',
          type: 'variables',
          blocks: [
            { type: 'variables_set' },
          ],
        },
        {
          name: 'Culori',
          type: 'colour_picker',
          blocks: [
            {
              type: 'colour_picker',
              colour: 'ff0000',
            },
          ],
        },
        {
          name: 'Numere',
          type: 'math_number',
          blocks: [
            {
              type: 'math_number',
              fields: {
                NUM: 100,
              },
            },
          ],
        },
      ],
      [
        {
          name: 'Listă',
          type: 'lists_create_with',
          blocks: [
            {
              type: 'lists_create_with',
            },
          ],
        },
        {
          name: 'Acțiuni',
          type: 'procedures',
          blocks: [
            {
              type: "text",
              fields: {
                TEXT: 'mergi 3 spații',
              },
            },
            {
              type: "text",
              fields: {
                TEXT: 'întoarce-te la stânga',
              },
            },
          ],
        }
      ],
      [
        {
          name: 'Acțiuni',
          type: 'procedures',
          blocks: [
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'mergi 1 spațiu',
                  },
                },
              },
            },
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'întoarce-te la stânga',
                  },
                },
              },
            },
            {
              type: 'text_print',
              message: 'text input: %1',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'întoarce-te la dreapta',
                  },
                },
              },
            },
          ],
        },
        {
          name: 'Bucle',
          type: 'loops',
          blocks: [
            {
              type: 'controls_repeat_ext',
              values: {
                TIMES: {
                  type: 'math_number',
                  shadow: true,
                  fields: {
                    NUM: 0,
                  },
                },
              },
            }
          ],
        }
      ],
      [
        {
          name: 'Acțiuni',
          type: 'text',
          blocks: [
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'mergi 1 spațiu',
                  },
                },
              },
            },
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'întoarce-te la stânga',
                  },
                },
              },
            },
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'întoarce-te la dreapta',
                  },
                },
              },
            },
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'intră în hambar',
                  },
                },
              },
            },
          ],
        },
        {
          name: 'Bucle',
          type: 'loops',
          blocks: [
            {
              type: 'controls_repeat_ext',
              values: {
                TIMES: {
                  type: 'math_number',
                  shadow: true,
                  fields: {
                    NUM: 0,
                  },
                },
              },
            }
          ],
        },
        {
          name: 'Logică',
          type: 'logic',
          blocks: [
            {
              type: 'controls_if',
              statements: {
                IF0: {
                  type: 'variables_get',
                  variable: 'obstacle',
                }
              }
            },
          ]
        }
      ],
      [
        {
          name: 'Acțiuni',
          type: 'text',
          blocks: [
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'mergi 1 spațiu',
                  },
                },
              },
            },
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'întoarce-te la stânga',
                  },
                },
              },
            },
            {
              type: 'text_print',
              values: {
                TEXT: {
                  type: 'text',
                  fields: {
                    TEXT: 'pick_flowers(i)',
                  },
                },
              },
            },
          ],
        },
        {
          name: 'Variabile',
          type: 'variables',
          blocks: [
            {
              type: 'variables_set',
            },
            {
              type: 'variables_get',
            }
          ],
        },
        {
          name: 'Numere',
          type: 'math_number',
          blocks: [
            {
              type: 'math_number',
            },
            {
              type: 'math_arithmetic',
            },
            {
              type: 'math_number_property',
            }
          ],
        },
        {
          name: 'Listă',
          type: 'lists_create_with',
          blocks: [
            {
              type: 'lists_create_with',
            },
          ],
        },
        {
          name: 'Loop',
          type: 'loops',
          blocks: [
            {
              type: 'controls_forEach',
            }
          ],
        },
        {
          name: 'Logică',
          type: 'logic',
          blocks: [
            {
              type: 'controls_if',
              statements: {
                IF0: {
                  type: 'variables_get',
                }
              }
            },
          ]
        },
        {
          name: 'Funcții',
          type: 'procedure',
          blocks: [
            {
              type: 'procedures_defreturn',
            },
          ]
        }
      ],
    ],
};
