 numOfSeconds = 3600;
// Update the count down every 1 second
function resetTimer()
{
   document.getElementById('reset').style.visibility="hidden";
    var x = setInterval(function() {    

        numOfSeconds = numOfSeconds - 1;
        var hours   = Math.floor(numOfSeconds / 3600 );
        var minutes = Math.floor(numOfSeconds % 3600 / 60);
        var seconds = numOfSeconds % 60;
    
        if(minutes>0){
            var time = [minutes, seconds].join(':');
        }
        else{
            var time = seconds
        }
        document.getElementById("counter").innerHTML = time;
    
      
      if (numOfSeconds < 0) {
        clearInterval(x);
        numOfSeconds = 3600;
        var audio = new Audio('splash.mp3');
        audio.play();
        document.getElementById('reset').style.visibility="visible";
        document.getElementById("counter").innerHTML = "DRINK YOUR WATER,\n STAY HYDRATED!";
      }
    }, 1000);

}
