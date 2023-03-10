const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const cityName = document.querySelector('#cityName').value;
  const tempUnit = document.querySelector('#tempUnit').value;
  const apiKey = '9a4a95c82f485f89ba0116cc3509bf11';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${tempUnit}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const cityElement = document.querySelector('#city');
      cityElement.textContent = `City: ${data.name}, ${data.sys.country}`;

      const tempElement = document.querySelector('#temperature');
      tempElement.textContent = `Temperature: ${data.main.temp} °${tempUnit === 'metric' ? 'C' : 'F'}`;

      const descElement = document.querySelector('#description');
      descElement.textContent = `Description: ${data.weather[0].description}`;
    })
    .catch(error => console.error(error));
}
