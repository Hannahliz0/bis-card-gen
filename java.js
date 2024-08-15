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
const prevWeb = document.querySelector('#previewWebsite');
const prevNum = document.querySelector('#previewNumber');
const prevEm = document.querySelector('#previewEmail');
const prevAdd = document.querySelector('#previewAddress');
const logoImage = document.querySelector('#logoImage');

// Takes the ids from the size options 
const namesize = document.querySelector('#nameSize');
const titleSize = document.querySelector('#titleSize');
const numSize = document.querySelector('#numSize');
const emailSize = document.querySelector('#emailSize');
const addSize = document.querySelector('#addSize');

// Get the logo upload input and back card elements
const logoUpload = document.querySelector('#logo-upload');
const backcard = document.querySelector('#backCard');

// When the save button is pressed, collect the inputted data and store it into a local storage
saveBtnInput.addEventListener('click', function (event) {
  event.preventDefault();

  // Created a user object of the users input
  const userInput = {
    name: nameInput.value,
    title: titleInput.value,
    website: websiteInput.value,
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
    frontCard.style.borderRadius = '15px';
    backCard.style.borderRadius = '15px';
});

rectangleBtn.addEventListener('click', function() {
    frontCard.style.borderRadius = '0%';
    backCard.style.borderRadius = '0%';
});

leafBtn.addEventListener('click', function() {
    frontCard.style.borderTopLeftRadius = '0%';
    frontCard.style.borderBottomRightRadius = '0%';
    frontCard.style.borderTopRightRadius = '15px';
    frontCard.style.borderBottomLeftRadius = '15px';
    backCard.style.borderTopLeftRadius = '0%';
    backCard.style.borderBottomRightRadius = '0%';
    backCard.style.borderTopRightRadius = '15px';
    backCard.style.borderBottomLeftRadius = '15px';
});

cardColor.addEventListener('input', function() {
    frontCard.style.backgroundColor = this.value;
    backCard.style.backgroundColor = this.value;
});

fontColor.addEventListener('input', function() {
    prevName.style.color = this.value;
    prevTitle.style.color = this.value;
    prevNum.style.color = this.value;
    prevEm.style.color = this.value;
    prevAdd.style.color = this.value;
});
 
// Using the addEventListener, we styled the font showing in the preview is changed when a different value is inputted
font.addEventListener('click', function (event) {
    prevName.style.fontFamily = font.value
});
tfont.addEventListener('click', function (event) {
    prevTitle.style.fontFamily = tfont.value
});
// wfont.addEventListener('click', function (event) {
//     prevWeb.style.fontFamily = wfont.value
// });
nfont.addEventListener('click', function (event) {
    prevNum.style.fontFamily = nfont.value
});
efont.addEventListener('click', function (event) {
    prevEm.style.fontFamily = efont.value
});
afont.addEventListener('click', function (event) {
    prevAdd.style.fontFamily = afont.value
});


// Using the addEventListener,the font showing in the preview is changed when a different size is selected
namesize.addEventListener('click', function (event) {
    prevName.style.fontSize = namesize.value
});

titleSize.addEventListener('click', function (event) {
    prevTitle.style.fontSize = titleSize.value
});

numSize.addEventListener('click', function (event) {
    prevNum.style.fontSize = numSize.value
});

emailSize.addEventListener('click', function (event) {
    prevEm.style.fontSize = emailSize.value
});

addSize.addEventListener('click', function (event) {
    prevAdd.style.fontSize = addSize.value
});

// Event listener for the logo upload input
logoUpload.addEventListener('change', function() {
    const file = this.files[0];
    
    if (file) {
        const reader = new FileReader();

        // When the file is read, set the background image of the back card
        reader.onload = function(e) {

            prevWeb.style.backgroundImage = `url(${e.target.result})`;
            prevWeb.style.backgroundSize = '300px';  // Ensure the image covers the entire card
            prevWeb.style.backgroundPosition = 'center';  // Center the image
            prevWeb.style.backgroundRepeat = 'no-repeat';  // Prevent image from repeating 
            backCard.style.backgroundImage = `url(${e.target.result})`;
            backCard.style.backgroundSize = '300px';  // Ensure the image covers the entire card
            backCard.style.backgroundPosition = 'center';  // Center the image
            backCard.style.backgroundRepeat = 'no-repeat';  // Prevent image from repeating 
        };

        reader.readAsDataURL(file); // Read the image file as a data URL
    }
});

function makeDraggable(element, container) {
    let isDragging = false;
  
    element.onmousedown = function (event) {
      event.preventDefault();
  
      // Calculate the initial mouse position relative to the top-left corner of the element
      let shiftX = event.clientX - element.getBoundingClientRect().left;
      let shiftY = event.clientY - element.getBoundingClientRect().top;
  
      // Get the bounding box of the container
      let containerRect = container.getBoundingClientRect();
  
      // Function to move the element within the container
      function moveAt(pageX, pageY) {
        // Calculate the new position
        let newLeft = pageX - shiftX;
        let newTop = pageY - shiftY;
  
        // Ensure the element stays within the left and right boundaries
        newLeft = Math.max(containerRect.left, Math.min(newLeft, containerRect.right - element.offsetWidth));
        
        // Ensure the element stays within the top and bottom boundaries
        newTop = Math.max(containerRect.top, Math.min(newTop, containerRect.bottom - element.offsetHeight));
  
        // Apply the new position
        element.style.left = newLeft - containerRect.left + "px";
        element.style.top = newTop - containerRect.top + "px";
      }
  
      // Start dragging on mousemove
      function onMouseMove(event) {
        if (!isDragging) {
          isDragging = true;
        }
        moveAt(event.pageX, event.pageY);
      }
  
      // Attach the mousemove event listener to the document
      document.addEventListener("mousemove", onMouseMove);
  
      // Stop moving when mouse is released
      document.onmouseup = function () {
        if (isDragging) {
          document.removeEventListener("mousemove", onMouseMove);
          isDragging = false; // Reset dragging flag
        }
      };
    };
  
    element.ondragstart = function () {
      return false; // Disable built-in dragging behavior
    };
  }
  
  // Initialize the draggable functionality within a container
  makeDraggable(prevWeb, frontCard);
  makeDraggable(prevName, frontCard);
  makeDraggable(prevTitle, frontCard);
  makeDraggable(prevNum, frontCard);
  makeDraggable(prevEm, frontCard);
  makeDraggable(prevAdd, frontCard);