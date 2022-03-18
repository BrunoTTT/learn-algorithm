// function sort(array) {
//   const n = array.length;
//
//   for (let i = 1; i < n; i++) {
//     const current = array[i];
//     let j = i - 1;
//
//     while ((j > -1) && (current < array[j])) {
//       array[j + 1] = array[j];
//       console.log('[1] i:', i, 'array:', array.toString());
//       j--;
//     }
//
//     array[j + 1] = current;
//     console.log('[2] i:', i, 'array:', array.toString());
//   }
//
//   return array;
// }

function sort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    const current = array[i];
    let j = i - 1;

    while ((j > -1) && (current < array[j])) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

function main() {
  const array = [6, 5, 3, 1, 8, 7, 2, 4]; // [...Array(1e4).keys()].reverse();

  console.time('insertion-sort');
  const sortedArray = sort(array);
  console.timeEnd('insertion-sort');

  console.log(sortedArray);
}

main();
