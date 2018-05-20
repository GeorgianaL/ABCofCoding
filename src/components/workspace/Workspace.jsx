import React from 'react';
import PropTypes from 'prop-types';

import BlocklyWrapper from '../blockly/Blockly';
import Button from '../button/Button';

import messages from '../../i18n/messages.js';

import {
  checkLevel1,
  checkLevel2,
  checkLevel3,
  checkLevel4,
  checkLevel5,
  checkLevel6,
 } from '../../lib/check-functions';

import Level1 from './components/level1/Level1';
import Level2 from './components/level2/Level2';
import Level3 from './components/level3/Level3';
// import DemoLevel3 from './components/level3/DemoLevel3';

import Level4 from './components/level4/Level4';

import Level5 from './components/level5/Level5';
import Level6 from './components/level6/Level6';

import './workspace.scss';

const checkAnswer = (code, level) => {
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
    case 5:
      isCorrect = checkLevel5(code);
      break;
    case 5:
      isCorrect = checkLevel6(code);
      break;
    default:
      return;
  }
  return isCorrect;
};

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      startGame: false,
    };

    this.setPlayerCode = this.setPlayerCode.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
  }

  setPlayerCode(generatedCode) {
    this.setState({
      code: generatedCode,
    });
  }

  setStartGame(hasStart) {
    this.setState({
      startGame: hasStart,
    });
  }

  playGame(startGame, nextLevel = false) {
    this.setStartGame(startGame);
    if (nextLevel) {
      this.props.nextLevel();
    }
  }

  render() {
    const { startGame, code } = this.state;
    const { levelActive, language } = this.props;

    let answerIsCorrect = false;
    if (code !== '') {
      answerIsCorrect = checkAnswer(code, levelActive);
    }

    let button;
    if (startGame) {
      if (answerIsCorrect) {
        button = (
          <Button
            className="button button--next"
            onClick={() => this.playGame(false, true)}
          >{messages[language].nextLevel}
          </Button>);
      } else {
        button = (
          <Button
            className="button button--retry"
            onClick={() => this.playGame(false)}
          >{messages[language].retry}
          </Button>);
      }
    } else {
      button = (
        <Button
          className="button button--start"
          onClick={() => this.playGame(true)}
        >{messages[language].start}
        </Button>);
    }

    const levelParams = {
      startGame,
      playerCode: code,
      language: language,
    };

    return (
      <div>
        <div className={`blockly blockly--level${levelActive}`}>
          <BlocklyWrapper
            startGame={this.state.startGame}
            getPlayerCode={this.setPlayerCode}
            levelActive={this.props.levelActive}
            language={this.props.language}
          />
          <div className="blockly__playground">
            <div className={`visualization visualization--level${this.props.levelActive}`}>
              {
                this.props.levelActive === 1 &&
                <Level1 {...levelParams} />
              }
              {
                this.props.levelActive === 2 &&
                <Level2 {...levelParams} />
              }
              {
                this.props.levelActive === 3 &&
                <Level3 {...levelParams} />
              }
              {
                this.props.levelActive === 4 &&
                <Level4 {...levelParams} />
              }
              {
                this.props.levelActive === 5 &&
                <Level5 {...levelParams} />
              }
              {
                this.props.levelActive === 6 &&
                <Level6 {...levelParams} />
              }
            </div>
            <div className="control">
              {button}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Workspace.displayName = 'Workspace';
Workspace.propTypes = {
  levelActive: PropTypes.number,
  nextLevel: PropTypes.func,
  setLevelIsFinished: PropTypes.func,
  language: PropTypes.string,
};
Workspace.defaultProps = {
  levelActive: 1,
  nextLevel: () => null,
  setLevelIsFinished: () => null,
  language: 'en',
};

export default Workspace;
