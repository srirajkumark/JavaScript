// Task List App

let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function(event){
    // event.preventDefault();

    let taskInputEl = document.querySelector('#input-item');
    let task = taskInputEl.value.trim();

    // get task from local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);
    
    // set to local storage
    localStorage.setItem('tasks', JSON.stringify(taskList));
});