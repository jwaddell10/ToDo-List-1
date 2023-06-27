import './style.css';
import { newGoalDom } from './domfunctionality';

const displayGoals = (() => {
  function displayGoalsForm() {
    document.querySelector('#popUpForm').style.display = 'block';
  }

  function cancelForm() {
    document.querySelector('#popUpForm').style.display = 'none';
  }

  newGoalDom.popUpForm.addEventListener('click', () => {
    displayGoalsForm();
  });

  newGoalDom.cancelBtn.addEventListener('click', () => {
    cancelForm();
  });
  return {
    displayGoalsForm,
    cancelForm,
    newGoalDom,
  };
})();

// eslint-disable-next-line import/prefer-default-export
export { displayGoals };
