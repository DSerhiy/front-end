const str = 'js string';
const nbr = 127;
const bln = true;
const NULL = null; 
const obj = {};
const arr = [];
const fn = function(){};

console.time("Execution time took");

console.group('Primitives');
	console.log(str);
  console.log(nbr);
  console.log(bln);
  console.log(NULL);
  console.log(undefined);
console.groupEnd();

console.group('Object type');
  console.dir(obj);
  console.dir(arr);
  console.dir(fn);
console.groupEnd();

console.timeEnd("Execution time took");
