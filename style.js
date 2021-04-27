let now = new Date();
let h1 = document.querySelector("h1");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
h1.innerHTML = day + " " + hours + ":" + minutes;

function showWeather(response) {
  let h2 = document.querySelector("h2");
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = "In " + city + " the weather is " + temperature + " °C";
}
function searchCity(city) {
  let apiKey = "146f60b835b0f2ca6da53fce0c0bb62f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  let cityInput = document.querySelector("#city-input");
  h2.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
