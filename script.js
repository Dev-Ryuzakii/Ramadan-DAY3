document.getElementById('getPrayerTimes').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (!city) {
      alert('Please enter a city name.');
      return;
    }
  
    // Fetch prayer times for the entered city
    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=SA&method=2`)
      .then((response) => response.json())
      .then((data) => {
        const timings = data.data.timings;
        document.getElementById('fajr').textContent = timings.Fajr;
        document.getElementById('dhuhr').textContent = timings.Dhuhr;
        document.getElementById('asr').textContent = timings.Asr;
        document.getElementById('maghrib').textContent = timings.Maghrib;
        document.getElementById('isha').textContent = timings.Isha;
      })
      .catch((error) => {
        console.error('Error fetching prayer times:', error);
        alert('An error occurred. Please try again.');
      });
  });