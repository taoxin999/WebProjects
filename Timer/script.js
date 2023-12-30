// Get elements from the DOM
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
 // Set initial values
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
 // Function to start the timer
function startTimer() {
  interval = setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    timer.innerHTML =
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }, 1000);
}
 // Function to stop the timer
function stopTimer() {
  clearInterval(interval);
}
 // Function to reset the timer
function resetTimer() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerHTML = "00:00:00";
}
 // Add event listeners to buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);