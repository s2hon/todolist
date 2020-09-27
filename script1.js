var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript", "Cry in btwn"];

var data = 0;

//create for loops to call todos//
//write out function to create li
function renderTodos () {
    for (i=0; i < todos.length; i++) {
        var todoItem = todos [i];
        var liElement = document.createElement ("li");
        liElement.textContent = todoItem;
        todoList.appendChild(liElement);
    }
}
//todo count
todoCountSpan.textContent = todos.length;

renderTodos();

//Add an event listener so that when a user hits enter, the value from the todo input field is pushed to our todo array.
todoInput.addEventListener ("keydown", newTodos)


function newTodos(event) {
    
    if (event.key === "Enter") {
        event.preventDefault(); //prevents form from refreshing

        if (todoInput.value !== "") {
            var liElement = document.createElement ("li"); //create li variable
            liElement.textContent = todoInput.value; //retreive the text typed from value key        
            todoList.appendChild(liElement);//append liElementxw
            var liButton = document.createElement ("button"); //Generate a button
            liButton.textContent = "Complete" //button label "Complete"
            liElement.appendChild(liButton);//append button to your `li`
            todos.push (todoInput.value);
            //increase data count for each new index
            todoCountSpan.textContent = todos.length;
            //reset the Input form
            todoInput.value = null;
    
            liButton.addEventListener ("click", removeTodos) //add event listener for click
    
            function removeTodos (event) {
                todoList.removeChild(liElement)
            }
        }
    }

   

}




//* Once the value has been added to the array, clear the input field and re-render the todo list.



