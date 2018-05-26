import { isEqual } from 'lodash';

import answers from './answers';

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
  const playerAnswer = {
    statements: [],
    repeatTimes: 0,
    actions: [],
  };

  code.split('\n').filter(item => item.length > 9).forEach((step, index) => {
    if (index === 0 && step !== '') {
      playerAnswer.statements.push(step.split(' ')[0]);
      const repeatCount = step.split(/< |;/)[2];
      playerAnswer.repeatTimes = !isNaN(repeatCount) ? Number(repeatCount) : 0;
    } else if (index === 2) {
      playerAnswer.statements.push(step.split(' ')[2]);
    } else {
      const instruction = step.split("'").filter(row => row.length > 5);
      if (instruction.length > 1) {
        // instruction[0] = windows.alert
        playerAnswer.actions.push(instruction[1]);
      }
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

// return if all expected statements can be found in player's code
const checkStatements = (level, code) => {
  let allStatementsExists = true;
  answers[level][statements].forEach((statement) => {
    if (!code.includes(statement)) {
      allStatementsExists = false;
    }
  });
  return allStatementsExists;
}

// return if length of list containing flowers counts equals
// expected number
const checkRepeatTimes = (level, code) => {
  if (level === 'level6') {
    if (code.includes('i_list')) {
      const flowerNumbersList = code.split('i_list = ')[1].split(';')[0];
      return flowerNumbersList.length === answers[level][repeatTimes];
    }
    return null;
  }
  return null;
};

// check if necessary steps are all included in player's code
const checkLevel6Steps = (code) => {
  const necessarySteps = [
    "function pick_flowers(x)",
    "if (x % 2 == 0)",
    "x - 1",
    " return ",
    "var i_list = [3, 4, 6]",
    "for (var i_index in i_list)",
    "walk 1 space",
    "pick_flowers(x)",
    "walk 1 space",
    "turn left",
  ];

  let stepsAreCorrect = true;
  necessarySteps.forEach((step) => {
    if (!code.includes(step)) {
      stepsAreCorrect = false;
    }
  });

  return stepsAreCorrect;
}

// main check function for level 6
export const checkLevel6 = (code) => {
  const activeLevel = 'level6'
  const statements = checkStatements(activeLevel, code);
  const repeatTimes = checkRepeatTimes(activeLevel, code);

  const necessarySteps = checkLevel6Steps(code);
  if (statements && repeatTimes && necessarySteps) {
    return true;
  }
  return false;
};
