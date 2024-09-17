document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.getAttribute('data-width'); // Get the data-width attribute
        if (width) {
            bar.style.width = width; // Apply the width
        }
    });
});
