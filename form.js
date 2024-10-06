document.getElementById('submitReservation').addEventListener('click', function() {
    // Input fields
    const nameInputElement = document.getElementById('nameInput');
    const emailInputElement = document.getElementById('emailInput');
    const nameInput = nameInputElement.value.trim();
    const emailInput = emailInputElement.value.trim();
    const dayInput = document.getElementById('dayInput').value.trim();
    const monthInput = document.getElementById('monthInput').value.trim();
    const yearInput = document.getElementById('yearInput').value.trim();
    const hourInput = document.getElementById('hourInput').value.trim();
    const minInput = document.getElementById('minInput').value.trim();
    
    // Error messages
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const dateError = document.getElementById('dateError');
    const timeError = document.getElementById('timeError');

    // Elements for pick date and pick time
    const pickDate = document.getElementById('pickDate');
    const pickTime = document.getElementById('pickTime');

    let isValid = true;

    // Validate name input
    if (!nameInput) {
        nameError.classList.remove('hidden');
        nameInputElement.classList.add('border-[#d64242]', 'placeholder:text-[#d64242]'); // Change border and placeholder color
        isValid = false;
    } else {
        nameError.classList.add('hidden');
        nameInputElement.classList.remove('border-[#d64242]', 'placeholder:text-[#d64242]'); // Reset colors
    }

    // Validate email input with regex pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput)) {
        emailError.classList.remove('hidden');
        emailInputElement.classList.add('border-[#d64242]', 'placeholder:text-[#d64242]'); // Change border and placeholder color
        isValid = false;
    } else {
        emailError.classList.add('hidden');
        emailInputElement.classList.remove('border-[#d64242]', 'placeholder:text-[#d64242]'); // Reset colors
    }

    // Validate date input (all fields must be filled)
    if (!dayInput || !monthInput || !yearInput) {
        dateError.classList.remove('hidden');
        pickDate.classList.add('text-[#d64242]'); // Change color for pick date
        isValid = false;
    } else {
        dateError.classList.add('hidden');
        pickDate.classList.remove('text-[#d64242]'); // Reset color
    }

    // Validate time input (both hour and minute must be filled)
    if (!hourInput || !minInput) {
        timeError.classList.remove('hidden');
        pickTime.classList.add('text-[#d64242]'); // Change color for pick time
        isValid = false;
    } else {
        timeError.classList.add('hidden');
        pickTime.classList.remove('text-[#d64242]'); // Reset color
    }

    // If the form is valid, proceed with submission (or any action)
    if (isValid) {
        alert("Reservation successfully submitted!");
        // Perform form submission or further actions here
    }
});



//people counter

// Initial people count set to 4
let peopleCount = 4;

// Select the elements from the DOM
const peopleCountElement = document.getElementById('peopleCount');
const increaseButton = document.getElementById('increasePeople');
const decreaseButton = document.getElementById('decreasePeople');

// Event listener for increasing the number of people
increaseButton.addEventListener('click', function() {
    peopleCount++; // Increment the counter
    updatePeopleCount(); // Update the displayed count
});

// Event listener for decreasing the number of people
decreaseButton.addEventListener('click', function() {
    if (peopleCount > 1) { // Ensure the count doesn't go below 1
        peopleCount--; // Decrement the counter
        updatePeopleCount(); // Update the displayed count
    }
});

// Function to update the counter in the UI
function updatePeopleCount() {
    // Update the peopleCountElement's text content
    peopleCountElement.textContent = `${peopleCount} people`;
    
}
