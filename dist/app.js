const btn = document.getElementById('btn');
const button = document.querySelectorAll('.toggle-btn');

const minuteClick = () => {
    btn.style.left = '110px';
}

const hourClick = () => {
    btn.style.left = '0';
}

const mainMenu = document.querySelector('#mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const dashboard = document.querySelector('a[href="#dashboard"]');
const history = document.querySelector('a[href="#history"]');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
dashboard.addEventListener('click', close);
history.addEventListener('click', close);