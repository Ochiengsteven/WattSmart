const btn = document.getElementById('btn');
const button = document.querySelectorAll('.toggle-btn');

const minuteClick = () => {
    btn.style.left = '110px';
}

const hourClick = () => {
    btn.style.left = '0';
}