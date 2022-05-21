// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var output = 0;

// for (var i = 0; i < data.length; i++) {
//   output = output + data[i];
// }

// console.log(output);

// const data = [1, 2, 3, 4, 5];

// const op = data.reduce((sum, currentValue) => {
//   return sum + currentValue; // 15
// });

// console.log(op);

const selectYourChoice = action => {
  switch (action.operation) {
    case 'addition':
      return action.a + action.b;
    case 'multiplication':
      return action.a * action.b;
    case 'division':
      return action.a / action.b;
  }

  // const temp = action.data;

  // for (var i = 0; i < temp.length; i++) {
  //   console.log(temp[i]);
  // }
};

var op = selectYourChoice({
  a: 10,
  b: 20,
  operation: 'addition',
  data: [1, 2, 3, 4, 5],
});
// console.log(op);

// var op = selectYourChoice({
//   a: 10,
//   b: 20,
//   operation: 'multiplication',
// });
// console.log(op);

// var op = selectYourChoice({
//   a: 10,
//   b: 20,
//   operation: 'division',
// });
// console.log(op);
