document.addEventListener('DOMContentLoaded', function() {
    const fish = document.getElementById('fish');
    let mouseX = window.innerWidth / 2; // Initialize mouseX to the center of the viewport
    let mouseY = window.innerHeight / 2; // Initialize mouseY to the center of the viewport

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function moveFish() {
        const currentX = parseFloat(getComputedStyle(fish).left) || 0;
        const currentY = parseFloat(getComputedStyle(fish).top) || 0;

        // Calculate the distance between the current position and the mouse position
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;

        // Move the fish closer to the mouse position by a small fraction of the distance
        fish.style.left = currentX + dx * 0.1 + 'px';
        fish.style.top = currentY + dy * 0.1 + 'px';

        // Call the moveFish function again after a short delay
        requestAnimationFrame(moveFish);
    }

    moveFish(); // Start moving the fish
});