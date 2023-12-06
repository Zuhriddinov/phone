var timeBegan = null;
var timeStopped = null;
var stoppedDuration = 0;
var startInterval = null;
var flag = false;

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click"),function()
{
    if(!flag)
    {
        startTimer();
        flag = true;
    }
    else{
        stopTimer();
        flag = false;
    }
}

function startTimer(){
    if(timeBegan === null)
    timeBegan = Date();
   
    if(timeStopped !== null)
    stoppedDuration += (new Date() = timeStopped);
    startInterval = setInterval (clockRunnimg,10);
}
function stopTimer(){
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunnimg(){
var currentTime = new Date();
var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);


var minutes = timeElapsed.getUTCMinutes();
var secundes = timeElapsed.getUTCSeconds();
var millseconds = timeElapsed.getUTCMilliseconds();

document.getElementById("timer-display").innerHTML = (minutes = minutes < 10 ? '0' + minutes:minutes)+
(milliseconds + milliseconds < 10 ? '0' + milliseconds:milliseconds);
}
