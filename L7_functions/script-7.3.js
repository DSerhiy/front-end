(function () {
  const EXIT = null;
  const numberOfWords = getUserNumber('Pls indicate the number of random words to be generated?');
  
  if(numberOfWords === EXIT) 
    return;
  
  const minNumberOfChars = getUserNumber('Pls indicate the min number of characters in world');
  
  if(minNumberOfChars === EXIT) 
    return;
  
  const maxNumberOfChars = getUserNumber('Pls indicate the max number of characters in world');

  if(maxNumberOfChars === EXIT) 
    return;

  const objOfRendomWords = creatObjOfRendomWords(numberOfWords, minNumberOfChars, maxNumberOfChars);
  
  alertObj(objOfRendomWords);

})();

// ==============
// used functions

function creatObjOfRendomWords(numberOfWords, minNumberOfChars, maxNumberOfChars) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const obj = {};

  for (let i = minNumberOfChars; i <= maxNumberOfChars; i++) {
    obj[i] = [];

    for (let j = 0; j < numberOfWords; j++) {
      let temp = '';

      for (let k = 1; k <= i; k++)
        temp += chars[Math.floor(Math.random() * chars.length)];

      obj[i][j] = temp;
    }    
  }

  return obj;
}

// -----------------------------

function getUserNumber(question) {
  let num = prompt(question);
  
  if(num === null)
    return null;
  
  while(Number.isNaN(+num)) {       
    num = prompt('pls insert numeric value!');
    
    if(num === null)
      return null;
  } 

  return +num;
}

// -----------------------------

function alertObj(obj) {
  let msg = '';

  for(key in obj) {
    msg += `${key}: [ `;
    for(let i = 0; i < obj[key].length; i++) {
      if (i === obj[key].length - 1)
        msg += `${obj[key][i]} ]\n`
      else 
        msg += `${obj[key][i]}, `
    }
  }

  alert(msg);
}

