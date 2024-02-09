import rough from 'roughjs/bundled/rough.esm';

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function createHighlightCanvas(element) {
    // Create a canvas element
    let canvas = document.createElement('canvas');
    // Set canvas properties
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.pointerEvents = 'none'; // So it doesn't block your text

    // Append canvas to the body or a specific container
    document.body.appendChild(canvas);

    // Rough.js drawing
    let rc = rough.canvas(canvas);
    let bounds = element.getBoundingClientRect();
    rc.rectangle(bounds.left - 5, bounds.top - 5, bounds.width + 10, bounds.height + 10, {
        fill: 'blue',
        fillStyle: 'solid' // This makes the rectangle filled with a solid color
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Call this function with the element you want to highlight
    createHighlightCanvas(document.getElementById('highlight-text'));
});

// Adjust canvas on window resize
window.addEventListener('resize', function() {
    // Remove the old canvas
    let oldCanvas = document.querySelector('canvas');
    if (oldCanvas) {
        oldCanvas.parentNode.removeChild(oldCanvas);
    }
    // Create a new canvas
    createHighlightCanvas(document.getElementById('highlight-text'));
});