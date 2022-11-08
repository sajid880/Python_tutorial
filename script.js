const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');




const newYears = "1 jan 2023";
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = math.floor(totalseconds / 3600 / 24);
    const hours =  math.floor(totalseconds / 3600) % 24;
    const mins =  math.floor(totalseconds / 60) % 60;
    const seconds =  math.floor(totalseconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formateTime(hours);
    minsE1.innerHTML = formateTime(mins);
    secondsE1.innerHTML = formateTime(seconds);

}
function formateTime(time){
    return time < 10 ? '0${time}' : time;
}
// initial call
countdown();

setInterval(countdown, 1000);