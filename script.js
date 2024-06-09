function displayMessage() {
    alert('Hello, this is a random message!');
}

function loadFile(filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            console.log('File loaded successfully:', data);
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    // Test the function by loading the svg-files.json from the correct path
    loadFile('public/svg-files.json');
});