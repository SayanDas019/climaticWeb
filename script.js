const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "961ecdcc01msh1a8bc20cf6bf5b1p1836a2jsn1fae9a3548aa",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

const getWeather = (city) => {

	cityName.innerHTML = city
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
		options
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			tempe.innerHTML = response.temp;
			tempe2.innerHTML = response.temp;
			min_tempe.innerHTML = response.min_temp;
			max_tempe.innerHTML = response.max_temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			hum2.innerHTML = response.humidity;
			wind_speed.innerHTML = response.wind_speed;
			wind2.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			cloud_pct.innerHTML = response.cloud_pct;
		})

		.catch((err) => console.error(err));

};

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Kolkata");

