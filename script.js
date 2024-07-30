        const apikey = "37668edf7a0aa47442cc8d27c77ca01e";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const searchbox = document.querySelector(".search input")
        const searchbtn = document.querySelector(".search button")
        const weatherIcon = document.querySelector(".weather-icon")

        async function checkweather(city) {
            const response = await fetch(apiurl + city + `&appid=${apikey}`);
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else {
                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "cloud.png"
                }
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "sun.png"
                }
                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "rain.png"
                }
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "drizzle.png"
                }
                else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "mist.png"
                }
                else {
                    weatherIcon.src = "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png";
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }

        }
        searchbtn.addEventListener("click", () => {
            checkweather(searchbox.value);

        })