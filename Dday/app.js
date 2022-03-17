const Dday = document.querySelector("#Dday");

function setclock(){
    const time = new Date();
    const christmas = new Date(`Sun Dec 25 ${time.getFullYear()} 00:00:00`);
    const dday = christmas - time;
    const ddayMonth = Math.floor(dday/(1000*60*60*24));
    const ddayHour = String(Math.floor((dday / (1000*60*60)) % 24)).padStart("2",0);
    const ddayMinutes = String(Math.floor((dday / (1000*60)) % 60)).padStart("2",0);
    const ddaySeconds = String(Math.floor((dday / 1000) % 60)).padStart("2",0);
    Dday.innerText = `${ddayMonth}D / ${ddayHour}H / ${ddayMinutes}M / ${ddaySeconds}S`;
}

setclock();
setInterval(setclock, 1000);