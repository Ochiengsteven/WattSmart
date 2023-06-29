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

// cost calculator
function calculatePowerPerMinute(wattage) {
    const powerPerMinute = (wattage / 1000) * (1 / 60);
    return powerPerMinute.toFixed(4);
}

function calculatePowerPerHour(powerPerMinute) {
    const powerPerHour = powerPerMinute * 60;
    return powerPerHour.toFixed(4);
}

function calculateCostminute(powerPerMinute) {
    const cost = powerPerMinute * 22;
    return cost.toFixed(2);
}

function calculateCosthour(powerPerHour) {
    const cost = (powerPerHour) * 22;
    return cost.toFixed(2);
}

document.getElementById('calculateBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const wattage = document.getElementById('wattage').value;

    const powerPerMinute = calculatePowerPerMinute(wattage);
    const powerPerHour = calculatePowerPerHour(powerPerMinute);
    const costHour = calculateCosthour(powerPerHour);
    const costMinute = calculateCostminute(powerPerMinute);

    document.getElementById('powerPerMinute').textContent = powerPerMinute + ' kWh';
    document.getElementById('costMinute').textContent = costMinute + ' Kshs';
    document.getElementById('powerPerHour').textContent = powerPerHour + ' kWh';
    document.getElementById('costHour').textContent = costHour + ' kshs';
});

// Display minutes and hours cost dynamically
const hourClickbtn = () => {
    const minuteCost = document.querySelector('.minute-cost');
    const hourCost = document.querySelector('.hour-cost');
    
    minuteCost.style.display = 'none';
    hourCost.style.display = 'block';
}

const minuteClickbtn = () => {
    const minuteCost = document.querySelector('.minute-cost');
    const hourCost = document.querySelector('.hour-cost');
    
    minuteCost.style.display = 'block';
    hourCost.style.display = 'none';
}

document.getElementById('minutebtn').addEventListener('click', minuteClickbtn);
document.getElementById('hourbtn').addEventListener('click', hourClickbtn);
