

let nameuser=document.getElementById('nameuser')
nameuser.innerHTML=localStorage.getItem('userName')

let taskInput = document.getElementById('task-input')

let taskbutton = document.getElementById('taskbutton')
taskbutton = addEventListener('click', function () {
    console.log(taskInput.value);
    let task = {
        title: taskInput.value,
        apiKey: '665b07b83a4f9505aebed766'
    }
    addTodo(task)
})


async function addTodo(task) {

    let response = await fetch(`https://todos.routemisr.com/api/v1/todos`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'content-type': 'application/json' }
    })
    response = await response.json()
    console.log(response);
    if (response.message == 'success') {
        getallTodo()

    }

}


// displayTodo



async function getallTodo() {

    let response = await fetch(`https://todos.routemisr.com/api/v1/todos/665b07b83a4f9505aebed766`)
    response = await response.json()
    console.log(response);
    if (response.message == 'success') {

        displayTodo(response.todos)

    }
}

getallTodo()
function displayTodo(data) {
    let cartona = '';
    
    for (let i = 0; i < data.length; i++) {
        

        cartona += `
        
        <div class="task ${data[i].completed ? 'bg-danger' : ''} my-3 d-flex justify-content-between w-75 mx-auto shadow p-3  align-items-center rounded-3">
        <div class="">
            <p class="task-text ${data[i].completed ? 'text-decoration-line-through' : ''}">${data[i].title}</p>
        </div>
        
        <div class="">
            <i onclick="MarkTodo('${data[i]._id}')" class="fa-regular fa-circle-check mx-2 ${data[i].completed ? 'd-none' : ''}"></i>
            <i onclick="deleteTodo('${data[i]._id}')" class="fa-solid fa-trash"></i>
        </div>
    </div>
        
        `



    }
    document.getElementById('tasks').innerHTML = cartona;
   


}



async function deleteTodo(id) {
    let response = await fetch(`https://todos.routemisr.com/api/v1/todos`, {
        method: 'DELETE',
        body: JSON.stringify({ todoId: id }),
        headers: { 'content-type': 'application/json' }
    })
    response = await response.json()
    console.log(response);
    if (response.message == 'success') {
        getallTodo()

    }
}



async function MarkTodo(id) {
    let response = await fetch(`https://todos.routemisr.com/api/v1/todos`, {
        method: 'PUT',
        body: JSON.stringify({ todoId: id }),
        headers: { 'content-type': 'application/json' }
    })
    response = await response.json()
    console.log(response);
    if (response.message == 'success') {
        getallTodo()

    }
}