export default function addProfile() {
    document.getElementById('addProfileBtn').addEventListener('click', function() {
        const wattage = document.getElementById('deviceProfiles').value;
        
        if (wattage) {
          const deviceContainer = document.createElement('div');
          deviceContainer.classList.add('device');
          deviceContainer.innerHTML = `
            <label>Device Wattage (in watts):</label>
            <input type="number" class="wattage" value="${wattage}" readonly>
          `;
          
          document.getElementById('devices').appendChild(deviceContainer);
        }
    });
}