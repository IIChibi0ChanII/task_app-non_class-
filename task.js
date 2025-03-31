const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addToList() {
  let toDoText = taskInput.value.trim();

  if (toDoText === "") {
    alert("Please enter a task");
    return;
  }

  const toDo = document.createElement("li");
  toDo.innerHTML = `${toDoText} <button class="delete">Delete</button>`;

  taskList.appendChild(toDo);

  taskInput.value = "";

  taskInput.focus();

  toDo.querySelector(".delete").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      toDo.remove();
    }
  });
}

addTask.addEventListener("click", addToList);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addToList();
  }
});