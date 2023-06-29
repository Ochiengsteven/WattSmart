export default function history() {
    const usageHistory = [];

    document.getElementById('calculateBtn').addEventListener('click', function() {
    // Previous code...
    
    const usageData = {
        timestamp: new Date().toLocaleString(),
        powerPerMinute: totalPowerPerMinute,
        powerPerHour: totalPowerPerHour,
        cost: totalCost
    };
    
    usageHistory.push(usageData);
    
    // Display usage history
    const usageList = document.getElementById('usageList');
    const listItem = document.createElement('li');
    listItem.textContent = `Timestamp: ${usageData.timestamp} | Power per minute: ${usageData.powerPerMinute} watts | Power per hour: ${usageData.powerPerHour} watts | Cost: ${usageData.cost} kshs`;
    usageList.prepend(listItem);
    });
}