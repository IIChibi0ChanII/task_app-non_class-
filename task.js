const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to render all tasks to the page
function renderTasks() {
  taskList.innerHTML = ""; // Clear the list first

  tasks.forEach((taskText, index) => {
    const toDo = document.createElement("li");
    toDo.innerHTML = `${taskText} <button class="delete">Delete</button>`;//loop 

    // Delete button logic
    toDo.querySelector(".delete").addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1); // Remove from array
        saveTasks(); // Save to local storage
        renderTasks(); // Re-render
      }
    });

    taskList.appendChild(toDo);
  });
}

// Function to add a task
function addToList() {
  let toDoText = taskInput.value.trim();

  if (toDoText === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(toDoText); // Add to array
  saveTasks(); // Save to local storage
  renderTasks(); // Re-render

  taskInput.value = "";
  taskInput.focus();
}

// Event listeners
addTask.addEventListener("click", addToList);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addToList();
  }
});

// On page load, render existing tasks
renderTasks();
