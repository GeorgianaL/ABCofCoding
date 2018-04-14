import React from 'react';
import PropTypes from 'prop-types';

import ReactBlocklyComponent from './ReactBlocklyComponent.js';

import './blockly.scss';

const TOOLBOX_CATEGORIES = [
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
  ]
];

class BlocklyWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'toolboxCategories': TOOLBOX_CATEGORIES[1],
      'code': '',
    };

    this.workspaceDidChange = this.workspaceDidChange.bind(this);
    this.changeToolboxCategories = this.changeToolboxCategories.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.startGame !== nextProps.startGame) {
      this.props.getPlayerCode(this.state.code);
    }
    if (this.props.levelActive !== nextProps.levelActive) {
      this.changeToolboxCategories(nextProps.levelActive);
    }
  }

  workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);

    setTimeout(() => {
      if (typeof code === 'string') {
        this.setState({code});
      }
    }, 1000);
  }

  changeToolboxCategories(level) {
    this.setState({
      'toolboxCategories': TOOLBOX_CATEGORIES[level - 1],
    });
  }

  render() {
    return (
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
          levelActive={this.props.levelActive}
        />
    );
  }
}

BlocklyWrapper.displayName = 'BlocklyWrapper';
BlocklyWrapper.propTypes = {
  'startGame': PropTypes.bool,
  'getPlayerCode': PropTypes.func,
  'levelActive': PropTypes.number,
};
BlocklyWrapper.defaultProps = {
  'startGame': false,
  'getPlayerCode': () => null,
  'levelActive': 1,
};

export default BlocklyWrapper;
