function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = 'checkbox';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.prepend(checkbox);

    // create delete button
    let deleteButton = document.createElement('button');

    // create text node
    let buttonText = document.createTextNode('Delete Item');

    // attach text to button
    deleteButton.appendChild(buttonText);

    newLi.id = newLi.textContent;

    // attach button to newLi
    newLi.appendChild(deleteButton);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    deleteButton.addEventListener('click', event => {
      let liToRemove = event.target.parentNode;
      liToRemove.remove();
    });
  });
}

window.onload = function() {
  onReady();
};
