// Select the form, input field, and task list elements
const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const taskList = document.querySelector("#task-list");

// Add an event listener to the form for submitting new tasks
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the value of the input field and trim any leading/trailing whitespace
  const taskText = input.value.trim();
  // If the input field is not empty
  if (taskText !== "") {
    // Create a new list item element with the task text and delete button
    const task = document.createElement("li");
    task.innerHTML = `
      <span class="task">${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    // Append the new list item to the task list
    taskList.appendChild(task);
    // Reset the input field value to an empty string
    input.value = "";
  }
});

// Add an event listener to the task list for deleting tasks
taskList.addEventListener("click", (event) => {
  // If the clicked element is a delete button
  if (event.target.classList.contains("delete-button")) {
    // Remove the corresponding list item element from the task list
    event.target.parentElement.remove();
  }
});
