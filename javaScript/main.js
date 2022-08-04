window.addEventListener('DOMContentLoaded', ()=> {
  /*----- Variables -----*/
  const $cardContainer = document.getElementById('card-container');
  const $cardContent = document.getElementById('card-content');

  const $rating = document.getElementById('rating');
  const $thanks = document.getElementById('thanks');

  const $buttonSubmit = document.getElementById('btn-submit');
  const $selectedRating = document.getElementById('selected-rating');
  let $currentPressedButton = null;
  let currentValueRating = null; 

  /*----- Functions -----*/
  const resetForm = () => {
    $currentPressedButton.checked = false;
    $buttonSubmit.disabled = true;
  }

  const changeContentCard = () => {
    $cardContent.removeChild($rating);
    $thanks.classList.remove('hidden');
  }

  const handlerButtonsRating = ($selectedOption) => {
    currentValueRating = $selectedOption.value;
    $currentPressedButton = $selectedOption;
    $buttonSubmit.removeAttribute('disabled');
  }

  const handlerButtonSumbit = () => {
    $cardContainer.style.animation = 'ascend 3s linear';
    setTimeout(()=> {
      resetForm();
      changeContentCard();
      $selectedRating.textContent = currentValueRating;
    },1300);
  }
  
  /*----- Code Execution -----*/
  document.addEventListener("click",(e) => {
    if(e.target.matches('.c-rating__option input')){
      handlerButtonsRating(e.target);
    }
    if(e.target.matches('#btn-submit')) {
      e.preventDefault();
      handlerButtonSumbit();
    }
  });

  document.addEventListener("touchend",(e) => {
    if(e.target.matches('.c-rating__option input')){
      handlerButtonsRating(e.target);
    }
    if(e.target.matches('#submit')) {
      e.preventDefault();
      handlerButtonSumbit();
    }
  });
});