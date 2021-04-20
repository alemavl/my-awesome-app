let now = new Date();
let h1 = document.querySelector("h1");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
h1.innerHTML = day + " " + hours + ":" + minutes;

function showWeather(response) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  let temperature = Math.rouns(response.data.main.temp);
  h2.innerHTML = ["In" + city + " the weather is" + temperature + "°C"];
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

function searchCity(city) {
  let apiKey = "8bb604049c6fff46ea57c55ff62d89d7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#password-form");
  searchCity(city);
  let cityInput = document.querySelector("#password-input");
  city.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#password-input");
searchForm.addEventListener("submit", handleSubmit);
