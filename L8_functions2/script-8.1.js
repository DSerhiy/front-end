(function () {
  const numOfWords = 10;
  const minNumOfChars = 6;
  const maxNumOfChart = 8;

  const obj =  getObjOfRandomStrings(numOfWords, minNumOfChars, maxNumOfChart);
  console.log(obj);
  
})();

// ==============
// used functions

function getRandomNum (max, min) {
  min = min || 0;
  max = max + 1 || 11;

  return Math.floor(Math.random() * (max - min)) + min; 
}
// ------------------------------

function getRandomString(num) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let word = '';

  for (let i = 0; i < num; i++) 
    word += chars[getRandomNum(chars.lenght - 1)];
  
  return word; 
}

// -------------------------------

function getObjOfRandomStrings(num, min, max) {
  const obj = {};

  for (let i = 0; i < num; i++) {
    const numOfChars = getRandomNum(max, min);
    const temp = getRandomString(numOfChars);
    obj[numOfChars] ? obj[numOfChars].push(temp) : obj[numOfChars] = [temp];
  }

  return obj;
}