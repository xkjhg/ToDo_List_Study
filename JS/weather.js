const currentWeather = document.querySelector("#weather span:first-child")
const currentCity = document.querySelector("#weather span:last-child")

const API_KEY = config.WEATHER_API_KEY

function onGeoSuccess(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(Response => Response.json()).then(data => {
    currentWeather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    currentCity.innerText = data.name
  })
}

function onGeoError() {
  alert("Can't find you. Sorry")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
