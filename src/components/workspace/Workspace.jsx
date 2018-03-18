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
      'startGame': false,
    }

    this.setPlayerCode = this.setPlayerCode.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
  }

  shouldComponentUpdate(nextState) {
    if (this.state.startGame !== nextState.startGame) {
      return true;
    }
    return false;
  }

  setPlayerCode(generatedCode) {
    this.setState({
      'code': generatedCode,
    });
  }

  setStartGame(value) {
    this.setState({
      'startGame': value,
    });
  }

  render() {
    return (
      <div className="blockly">
        <BlocklyWrapper
          startGame={this.state.startGame}
          getPlayerCode={this.setPlayerCode}
        />
        <Playground
          playerCode={this.state.code}
          startGame={this.state.startGame}
          setStartGame={this.setStartGame}
        />
      </div>
    );
  }
}

export default Workspace;
