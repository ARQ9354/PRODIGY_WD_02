let timerDisplay = document.getElementById("displayResult");
let startbtn = document.getElementById("StartBtn");
let stopbtn = document.getElementById("StopBtn");
let resetbtn = document.getElementById("ResetBtn");
let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;   

startbtn.addEventListener("click", function(){
    if(timerId !== null){
        clearInterval(timerId);
    } 
    timerId = setInterval(startTimer,10);
});

stopbtn.addEventListener("click", function(){
    clearInterval(timerId);
});

resetbtn.addEventListener("click", function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00';

});
    


function startTimer(){
    msec++;
    if (msec== 100){
        msec = 0;
        secs++;
        if(secs==60){
            secs = 0;
            mins++;
        }
    }

    // let msecString = msec < 10 ? '0${msec}': msec;

    let msecString;
    if(msec<10){
        msecString = `0${msec}`;
    }
    else{
        msecString = msec;
    }

    let secsString;
    if(secs<10){
        secsString = `0${secs}`;
    }
    else{
        secsString = secs;
    }

    let minsString;
    if(mins<10){
        minsString = `0${mins}`;
    }
    else{
        minsString = mins;
    }

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}




