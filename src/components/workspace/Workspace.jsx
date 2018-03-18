import React from 'react';
import PropTypes from 'prop-types';

import BlocklyWrapper from '../blockly/Blockly.jsx';
import Playground from '../playground/Playground.jsx';

import './workspace.scss';

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'code': '',
    }

    this.setPlayerCode = this.setPlayerCode.bind(this);
  }

  setPlayerCode(generatedCode) {
    this.setState({
      'code': generatedCode,
    });
  }

  render() {
    return (
      <div className="blockly">
        <BlocklyWrapper
          getPlayerCode={this.setPlayerCode}
        />
        <Playground
          playerCode={this.state.code}
        />
      </div>
    );
  }
}

export default Workspace;
