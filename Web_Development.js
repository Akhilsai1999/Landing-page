document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tasks').innerHTML = localStorage.getItem('tasks') || '';
});

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    if (taskName && deadline && priority) {
        var taskElement = document.createElement('li');
        taskElement.innerHTML = '<strong>' + taskName + '</strong>' + '-' + 'Deadline: ' + deadline + ' Priority: ' + priority;
        
        document.getElementById('tasks').appendChild(taskElement);       

        // Save tasks to local storage
        const currentTasks = localStorage.getItem('tasks') || '';
        localStorage.setItem('tasks', currentTasks + taskElement.outerHTML);

        // Clear input fields
        document.getElementById('taskName').value = '';
        document.getElementById('deadline').value = '';
        document.getElementById('priority').value = '';

    } else {
        alert('Please fill in all fields.');
    }
}

function clearTaskList() {
    // Clear the 'tasks' element and localStorage
    document.getElementById('tasks').innerHTML = '';
    localStorage.removeItem('tasks');
}