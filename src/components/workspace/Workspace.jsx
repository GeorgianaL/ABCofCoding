import React from 'react';
import PropTypes from 'prop-types';

import BlocklyWrapper from '../blockly/Blockly.jsx';
import Button from '../button/Button.jsx';

import Level1 from './components/Level1.jsx';

import './workspace.scss';

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'code': '',
      'startGame': false,
      // 'answerIsCorrect': false,
    }

    this.setPlayerCode = this.setPlayerCode.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  shouldComponentUpdate(nextState) {
    if (this.state.code !== nextState.code) {
      return true;
    }
    return false;
  }

  setPlayerCode(generatedCode) {
    this.setState({
      'code': generatedCode,
    });
  }

  setStartGame(hasStart) {
    this.setState({
      'startGame': hasStart,
    });
    // }, () => {
    //   const check = this.checkAnswer(this.state.code);
    //   this.setState({
    //     'answerIsCorrect': check,
    //   });
    // });
  }

  checkAnswer(code) {
    if (typeof code === 'string') {
      return true;
    }
    return false;
  }

  playGame(startGame, nextLevel = false) {
    this.setStartGame(startGame);
    if (nextLevel) {
      this.props.nextLevel();
    }
  }

  render() {
    const { startGame, code } = this.state;
    const answerIsCorrect = this.checkAnswer(code);
    console.log(this.state, answerIsCorrect);
    let button;
    if (startGame) {
      if (answerIsCorrect) {
        button = <Button
            className="button button--next"
            onClick={() => this.playGame(false, true)}
        >Next Level</Button>;
      }
      button =<Button
          className="button button--retry"
          onClick={() => this.playGame(false)}
      >Retry</Button>;
    } else {
      button =<Button
          className="button button--start"
          onClick={() => this.playGame(true)}
      >Start</Button>;
    }

    return (
      <div className="blockly">
        <BlocklyWrapper
          startGame={this.state.startGame}
          getPlayerCode={this.setPlayerCode}
        />
        <div className="playground">
          <div className="visualization">
            <Level1
              startGame={startGame}
              playerCode={code}
            />
          </div>
          <div className="control">
              {button}
          </div>
        </div>
      </div>
    );
  }
}

Workspace.displayName = 'Workspace';
Workspace.propTypes = {
  'levelActive': PropTypes.number,
  'nextLevel': PropTypes.func,
};
Workspace.defaultProps = {
  'levelActive': 1,
  'nextLevel': () => null,
};

export default Workspace;
