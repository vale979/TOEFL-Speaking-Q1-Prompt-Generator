//thinking time
var timeLeft = 15;
    var elem = document.getElementById("cntdown");
    var startedSpeak = false;
    var timerId = setInterval(countdown, 1000);
    var finishedSpeak = false;

    function countdown(){
        if((timeLeft == -1) && (startedSpeak == false)){
            //clearTimeout(timerId);
            elem.innerHTML = "Start speaking now!";
            startedSpeak = true;

            timeLeft = 45;
            //isi dengan kode utk mulai countdown speaking time
        }else if ((timeLeft == -1) && (startedSpeak == true)){
            finishedSpeak = true;
            clearTimeout(timerId);
            elem.innerHTML = "Time's up!"+"</br>"+"<a href='practice.html' class='btn btn-lg btn-primary'>Practice Again!</a>";
        }
        else if (finishedSpeak == false){
            if(startedSpeak == false){
                elem.innerHTML = timeLeft + " seconds remaining to prepare your answer"; 
                timeLeft--;
            }
            else{
                elem.innerHTML = timeLeft + " seconds remaining to speak";
                timeLeft--;
            }
        }
        else{

        }
    }