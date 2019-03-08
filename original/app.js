
function addItem(e) {
  var li = document.createElement('LI');
  var todo = document.getElementById('myInput').value;
  var todoItem = document.createTextNode(todo);
  var span = document.createElement('SPAN');
  var txt = document.createTextNode("\u00D7");

  li.appendChild(todoItem);

  if (todo == '') {
    alert('Please fill out the form');
  } else {
    document.getElementById('list-items').appendChild(li);
  }

  document.getElementById('myInput').value = '';
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentElement.removeChild(div);
    }
  }
}

document.getElementById('submit').addEventListener(
  'click',
  addItem
);

// Update - Add a class of checked when an item is clicked
var list = document.querySelector('UL');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI')
    e.target.classList.toggle('checked');
}, false);

// Read - Simply display the item
/* Already in place when creating an item */

// Delete - Get rid of the item. We don't want it
var todos = document.getElementsByTagName('LI');
var i;

for (i = 0; i < todos.length; i++) {
  var span = document.createElement('SPAN');
  span.className = 'close';
  todos[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  }
}