// Dropdown Menu Hover Behavior
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseleave', function () {
        this.classList.remove('show');
        this.querySelector('.dropdown-menu').classList.remove('show');
    });

    dropdown.addEventListener('mouseenter', function () {
        this.classList.add('show');
        this.querySelector('.dropdown-menu').classList.add('show');
    });
});

// Scroll-to-Top Button
const scrollTopButton = document.getElementById('scrollTopButton');

// Show the button after scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Smooth scroll to the top when the button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// google map Modal logic //
document.addEventListener('DOMContentLoaded', function () {
    const googleMapLink = document.querySelector('[data-bs-target="#googleMapModal"]');
    const googleMapModal = new bootstrap.Modal(document.getElementById('googleMapModal'));

    // Click event for Google Map Link
    googleMapLink.addEventListener('click', function (e) {
        e.preventDefault();
        googleMapModal.show(); // Manually show the modal
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'), {
        backdrop: true, // Enables dismissal on clicking outside
        keyboard: true  // Enables dismissal with ESC key
    });
});

// WE tab Under Construction.
const popupModal = document.getElementById('popupModal');
const closePopup = document.getElementById('closePopup');

// Attach event listeners to buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        popupModal.classList.remove('hidden'); // Show popup
    });
});

// Close popup when "Close" button is clicked
closePopup.addEventListener('click', () => {
    popupModal.classList.add('hidden'); // Hide popup
});

// Show the custom alert modal
function showCustomAlert() {
    const modal = document.getElementById('customAlert');
    modal.classList.remove('hidden');
}

// Close the custom alert modal
function closeCustomAlert() {
    const modal = document.getElementById('customAlert');
    modal.classList.add('hidden');
}
