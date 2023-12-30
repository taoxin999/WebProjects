const text = document.getElementById('text');
const input = document.getElementById('input');
const timer = document.getElementById('timer');
const count = document.getElementById('count');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
 let startTime, endTime;
let isPaused = false;
 input.addEventListener('input', startTimer);
pause.addEventListener('click', togglePause);
reset.addEventListener('click', resetTest);
 function startTimer() {
	if(!startTime) {
		startTime = new Date();
	}
 	if(input.value === text.innerText) {
		endTime = new Date();
		showResults();
	}
}
 function showResults() {
	const timeDiff = endTime - startTime;
	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
 	timer.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	count.innerText = `${input.value.length}/${text.innerText.length}`;
	input.disabled = true;
}
 function togglePause() {
	isPaused = !isPaused;
 	if(isPaused) {
		pause.innerText = 'Resume';
		endTime = new Date();
	} else {
		pause.innerText = 'Pause';
		startTime = new Date() - (endTime - startTime);
		endTime = undefined;
	}
}
 function resetTest() {
	startTime = undefined;
	endTime = undefined;
	isPaused = false;
	input.value = '';
	input.disabled = false;
	timer.innerText = '00:00:00';
	count.innerText = `0/${text.innerText.length}`;
	pause.innerText = 'Pause';
}