// const incrementValueAction = () => {
//   return {type: 'increment'};
// };
// const decrementValueAction = () => {
//   return {type: 'decrement'};
// };

const incrementDecrementValueAction = actionType => {
  //   if (actionType == 'increment') {
  //     return {
  //       type: 'increment',
  //     };
  //   } else if (actionType == 'decrement') {
  //     return {
  //       type: 'decrement',
  //     };
  //   }
  switch (actionType) {
    case 'increment':
      return {
        type: 'increment',
      };
    case 'decrement':
      return {
        type: 'decrement',
      };
  }
};

const setCustomValueAction = text => {
  return {type: 'changeValue', payload: text};
};

export {
  //   incrementValueAction,
  //   decrementValueAction,
  setCustomValueAction,
  incrementDecrementValueAction,
};
