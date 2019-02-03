const comp1 = new Company;

for (let index = 0; index < 10; index++) {
  comp1.addEmployee(
    new Employee(
      index + 1,
      'name' + index,
      'surname' + index,
      [Employee.tech[random(0, Employee.tech.length)], Employee.tech[random(0, Employee.tech.length)]]
    )
  )  
}

console.log(comp1.stuff);
console.log(comp1.getUserListByTech('Angular'));
console.log(comp1.getUsersCV());