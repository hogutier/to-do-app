function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    if (newToDoText.value) {
      // get the text
      let title = newToDoText.value;

      // create new li
      let newLi = document.createElement('li');

      // create new input
      let checkbox = document.createElement('input');

      // set the input's type to checkbox
      checkbox.type = 'checkbox';

      checkbox.classList.add('checkboxLi');

      // set the title
      newLi.textContent = title;

      // attach the checkbox to the li
      newLi.prepend(checkbox);

      newLi.classList.add('lisAdded');

      // create delete button
      let deleteButton = document.createElement('button');

      // create text node
      let buttonText = document.createTextNode('Delete Item');

      // attach text to button
      deleteButton.appendChild(buttonText);

      newLi.id = newLi.textContent;

      newLi.classList.add('mdl-list__item');
      newLi.classList.add('mdl-list__item-primary-content');

      deleteButton.classList.add('mdl-button');
      deleteButton.classList.add('mdl-js-button');
      deleteButton.classList.add('mdl-button--accent');

      // attach button to newLi
      newLi.appendChild(deleteButton);

      //attach the li to the ul
      toDoList.appendChild(newLi);

      // empty the input
      newToDoText.value = '';

      deleteButton.addEventListener('click', event => {
        let liToRemove = event.target.parentNode;
        if (event.target.previousElementSibling.checked) {
          liToRemove.remove();
        }
      });
    }
  });
}

window.onload = function() {
  onReady();
};
