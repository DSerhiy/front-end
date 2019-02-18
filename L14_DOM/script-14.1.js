(function () {

  const arrOfTasks = [
    new Task('task1', 'desc1'),
    new Task('task2', 'desc2'),
    new Task('task3', 'desc3'),
    new Task('task4', 'desc4'),
    new Task('task5', 'desc5'),
    new Task('task6', 'desc6'),
    new Task('task7', 'desc7'),
    new Task('task8', 'desc8')];

  const $clock = document.getElementById('clock');
  const $taksList = document.querySelector('.task-list');

  renderClock($clock);   
  
  arrOfTasks.forEach((task)=>{
    const intId = setInterval(()=>{
      
      if(task.isExpired()) {
        const $expTask = createListItemElem('task-list__item', task);
        $taksList.appendChild($expTask);   
        clearInterval(intId);
      }

    }, 1000);
  });  

})();

// usded functions

function createListItemElem(className, task) {
  const liElem = document.createElement('li');
  liElem.className = className;
  liElem.innerText = `${task.title} - ${task.description} / Deadline: ${formatDate(task.end)}`;
  return liElem;
}

// ==================

function renderClock(element) {
  element.innerText = getTime();
  setInterval(function () {
    element.innerText = getTime();
  }, 1000);
};

// ==================

function getTime() {
  const date = new Date();
  let hrs = `${date.getHours()}`;
  let mins = `${date.getMinutes()}`;
  let secs = `${date.getSeconds()}`;

  hrs = unifFormat(hrs);
  mins = unifFormat(mins);
  secs = unifFormat(secs);
  
  return `${hrs}:${mins}:${secs}`;
};

// ==================

function unifFormat(value) {
  return value.length === 1 ? '0' + value : value; 
}

// ==================

function formatDate(date) {
  
  let hrs = `${date.getHours()}`;
  let mins = `${date.getMinutes()}`;
  let secs = `${date.getSeconds()}`;

  hrs = unifFormat(hrs);
  mins = unifFormat(mins);
  secs = unifFormat(secs);

  return `${date.getDate()}/${getMonth(date)}/${date.getFullYear()}-${hrs}:${mins}:${secs}`;
}

// ==================

function getMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

// ==================

function random (max, min) {
  min = min || 0;
  max = max + 1 || 11;

  return Math.floor(Math.random() * (max - min)) + min; 
}