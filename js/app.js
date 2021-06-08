const hourVar = document.querySelector('.hour');
const minuteVar = document.querySelector('.minute');
const secondVar = document.querySelector('.second');
const timeVar = document.querySelector('.time');
const dateVar = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode'
  }else
    html.classList.add('dark');
    e.target.innerHTML = 'Ligth Mode'
});