function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';
    id++;

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = toDo.complete;

      const deleteButton = document.createElement('button');
      const buttonText = document.createTextNode('Delete Item');
      deleteButton.appendChild(buttonText);

      newLi.classList.add('mdl-list__item');
      newLi.classList.add('mdl-list__item-primary-content');

      newLi.id = toDo.id;

      deleteButton.classList.add('mdl-button');
      deleteButton.classList.add('mdl-js-button');
      deleteButton.classList.add('mdl-button--accent');

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.prepend(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  const list = document.getElementById('toDoList');

  list.addEventListener('click', event => {
    let liToRemove = event.target.parentNode;
    let ul = liToRemove.parentNode;
    let result = toDos.filter(el => el.id !== liToRemove.id);
    toDos = result;
    ul.removeChild(liToRemove);
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
};
