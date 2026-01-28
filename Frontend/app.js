
const API_URL = '/tasks';


const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


async function loadTasks() {
const response = await fetch(API_URL);
const tasks = await response.json();


taskList.innerHTML = '';
tasks.forEach(task => {
const li = document.createElement('li');
li.textContent = task.title;
taskList.appendChild(li);
});
}


addBtn.addEventListener('click', async () => {
const title = taskInput.value;



if (title.trim() === '') return;


await fetch(API_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title })
});


taskInput.value = '';
loadTasks();
});


loadTasks();