const Task = (function () {

  let id = 0;
  const status = {
    pending: 'pending',
    processing: 'processing',
    completed: 'completed',
    deleted: 'deleted'
  }

  const Task = function (config) {
    this.id = id++;
    this.title = config.title;
    this.description = config.description;
    this.start = config.start;
    this.end = config.end;
    this.onStatusChanged = null;
    this.status = this.checkStatus();

    const eventIntervalId = setInterval(() => {
      if (this.checkStatus() !== this.status) {
        this.status = this.checkStatus();
        this.onStatusChanged(this);

        if (this.status === status.completed || this.status === status.deleted)
          clearInterval(eventIntervalId);
      }
    }, 1000);
  };

  Task.prototype.checkStatus = function () {
    const currentDate = Date.now();
    if (this.status === status.deleted) return this.status;
    if (currentDate < this.start.getTime()) return status.pending;
    if (currentDate >= this.start.getTime() && currentDate < this.end.getTime()) return status.processing;
    if (currentDate >= this.end.getTime()) return status.completed;
  }

  Task.prototype.deactivate = function () {
    this.status = status.deleted;
  }

  return Task;
})();

const TaskManager = (function () {

  const tasks = [];
  let taskGenCounter = 0;

  const pendingListElement = _createListElement(['taskManager__list', 'taskManager__list--pending']),
    processingListElement = _createListElement(['taskManager__list', 'taskManager__list--processing']),
    completedListElement = _createListElement(['taskManager__list', 'taskManager__list--completed']),
    addTaskBtnElement = _createBtnElement();

  function _createBtnElement() {
    const bntElement = document.createElement('button');
    bntElement.classList.add('taskManager__add-btn');
    bntElement.innerText = 'add task';
    bntElement.addEventListener('click', () => {addTask()});

    return bntElement;
  }

  function init(elemId) {
    const taskManagerElement = document.querySelector(elemId);

    taskManagerElement.appendChild(addTaskBtnElement);
    taskManagerElement.appendChild(pendingListElement);
    taskManagerElement.appendChild(processingListElement);
    taskManagerElement.appendChild(completedListElement);
  }

  function addTask(config = null) {
    if (config)
      tasks.push(new Task(config));
    else {
      tasks.push(_generateTask());
    }

    _renderTask(tasks[tasks.length - 1]);
    tasks[tasks.length - 1].onStatusChanged = _updateTask;
  }

  function deleteTask(task) {
    task.deactivate();
    document.getElementById('task-' + task.id).remove();
    tasks.splice(tasks.indexOf(task), 1);
  }

  function _createListElement(classNames) {
    const listElement = document.createElement('ul');
    classNames.forEach((className) => {
      listElement.classList.add(className);
    });

    return listElement;
  }

  function _createTaskElement(task) {
    const taskElement = document.createElement('li');
    taskElement.id = 'task-' + task.id;
    taskElement.classList.add('task');
    const options = {
      month: 'short',
      day: 'numeric',
      timezone: 'UTC+3',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }
    taskElement.innerHTML =
      `<h1 class='task__title'>${task.title}</h1>` +
      `<p class='task__description'>${task.description}</p>` +
      `<span class='task__start'>start: ${task.start.toLocaleString("en-US", options)}</span>` +
      `<span class='task__end'>end:&nbsp; ${task.end.toLocaleString("en-US", options)}</span>` +
      `<div class='task__cls-btn'></div>`;

    taskElement.querySelector('.task__cls-btn').onclick = () => { deleteTask(task) };

    return taskElement;
  }

  function _renderTask(task) {
    const taskElement = _createTaskElement(task);
    switch (task.checkStatus()) {
      case 'pending':
        pendingListElement.appendChild(taskElement);
        break;
      case 'processing':
        processingListElement.appendChild(taskElement);
        break;
      case 'completed':
        taskElement.querySelector('.task__cls-btn').remove();
        completedListElement.appendChild(taskElement);
        break;
    }
  }

  function _updateTask(task) {
    document.getElementById('task-' + task.id).remove();
    _renderTask(task);
  }

  function _generateTask() {
    const config = {
      title: 'task_gen_' + taskGenCounter,
      description: 'description_' + taskGenCounter,
      start: new Date(Date.now() + _random(2, 12) * 1000),
      end: new Date(Date.now() + _random(13, 18) * 1000)
    };
    taskGenCounter++;
    return new Task(config);
  }

  function _random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return {
    init: init,
    tasks: tasks,
    addTask: addTask,
    deleteTask: deleteTask
  }
})();