const apiKey = "2795128801238b61d6ccbdb1e4c3f796";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector(".input");
const button = document.querySelector(".search-button");
const weatherImage = document.querySelector(".weather-image");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";
        if(data.weather[0].main == "Clouds"){
            weatherImage.src = "assets/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherImage.src = "assets/images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherImage.src = "assets/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImage.src = "assets/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherImage.src = "assets/images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherImage.src = "assets/images/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
button.addEventListener("click", ()=>{
    checkWeather(input.value);
});
