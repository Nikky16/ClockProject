console.log("This is project clock");

setInterval(() => {

    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hrot = 30 * htime + mtime / 2;
    mrot = 6 * mtime;
    srot = 6 * stime;

    hours = document.getElementById("hours");
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");

    hours.style.transform = `rotate(${hrot}deg)`;
    minutes.style.transform = `rotate(${mrot}deg)`;
    seconds.style.transform = `rotate(${srot}deg)`;

}, 1000);