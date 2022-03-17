function search(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return true;
  }

  return false;
}

function main() {
  const array = [...Array(1e5).keys()];
  const target = 15220;

  let found;
  console.time('linear-search');
  found = search(array, target);
  console.timeEnd('linear-search');

  console.log('Search:', target, 'Found:', found);
}

main();
