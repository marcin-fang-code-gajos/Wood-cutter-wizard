function displayMessage() {
    alert('Hello, this is a random message!');
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('svg-files.json')
        .then(response => response.json())
        .then(svgFiles => {
            const container = document.getElementById("svgContainer");
            svgFiles.forEach(file => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", `svgs/${file}`, true);
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
});