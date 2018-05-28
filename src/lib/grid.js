import { findIndex } from 'lodash';

const actionTypes = ['walk', 'turn', 'for', 'enter', 'mergi', 'intoarce-te', 'intra', 'pick'];

const walk = (posInitial, directionIsHoriz, leftToRight = true, level) => {
  let newPos = {};
  switch (level) {
    // direction is from left to right and from bottom to top
    case 3:
    case 4:
    case 6:
      if (leftToRight) {
        newPos = {
          x: directionIsHoriz ? posInitial.x + 100 : posInitial.x,
          y: directionIsHoriz ? posInitial.y : posInitial.y - 100,
        };
      } else {
        newPos = {
          x: directionIsHoriz ? posInitial.x - 100 : posInitial.x,
          y: directionIsHoriz ? posInitial.y : posInitial.y - 100,
        };
      }
      break;
    case 5:
      // direction is from left to right and from top to bottom
      newPos = {
        x: directionIsHoriz ? posInitial.x + 100 : posInitial.x,
        y: directionIsHoriz ? posInitial.y : posInitial.y + 100,
      };
      break;
    default:
      newPos = {};
  }
  return newPos;
};

const getActionType = (playerAction) => {
  let actionType = '';
  actionTypes.forEach((action) => {
    if (playerAction.indexOf(action) !== -1) {
      actionType = action;
    }
  });
  if (actionType !== '') {
    return actionType;
  }
  return null;
};

const getNumberOfPaths = (action) => {
  let pathsCount = 0;
  action.split(' ').forEach((i) => {
    if(i.length > 0 && !isNaN(i)) {
      pathsCount = Number(i);
    }
  });
  return pathsCount;
};

const getLoopInstr = (code, level) => {
  const loopInstructions = {
    start: 0,
    end: code.length,
  };

  code.forEach((instr, index) => {
    if (level === 6) {
      if (instr.indexOf('in i_list) {') !== -1) {
        loopInstructions.start = index;
      } else if (instr.indexOf('}') !== -1) {
        loopInstructions.end = index;
      }
    } else {
      if (instr.indexOf('count++) {') !== -1) {
        loopInstructions.start = index;
      } else if (instr.indexOf('}') !== -1) {
        loopInstructions.end = index;
      }
    }
  });

  return loopInstructions;
};

export const getPath = (posInitial, playerCode, level) => {
  let code = [];
  let repeatTimes = 1;
  let directionIsHoriz = true;
  const finalPath = [];
  const leftToRight = true;

  if (typeof playerCode === 'string') {
    code = playerCode.split("'").filter(item => item.length > 5);
  }

  const loopInstr = getLoopInstr(code, level);

  const handleAction = (action) => {
    const actionType = getActionType(action);
    if (actionType === 'for') {
      const repeatCount = action.match(/\d+/g).map(Number).filter(i => i !== 0)[0];
      repeatTimes = !isNaN(repeatCount) ? Number(repeatCount) : 0;
    } else if (actionType === 'walk' || actionType === 'mergi') {
      const nrOfPaths = getNumberOfPaths(action);

      for (let i = 1; i <= nrOfPaths; i++) {
        if (finalPath.length === 0) {
          finalPath.push(walk(posInitial, directionIsHoriz, leftToRight, level));
        } else {
          finalPath.push(walk(finalPath[finalPath.length - 1], directionIsHoriz, leftToRight, level));
        }
      }
    } else if (actionType === 'turn' || actionType === 'intoarce-te') {
      directionIsHoriz = !directionIsHoriz;
    } else if (actionType === 'enter' || actionType === 'intra') {
      finalPath.push(walk(finalPath[finalPath.length - 1], directionIsHoriz, leftToRight, level));
      finalPath.push({ x: -100, y: -100 });
    }
  };

  const codeInRepetition = code.filter((item, index) => index >= loopInstr.start && index <= loopInstr.end);
  const codeOutsideOfRepetition = code.filter((item, index) => index > loopInstr.end);

  // instructions inside repetition
  for (let playerAction = 0, repetition = 0; playerAction < code.length && repetition < repeatTimes; playerAction++, repetition++) {
    codeInRepetition.forEach((playerAction) => {

      handleAction(playerAction);
    });
  }

  // instructions outside of repetition
  if (code.length > loopInstr.end) {
    codeOutsideOfRepetition.forEach((playerAction) => {
      handleAction(playerAction);
    });
  }
  return finalPath;
};

const getFlowersNumber = (code, count) => {
  // function delimiters
  const functionStartIndex = findIndex(code, el => el.includes('function ')) + 1;
  const functionEndIndex = findIndex(code, el => el.includes('return '));
  let functionStatements = [];
  code.forEach((item, idx) => {
    if (idx >= functionStartIndex && idx <= functionEndIndex) {
      functionStatements.push(item);
    }
  });
  const functionDef = new Function('x', functionStatements.join(''));
  return functionDef(count);
};

export const getLevel6Path = (posInitial, playerCode) => {
  const level = 6;
  let directionIsHoriz = true;
  let turnArounds = 0;
  const finalPath = [];
  const code = playerCode.split("\n");

  // list with flowers counters on svg
  let flowerCountsList = [];
  const statementIndex = findIndex(code, el => el.includes('var i_list '));
  if (statementIndex > -1) {
    flowerCountsList = eval(code[statementIndex].split('i_list = ')[1].split(';')[0]);
  }

  const loopInstr = getLoopInstr(code, level);

  const handleAction = (action, nrOfFlowers) => {
    const actionType = getActionType(action);
    if (actionType === 'walk' || actionType === 'mergi') {
      const nrOfPaths = getNumberOfPaths(action);
      let leftToRight = true;
      if (turnArounds === 2) {
        leftToRight = false;
      }
      for (let i = 1; i <= nrOfPaths; i++) {
        if (finalPath.length === 0) {
          finalPath.push(walk(posInitial, directionIsHoriz, leftToRight, level));
        } else {
          finalPath.push(walk(finalPath[finalPath.length - 1], directionIsHoriz, leftToRight, level));
        }
      }
    } else if (actionType === 'turn' || actionType === 'intoarce-te') {
      directionIsHoriz = !directionIsHoriz;
      turnArounds += 1;
    } else if (actionType === 'pick') {
      finalPath[finalPath.length - 1].pick = getFlowersNumber(code, nrOfFlowers) || 0;
    }
  };

  // instructions inside repetition
  for (let playerAction = 0, repetition = 0; playerAction < code.length && repetition < flowerCountsList.length; playerAction++, repetition++) {
    code.forEach((playerAction, index) => {
      if (index >= loopInstr.start && index <= loopInstr.end) {
        handleAction(playerAction, flowerCountsList[repetition]);
      }
    });
  }
  return finalPath;
}
