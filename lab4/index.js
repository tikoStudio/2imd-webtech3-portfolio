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
        //sources: {@link: https://stackoverflow.com/questions/45561610/how-can-i-remove-local-storage-after-one-hour/45561666}
        let displayWeather = document.querySelector(`.weather`);
        let displayToday =  document.querySelector(`.later`);
        let data = JSON.parse(localStorage.getItem('storedData'));
        let hour = new Date();
        hour = hour.getHours();
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

                //local storage
                let weatherData = [displayWeather.innerHTML,displayToday.innerHTML];
                let timeStamp = new Date();
                weatherData.push(timeStamp.getHours() + 1);
                localStorage.setItem('storedData', JSON.stringify(weatherData));
            });
            console.log("data from API");
        }
        this.getMovies();
    }

    getMovies() {
        let url = "https://api.themoviedb.org/3/discover/movie?api_key=b4b3ab05bf62bca83e2170338029dac5&language=en-US&sort_by=popularity.desc";
        fetch(url)
            .then(response =>{
                return response.json();
            })
            .then(movie => {
                console.log(movie.results[0].poster_path);
                let moviepath = `http://image.tmdb.org/t/p/w500/${movie.results[0].poster_path}`;
                let place = document.querySelector(`.images`);
                place.innerHTML =  `<img src="${moviepath}" alt="poster of the most popular movie right now" class="movieposter">`;
            });
    }
}

let WeatherAd = new WeatherData(`92fca7939f5bb09256735e63116724be`);