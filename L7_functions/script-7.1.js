(function () {
  const arr = [1, 2, 3, 4, 5, 6];

  forEach(arr, function (item, index) {
    console.log(index, '=>', item);
  });

  console.log(map(arr, function (item) {
    return item * 2;
  }));

  console.log(filter(arr, function (item, index, arr) {
    return item > 3;
  }));
})();

// ==============
// used functions

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++)
    callback(arr[i], i, arr);
}

// -----------------------------

function map(arr, callback) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++)
    newArr[i] = callback(arr[i], i, arr);

  return newArr
}

// ------------------------------

function filter(arr, callback) {
  const newArr = [];

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr[j] = arr[i];
      j++;
    }
  }

  return newArr
}

// ------------------------------

