function updateClock() {
  const now = new Date();
  const options = {
      timeZone: 'Asia/Kuala_Lumpur', 
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
  };

  const currentTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('clock').textContent = currentTime;
}

setInterval(updateClock, 1000);

updateClock();