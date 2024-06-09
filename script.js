function displayMessage() {
    alert('Hello, this is a random message!');
}

function loadSvgFiles(jsonPath) {
    fetch(jsonPath)
        .then(response => response.json())
        .then(svgFiles => {
            const container = document.getElementById("svgContainer");
            svgFiles.forEach(file => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", `${file}`, true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        const svgElement = document.createElement("div");
                        svgElement.innerHTML = xhr.responseText;
                        container.appendChild(svgElement);
                    }
                };
                xhr.send();
            });
        })
        .catch(error => console.error('Error loading SVG files:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    // Call the function with the path to the JSON file
    loadSvgFiles('public/svg-files.json');
});