// CRUD = Create, Read, Update, and Delete
var submitTodoBtn = document.getElementById('submit-todo');
var todoItems = document.getElementById('todo-items');

// CREATE CRUD Action
function createAction(newTodo) {
  /* 
    Second, let's create the components of our Delete Button
    <span class="delete">X</span>
    which will be a child of our List Item <li></li> on the page

    1. Create a <span></span> element
    2. Create a piece of text (called a Text Node) to make "X"
    3. Add (append) a child to <span>, which is our text (Text Node) of "X"
    4. Add a class (className) of "delete" to the span element
    5. Put it all together as by combining <span> with the value
        of our Text Node and adding a class name of "delete"
  */
  var deleteBtn = document.createElement('SPAN');
  var deleteBtnValue = document.createTextNode('X');
  deleteBtn.appendChild(deleteBtnValue);
  deleteBtn.className = 'delete';
  console.log(deleteBtn);

  /*
    Third, we build out the components of our todoItem as a List Item
    1. Create an <li></li> element
    2. Turn the newTodo parameter into a HTML text element
    3. Append the new todo item (todoItem) into it
    4. Append our delete button (deleteBtn) into the List Item
  */
  var todoItem = document.createElement('LI');
  newTodo = document.createTextNode(newTodo.value);
  todoItem.appendChild(newTodo);
  todoItem.appendChild(deleteBtn);
  console.log(todoItem);

  /*
    Now that we have an <li>Todo Item<span class="delete">X</span></li>
    we need to put it on the page under our Unordered List (<ul>) with
    the ID of "todo-items." We'll just simply append it!
  */
  todoItems.appendChild(todoItem);

  // Now we will clear the form
  todoItem.value = '';
}

// UPDATE CRUD Action
function updateAction(e) {
  e.target.classList.toggle('checked');
}

// DELETE CRUD Action
function deleteAction(e) {
  console.log(e);
  e.target.parentNode.remove();
}


// Event Handlers
submitTodoBtn.addEventListener('click', function(event) {
  event.preventDefault();
  var newTodo = document.getElementById('todo-input');
  createAction(newTodo);
});

// UPDATE
todoItems.addEventListener('click', function(event) {
  updateAction(event);
});

// DELETE - Create an Event Handler for each Delete button
/*
  Store ALL of the items in an array. When an item at a specific
  index (first, second, etc.) is clicked, delete the <li> at the
  position in the list
*/
var deleteBtns = document.getElementsByClassName('delete');

for (var position = 0; position < deleteBtns.length; position++) {
  deleteBtns[position].addEventListener('click', function (event) {
    deleteAction(event);
  });
}