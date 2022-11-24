var CountDownDate = new Date("Jan 1, 2023 00:00:00").getTime(); // when countdown will end

var counting = setInterval(function(){
    var now = new Date().getTime();
    var time = CountDownDate - now;

    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(time < 0) {
        clearInterval(counting);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML =  "00";
        document.getElementById("minutes").innerHTML =  "00";
        document.getElementById("seconds").innerHTML =  "00";

    }

}, 1000);
