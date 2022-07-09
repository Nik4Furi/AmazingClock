// Set the Alarm sound 
var audio = document.createElement('audio');
audio.setAttribute('src', 'clock.mp3');

setInterval(() => {
    audio.play();
    audio.loop = true;
    let d = new Date();

    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;

}, 1000);

