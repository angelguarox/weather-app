require('./index.css');
const {Weather} = require('./Weather');
const {UI} = require('./UI');
const {Store} = require('./Store');

const store = new Store();
const {city, countryCode} = store.getLocationData();

const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather(){
	const data = await weather.getWeather();
	console.log(data);
	ui.render(data);
}

document.getElementById('weather-change-btn').addEventListener('click', (e) => {
	e.preventDefault();
	const city = document.getElementById('city').value;
	const countryCode = document.getElementById('countryCode').value;
	weather.changeLocation(city, countryCode);
	store.setLocationData(city, countryCode);
	fetchWeather();
});

document.addEventListener('DOMContentLoaded', fetchWeather);
