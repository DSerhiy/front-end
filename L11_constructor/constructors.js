function Company() {
  this.stuff = [];
}

Company.prototype.addEmployee = function (emp) {
  if (emp instanceof Employee){
      emp.level = new EmployeeLevel(
      EmployeeLevel.levelList[random(0, EmployeeLevel.levelList.length)]);
      emp.salary = random(emp.level.minSalary, emp.level.maxSalary);
    this.stuff.push(emp);
  }    
  else   
    console.error('Not employee!')
}

Company.prototype.removeEmployee = function (emp) {
  this.stuff.splice(this.stuff.findIndex(function (el) {
    return el === emp;
  }), 1);
}

Company.prototype.getAccountInfo = function () {
  return this.stuff.map((developer)=>{
    return new AccountInfo(developer);
  })
}

Company.prototype.getSalarySum = function () {
  return this.stuff.reduce(function (acc, next) {
    return acc + next.salary;
  }, 0);
};

// method which returns arr of all user's CV
Company.prototype.getUsersCV = function () {
  return this.stuff.map(dev => {
    return new UserCV(dev);
  })
}

// method which returns arr of all employees, who apply given tehnology
Company.prototype.getUserListByTech = function (tech) {
  return this.stuff.filter((emp)=>{
   return emp.technology.includes(tech);
  })
}

// constructor for Employee professional level
function EmployeeLevel (rang){
  this.rang = rang;
  switch(rang) {
    case 'junior':
      this.minSalary = 600;
      this.maxSalary = 1100;
      break;
    case 'middle':
      this.minSalary = 1200;
      this.maxSalary = 2000;
      break;
    case 'senior':
      this.minSalary = 2000;
      this.maxSalary = 3200;
      break;
    case 'lead':
      this.minSalary = 3200;
      this.maxSalary = 4500;
      break;
  }  
}

// static proprty - list of employee professional levels
EmployeeLevel.levelList = ['junior', 'middle', 'senior', 'lead'];

function Employee(id, name, surname, technology, start) {
  const defaultStart = new Date();
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.technology = technology;
  this.isOccupied = false;
  this.start = start || defaultStart;
}

Employee.tech = [
  'Java Script', 'HTML', 'Angular',
  'Phyton', 'PHP', 'CSS', 'React', 
  'Bootstrap', 'C++', 'Java'
];

function AccountInfo(user) {
  this.name = user.name + ' ' + user.surname;
  this.tax = Math.round(user.salary * .05);
  this.salary = user.salary;
}

// constructor for user's CV
function UserCV (user) {
  this.name = user.name + ' ' + user.surname;
  this.tech = user.technology;
  this.rang = user.level.rang;
  this.salary = user.salary;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}