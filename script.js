let clockelement=document.getElementById("clock");
function updateClock(){
    let now=new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if(minutes<10){
    minutes="0"+minutes;
    }
    let seconds = now.getSeconds();
    if(seconds<10){
        seconds="0"+seconds;
    }
    let currentTime= hours+":"+minutes+":"+seconds;
    clockelement.textContent=">_ "+currentTime;
}
updateClock();
setInterval(updateClock,1000);