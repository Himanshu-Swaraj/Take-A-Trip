document.addEventListener("DOMContentLoaded", function() {
    var popupButtons = document.querySelectorAll(".see-more-btn");
    var popupBoxes = document.querySelectorAll(".popup-box");

    popupButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var popupId = button.getAttribute("data-popup");

            // Check if any popup is already open
            var isOpen = Array.from(popupBoxes).some(function(popup) {
                return popup.style.display === "flex";
            });

            // If no popup is open, open the clicked one
            if (!isOpen) {
                openPopup(popupId);
            }
        });
    });

    function openPopup(popupId) {
        var popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = "flex";
        }
    }

    var closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            closeAllPopups();
        });
    });

    function closeAllPopups() {
        popupBoxes.forEach(function(popup) {
            popup.style.display = "none";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
  // Get all thumbnail elements
  var thumbnails = document.querySelectorAll('.thumbnail');

  // Add click event handler to each thumbnail
  thumbnails.forEach(function (thumbnail) {
      thumbnail.addEventListener('click', function () {
          // Get the popup box ID associated with the clicked thumbnail
          var popupId = thumbnail.getAttribute('data-popup');

          // Get the big image element inside the corresponding popup box
          var bigImage = document.getElementById('bigImage' + popupId.slice(-1));

          // Set the big image source to the clicked thumbnail's source
          bigImage.src = thumbnail.src;
      });
  });
});


// Function to start reading the content aloud
function startReadingAloud() {
    const content = document.body.textContent;
    const utterance = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(utterance);
  }

  // Function to stop the text-to-speech
  function stopReadingAloud() {
    speechSynthesis.cancel();
  }