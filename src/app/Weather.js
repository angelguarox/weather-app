export class Weather{
	constructor(city, countryCode){
		this.apikey = '5861dc66def37cb8e48091ccc21d956c';
		// Change the this.apikey for your key
		this.city = city;
		this.countryCode = countryCode;
	}

	async getWeather(){
		const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
		const res = await fetch(URI);
		const data = await res.json();
		return data;
	}

	changeLocation(city, countryCode){
		this.city = city;
		this.countryCode = countryCode;
	}
}
