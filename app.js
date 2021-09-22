
const form = document.querySelector("#add-to-do");
const input = document.querySelector("#to-do");
const list = document.querySelector("#todo-list");




const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < savedTodos.length; i++) {
  //let newTodo = document.createElement("li");
  //newTodo.innerText = savedTodos[i].task;
  const newTodo = createTodoListItem(savedTodos[i].task);
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
   
  
  list.appendChild(newTodo);
};


list.addEventListener('click', function(e){
    const elm = e.target.parentNode;
    elm.parentNode.removeChild(elm)

    let clickedListItem = e.target;
    
    for(let i = 0; i < savedTodos.length; i++) {
        if (savedTodos[i].task === clickedListItem.innerText) {
            savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
            localStorage.setItem("todos", JSON.stringify(savedTodos));
        }       
    }

});

function createTodoListItem(text){
    const newToDo = document.createElement("li");
    const removeBtn = document.createElement("button");
    newToDo.innerText = text;
    removeBtn.value = "Complete!";

    newToDo.appendChild(removeBtn);
    return newToDo;
    
    
}



form.addEventListener('submit',function(e){
    e.preventDefault();

    //const newToDo = document.createElement('li');
    //const removeBtn = document.createElement("button");
    
   // newToDo.innerText = input.value;
    //input.value = ''
    //removeBtn.innerText = 'Complete!'
    
    
    //list.appendChild(newToDo);
    //form.reset();

    const newToDo = createTodoListItem(input.value);
    list.appendChild(newToDo);
    savedTodos.push({ task: newToDo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(savedTodos));

});




