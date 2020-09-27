var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript", "Cry in btwn"];


renderTodos()

function renderTodos(){
  todoList.innerHTML = "";
  for (i=0; i<todos.length; i++) {
      //index starts
      var todoItem =  todos[i];
      //to add li in ul
      var liElement = document.createElement ("li");
      liElement.textContent = todoItem;
      liElement.setAttribute ("data-index", i);
      todoList.appendChild(liElement);
      var liButton = document.createElement ("button");
      liButton.textContent = "Complete";
      liElement.appendChild(liButton);
      
      liButton.addEventListener ("click", deleteButton);
      todoCountSpan.textContent = todos.length;
}
  }    

function deleteButton (event) {
  var button = this.parentElement.dataset.index;
  todos.splice (button, 1);
  renderTodos();
  console.log ()
}





todoInput.addEventListener ("keydown", newTodos);
function newTodos (event) {
  if (event.key === "Enter"){
    event.preventDefault();
    var newDo = todoInput.value; 

    if (newDo !== "") {
      todos.push(newDo);
      renderTodos()
      todoInput.value = "";
    }
  }
}







/*
it accesses the `data-index` value and removes that todo element from the list.

## Hint

* You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.

4.
# Local Storage Todo's

In this activity, we will working on storing our todos in `localStorage`. 

## Instructions

* Inside the `init()` function:

  * Set a variable called `storedTodos` that retrieves the todos from `localStorage` and parses the JSON string to an object.

  * Check if the todos were retrieved from `localStorage` and if so, set a `todos` variable with the `storedTodos`.

  * Lastly, render the todos to the DOM.

* Inside the `storeTodos()` function:

  * Stringify and set the "todos" key in `localStorage` to the `todos` array.

## Hint

* You will need to use `JSON.stringify` and `JSON.parse`.
*/