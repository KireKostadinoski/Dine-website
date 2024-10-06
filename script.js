const familyGathBtn = document.getElementById('familyGatheringBtn');
const specialEventsBtn = document.getElementById('specialEventsBtn');
const socialEventsBtn = document.getElementById('socialEventsBtn');

const bookingType = document.getElementById('bookingType');
const bookingDesc = document.getElementById('bookingDesc');
const bookingImage = document.getElementById('bookingImage');

const buttons = [familyGathBtn, specialEventsBtn, socialEventsBtn]; // All buttons in an array for easy access

// Generic function to update booking content
function updateBooking(type, desc, imgSrc, activeBtn) {
    bookingType.innerHTML = type;
    bookingDesc.innerHTML = desc;
    bookingImage.src = imgSrc;

   
    buttons.forEach(btn => btn.classList.add("opacity-60"));

    // Set the active button's opacity to full
    activeBtn.classList.remove("opacity-60");
}

// Event Listeners
familyGathBtn.addEventListener('click', () => {
    updateBooking(
        "Family Gathering",
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        "./images/homepage/family-gathering-desktop.jpg",
        familyGathBtn
    );
});

specialEventsBtn.addEventListener('click', () => {
    updateBooking(
        "Special Events",
        "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
        "./images/homepage/special-events-desktop.jpg",
        specialEventsBtn
    );
});

socialEventsBtn.addEventListener('click', () => {
    updateBooking(
        "Social Events",
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
        "./images/homepage/social-events-desktop.jpg",
        socialEventsBtn
    );
});
