const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
  if (todoInput.value.trim() !== "") {
    const newItem = document.createElement("li");
    newItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todoInput.value.trim();

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-button";
    deleteBtn.addEventListener("click", function () {
      newItem.remove();
    });

    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    newItem.appendChild(deleteBtn);

    todoList.appendChild(newItem);
    todoInput.value = "";
  }
});
