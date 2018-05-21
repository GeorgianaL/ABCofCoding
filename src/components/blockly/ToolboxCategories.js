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
                  TEXT: 'walk 2 spaces',
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
            type: 'text',
              fields: {
                TEXT: 'pick flowers',
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
          name: 'Hello',
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
                TEXT: 'mergi 3 spatii',
              },
            },
            {
              type: "text",
              fields: {
                TEXT: 'intoarce-te la stanga',
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
                    TEXT: 'mergi 2 spatii',
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
                    TEXT: 'mergi 1 spatiu',
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
                    TEXT: 'intoarce-te la stanga',
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
                    TEXT: 'intoarce-te la dreapta',
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
                    TEXT: 'mergi 1 spatiu',
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
                    TEXT: 'intoarce-te la stanga',
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
                    TEXT: 'intoarce-te la dreapta',
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
                    TEXT: 'intra in hambar',
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
                    TEXT: 'mergi 1 spatiu',
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
                    TEXT: 'intoarce-te la stanga',
                  },
                },
              },
            },
            {
              type: 'text',
                fields: {
                  TEXT: 'culege flori',
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
};
