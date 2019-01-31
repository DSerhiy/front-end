function firstDuplicate(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    for (let j = i + 1; j < arr.length; j++) {
      if(element === arr[j])
        temp.push(j);      
    }
  }

  temp.sort(function(a, b){return a - b;})
  return arr[temp[0]] || -1;
}

arr = [2, 1, 3, 5, 3, 2];
console.log(firstDuplicate( arr ));