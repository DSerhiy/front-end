
// Version #1 using WHILE loop;
// ======================

// const userNum = prompt('Pls enter  a number, which to be used to log numbers multiple of this number.');
// let index = 1,
//      counter = 0;

// while(userNum !== null && counter !== 10 && !Number.isNaN(+userNum) && userNum !== '') {
//   if (index % Number(userNum) === 0) {
//     console.log(index);
//     counter++;
//   } 
//   index++;
// }

// Version #2 using FOR loop;
// =====================

const userNum = prompt('Pls enter  a number, which to be used to log numbers multiple of this number.');

if (userNum !== null && !Number.isNaN(Number(userNum)) && userNum !== '') {
  for (let counter = 0, index = 1; counter !== 10; index++) {
    if (index % Number(userNum) === 0) {
      console.log(index); 
      counter++;
    }
  }
}

