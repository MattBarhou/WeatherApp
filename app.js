//Declare the API key and select the DOM elements necessary to display the weather info
const API_KEY = "eb5ee8e82e8a2778023e6693a44c5ae4";
let cityInput = document.querySelector(".city");
let button = document.querySelector(".btn");
const img = document.querySelector(".icon");
const showWeather = document.querySelector(".weatherInfo");
const h1 = document.querySelector(".city-name");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");


//When submit is clicked, get city name and append it to the API URL, then invoke getWeather() and toggle the visibility of the weather info
button.addEventListener("click", function (e) {
    e.preventDefault();
    let cityValue = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${API_KEY}`;
    getWeather(url);
    showWeather.style.visibility = "visible";
});
    

   
//Fetch the weather data from the API
function getWeather(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            insertData(data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

//Use the data param to insert weather info into the DOM
function insertData(data) {
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.setAttribute("src", icon);
    h1.innerHTML = `${data.name}, ${data.sys.country}`;
    h2.innerHTML = "Temperature: " + data.main.temp + "°C";
    h3.innerHTML = "Description: " + data.weather[0].description;
}