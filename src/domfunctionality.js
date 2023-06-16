const newProjectDom = (() => {
  const popUpForm = document.querySelector('.add-to-list');
  const newTitle = document.querySelector('#title');
  const newDescription = document.querySelector('#description');
  const newDueDate = document.querySelector('#due-date');
  const newPriorityLevel = document.querySelector('#priority-level');
  const addToListBtn = document.querySelector('#addBtn');
  const form = document.querySelector('.form');
  return {
    popUpForm,
    newTitle,
    newDescription,
    newDueDate,
    newPriorityLevel,
    addToListBtn,
    form,
  };
})();

// eslint-disable-next-line import/prefer-default-export
export { newProjectDom };