function sort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

function main() {
  const array = [...Array(1e4).keys()].reverse();

  console.time('bubble-sort');
  const sortedArray = sort(array);
  console.timeEnd('bubble-sort');

  console.log(sortedArray);
}

main();
