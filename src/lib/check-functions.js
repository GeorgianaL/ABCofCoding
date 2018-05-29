import { isEqual } from 'lodash';

import answers from './answers';
import { getLoopInstr, actionTypes } from './grid';

export const checkLevel1 = (code) => {
  const playerHello = code.split(/'|'/)[1];
  if (typeof code === 'string' && code.split('.')[0] === 'window'
  && (answers.level1.actionsEn.includes(playerHello.toLowerCase())
  || answers.level1.actionsRo.includes(playerHello.toLowerCase()))) {
    return true;
  }
  return false;
};

export const checkLevel2 = (code) => {
  const instructions = code.split('\n').filter(instr => instr.length > 1);
  return isEqual(instructions, answers.level2.actionsEn[0])
    || isEqual(instructions, answers.level2.actionsEn[1])
    || isEqual(instructions, answers.level2.actionsRo[0])
    || isEqual(instructions, answers.level2.actionsRo[1]);
};

const getRepeatTimes = (level, code) => {
  let loopIdentifier;
  if (level === 'level6') {
    loopIdentifier = 'i_list = ';
    if (code.includes(loopIdentifier)) {
      const flowerNumbersList = code.split(loopIdentifier)[1].split(';')[0];
      return flowerNumbersList.split(',').length === answers[level].repeatTimes;
    }
    return null;
  } else {
    loopIdentifier = 'for (var count = 0; count < ';
    if (code.includes(loopIdentifier)) {
      const repeatTimes = code.split(loopIdentifier)[1].split(';')[0];
      if (Number(repeatTimes) !== NaN) {
        return Number(repeatTimes);
      }
      return null;
    }
  }
};

export const checkLevel3 = (code) => {
  const playerActions = code.split("'").filter(item => item.length > 5);
  if (isEqual(answers.level3.actionsEn, playerActions)
    || isEqual(answers.level3.actionsRo, playerActions)) {
    return true;
  }
  return false;
};

export const checkLevel4 = (code) => {
  const playerAnswer = {
    statement: '',
    repeatTimes: 0,
    actions: [],
  };

  code.split('\n').forEach((step, index) => {
    if (index === 0 && step !== '') {
      playerAnswer.statement = step.split(' ')[0];

      const repeatCount = step.split(/< |;/)[2];
      playerAnswer.repeatTimes = !isNaN(repeatCount) ? Number(repeatCount) : 0;
    } else {
      const instruction = step.split("'").filter(row => row.length > 5);
      if (instruction.length > 1) {
        // instruction[0] = windows.alert
        playerAnswer.actions.push(instruction[1]);
      }
    }
  });
  if (isEqual(answers.level4.statement, playerAnswer.statement)
  && isEqual(answers.level4.repeatTimes, playerAnswer.repeatTimes)
  && (isEqual(answers.level4.actionsEn, playerAnswer.actions)
  || isEqual(answers.level4.actionsRo, playerAnswer.actions))) {
    return true;
  }
  return false;
};

export const checkLevel5 = (code) => {
  const activeLevel = 'level5';
  let playerAnswer = {
    statements: [],
    repeatTimes: 0,
    actions: [],
  };

  // check statements 'for' and 'if'
  answers[activeLevel].statements.forEach((stat) => {
    if (code.includes(stat)) {
      playerAnswer.statements.push(stat);
    }
  });

  playerAnswer = {
    ...playerAnswer,
    repeatTimes: getRepeatTimes(activeLevel, code),
  };

  const arrCode = code.split("'").filter(item => item.length > 5);

  arrCode.forEach((piece) => {
    if (actionTypes.includes(piece.split(' ')[0])) {
      playerAnswer = {
        ...playerAnswer,
        actions: [...playerAnswer.actions, piece],
      };
    }
  });

  if (isEqual(answers.level5.statements, playerAnswer.statements)
  && isEqual(answers.level5.repeatTimes, playerAnswer.repeatTimes)
  && (isEqual(answers.level5.actionsEn, playerAnswer.actions)
  || isEqual(answers.level5.actionsRo, playerAnswer.actions))) {
    return true;
  }
  return false;
};


// level 6
// return if all expected statements can be found in player's code
const checkStatements = (level, code) => {
  let allStatementsExists = true;
  answers[level].statements.forEach((statement) => {
    if (!code.includes(statement)) {
      allStatementsExists = false;
    }
  });
  return allStatementsExists;
};

// check if necessary steps are all included in player's code
const checkLevel6Steps = (level, code) => {

  const checkActionsByLanguage = (lang) => {
    let stepsAreCorrect = true;
    answers[level][lang].forEach((step) => {
      if (!code.includes(step)) {
        stepsAreCorrect = false;
      }
    });
    return stepsAreCorrect;
  };

  return checkActionsByLanguage('actionsEn') || checkActionsByLanguage('actionsRo');
}

// main check function for level 6
export const checkLevel6 = (code) => {
  const activeLevel = 'level6';
  const statements = checkStatements(activeLevel, code);
  const repeatTimes = getRepeatTimes(activeLevel, code);

  const necessarySteps = checkLevel6Steps(activeLevel, code);
  if (statements && repeatTimes && necessarySteps) {
    return true;
  }
  return false;
};
