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

    displayTasks();
});

// display tasks
let displayTasks = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if(taskList.length !== 0){
        let eachTask = '';
        for(let task of taskList){
            eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning d-flex flex-row justify-content-between">
                            <span class="font-weight-bold">${task}</span>
                            <button class="close" style="border: 0px; padding: 0px; ">
                                <i class="fa fa-window-close"></i>
                            </button>
                        </li>`;
        }
        taskListEl.innerHTML = eachTask;
    }
};

displayTasks();


// remove Tasks
let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click', function(event){
    let targetElemet = event.target;
    if(targetElemet.classList.contains('fa-window-close')){
        let actualEl = targetElemet.parentElement.parentElement;
        let selectTask = actualEl.innerText;
        console.log(selectTask);
    }
    else{
        console.log('no');
    }
});