function arrDiff(arr1, arr2) {
  const newArr = [];
  arr1.forEach(elementArr1 => {
    for (let i = 0; i < arr2.length; i++) {
      const elementArr2 = arr2[i];
      if(elementArr1 === elementArr2)
        break;
      newArr.push(element)
    }
  })
}



arrDiff( [1,2], [1] ) == [2]
arrDiff( [1,2,2,2,3], [2] ) == [1,3]