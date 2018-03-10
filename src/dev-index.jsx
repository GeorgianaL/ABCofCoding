/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactBlocklyComponent from './components/ReactBlocklyComponent.js';

const INITIAL_TOOLBOX_CATEGORIES = [
  {
    name: 'Logic',
    type: 'logic',
    blocks: [
      { type: 'controls_if' },
    ],
  },
  {
    name: 'Loops',
    type: 'loop',
    blocks: [
      {
        type: 'controls_repeat_ext',
        values: {
          TIMES: {
            type: 'math_number',
            shadow: true,
            fields: {
              NUM: 5,
            },
          },
        },
        statements: {
          DO: {
            type: 'text_print',
            shadow: false,
            values: {
              TEXT: {
                type: 'text',
                shadow: true,
                fields: {
                  TEXT: 'Start game!',
                },
              },
            },
          },
        },
      },
    ]
  },
  {
    name: 'Text',
    type: 'text',
    blocks: [
      { type: 'text' },
      {
        type: 'text_print',
        values: {
          TEXT: {
            type: 'text',
            shadow: true,
            fields: {
              TEXT: 'abc',
            },
          },
        },
      },
    ],
  },
];

class TestEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolboxCategories: INITIAL_TOOLBOX_CATEGORIES,
    };
  }

  // componentWillMount = () => {
  //   window.setTimeout(() => {
  //     this.setState({
  //       toolboxCategories: this.state.toolboxCategories.concat([
  //         {
  //           custom: 'action',
  //           name: 'Actions',
  //           type: 'Text',
  //           message0: "move %1 %2 space",
  //           blocks: [
  //             {
  //               name: 'moveOptions',
  //               type: 'field_dropdown',
  //               options: [
  //                 [
  //                   "forward",
  //                   "moveForward"
  //                 ],
  //                 [
  //                   "backward",
  //                   "moveBackward"
  //                 ]
  //               ]
  //             },
  //             {
  //               "type": "field_number",
  //               "name": "spacesToMove",
  //               "value": 1,
  //               "min": 0,
  //               "max": 20,
  //               "precision": 1
  //             }
  //           ],
  //         },
  //       ]),
  //     });
  //   }, 2000);
  // }

  workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code;
  }

  render = () => (
    <ReactBlocklyComponent.BlocklyEditor
      toolboxCategories={this.state.toolboxCategories}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
      }}
      wrapperDivClassName="fill-height"
      workspaceDidChange={this.workspaceDidChange}
    />
  )
}

window.addEventListener('load', () => {
  const editor = React.createElement(TestEditor);
  ReactDOM.render(editor, document.getElementById('blockly'));
});
