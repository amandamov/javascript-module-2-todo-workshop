// //Exercise 2
// const myButton = document.querySelector(".button");
// console.log(myButton);

// //Exercise 3
// myButton.style.backgroundColor = "blue";
// myButton.addEventListener("click", function(){
//     alert("PERIGO")
// })

// //Exercise 4
// const myTodo = document.querySelector("#new-todo");
// myTodo.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const text = e.target.elements.text.value.trim()
//     console.log(text)
// });

// another solution
// const myTodo = document.querySelector("#new-todo");
// myTodo.addEventListener('submit', addValue)
// function addValue(e){
//     e.preventDefault()
//     const text = e.target.elements.text.value.trim()
//     console.log(text)
// }

// //Exercise 5
const todos = []
function createTodo(text) {
    todos.push(text)
}

const myTodo = document.querySelector("#new-todo");
myTodo.addEventListener('submit', addValue)
function addValue(e){
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    
    if (text.length > 0) {
        createTodo(text)
        e.target.elements.text.value = ''
    }

    // console.log(todos)
    renderTodos(todos)
}


//Exercise 6

function generateTodoDOM(todo) {

    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')

    //ex. 10 -->:
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.classList.add('button')
    removeButton.classList.add('button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todoText)
        renderTodos(todos)
    })
    //ex. 10 <--

    

    todoText.textContent = todo
    containerEl.appendChild(todoText)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    return todoEl
}

// //Exercise 7

// function renderTodos(todos) {
//     const todoList = document.querySelector('#todos')
//     todoList.innerHTML = ''

//     todos.forEach((todo) => {
//         todoList.appendChild(generateTodoDOM(todo))
//     });
// }

//Exercise 8
function renderTodos(todos) {
    const todoList = document.querySelector('#todos')
    todoList.innerHTML = ''
    if (todos.length > 0) {
        todos.forEach((todo) => {
            todoList.appendChild(generateTodoDOM(todo))
        });
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no todos to show'
        todoList.appendChild(messageEl)
    }
}

// //Exercise 9 and 10

function removeTodo(todoEl) {
   const todoIndex = todos.findIndex((todo) => {
        return todo.toLowerCase() === todoEl.textContent.toLowerCase()})

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}



