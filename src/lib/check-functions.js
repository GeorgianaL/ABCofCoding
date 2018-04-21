import { isEqual } from 'lodash';

import { answers } from './answers.js';

export const checkLevel1 = (code) => {
  const playerHello = code.split(/'|'/)[1];
  if (typeof code === 'string' && code.split('.')[0] === 'window'
  && answers.level1.actions.includes(playerHello.toLowerCase())) {
    return true;
  }
  return false;
};

export const checkLevel2 = (code) => {
    const playerActions = code.split("'").filter(item => item.length > 5);
    if (isEqual(answers.level2.actions, playerActions)) {
      return true;
  }
  return false;
}

export const checkLevel3 = (code) => {
  const playerAnswer = {
    statement: '',
    repeatTimes: 0,
    actions: [],
  };

  code.split("\n").forEach((step, index) => {
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
  if (isEqual(answers.level3, playerAnswer)) {
    return true;
}
return false;
}

export const checkLevel4 = (code) => {
  const playerAnswer = {
    statements: [],
    repeatTimes: 0,
    actions: [],
  };

  code.split("\n").filter(item => item.length > 9).forEach((step, index) => {
    if (index === 0 && step !== '') {
      playerAnswer.statements.push(step.split(' ')[0]);
      const repeatCount = step.split(/< |;/)[2];
      playerAnswer.repeatTimes = !isNaN(repeatCount) ? Number(repeatCount) : 0;
    } else if (index === 2) {
      playerAnswer.statements.push(step.split(' ')[2])
    } else {
      const instruction = step.split("'").filter(row => row.length > 5);
      if (instruction.length > 1) {
        // instruction[0] = windows.alert
        playerAnswer.actions.push(instruction[1]);
      }
    }
  });
  if (isEqual(answers.level4, playerAnswer)) {
    return true;
  }
  return false;
}
