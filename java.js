
const roundButton = document.getElementById('roundButton');
const rectangleButton = document.getElementById('rectangleButton');
const frontCard = document.getElementById('frontCard');
const backCard = document.getElementById('backCard');
const card = document.getElementById('card');


addEventListener('click', (event) => {
  if (event.target === roundButton) {
    frontCard.style.borderRadius = '50%';
    backCard.style.borderRadius = '50%';
    alert('round button clicked');
  } else if (event.target === rectangleButton) {
    frontCard.style.borderRadius = '0%';
    backCard.style.borderRadius = '0%';
    alert('rec button clicked');
  }
});

