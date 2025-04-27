document.addEventListener("keydown", function(event) {
    // Display the key pressed
    document.getElementById("keyDisplay").textContent = `You pressed: ${event.key}`;
});
