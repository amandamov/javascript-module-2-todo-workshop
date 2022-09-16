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
    renderTodos()
}


//Exercise 6

function generateTodoDOM(todo) {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')

    todoText.textContent = todo
    containerEl.appendChild(todoText)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    return todoEl
}

// //Exercise 7

function renderTodos(todos) {
    const todoList = document.querySelector('#todos')
    todoList.innerHTML = ''

    todos.forEach((todo) => {
        todoList.appendChild(generateTodoDOM(todo))
    });
}

// // //Exercise 8
// // function renderTodos(todos) {
// //     if (todos.length > 0) {
// //         todos.forEach((todo) => {
// //             todoList.appendChild(generateTodoDOM(todo))
// //         });
// //     } else {
// //         const messageEl = document.createElement('p')
// //         messageEl.classList.add('empty-message')
// //         messageEl.documentElement.textContent = 'There are no todos to show'
// //         todoList.appendChild(messageEl)
// //     }
// // }

// // renderTodos(todos)

// // //Exercise 9
// function removeTodo(todoEl) {
//     const todoIndex = todos.findIndex(todoEl)
// }