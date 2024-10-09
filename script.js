let taskToDelete = null;

    document.getElementById('addTaskBtn').addEventListener('click', function () {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value;

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const taskContainer = document.getElementById('taskContainer');

        // Create task container div
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-container');

        // Create li element for task
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<span>${taskText}</span> <button class="delete-btn">Delete</button>`;

        // Create timestamp
        const timestamp = new Date().toLocaleString();
        const timestampSpan = document.createElement('span');
        timestampSpan.classList.add('timestamp');
        timestampSpan.textContent = `Added on: ${timestamp}`;

        // Append task and timestamp to task container
        taskDiv.appendChild(taskItem);
        taskDiv.appendChild(timestampSpan);

        // Append task container to the main task list
        taskContainer.appendChild(taskDiv);

        // Clear input
        taskInput.value = '';

        // Show notification
        showNotification();

        // Handle delete button functionality
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskToDelete = taskDiv;
            showModal();
        });
    });

    function showModal() {
        const modal = document.getElementById('deleteModal');
        modal.style.display = 'block';
    }

    function hideModal() {
        const modal = document.getElementById('deleteModal');
        modal.style.display = 'none';
    }

    document.getElementById('confirmDelete').addEventListener('click', function () {
        if (taskToDelete) {
            taskToDelete.remove();
            taskToDelete = null;
            hideModal();
        }
    });

    document.getElementById('cancelDelete').addEventListener('click', function () {
        hideModal();
        taskToDelete = null;
    });

    function showNotification() {
        const notification = document.querySelector('.notification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }