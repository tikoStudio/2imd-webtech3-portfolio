class WeatherData {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.getLocation();
    }

    getLocation() {
        // sources: {@link: https://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt}
        let test = navigator.geolocation.getCurrentPosition(myPosition =>{
            let lat = myPosition.coords.latitude;
            let lng = myPosition.coords.longitude;
            //console.log(lat,lng);
            this.toCityName();
            this.getCurrentWeather(lat,lng);
        }, error => {
            let errorMessage = "we cannot find your position right now.";
            document.querySelector(".errorMessage").innerHTML = errorMessage;
        });    
    }

    toCityName() {
        //sources: {@link: https://ipinfo.io/}
        $.get(`http://ipinfo.io`, response => {
            $(`.location`).html(`in ` + response.city + `, ` + response.region);
        }, `jsonp`);
    }

    getCurrentWeather(lat, lng) {
        let displayWeather = document.querySelector(`.weather`);
        let displayToday =  document.querySelector(`.later`);
        let data = JSON.parse(localStorage.getItem('storedData'));
        let hour = new Date();
        hour = hour.getHours();
        console.log(hour);
        console.log(data[2])
        if (data[2] > hour){
            displayWeather.innerHTML = data[0];
            displayToday.innerHTML = data[1];
            console.log("data from localstorage");
        }else {
             //sources: {@link: https://www.google.com/search?q=darksky+api+get+weather&oq=darksky+api+get+weather&aqs=chrome..69i57j33l3.4786j0j1&sourceid=chrome&ie=UTF-8#kpvalbx=_cDtqXunxBOvjkgXrpovwCg25}
        let url =  `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apiKey}/${lat},${lng}`;
        fetch(url)
            .then(response =>{
                return response.json();
            })
            .then(weather => {
                displayWeather.innerHTML = weather.currently.summary;
                displayToday.innerHTML = weather.hourly.summary;

                //sources: {@link: https://stackoverflow.com/questions/45561610/how-can-i-remove-local-storage-after-one-hour/45561666}
                let weatherData = [displayWeather.innerHTML,displayToday.innerHTML];
                let timeStamp = new Date();
                weatherData.push(timeStamp.getHours() + 1);
                localStorage.setItem('storedData', JSON.stringify(weatherData));
            });
            console.log("data from API");
        }
        

       

    }
}

let WeatherAd = new WeatherData(`92fca7939f5bb09256735e63116724be`);