function search(array, target) {
  let start = 0,
      end   = array.length - 1;

  while (start <= end) {
    const mid = Math.floor(( start + end ) / 2);

    if (array[mid] === target) return true;

    if (array[mid] < target) {
      start = mid + 1;
      continue;
    }

    if (array[mid] > target) {
      end = mid - 1;
      continue;
    }
  }

  return false;
}

function main() {
  const array = [...Array(1e5).keys()];
  const filter = 15220;

  let found;
  console.time('binary-search');
  found = search(array, filter);
  console.timeEnd('binary-search');

  console.log('Search:', filter, 'Found:', found);
}


main();
