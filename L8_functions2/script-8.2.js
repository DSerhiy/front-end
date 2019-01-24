(function () {


  var arr = [1, 2, 3, 4, 5]

  // для каждого элемента массива запустить функцию,
  // промежуточный результат передавать первым аргументом далее
  var result = reduce(arr, function(sum, current) {
    return sum + current;
  });

  alert( result ); // 15
  
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

  return newArr;
}

// ------------------------------

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if(!callback(arr[i], i, arr))
      return false;

    return true;    
  }
}

//  ------------------------------

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr))
      return true;

    return false;    
  }
}

// -------------------------------

function reduce(arr, callback, initialValue) {
  let value = initialValue || 0;
  for (let i = 0; i < arr.length; i++) {
    value = callback(value, arr[i], i, arr);
  }

  return value;
}