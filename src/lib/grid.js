const actionTypes = ['walk', 'turn', 'for', 'enter', 'mergi', 'intoarce-te', 'intra'];

const walk = (posInitial, directionIsHoriz, level) => {
  let newPos = {};
  switch (level) {
    case 2:
    case 3:
      newPos = {
        x: directionIsHoriz ? posInitial.x + 100 : posInitial.x,
        y: directionIsHoriz ? posInitial.y : posInitial.y - 100,
      };
      break;
    case 4:
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
  const nr = action.split(' ')[1];
  if (typeof nr === 'string' && !isNaN(nr)) {
    return Number(nr);
  }
  return nr;
};

const getLoopInstr = (code) => {
  const loopInstructions = {
    start: 0,
    end: code.length,
  };

  code.forEach((instr, index) => {
    if (instr.indexOf('count++) {') !== -1) {
      loopInstructions.start = index;
    } else if (instr.indexOf('}') !== -1) {
      loopInstructions.end = index;
    }
  });

  return loopInstructions;
};

export const getPath = (posInitial, playerCode, level) => {
  let code = [];
  let repeatTimes = 1;
  let directionIsHoriz = true;
  const finalPath = [];

  if (typeof playerCode === 'string') {
    code = playerCode.split("'").filter(item => item.length > 5);
  }

  const loopInstr = getLoopInstr(code);

  const handleAction = (action) => {
    const actionType = getActionType(action);
    if (actionType === 'for') {
      const repeatCount = action.match(/\d+/g).map(Number).filter(i => i !== 0)[0];
      repeatTimes = !isNaN(repeatCount) ? Number(repeatCount) : 0;
    } else if (actionType === 'walk' || actionType === 'mergi') {
      const nrOfPaths = getNumberOfPaths(action);

      for (let i = 1; i <= nrOfPaths; i++) {
        if (finalPath.length === 0) {
          finalPath.push(walk(posInitial, directionIsHoriz, level));
        } else {
          finalPath.push(walk(finalPath[finalPath.length - 1], directionIsHoriz, level));
        }
      }
    } else if (actionType === 'turn' || actionType === 'intoarce-te') {
      directionIsHoriz = !directionIsHoriz;
    } else if (actionType === 'enter' || actionType === 'intra') {
      finalPath.push(walk(finalPath[finalPath.length - 1], directionIsHoriz, level));
      finalPath.push({ x: -100, y: -100 });
    }
  };

  // instructions inside repetition
  for (let playerAction = 0, repetition = 0; playerAction < code.length && repetition < repeatTimes; playerAction++, repetition++) {
    code.forEach((playerAction, index) => {
      if (index >= loopInstr.start && index <= loopInstr.end) {
        handleAction(playerAction);
      }
    });
  }
  // instructions outside of repetition
  if (code.length > loopInstr.end) {
    code.forEach((playerAction, index) => {
      if (index > loopInstr.end) {
        handleAction(playerAction);
      }
    });
  }

  return finalPath;
};
