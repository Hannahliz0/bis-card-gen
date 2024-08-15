// Takes the ids from user input from the forms of name, title, website, number, email, address
const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
// const websiteInput = document.querySelector('#website');
const numberInput = document.querySelector('#number');
const emailInput = document.querySelector('#email');
const addressInput = document.querySelector('#address');

// Takes the ids from the save and history buttons
const saveBtnInput = document.querySelector('#saveBtn');
const historyBtnInput = document.querySelector('#historyBtn');

// Takes the ids from the different card displays
const roundBtn = document.querySelector('#roundBtn');
const rectangleBtn = document.querySelector('#rectangleBtn');
const leafBtn = document.querySelector('#leafBtn');
const frontCard = document.querySelector('#frontCard');
const backCard = document.querySelector('#backCard');
const cardColor = document.querySelector('#card-color-picker');
const fontColor = document.querySelector('#font-color-picker');
const control = document.querySelector('#control-section');

// Takes the ids from the font options 
const font = document.querySelector('#name-font');
const tfont = document.querySelector('#title-font');
// const wfont = document.querySelector('#website-font');
const nfont = document.querySelector('#num-font');
const efont = document.querySelector('#email-font');
const afont = document.querySelector('#add-font');

// Takes the ids from the bis card span elements
const prevName = document.querySelector('#previewName');
const prevTitle = document.querySelector('#previewTitle');
// const prevWeb = document.querySelector('#previewWebsite');
const prevNum = document.querySelector('#previewNumber');
const prevEm = document.querySelector('#previewEmail');
const prevAdd = document.querySelector('#previewAddress');

// Takes the ids from the size options 
const namesize = document.querySelector('#nameSize');
const titleSize = document.querySelector('#titleSize');
const numSize = document.querySelector('#numSize');
const emailSize = document.querySelector('#emailSize');
const addSize = document.querySelector('#addSize');

// When the save button is pressed, collect the inputted data and store it into a local storage
saveBtnInput.addEventListener('click', function (event) {
  event.preventDefault();

  // Created a user object of the users input
  const userInput = {
    name: nameInput.value,
    title: titleInput.value,
    // website: websiteInput.value,
    number: numberInput.value,
    email: emailInput.value,
    address: addressInput.value,
  };

  // Created a local storage
  localStorage.setItem('userInput', JSON.stringify(userInput));

  location.reload();
});

//When the button titled "history" is clicked, a modal is populated with set information
historyBtnInput.addEventListener('click', function (event) {
    event.preventDefault();

    // Pulled the saved input from object userInput, convert it into a JSON string and access the values of the object
    const userJson = localStorage.getItem('userInput');
    const userObject = JSON.parse(userJson)

    //Adds text to the different span ids and changes the specific value within the object userInput 
    document.getElementById('modalUsername').textContent = userObject.name;

    document.getElementById('modalTitle').textContent = userObject.title;

    // document.getElementById('modalWebsite').textContent = userObject.website;

    document.getElementById('modalNumber').textContent = userObject.number;

    document.getElementById('modalEmail').textContent = userObject.email;

    document.getElementById('modalAddress').textContent = userObject.address;

    //Displays the div with id "myModal" that is currently display = none 
    const modal = document.getElementById('myModal');
    modal.style.display = "block";
})

// If the element with the id of "close" is clicked the display will close
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
});

// If anything other than the modal is selected the display will close
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Using the addEventListener, passing text through the set id, whenever an input is coming in
nameInput.addEventListener('input', function() {
    document.getElementById('previewName').textContent = this.value
});

titleInput.addEventListener('input', function() {
    document.getElementById('previewTitle').textContent = this.value
});

// websiteInput.addEventListener('input', function() {
//     document.getElementById('previewWebsite').textContent = this.value
// });

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
    frontCard.style.borderRadius = '20%';
    backCard.style.borderRadius = '20%';
});

rectangleBtn.addEventListener('click', function() {
    frontCard.style.borderRadius = '0%';
    backCard.style.borderRadius = '0%';
});

leafBtn.addEventListener('click', function() {
    frontCard.style.borderTopLeftRadius = '0%';
    frontCard.style.borderBottomRightRadius = '0%';
    frontCard.style.borderTopRightRadius = '20%';
    frontCard.style.borderBottomLeftRadius = '20%';
    backCard.style.borderTopLeftRadius = '0%';
    backCard.style.borderBottomRightRadius = '0%';
    backCard.style.borderTopRightRadius = '20%';
    backCard.style.borderBottomLeftRadius = '20%';
});
 