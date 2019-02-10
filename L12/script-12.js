String.prototype.circus = function () {
  let newString = '';
  
  for (let i = 0, j = 1; i < this.length; i += 2, j += 2) {
    newString += this[i].toLowerCase();
    
    if (j < this.length)
      newString += this[j].toUpperCase();    
  }

  return newString;
}


console.log('TEST'.circus());