const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const websiteInput = document.querySelector('#website');
const numberInput = document.querySelector('#number');
const emailInput = document.querySelector('#email');
const addressInput = document.querySelector('#address');
const saveBtnInput = document.querySelector('#saveBtn');
const historyBtnInput = document.querySelector('#historyBtn');
const roundBtn = document.querySelector('#roundBtn');
const rectangleBtn = document.querySelector('#rectangleBtn');
const leafBtn = document.querySelector('#leafBtn');
const card = document.querySelector('#card');

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

roundBtn.addEventListener('click', function() {
    card.style.borderRadius = '20%';
});

rectangleBtn.addEventListener('click', function() {
    card.style.borderRadius = '0%';
});

leafBtn.addEventListener('click', function() {
    card.style.borderTopLeftRadius = '0%';
    card.style.borderBottomRightRadius = '0%';
    card.style.borderTopRightRadius = '20%';
    card.style.borderBottomLeftRadius = '20%';
});
const logo-Upload = document.querySelector('#logo-Upload');
const card = document.querySelector('#card');

logo-Upload.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      card.style.backgroundImage = `url(${e.target.result})`;
      card.style.backgroundSize = 'cover'; // Ensure the logo covers the card
    };
    reader.readAsDataURL(file);
  }
});

const fontcolorpicker = document.querySelector('#font-polor-picker');
const cardColorPicker = document.querySelector('#card-color-picker');

fontcolorpicker.addEventListener('input', function() {
  card.style.color = this.value; // Change font color
});

cardColorPicker.addEventListener('input', function() {
  card.style.backgroundColor = this.value; // Change card color
});

logoUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        card.style.backgroundImage = `url(${e.target.result})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundBlendMode = 'overlay'; // Adjust blend mode to achieve fading effect
        card.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Optional: Use a semi-transparent background color
      };
      reader.readAsDataURL(file);
    }
  });
  