(function () {

  const $clock = document.querySelector('.clock');
  renderClock($clock);

  const arrOfTasks = [
    createTask('taks1', 'desc1'),
    createTask('taks2', 'desc2'),
    createTask('taks3', 'desc3'),
    createTask('taks4', 'desc4'),
    createTask('taks5', 'desc5')];

  const $taksList = document.querySelector('.task-list');
  $taksList.innerHTML = getTaksListHTML(arrOfTasks);

  arrOfTasks.forEach((task)=>{
    const intId = setInterval(()=>{

      if(task.end.getTime() <= Date.now()) {
        const $expiredTask = document.getElementById(task.id);
        $expiredTask.classList.add('task-list__item--expired');
        clearInterval(intId);
      }

    }, 1000);
  });  

})();


// usded functions

function createTask(title, description, startDate, endDate) {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setSeconds(defaultStartDate.getSeconds() + random(59));

  return {
    id: Math.floor(Math.random() * 1000000),
    title: title,
    description: description,
    start: startDate || defaultStartDate,
    end: endDate || defaultEndDate
  }
};

// ==================

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

  hrs.length === 1 ? hrs = `0${hrs}` : hrs = hrs;
  mins.length === 1 ? mins = `0${mins}` : mins = mins;
  secs.length === 1 ? secs = `0${secs}` : secs = secs;

  return `${hrs}:${mins}:${secs}`;
};

// ==================

function formatDate(date) {
  let day = `${date.getDate()}`;
  let mounth = getMonth(date);
  let year = `${date.getFullYear()}`;
  let hrs = `${date.getHours()}`;
  let mins = `${date.getMinutes()}`;
  let secs = `${date.getSeconds()}`;

  hrs.length === 1 ? hrs = `0${hrs}` : hrs = hrs;
  mins.length === 1 ? mins = `0${mins}` : mins = mins;
  secs.length === 1 ? secs = `0${secs}` : secs = secs;

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