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
  const $listOfInactiveTasks = document.getElementById('inactiveTasks');
  const $listOfProcessingTasks = document.getElementById('processingTasks');
  const $listOfCompletedTasks = document.getElementById('completedTasks');

  renderClock($clock);   
  
  arrOfTasks.forEach((task)=>{
    const $task = createTaskElem(task); // creating task html element;

    if(task.getStatus() === 'inactive')
      $listOfInactiveTasks.appendChild($task); // rendering list of all inactive tasks  

    task.onStatusChanged = () => { // initiate a handler on changing of task status
      
      if(task.getStatus() === 'processing') {
        $listOfInactiveTasks.removeChild($task);
        $task.classList.add('task-list__item--processing')
        $listOfProcessingTasks.appendChild($task);
      }

      if(task.getStatus() === 'completed') {
        $listOfProcessingTasks.removeChild($task);
        $task.classList.remove('task-list__item--processing');
        $task.classList.add('task-list__item--completed');
        $task.removeChild($task.querySelector('.task-list__item-btn'));
        $listOfCompletedTasks.appendChild($task);   
      }
    }
  });
  
  const $btnArr = document.querySelectorAll('.task-list__item-btn');
  
  $btnArr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      const taskID = +e.target.getAttribute('data-id');
      let taskIndex = null;
      arrOfTasks.forEach((el, index) => {
        if(el.id === taskID) {
          taskIndex = index;       
        }
      });
      arrOfTasks[taskIndex].deactivate();
      arrOfTasks.splice(taskIndex,1);   
    })
  });
    
})();

// usded functions

function createTaskElem(task) {
  const $taskElem = document.createElement('li');
  const $btn = document.createElement('span');
  
  $btn.className = 'task-list__item-btn';
  $btn.setAttribute('data-id', task.id)
  $taskElem.className = 'task-list__item';
  $taskElem.innerText = `${task.title} - ${task.description} / EndTime: ${formatDate(task.end)}`;
  $taskElem.appendChild($btn);
  
  return $taskElem;
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

