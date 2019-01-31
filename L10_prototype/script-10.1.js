function Task(title, description, startDate, endDate) {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setSeconds(defaultStartDate.getSeconds() + random(59));
  
  this.id = Math.floor(Math.random() * 1000000);
  this.title = title;
  this.description = description;
  this.start = startDate || defaultStartDate;
  this.end = endDate || defaultEndDate; 
}

Task.prototype.isExpired = function(){
  return this.end.getTime() <= Date.now() ? true : false;
};

(function () {

  const $clock = document.querySelector('.clock');
  renderClock($clock);

  const arrOfTasks = [
    new Task('taks1', 'desc1'),
    new Task('taks2', 'desc2'),
    new Task('taks3', 'desc3'),
    new Task('taks4', 'desc4'),
    new Task('taks5', 'desc5'),
    new Task('taks6', 'desc6'),
    new Task('taks7', 'desc7'),
    new Task('taks8', 'desc8')];

  const $taksList = document.querySelector('.task-list');
  $taksList.innerHTML = getTaksListHTML(arrOfTasks);

  arrOfTasks.forEach((task)=>{
    const intId = setInterval(()=>{
      
      if(task.isExpired()) {
        const $expiredTask = document.getElementById(task.id);
        $expiredTask.classList.add('task-list__item--expired');
        clearInterval(intId);
      }

    }, 1000);
  });  

})();

// usded functions

function getTaksListHTML (arrOfTasks) {
  let out = '';

  arrOfTasks.forEach((item)=>{
    out +=  `<li id='${item.id}' class='task-list__item'>${item.title} - ${item.description} / Deadline: ${formatDate(item.end)}</li>`;
  });

  return out;
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
  let day = `${date.getDate()}`;
  let mounth = getMonth(date);
  let year = `${date.getFullYear()}`;
  let hrs = `${date.getHours()}`;
  let mins = `${date.getMinutes()}`;
  let secs = `${date.getSeconds()}`;

  hrs = unifFormat(hrs);
  mins = unifFormat(mins);
  secs = unifFormat(secs);

  return `${day}/${mounth}/${year}-${hrs}:${mins}:${secs}`;
}

// ==================

function getMonth(date) {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  return months[date.getMonth()];
}

// ==================

function random (max, min) {
  min = min || 0;
  max = max + 1 || 11;

  return Math.floor(Math.random() * (max - min)) + min; 
}