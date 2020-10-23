function remainingtime(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t/1000)%60);
    var minutes = Math.floor((t/1000/60)%60);
    var hours = Math.floor((t/(1000*60*60))%24);
    var days = Math.floor((t/(1000*60*60*24)));
    return{
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function initializeclock(id, endtime){
    var clock = document.getElementById(id);
    var dayspan = clock.querySelector('.days');
    var hourspan = clock.querySelector('.hours');
    var minutespan = clock.querySelector('.minutes');
    var secondspan = clock.querySelector('.seconds');

    function updateclock() {
        var t = remainingtime(endtime);
        dayspan.innerHTML = t.days;
        hourspan.innerHTML = ('0' + t.hours).slice(-2);
        minutespan.innerHTML = ('0' + t.minutes).slice(-2);
        secondspan.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total <= 0){
            clearInterval(timeinterval);
        }
    }

    updateclock();
    var timeinterval = setInterval(updateclock, 1000)
}

var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeclock('clockdiv', deadline);