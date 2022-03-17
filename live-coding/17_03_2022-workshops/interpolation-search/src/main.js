function search(array, target) {
  let low = 0,
      mid = -1,
      high = array.length - 1;

  while(low <= high && target >= array[low] && target <= array[high]) {
    mid = low + Math.floor((high - low) * ((target - array[low]) / (array[high] - array[low])));

    if (array[mid] === target) return true;

    if (array[mid] < target) {
      low = mid + 1;
      continue;
    }

    if (array[mid] > target) {
      high = mid - 1;
      continue;
    }
  }

  return false;
}

function main() {
  const array = [...Array(1e5).keys()];
  const filter = 15220;

  let found;
  console.time('interpolation-search');
  found = search(array, filter);
  console.timeEnd('interpolation-search');

  console.log('Search:', filter, 'Found:', found);
}

main();
