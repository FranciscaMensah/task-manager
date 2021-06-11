//TASK MANAGER JavaScript Structure

//create table element
let taskDiv = document.getElementById('task-div');
let taskTable = document.createElement('table');
    taskTable.setAttribute('id', 'task-table');
// create function to call all the sub functions 
function onAddTask (){
    getFormInput();
    resetForm();
}
//get form input and store in object
function getFormInput(){
    let taskObject = {};
    taskObject.title = document.getElementById('task-name').value;
    taskObject.time = document.getElementById('task-time').value;
    taskObject.body = document.getElementById('task-body').value;
    displayTask(taskObject);
}
//display tasks in table
function displayTask(taskOb){
    taskTable.innerHTML += `
        <tr>
            <td>${taskOb.title}</td>
            <td>${taskOb.time}</td>
            <td>${taskOb.body}</td>
            <td><button type='submit' onclick='deleteTask(this)' class='btn-danger'>Delete</button></td>
        </tr> `;
    taskDiv.appendChild(taskTable);
}
//Delete task on button click
function deleteTask(delBtn){
    if(confirm('Delete Task?')){
    selectedRow = delBtn.parentElement.parentElement.rowIndex;
    taskTable.deleteRow(selectedRow);
    }
}
//reset form input fields
function resetForm(){
    document.getElementById('task-name').value = "";
    document.getElementById('task-time').value = "";
    document.getElementById('task-body').value = "";
}


//create dashboard component
//create two buttons and a para component and display it in the
//dashboard
//create form component with just html