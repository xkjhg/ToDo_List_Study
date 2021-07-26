function onGeoSuccess(position) {
  const lat = position.coords.latitude
  const long = position.coords.longitude
  console.log(lat, long)
}

function onGeoError() {
  alert("Can't find you. Sorry")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
