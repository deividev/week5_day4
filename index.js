function addToDo () {
    const li = document.createElement('li');
    const input = document.getElementById('input');
    if (input.value === ''){
        alert("No dejes el campo vacio");
        return
    }   
    const text = document.createTextNode(input.value);
    const ul = document.getElementById('list');
    const btnDelete = addDeleteBtnElement();
    const btnEdit = addEditBtnElement();
    const btnDone = addDoneBtnElement();

    li.appendChild(text);
    li.appendChild(btnDelete);
    li.appendChild(btnEdit);
    li.appendChild(btnDone);
    li.classList.add("task");
    ul.appendChild(li);
}
function addDeleteBtnElement () {
    const btnDelete = document.createElement('button');
    btnDelete.appendChild(document.createTextNode('Delete'));
    btnDelete.addEventListener("click", deleteElement, true)
    return btnDelete;
}
function addEditBtnElement () {
    const btnEdit = document.createElement('button');
    btnEdit.appendChild(document.createTextNode('Edit'));
    btnEdit.addEventListener("click", editElement, true);
    return btnEdit;
}
function addDoneBtnElement () {
    const btnDone = document.createElement('button');
    btnDone.appendChild(document.createTextNode('Done'));
    btnDone.addEventListener("click", doneElement, true)
    return btnDone;
}

function addSaveBtnElement () {
    const btnSave = document.createElement('button');
    btnSave.appendChild(document.createTextNode('Save'));
    btnSave.addEventListener("click", saveElement, true);
    return btnSave;
}
function deleteElement(e) {
    //TODO Borrar el elemento li desde el cual se dispara el evento.
    const li = e.target.parentElement;
    const ul = li.parentElement;
    ul.removeChild(li);
}
function doneElement(e) {
    //TODO Cambiar el color de fondo del elemento li desde el cual se dispara el evento de rojo a verde.
    const li = e.target.parentElement;
    //li.style.background = "#02db3c"
    li.classList.add('check');

}
function editElement(e) {
    const li = e.target.parentElement;
    const arr = li.childNodes;
    const liText = li.childNodes[0];
    const btnDone = li.childNodes[1];
    const btnEdit = li.childNodes[2];
    const btnDelete = li.childNodes[3];
    const btnSave = addSaveBtnElement();
    const input = document.createElement('input');
    input.setAttribute("id", "inputEdit");
    li.removeChild(liText);
    li.insertBefore(input, btnDone);
    li.removeChild(btnEdit);
    li.insertBefore(btnSave, btnDelete);
}

function saveElement(e) {
    const li = e.target.parentElement;
    const input = li.childNodes[0];
    const inputValue = input.value;
    if (input.value === ''){
        alert("No dejes el campo vacio");
        return
    } 
    const btnSave = li.childNodes[2];
    const btnEdit = addEditBtnElement();
    const text = document.createTextNode(inputValue);
    li.insertBefore(text, input);
    li.removeChild(input);
    li.insertBefore(btnEdit, btnSave);
    li.removeChild(btnSave);
}
