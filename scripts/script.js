// // Exercise 2
// const myButton = document.querySelector(".button");
// console.log(myButton);

// //Exercise 3
// myButton.style.backgroundColor = "blue";
// myButton.addEventListener("click", function(){
//     alert("Something")
// })

// Exercise 4
// const myTodo = document.querySelector("#new-todo");
// myTodo.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const text = e.target.elements.text.value.trim()
//     console.log(text)
// });

//error
// function addValue(e){
//     e.preventDefault()
//     const text = e.target.elements.text.value.trim()
//     console.log(text)
// }

// //Exercise 5
// const todos = []
// function createTodo(text) {
//     todos.push(text)
// }

// document.querySelector('#new-todo').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const text = e.target.elements.text.value.trim()

//     if (text.length > 0) {
//         createTodo(text)
//         e.target.elements.text.value = ''
//     }

//     console.log(todos)
// })

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
