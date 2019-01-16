const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberOfWords = +prompt('Pls indicate the number of random words to be generated?');
const minNumberOfChars = +prompt('Pls indicate the min number of characters in world');
const maxNumberOfChars = +prompt('Pls indicate the max number of characters in world');

const obj = {};

for(let i = minNumberOfChars; i <= maxNumberOfChars; i++) {
  obj[i] = [];
  
  for(let j = 0; j < numberOfWords; j++) {
    let temp = '';
    
    for(let k = 1; k <= i; k++)
      temp += chars[Math.floor(Math.random() * chars.length)];
    
    obj[i][j] = temp;
  }

  console.log(`${numberOfWords} words with ${i} characters were added`);
}

console.log(obj);