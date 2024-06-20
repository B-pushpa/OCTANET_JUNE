document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        newTaskInput.value = '';
        newTaskInput.focus();
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
