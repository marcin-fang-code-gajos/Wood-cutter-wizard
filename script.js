function displayMessage() {
    alert('Hello, this is a random message!');
}

document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "lightbulb.svg", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("svgContainer").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});