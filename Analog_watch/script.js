let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let h_rotation = 30 * hh + mm/2;
    let m_rotation = 6 * mm;
    let s_rotation = 6 * ss;

    hour.style.transform = `rotate(${h_rotation}deg)`;
    min.style.transform = `rotate(${m_rotation}deg)`;
    sec.style.transform = `rotate(${s_rotation}deg)`;
}

setInterval(displayTime, 1000);