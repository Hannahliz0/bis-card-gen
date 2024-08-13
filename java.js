const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const websiteInput = document.querySelector('#website');
const numberInput = document.querySelector('#number');
const emailInput = document.querySelector('#email');
const addressInput = document.querySelector('#address');
const saveBtnInput = document.querySelector('#saveBtn');
const historyBtnInput = document.querySelector('#historyBtn');
const roundBtn = document.querySelector('#RoundBtn');
const rectangleBtn = document.querySelector('#RectangleBtn');
const frontCard = document.querySelector('#frontCard');
const backCard = document.querySelector('#backCard');

saveBtnInput.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  const userInput = {
    name: nameInput.value,
    title: titleInput.value,
    website: websiteInput.value,
    number: numberInput.value,
    email: emailInput.value,
    address: addressInput.value,
  };

  // TODO: Set new submission to local storage
  localStorage.setItem('userInput', JSON.stringify(userInput));

  alert('worked')
});

historyBtnInput.addEventListener('click', function (event) {
    event.preventDefault();

    const username = nameInput.value;
    document.getElementById('modalUsername').textContent = username;

    const modTitle = titleInput.value
    document.getElementById('modalTitle').textContent = modTitle;

    const modWebsite = websiteInput.value
    document.getElementById('modalWebsite').textContent = modWebsite;

    const modNum = numberInput.value
    document.getElementById('modalNumber').textContent = modNum;

    const modEmail = emailInput.value
    document.getElementById('modalEmail').textContent = modEmail;

    const modAddress = addressInput.value
    document.getElementById('modalAddress').textContent = modAddress;

    const modal = document.getElementById('myModal');
    modal.style.display = "block";
})

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

nameInput.addEventListener('input', function() {
    document.getElementById('previewName').textContent = this.value
});

titleInput.addEventListener('input', function() {
    document.getElementById('previewTitle').textContent = this.value
});

websiteInput.addEventListener('input', function() {
    document.getElementById('previewWebsite').textContent = this.value
});

numberInput.addEventListener('input', function() {
    document.getElementById('previewNumber').textContent = this.value
});

emailInput.addEventListener('input', function() {
    document.getElementById('previewEmail').textContent = this.value
});

addressInput.addEventListener('input', function() {
    document.getElementById('previewAddress').textContent = this.value
});

roundBtn.addEventListener('click', function () {
    frontCard.style.borderRadius = '50%';
    backCard.style.borderRadius = '50%';
    alert('worked')
});

rectangleBtn.addEventListener('click', function () {
    frontCard.style.borderRadius = '0%';
    backCard.style.borderRadius = '0%';
    alert('worked')
});
