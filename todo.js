let todoList = document.querySelector('.todo-list');
let todoInput = document.querySelector('.todo-input');
let todobtn = document.querySelector('.todo-button');
let trashList = document.querySelector('.trash-list');



// Event listener for adding a new todo
todobtn.addEventListener('click', addTodo);

function addTodo(e) {
    e.preventDefault(); // Prevent form submission
    let newTask = todoInput.value.trim()
    if (newTask === '') {
        console.log('Please enter a task');
        return;
    }
    // Create a new list item
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    let todoText = document.createElement('span');
    todoText.textContent = newTask;
    todoText.classList.add('todo-text');


    let trashBtn = document.createElement('button');
    trashBtn.textContent = 'Trash';
    trashBtn.classList.add('trash-btn');
    // Add event listener to the delete button
    trashBtn.addEventListener('click', trashTodo)
    // Append the delete button to the todo item
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(trashBtn);
    
    // Append the new item to the todo list
    todoList.appendChild(todoItem);


    console.log(`Adding todo: ${newTask}`);

    // Clear the input field
    todoInput.value = '';

}


// Function to move a todo to the trash
function trashTodo(e) {
    let trashItem = e.target.parentElement;
    trashItem.removeChild(e.target); // Remove the delete button
    let todoText = trashItem.querySelector('.todo-text');
    todoText.style.textDecoration = "line-through";

    trashItem.classList.remove("todo-item");
    trashItem.classList.add("trash-item")
    
    let trashBtns = document.createElement('span');
    trashBtns.classList.add('trash-btns');
    let restoreBtn = document.createElement('button');
    restoreBtn.textContent = 'Restore';
    restoreBtn.classList.add('restore-btn');
     // 
    restoreBtn.addEventListener('click', restoreTodo)

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    // Add event listener to the delete button
   deleteBtn.addEventListener('click', deleteTodo)

    trashBtns.appendChild(restoreBtn);
    trashBtns.appendChild(deleteBtn);
    trashItem.appendChild(trashBtns);    
    trashList.appendChild(trashItem);
    console.log(`Trash todo: ${trashItem.textContent}`);

}

function restoreTodo(e) {
    let restoreItem = e.target.parentElement.parentElement;
    restoreItem.removeChild(restoreItem.querySelector('.trash-btns')); // Remove the delete button
    let todoText = restoreItem.querySelector('.todo-text');
    todoText.style.textDecoration = "none";
    restoreItem.classList.remove("trash-item");
    restoreItem.classList.add("todo-item");

    let trashBtn = document.createElement('button');
    trashBtn.textContent = 'Trash';
    trashBtn.classList.add('trash-btn');
    // Add event listener to the delete button
    trashBtn.addEventListener('click', trashTodo)
    // Append the delete button to the todo item
    restoreItem.appendChild(trashBtn);
    
    // Append the new item to the todo list

    todoList.appendChild(restoreItem);
    console.log(`Restoring todo: ${newTask}`);
}

function deleteTodo(e) {
    let deleteItem = e.target.parentElement.parentElement;
    trashList.removeChild(deleteItem); // Remove the todo item from the trash list
    console.log(`Deleted todo: ${deleteItem.textContent}`);
}