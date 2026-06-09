setInterval(function () {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#time");
    timeText.innerHTML = currentTime;
}, 1000)