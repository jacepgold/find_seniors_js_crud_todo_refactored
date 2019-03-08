var submitTodoBtn = document.getElementById('submit-todo');
var todoItems = document.getElementById('todo-items');

// CREATE CRUD Action
function createAction(newTodo) {
  // Build the Delete button, <span class="delete">X</span>
  var deleteBtn = document.createElement('SPAN');
  var deleteBtnValue = document.createTextNode('X');
  deleteBtn.appendChild(deleteBtnValue);
  deleteBtn.className = 'delete';
  console.log(deleteBtn);

  // Build the List Item, <li>Todo Item <span class="delete">X</span>
  var todoItem = document.createElement('LI');
  newTodo = document.createTextNode(newTodo.value);
  todoItem.appendChild(newTodo);
  todoItem.appendChild(deleteBtn);
  console.log(todoItem);

  // Append the new todo item to the page
  todoItems.appendChild(todoItem);

  // Clear the form
  todoItem.value = '';
}

// UPDATE CRUD Action
function updateAction(e) {
  // Toggle class="checked" on the <li> component to apply styling
  e.target.classList.toggle('checked');
}

// DELETE CRUD Action
function deleteAction(e) {
  // Remove the parent element (li) of the clicked element (span)
  e.target.parentNode.remove();
}


// Event Handlers
submitTodoBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var newTodo = document.getElementById('todo-input');
  createAction(newTodo);
});

// UPDATE
todoItems.addEventListener('click', function (event) {
  updateAction(event);
});

// DELETE - Create an Event Handler for each Delete button on the site
var deleteBtns = document.getElementsByClassName('delete');

for (var position = 0; position < deleteBtns.length; position++) {
  deleteBtns[position].addEventListener('click', function (event) {
    deleteAction(event);
  });
}