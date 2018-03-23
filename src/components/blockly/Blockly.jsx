import React from 'react';
import PropTypes from 'prop-types';

import ReactBlocklyComponent from './ReactBlocklyComponent.js';

import './blockly.scss';

const INITIAL_TOOLBOX_CATEGORIES = [
  {
    name: 'Hello',
    type: 'text',
    blocks: [
      { type: 'text',
        fields: {
          TEXT: 'Start game!',
        },
      },
      { type: 'text_print' },
    ],
  },
];

class BlocklyWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'toolboxCategories': INITIAL_TOOLBOX_CATEGORIES,
      'code': '',
    };

    this.workspaceDidChange = this.workspaceDidChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.startGame !== nextProps.startGame) {
      this.props.getPlayerCode(this.state.code);
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
