// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');
    const checkIn = document.getElementById('check-in');
    const checkOut = document.getElementById('check-out');
    const loadingModal = document.getElementById('loading-modal');
    

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (checkIn.value >= checkOut.value) {
            alert('Check-in date should be before the check-out date.');
        } else {
            // Display the loading modal
            loadingModal.style.display = 'block';

            // Simulate searching for available data (you should replace this with your actual data retrieval logic)
            setTimeout(function () {
                loadingModal.style.display = 'none';
                alert('Form submitted successfully!');
            }, 2000); // Simulate 2 seconds of loading
        }
    });
});
document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting
    $('#loading-modal').modal('show'); // Show the Bootstrap modal
    setTimeout(function () {
      $('#loading-modal').modal('hide'); // Hide the Bootstrap modal after a delay (e.g., after fetching data)
    }, 2000); // Adjust the delay as needed
  });
// JavaScript for Page Up Button
const pageUpButton = document.getElementById("pageUpBtn");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        // If the user has scrolled down more than 100px, show the button
        pageUpButton.style.display = "block";
    } else {
        // Otherwise, hide the button
        pageUpButton.style.display = "none";
    }
});

pageUpButton.addEventListener("click", () => {
    // Scroll back to the top of the page smoothly when the button is clicked
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// JavaScript for Read Aloud Button
const readAloudButton = document.getElementById("readAloudBtn");
const stopReadAloudButton = document.getElementById("stopReadAloudBtn");
let speechSynthesisUtterance = null;

readAloudButton.addEventListener("click", () => {
    const contentToRead = document.body.textContent; // Read the entire content of the webpage
    const speech = new SpeechSynthesisUtterance(contentToRead);

    // Optionally, you can configure speech options (rate, pitch, voice, etc.) as needed.
    // For example:
    // speech.rate = 1; // Speech speed
    // speech.pitch = 1; // Speech pitch

    // Start the speech synthesis
    window.speechSynthesis.speak(speech);
});
stopReadAloudButton.addEventListener("click", () => {
    // Stop speech synthesis
    window.speechSynthesis.cancel();
    
    // Show Read Aloud button and hide Stop Read Aloud button
  
    readAloudButton.style.display = "inline-block";
});


