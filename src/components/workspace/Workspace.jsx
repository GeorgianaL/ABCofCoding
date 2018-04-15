import React from 'react';
import PropTypes from 'prop-types';

import BlocklyWrapper from '../blockly/Blockly.jsx';
import Button from '../button/Button.jsx';

import { isEqual } from 'lodash';

import { answers } from '../../lib/answers.js';
import { checkLevel1, checkLevel2, checkLevel3, checkLevel4 } from '../../lib/check-functions.js';

import Level1 from './components/level1/Level1.jsx';
import Level2 from './components/level2/Level2.jsx';
import Level3 from './components/level3/Level3.jsx';
import Level4 from './components/level4/Level4.jsx';

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
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  shouldComponentUpdate(nextState, nextProps) {
    if (this.state.code !== nextState.code
    || this.state.startGame !== nextState.startGame
    || this.props.levelActive !== nextProps.levelActive) {
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
  }

  checkAnswer(code, level) {
    let isCorrect = false;
    switch (level) {
      case 1:
        isCorrect = checkLevel1(code);
        break;
      case 2:
        isCorrect = checkLevel2(code);
        break;
      case 3:
        isCorrect = checkLevel3(code);
        break;
      case 4:
        isCorrect = checkLevel4(code);
        break;
      default:
        return;
    }
    return isCorrect;
  }

  playGame(startGame, nextLevel = false) {
    this.setStartGame(startGame);
    if (nextLevel) {
      this.props.nextLevel();
    }
  }

  render() {
    const { startGame, code } = this.state;
    const { levelActive } = this.props;

    let answerIsCorrect = false;
    if (code !== '') {
      answerIsCorrect = this.checkAnswer(code, levelActive);
    }

    let button;
    if (startGame) {
      if (answerIsCorrect) {
        button = <Button
            className="button button--next"
            onClick={() => this.playGame(false, true)}
        >Next Level</Button>;
      } else {
        button =<Button
            className="button button--retry"
            onClick={() => this.playGame(false)}
        >Retry</Button>;
      }
    } else {
      button =<Button
          className="button button--start"
          onClick={() => this.playGame(true)}
      >Start</Button>;
    }

    return (
      <div className={`blockly blockly--level${levelActive}`}>
        <BlocklyWrapper
          startGame={this.state.startGame}
          getPlayerCode={this.setPlayerCode}
          levelActive={this.props.levelActive}
        />
      <div className="blockly__playground">
          <div className={`visualization visualization--level${this.props.levelActive}`}>
            {
              this.props.levelActive === 1 &&
                <Level1
                  startGame={startGame}
                  playerCode={code}
                />
            }
            {
              this.props.levelActive === 2 &&
                <Level2
                  startGame={startGame}
                  playerCode={code}
                />
            }
            {
              this.props.levelActive === 3 &&
                <Level3
                  startGame={startGame}
                  playerCode={code}
                />
            },
            {
              this.props.levelActive === 4 &&
                <Level4
                  startGame={startGame}
                  playerCode={code}
                />
            }
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
