const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const websiteInput = document.querySelector('#website');
const numberInput = document.querySelector('#number');
const emailInput = document.querySelector('#email');
const addressInput = document.querySelector('#address');
const saveBtnInput = document.querySelector('#saveBtn');
const historyBtnInput = document.querySelector('#historyBtn');

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
    const display = localStorage.getItem('userInput')

    if (display) {
        const usersInput = JSON.parse(display);

        const popupContent = `
            <p><strong>Username:</strong> ${usersInput.name}</p>
            <p><strong>Title:</strong> ${usersInput.title}</p>
            <p><strong>Content:</strong> ${usersInput.website}</p>
            <p><strong>Username:</strong> ${usersInput.number}</p>
            <p><strong>Title:</strong> ${usersInput.email}</p>
            <p><strong>Content:</strong> ${usersInput.address}</p>
        `;
        const popupWindow = window.open("", "Popup", "width=400,height=300");
        popupWindow.document.write(`<html><head><title>History</title></head><body>${popupContent}</body></html>`);
    } else {
        alert ('No History')
    }
})