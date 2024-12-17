const playButton = document.getElementById("pbtn");
const lapButton = document.getElementById("lbtn");
const resetButton = document.getElementById('rbtn');
const second = document.getElementById('sec');
const cbtn = document.getElementById('clearbutton');

let isPlay = false;
let secCounter = 0;
let lapitem = 0;

const toggleButton =() =>{
    lapButton.style.visibility = 'visible';
    resetButton.style.visibility = 'visible';
}

const play = () =>{
    if(!isPlay){
        playButton.innerHTML = 'Pause';
        sec = setInterval(()=>{
            secCounter++;
            toTimeString(secCounter);
        }, 1000);
        isPlay = true;
    }
    else{
        playButton.innerHTML = 'Play';
        clearInterval(sec);
        isPlay = false;
    }
    toggleButton();
}
const reset = () =>{
    if(playButton.innerHTML == 'Pause'){
        play();
    }
    clearAll();
    secCounter = 0;
    lapitem = 0;
    second.innerHTML = "00:00:00"
    lapButton.style.visibility = 'hidden';
    resetButton.style.visibility = 'hidden';
}

const lap = () =>{
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timestamp = document.createElement('span');

    const laps = document.getElementById('laps');

    li.setAttribute('class', 'lap-item');
    number.setAttribute('class', 'number');
    timestamp.setAttribute('class', 'time-stamp');

    number.innerHTML = '#'+ ++lapitem + "   ";
    timestamp.innerHTML = second.innerHTML;

    li.append(number, timestamp);
    laps.append(li);
}

const clearAll = () =>{
    const laps = document.getElementById('laps');
    laps.innerHTML = ' ';
    lapitem = 0;
}

function toTimeString(totalSeconds) {
    const totalMs = totalSeconds * 1000;
    const result = new Date(totalMs).toISOString().slice(11, 19);
    second.innerHTML = result;
}