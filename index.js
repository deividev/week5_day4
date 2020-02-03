const list = document.getElementById('list');

const inputNode = document.getElementById('input');
inputNode.addEventListener('keydown', addTodoEnter);




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
    input.value = '';
}
function addDeleteBtnElement () {
    const btnDelete = document.createElement('button');
    btnDelete.appendChild(document.createTextNode('Delete'));
    btnDelete.addEventListener("click", deleteElement, {onde : true});
    btnDelete.classList.add('action-btn');
    return btnDelete;
}
function addEditBtnElement () {
    const btnEdit = document.createElement('button');
    btnEdit.appendChild(document.createTextNode('Edit'));
    btnEdit.addEventListener("click", editElement, {onde : true});
    btnEdit.classList.add('action-btn');
    return btnEdit;
}
function addDoneBtnElement () {
    const btnDone = document.createElement('button');
    btnDone.appendChild(document.createTextNode('Done'));
    btnDone.addEventListener("click", doneElement, {onde : true})
    btnDone.classList.add('action-btn');
    return btnDone;
}

function addSaveBtnElement () {
    const btnSave = document.createElement('button');
    btnSave.appendChild(document.createTextNode('Save'));
    btnSave.addEventListener("click", saveElement, {onde : true});
    btnSave.classList.add('action-btn');
    return btnSave;
}
function deleteElement(event) {
    //TODO Borrar el elemento li desde el cual se dispara el evento.
    //Otra forma de hacerlo
    //const li = e.target.parentElement;
    //const ul = li.parentElement;
    //ul.removeChild(li);
    list.removeChild(event.currentTarget.parentElement);
}
function doneElement(event) {
    //TODO Cambiar el color de fondo del elemento li desde el cual se dispara el evento de rojo a verde.
    //li.style.background = "#02db3c"
    const li = event.target.parentElement;
    li.classList.add('check');
    event.target.parentElement.removeChild(event.currentTarget);
}
function editElement(event) {
    const li = event.target.parentElement;
    const arr = li.childNodes;
    const liText = li.childNodes[0];
    const btnDone = li.childNodes[1];
    const btnEdit = li.childNodes[2];
    const btnDelete = li.childNodes[3];
    const btnSave = addSaveBtnElement();
    const input = document.createElement('input');
    input.setAttribute("id", "inputEdit");
    input.value = liText.textContent;
    li.removeChild(liText);
    li.insertBefore(input, btnDone);
    li.removeChild(btnEdit);
    li.insertBefore(btnSave, btnDelete);
}
function saveElement(event) {
    const li = event.target.parentElement;
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
    //btnEdit.removeEventListener('click', editElement);
    li.insertBefore(btnEdit, btnSave);
    li.removeChild(btnSave);
}

function addTodoEnter(event) {
    if (event.keyCode === 13){
      addToDo();
    } 
}