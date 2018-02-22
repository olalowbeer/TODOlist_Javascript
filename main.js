const active = document.getElementById('active');
const finished = document.getElementById('finished');
const addButton = document.getElementById('addButton');
const input = document.getElementById('input');
const listItems = document.querySelectorAll('li');
const deleteAllButton = document.getElementById('deleteAllButton');


//If you press Enter
input.addEventListener('keydown', function handleKeydown(e) {
    var text = input.value;

    if (e.keyCode === 13) {
        if (text !== '') {
            addList();
            input.value = '';
        } else {
            alert("ERROR, you must type");
        }
    }
});



//add item to todolist(active)
addButton.addEventListener('click', addList);

function addList() {

    const li = document.createElement('li')
    li.id = "items";
    li.innerText = input.value;
    document.getElementById('active').appendChild(li);
    
    
     //adds a donebutton to active list
    var doneButton = document.createElement('button');
    const t = document.createTextNode("Done");
    doneButton.id = "doneButton";
    doneButton.appendChild(t);
    active.appendChild(doneButton);

    //Adds a deletebutton to active list
    var deleteButton = document.createElement('button');
    const d = document.createTextNode("delete");
    deleteButton.id = "deleteButton";
    deleteButton.appendChild(d);
    active.appendChild(deleteButton);
    input.value = '';




    //deletes buttons and todotext
    deleteButton.addEventListener('click', deleteTodo);

    function deleteTodo() {
        active.removeChild(li);
        active.removeChild(deleteButton);
        active.removeChild(doneButton);

    }

    //deletes everything
    deleteAllButton.addEventListener('click', deleteAll);

    function deleteAll() {
        active.innerHTML = '';
        finished.innerHTML = '';

    }


    //Moves todo from todolist to finished list
    doneButton.addEventListener('click', moveDone);

    function moveDone() {
        active.removeChild(li);
        active.removeChild(doneButton);
        active.removeChild(deleteButton);
        finished.appendChild(li);
        finished.appendChild(deleteButton);
    }

    //  Deletes finished list and button   
    deleteButton.addEventListener('click', deleteDoneList);

    function deleteDoneList() {
        finished.removeChild(li);
        finished.removeChild(deleteButton);


    }


}
