function arrOfLargest (arr) {
  const arrOfMax = [];
  
  arr.forEach( element => {
    arrOfMax.push(maxInArr(element));
  });

  return arrOfMax;
}

function maxInArr(arr) {
  let max = arr[0];
  
  arr.forEach( (element) => {
    if(element > max)
      max = element; 
  });

  return max;
}

const newArr = arrOfLargest( [ 
  [4, 5, 1, 3], 
  [13, 27, 18, 26], 
  [32, 35, 37, 39], 
  [1000, 1001, 857, 1] ] );

  console.log(newArr);

