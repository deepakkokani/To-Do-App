const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask()
{
    if(inputBox.value === '')
    {
        //alert("You must write something");
        emptyInputNotification()
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskAddedNotification()
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        taskRemovedNotification() 
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

function taskAddedNotification()
{
    Swal.fire({
      title: 'Task Added',
      text: 'Your Task has been successfully added!!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    });
}

function taskRemovedNotification() 
{
    Swal.fire({
        title: 'Task Removed',
        text: 'Your Task has been successfully removed!!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
    });
}

function emptyInputNotification() {
    Swal.fire({
        title: 'Empty Input',
        text: 'You must write something before adding a task!',
        icon: 'error',
        customClass: {
            confirmButton: 'alert-button'
        }
    });
}

showTask();