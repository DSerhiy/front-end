const strUserNmr = prompt('Please enter the nubmer splitted by comma to calculate the average?');
const arrUserNmr = strUserNmr.split(' ').join('').split(',');

let sum = 0;
arrUserNmr.forEach(item => sum += Number(item));

const aveUserNmr = sum / arrUserNmr.length;
alert(`Average of ${arrUserNmr} is ${aveUserNmr}`);