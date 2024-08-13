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

historyBtnInput.addEventListener('click', function (event) {
    const display = localStorage.getItem('userInput')

    if (display) {
        const usersInput = JSON.parse(display);

        const popupContent = `
            <p><strong>Username:</strong> ${usersInput.name}</p>
            <p><strong>Title:</strong> ${usersInput.title}</p>
            <p><strong>Website:</strong> ${usersInput.website}</p>
            <p><strong>Number:</strong> ${usersInput.number}</p>
            <p><strong>Email:</strong> ${usersInput.email}</p>
            <p><strong>Address:</strong> ${usersInput.address}</p>
        `;
        const popupWindow = window.open("", "Popup", "width=400,height=300");
        popupWindow.document.write(`<html><head><title>History</title></head><body>${popupContent}</body></html>`);
    } else {
        alert ('No History')
    }
})

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