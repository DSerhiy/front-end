// Version #1 using WHILE loop;
// ======================

// const userNum = prompt('Pls enter  a number, which to be used to log numbers multiple of this number.');
// let countLimit = '';

// if (userNum !== null) 
//   countLimit = prompt('Pls enter max qtty of numbers to be logged.');

// let counter = 0,
//      index = 1;

// while (userNum !== null && countLimit !== null && counter !== Number(countLimit)) {
//   if (index % Number(userNum) === 0) {
//     console.log(index);
//     counter++;
//   } 
//   index++;
// }

// Version #2 using FOR loop;
// =====================

const userNum = prompt('Pls enter  a number, which to be used to log numbers multiple of this number.');
let countLimit = '';

if (userNum !== null) 
  countLimit = prompt('Pls enter max qtty of numbers to be logged.');

if (countLimit !== undefined && 
    countLimit !== null && 
    countLimit !== '' &&
    !Number.isNaN(Number(countLimit) &&
    userNum !== '' && 
    !Number.isNaN(Number(userNum)))) {

  for (
    let counter = 0, index = 1;
    counter !== Number(countLimit);
    index++) {
    
    if (index % Number(userNum) === 0) {
      console.log(index);
      counter++;
    }     
  }  
}