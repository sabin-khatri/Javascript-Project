document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');


    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = taskInput.value;

        if (taskText === '') return;


        const taskItem = document.createElement('li');

        const taskContent = document.createElement('span');
        taskContent.innerText = taskText;

        const taskControls = document.createElement('div');


        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', function () {
            editTask(taskItem, taskContent);
        });


        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        taskControls.appendChild(editBtn);
        taskControls.appendChild(removeBtn);

        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskControls);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    });


    function editTask(taskItem, taskContent) {
        const newTaskInput = document.createElement('input');
        newTaskInput.type = 'text';
        newTaskInput.value = taskContent.innerText;
        taskItem.insertBefore(newTaskInput, taskContent);
        taskItem.removeChild(taskContent);


        const saveBtn = document.createElement('button');
        saveBtn.innerText = 'Save';
        saveBtn.classList.add('edit-btn');
        saveBtn.addEventListener('click', function () {
            taskContent.innerText = newTaskInput.value;
            taskItem.insertBefore(taskContent, newTaskInput);
            taskItem.removeChild(newTaskInput);
            taskItem.removeChild(saveBtn);
        });

        taskItem.appendChild(saveBtn);
    }
});
