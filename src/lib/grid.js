const walk_n_spaces = (posInitial, directionIsHoriz) => ({
  'x': directionIsHoriz ? posInitial.x + 100 : posInitial.x,
  'y': directionIsHoriz ? posInitial.y : posInitial.y - 100,
});

const getActionType = (playerAction) => {
  let actionType = '';
  const action = playerAction.split(' ')[0];
  switch (action) {
    case 'walk':
      actionType = 'walk';
      break;
    case 'turn':
      actionType = 'turn';
      break;
    default:
      actionType = 'walk';
  }
  return actionType;
}

const getNumberOfPaths = (action) => {
  const nr = action.split(' ')[1]
  if (typeof nr === 'string' && !isNaN(nr) ) {
    return Number(nr);
  }
  return nr;
}

export const getPath = (posInitial, playerCode) => {
  const finalPath = [];
  let code = [];

  if (typeof playerCode === 'string') {
    code = playerCode.split("'").filter(item => item.length > 5);
  }

  let directionIsHoriz = true;
  code.forEach((playerAction) => {
    const actionType = getActionType(playerAction);

    if (actionType === 'walk') {
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
  return finalPath;
}
