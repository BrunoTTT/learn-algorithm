function sort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    let minimum = i;

    for (let j = i; j < n; j++) {
      if (array[j] < array[minimum]) minimum = j;
    }

    if (minimum !== i) {
      const temp = array[i];

      array[i] = array[minimum];
      array[minimum] = temp;
    }
  }

  return array;
}

function main() {
  const array = [...Array(1e4).keys()];

  console.time('selection-sort');
  const sortedArray = sort(array);
  console.timeEnd('selection-sort');

  console.log('Sorted Array:', array);
}

main();
