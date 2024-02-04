const clock = document.getElementById("clock")
const geolocation = document.getElementById("geolocation")
const API_KEYS = '869686d9424a7b15c3ac9a68544e17e4'

const handleColck = () => {
    const date = new Date()
    const getHours = String(date.getHours())
    const getMinutes = String(date.getMinutes())
    const getSeconds = String(date.getSeconds())
    const hours = getHours.padStart(2, "0")
    const minutes = getMinutes.padStart(2, "0")
    const seconds = getSeconds.padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
handleColck()
setInterval(handleColck, 1000)

const success = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEYS}`
    fetch(url)
        .then(reponse => reponse.json())
        .then((data) =>{ 
            geolocation.innerText = `${data.name} / ${data.weather[0].main}`
        })
}

const error = () => {
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition(success, error)

