const actionTypes = ['walk', 'turn', 'for'];

const walk_n_spaces = (posInitial, directionIsHoriz) => ({
  'x': directionIsHoriz ? posInitial.x + 100 : posInitial.x,
  'y': directionIsHoriz ? posInitial.y : posInitial.y - 100,
});

const getActionType = (playerAction) => {
  const currentAction = playerAction.split(' ')[0];
  if (actionTypes.includes(currentAction)) {
    return currentAction;
  }
  return null;
}

const getNumberOfPaths = (action) => {
  const nr = action.split(' ')[1]
  if (typeof nr === 'string' && !isNaN(nr) ) {
    return Number(nr);
  }
  return nr;
}

export const getPath = (posInitial, playerCode) => {
  let code = [];
  let repeatTimes = 1;
  let directionIsHoriz = true;
  const finalPath = [];

  if (typeof playerCode === 'string') {
    code = playerCode.split("'").filter(item => item.length > 5 && actionTypes.includes(item.split(' ')[0]));
  }

  for (let playerAction=0, repetition = 0; playerAction<code.length && repetition < repeatTimes; playerAction++, repetition++) {
    code.forEach((playerAction) => {
      const actionType = getActionType(playerAction);

      if (actionType === 'for') {
        const repeatCount = playerAction.split(/< |;/)[2];
        repeatTimes = !isNaN(repeatCount) ? Number(repeatCount) : 0;
      } else if (actionType === 'walk') {
        const nrOfPaths = getNumberOfPaths(playerAction);

        for (let i = 1; i <= nrOfPaths; i++) {
          if (finalPath.length === 0) {
            finalPath.push(walk_n_spaces(posInitial, directionIsHoriz));
          } else {
            finalPath.push(walk_n_spaces(finalPath[finalPath.length - 1], directionIsHoriz));
          }
        }
      } else if (actionType === 'turn') {
        directionIsHoriz = !directionIsHoriz;
      }
    });
  }
  return finalPath;
}
