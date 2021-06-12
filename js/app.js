const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const timeVar = document.querySelector('.time');
const dateVar = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode'
  }else{
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode'
  }
});

// funcion que corre el reljo
const runClock = () => {
  const time = new Date();

  const day = time.getDay();
  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const month = time.getMonth();
  const date = time.getDate()
  const hoursClock = time >= 13 ? hr % 12 : hr;
  const ampm = hr >= 12 ? 'PM' : 'AM'

  let hrPosition = (hr * 359) / 12 + (min * (360 / 60)) / 12;
  let minPosition = (min * 359) / 60 + (sec * (360 / 60)) / 60;
  let secPosition = (sec * 359) / 60;

  console.log(secPosition);

  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

  timeVar.innerHTML = `${hoursClock}:${min < 10 ? `0${min}` : min} ${ampm}`
  dateVar.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
};

setInterval(runClock, 1000);



